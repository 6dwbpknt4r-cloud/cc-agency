import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.AUTH_GOOGLE_ID,
  process.env.AUTH_GOOGLE_SECRET,
  `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/google`
);

export const getGoogleCalendarClient = (refreshToken: string) => {
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  return google.calendar({ version: "v3", auth: oauth2Client });
};

export const getAvailableSlots = async (refreshToken: string, calendarId: string, start: Date, end: Date) => {
  const calendar = getGoogleCalendarClient(refreshToken);
  
  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: start.toISOString(),
      timeMax: end.toISOString(),
      items: [{ id: calendarId }],
    },
  });

  const busy = response.data.calendars?.[calendarId]?.busy || [];
  
  // Logic to calculate free slots based on business hours would go here
  // For MVP, we'll return the busy slots and let the AI or frontend figure out the rest
  return busy;
};

export const createCalendarEvent = async (
  refreshToken: string, 
  calendarId: string, 
  details: { summary: string; description: string; startTime: string; endTime: string }
) => {
  const calendar = getGoogleCalendarClient(refreshToken);
  
  const event = {
    summary: details.summary,
    description: details.description,
    start: { dateTime: details.startTime },
    end: { dateTime: details.endTime },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "sms", minutes: 60 },
      ],
    },
  };

  const response = await calendar.events.insert({
    calendarId,
    requestBody: event,
  });

  return response.data;
};
