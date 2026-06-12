import { NextResponse } from "next/server";
import { handleMissedCall } from "@/lib/twilio";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const from = formData.get("From") as string;
    const callStatus = formData.get("CallStatus") as string;
    const to = formData.get("To") as string;

    // Twilio status callback for missed/no-answer calls
    if (callStatus === "no-answer" || callStatus === "busy" || callStatus === "canceled") {
      const business = await prisma.business.findFirst({
        where: { twilioNumber: to },
      });

      if (business) {
        await handleMissedCall(from, business.name);
        
        // Log as a new lead if not already existing
        await prisma.lead.upsert({
          where: { id: `${business.id}-${from}` },
          update: { status: "NEW" },
          create: {
            businessId: business.id,
            phone: from,
            source: "MISSED_CALL",
            status: "NEW",
          },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Twilio Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
