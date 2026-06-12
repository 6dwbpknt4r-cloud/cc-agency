import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2025-01-27-22-12-38" as any, // Use latest stable or preferred
  typescript: true,
});

export const SUBSCRIPTION_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 97,
    features: ["AI Chat Widget", "Basic Qualification", "SMS Capture"],
  },
  {
    id: "professional",
    name: "Professional",
    price: 197,
    features: ["Everything in Starter", "Google Calendar Sync", "Missed Call Text-Back"],
  },
  {
    id: "elite",
    name: "Elite",
    price: 297,
    features: ["Everything in Professional", "Content Studio", "Review Generation"],
  },
];
