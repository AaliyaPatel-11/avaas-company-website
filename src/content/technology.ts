/**
 * ============================================================================
 * AVAAS — Technology Stack & Vision
 * ============================================================================
 * High-level architecture components in development for investors, partners,
 * and reviewers.
 */

export interface TechLayer {
  number: string;
  title: string;
  category: string;
  summary: string;
  points: string[];
}

export interface TechnologyContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  layers: TechLayer[];
  architectureSummary: {
    title: string;
    description: string;
    badge: string;
  };
}

export const technologyContent: TechnologyContent = {
  sectionBadge: "Technology We’re Building",
  heading: "Voice as the interface. AI as the intelligence.",
  subheading:
    "We are developing a voice-first mobility stack that connects standard phone calls with speech understanding, spatial intelligence, and automated ride dispatch.",
  layers: [
    {
      number: "01",
      title: "Telephony Voice Interface",
      category: "Telephony Layer",
      summary:
        "Standard phone call interface allowing users to connect without data connectivity or mobile applications.",
      points: [
        "Inbound voice call routing",
        "Two-way audio stream handling",
        "Standard cellular network compatibility",
      ],
    },
    {
      number: "02",
      title: "Speech Recognition & Processing",
      category: "Acoustic Layer",
      summary:
        "Acoustic models tailored to recognize spoken requests in real-world environments with background noise.",
      points: [
        "Noise-resilient voice recognition",
        "Low-latency speech transcription",
        "Natural speech synthesis feedback",
      ],
    },
    {
      number: "03",
      title: "Conversational Intent Engine",
      category: "AI Layer",
      summary:
        "Conversational AI agent that understands user intent, pickup points, destinations, and ride preferences.",
      points: [
        "Natural dialogue turn management",
        "Conversational context extraction",
        "Clarification and confirmation prompts",
      ],
    },
    {
      number: "04",
      title: "Conversational Location Intelligence",
      category: "Spatial Layer",
      summary:
        "Location resolution engine that maps informal spoken descriptions and landmarks to verified pickup points.",
      points: [
        "Landmark and junction resolution",
        "Colloquial neighborhood mapping",
        "Conversational location verification",
      ],
    },
    {
      number: "05",
      title: "Multilingual & Vernacular Core",
      category: "Language Layer",
      summary:
        "Designed to support multilingual and regional-language interactions across diverse speech patterns.",
      points: [
        "Multilingual interaction capability",
        "Regional vocabulary adaptability",
        "Inclusive conversational design",
      ],
    },
    {
      number: "06",
      title: "Mobility Platform Gateway",
      category: "Integration Layer",
      summary:
        "Integration layer designed to link voice-confirmed requests with authorized ride-hailing networks and fleets.",
      points: [
        "Standardized ride dispatch API interfaces",
        "Trip confirmation and status updates",
        "Future multi-provider connectivity",
      ],
    },
  ],
  architectureSummary: {
    title: "Simple for the User, Intelligent in the Cloud",
    description:
      "By keeping the user interaction strictly on standard phone voice calls, passengers require no apps, storage, or technical setup. All natural language understanding and spatial intelligence operate in the cloud.",
    badge: "System Architecture",
  },
};
