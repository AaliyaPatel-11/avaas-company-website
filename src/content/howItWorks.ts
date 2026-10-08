/**
 * ============================================================================
 * AVAAS — How It Works & Location Intelligence
 * ============================================================================
 * 4-step user experience and conversational geocoding workflow.
 */

export interface StepItem {
  step: string;
  title: string;
  summary: string;
  details: string;
  icon: "PhoneCall" | "Mic" | "Cpu" | "Car";
}

export interface LocationDemoStep {
  stage: string;
  label: string;
  content: string;
  meta?: string;
}

export interface HowItWorksContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  stageNote: string;
  steps: StepItem[];
  locationIntelligence: {
    heading: string;
    subheading: string;
    description: string;
    demoSteps: LocationDemoStep[];
    capabilities: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const howItWorksContent: HowItWorksContent = {
  sectionBadge: "User Journey",
  heading: "How AVAAS works",
  subheading:
    "A seamless four-step flow designed to transform everyday speech into a confirmed ride booking.",
  stageNote:
    "Early Validation Notice: During our initial pilot phase, AVAAS leverages human-assisted concierge validation alongside AI models to refine conversational precision before fully automating end-to-end partner dispatch.",
  steps: [
    {
      step: "01",
      title: "Call",
      summary: "Start with a simple phone call.",
      details:
        "The commuter places a standard voice call to the dedicated AVAAS line. No application download, account configuration, or smartphone UI required.",
      icon: "PhoneCall",
    },
    {
      step: "02",
      title: "Speak",
      summary: "Describe pickup and destination naturally.",
      details:
        "The user communicates in everyday spoken language, mentioning landmarks, street names, or common colloquial references.",
      icon: "Mic",
    },
    {
      step: "03",
      title: "Understand",
      summary: "Voice AI interprets intent and resolves location.",
      details:
        "Our speech models and location intelligence parse the audio stream, resolve ambiguous geographic references, and confirm pickup details.",
      icon: "Cpu",
    },
    {
      step: "04",
      title: "Ride",
      summary: "AVAAS facilitates booking and confirms details.",
      details:
        "Ride details, estimated arrival, and vehicle confirmation are communicated back directly to the passenger over the call and SMS.",
      icon: "Car",
    },
  ],
  locationIntelligence: {
    heading: "Conversational Location Intelligence",
    subheading: "Resolving natural speech into precise geographic coordinates",
    description:
      "Passengers rarely speak in latitude and longitude or exact postal addresses. AVAAS bridges colloquial language with spatial intelligence, mapping natural descriptions to verified pickup spots.",
    demoSteps: [
      {
        stage: "Input",
        label: "Natural Spoken Voice",
        content: '"I am standing near IKEA main entrance, Hitech City."',
        meta: "Spoken Input (Audio Stream)",
      },
      {
        stage: "Processing",
        label: "AI Location Disambiguation",
        content:
          "Parsed Entity: IKEA Hyderabad (Store ID: HITEC-01) → Designated Passenger Gate 2",
        meta: "Landmark & Context Engine",
      },
      {
        stage: "Output",
        label: "Confirmed Geographic Point",
        content: "Pickup Point: Gate 2, IKEA, Mindspace Junction, HITEC City (17.4375° N, 78.3752° E)",
        meta: "Dispatch Ready Coordinate",
      },
    ],
    capabilities: [
      {
        title: "Landmark & POI Resolution",
        description:
          "Understands popular local landmarks, metro pillars, transit hubs, and commercial centers.",
      },
      {
        title: "Colloquial Geography",
        description:
          "Interprets regional naming conventions and informal neighborhood references commonly used by residents.",
      },
      {
        title: "Conversational Confirmation",
        description:
          "Verifies ambiguous pickup points by asking quick, natural follow-up questions during the call.",
      },
    ],
  },
};
