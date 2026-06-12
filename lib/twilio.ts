import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendSMS = async (to: string, body: string) => {
  try {
    const message = await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    return message;
  } catch (error) {
    console.error("Twilio SMS Error:", error);
    throw error;
  }
};

export const handleMissedCall = async (from: string, businessName: string) => {
  const body = `Sorry we missed your call at ${businessName}! How can we help you today?`;
  return await sendSMS(from, body);
};
