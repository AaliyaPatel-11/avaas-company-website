/**
 * ============================================================================
 * AVAAS — Long-Term Company Vision
 * ============================================================================
 * Focus: Mobility as the foundational wedge for universal voice-assisted commerce.
 */

export interface VisionContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  distinction: {
    today: {
      tag: string;
      title: string;
      description: string;
    };
    tomorrow: {
      tag: string;
      title: string;
      description: string;
    };
  };
  categories: Array<{
    title: string;
    status: string;
    description: string;
    icon: "Car" | "ShoppingBag" | "CalendarCheck" | "HeartPulse" | "HelpCircle";
  }>;
}

export const visionContent: VisionContent = {
  sectionBadge: "Long-Term Vision",
  heading: "A voice interface for everyday life.",
  subheading:
    "Mobility is our starting point because transportation is an urgent daily necessity. Our broader ambition is to remove digital barriers across all essential everyday services.",
  distinction: {
    today: {
      tag: "TODAY’S FOCUS",
      title: "Voice-First Mobility",
      description:
        "Solving ride access for non-digital natives through conversational phone booking and intelligent location disambiguation.",
    },
    tomorrow: {
      tag: "THE BROADER HORIZON",
      title: "Universal Voice Commerce",
      description:
        "Enabling any individual to order daily essentials, manage appointments, and access digital services using only spoken language.",
    },
  },
  categories: [
    {
      title: "Everyday Mobility",
      status: "Core Focus (Active)",
      description: "Voice-driven hailing for autos, cabs, and local transit.",
      icon: "Car",
    },
    {
      title: "Instant Groceries & Essentials",
      status: "Future Horizon",
      description: "Voice-ordered household goods and neighborhood store fulfillment.",
      icon: "ShoppingBag",
    },
    {
      title: "Healthcare & Appointments",
      status: "Future Horizon",
      description: "Simple phone booking for medical clinics and diagnostic centers.",
      icon: "HeartPulse",
    },
    {
      title: "Assisted Everyday Services",
      status: "Future Horizon",
      description: "Conversational assistance for utility payments and public services.",
      icon: "CalendarCheck",
    },
  ],
};
