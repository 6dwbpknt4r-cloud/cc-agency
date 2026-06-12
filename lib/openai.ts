import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const qualifyLead = async (industry: string, conversation: string) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are an expert lead qualification assistant for a ${industry} business. 
        Your goal is to extract lead information and assign a temperature (HOT, WARM, COLD).
        
        Extract:
        - Name
        - Phone
        - Service needed
        - Urgency
        - Booking Intent: (Boolean, true if user wants to schedule an appointment)
        
        Tag as HOT if they need immediate service or have a large project.
        Tag as COLD if they are just price shopping or outside service area.
        
        Return JSON format: { "name": string, "phone": string, "service": string, "temperature": "HOT" | "WARM" | "COLD", "summary": string, "intentToBook": boolean }`
      },
      {
        role: "user",
        content: conversation
      }
    ],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content || "{}");
};
