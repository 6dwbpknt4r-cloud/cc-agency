import { prisma } from "@/lib/prisma";
import { qualifyLead } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { businessId, messages, channel = "WIDGET" } = await req.json();

    if (!businessId || !messages || messages.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const business = await prisma.business.findUnique({
      where: { id: businessId },
    });

    if (!business) {
      return NextResponse.json({ error: "Business not found" }, { status: 404 });
    }

    const conversationString = messages
      .map((m: any) => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n");

    const qualification = await qualifyLead(business.industry, conversationString);

    let aiResponse = qualification.summary;

    if (qualification.intentToBook && business.googleRefreshToken && business.googleCalendarId) {
      aiResponse = `I see you'd like to book an appointment! I'm checking the calendar now... Based on our current availability, we could do tomorrow at 10:00 AM or 2:00 PM. Would either of those work for you?`;
    }

    if (qualification.name || qualification.phone) {
      const lead = await prisma.lead.upsert({
        where: { 
          id: qualification.phone ? `${businessId}-${qualification.phone}` : "temp-id-" + Date.now(),
        },
        update: {
          temperature: qualification.temperature,
          metadata: qualification as any,
          status: qualification.temperature === "HOT" ? "QUALIFIED" : "NEW",
        },
        create: {
          businessId,
          name: qualification.name,
          phone: qualification.phone,
          temperature: qualification.temperature,
          source: channel,
          metadata: qualification as any,
        },
      });

      await prisma.conversation.create({
        data: {
          leadId: lead.id,
          role: "USER",
          content: messages[messages.length - 1].content,
          channel,
        },
      });
    }

    return NextResponse.json({ 
      response: aiResponse,
      qualification 
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
