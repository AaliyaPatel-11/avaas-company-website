/**
 * ============================================================================
 * AVAAS — Why AVAAS / Problem & Value Proposition
 * ============================================================================
 * Focus: Technology adapting to human habits, reducing digital friction,
 * accessibility pillars, and comparative positioning.
 */

export interface WhyAvaasContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  pillars: Array<{
    tag: string;
    title: string;
    description: string;
    icon: "Mic" | "Accessibility" | "MessageSquare" | "Languages";
  }>;
  comparison: {
    title: string;
    subtitle: string;
    headers: string[];
    rows: Array<{
      feature: string;
      traditional: string;
      avaas: string;
    }>;
  };
}

export const whyAvaasContent: WhyAvaasContent = {
  sectionBadge: "Why AVAAS",
  heading: "Technology should adapt to people — not the other way around.",
  subheading:
    "We believe conversational voice is the most natural human interface ever invented. AVAAS bridges the gap between advanced AI mobility systems and everyday human communication.",
  pillars: [
    {
      tag: "VOICE-FIRST",
      title: "Natural Voice Interface",
      description:
        "Speak in your natural cadence without needing to learn UI gestures, search bars, or complex menus.",
      icon: "Mic",
    },
    {
      tag: "ACCESSIBLE",
      title: "Universal Accessibility",
      description:
        "Engineered specifically for individuals with low digital literacy, elderly users, and those excluded by traditional apps.",
      icon: "Accessibility",
    },
    {
      tag: "CONVERSATIONAL",
      title: "Contextual Understanding",
      description:
        "Simply describe where you are and where you need to be. The AI resolves landmarks, intent, and timing effortlessly.",
      icon: "MessageSquare",
    },
    {
      tag: "MULTILINGUAL",
      title: "Regional Language Architecture",
      description:
        "Built with multilingual speech recognition to ensure users can communicate comfortably in their preferred regional language.",
      icon: "Languages",
    },
  ],
  comparison: {
    title: "Interface Paradigm Comparison",
    subtitle: "How voice-first ride access compares to legacy app ecosystems",
    headers: ["Attribute", "Traditional Ride-Hailing Apps", "AVAAS Voice Mobility"],
    rows: [
      {
        feature: "Primary Interaction",
        traditional: "Multi-screen app navigation, map pinning, text entry",
        avaas: "Natural telephone voice conversation",
      },
      {
        feature: "Digital Literacy Requirement",
        traditional: "High (app installation, account setup, payment UI)",
        avaas: "Zero (familiar phone call interface)",
      },
      {
        feature: "Hardware & Network Dependency",
        traditional: "Requires smartphone, storage space, and continuous mobile data",
        avaas: "Accessible over standard telephony and mobile networks",
      },
      {
        feature: "Location Input",
        traditional: "Precise geocoded text addresses or pinpoint map dragging",
        avaas: "Conversational landmark & colloquial description intelligence",
      },
      {
        feature: "Target Reach",
        traditional: "Digital-native smartphone users",
        avaas: "Inclusive access for all citizens, seniors, and non-tech users",
      },
    ],
  },
};
