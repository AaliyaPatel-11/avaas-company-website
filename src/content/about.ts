/**
 * ============================================================================
 * AVAAS — About Section Content
 * ============================================================================
 * Foundation: The paradigm shift from multi-screen apps to natural voice,
 * and the verified founder origin story.
 */

export interface AboutContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  appFrictionList: string[];
  voiceAlternative: {
    heading: string;
    description: string;
  };
  originStory: {
    title: string;
    body: string[];
    keyInsight: string;
  };
  targetAudience: Array<{
    title: string;
    description: string;
    iconName: "UserCheck" | "Briefcase" | "Compass" | "HeartHandshake";
  }>;
  quote: {
    text: string;
    attribution: string;
  };
}

export const aboutContent: AboutContent = {
  sectionBadge: "About AVAAS",
  heading: "Mobility should be as simple as making a call.",
  subheading:
    "Modern mobility platforms increasingly assume every passenger possesses high digital literacy, capable of navigating complex multi-screen interfaces. AVAAS introduces a fundamentally simpler interaction model.",
  appFrictionList: [
    "Locate, download, and install smartphone applications",
    "Create accounts, manage credentials, and grant permissions",
    "Search map pins, enter exact text addresses, and parse route UI",
    "Navigate multi-stage checkout and payment confirmation flows",
  ],
  voiceAlternative: {
    heading: "The Voice-First Paradigm",
    description:
      "AVAAS eliminates the digital barrier entirely. A user communicates their pickup location and destination naturally through voice, letting conversational AI manage the complexity behind the scenes.",
  },
  originStory: {
    title: "The Insight Behind AVAAS",
    body: [
      "AVAAS was born from observing daily commuters, seniors, and workers struggle with complex ride apps despite needing quick, reliable transit.",
      "While smartphones are widespread, multi-screen app complexity remains a major barrier for hundreds of millions.",
    ],
    keyInsight:
      "People may struggle with complex mobile apps, but everyone knows how to make a phone call.",
  },
  targetAudience: [
    {
      title: "Elderly Commuters",
      description:
        "Seniors who find small fonts, map interfaces, and multi-step app flows frustrating or inaccessible.",
      iconName: "UserCheck",
    },
    {
      title: "Daily-Wage & Essential Workers",
      description:
        "Workers who depend on reliable daily transit but face digital literacy barriers with smartphone ride apps.",
      iconName: "Briefcase",
    },
    {
      title: "Rural & Low-Digital-Literacy Users",
      description:
        "Individuals who are comfortable speaking on a mobile phone but hesitate to use data-heavy consumer apps.",
      iconName: "Compass",
    },
    {
      title: "Assisted Users & Caregivers",
      description:
        "Family members and caregivers who need a frictionless, direct way to arrange travel for loved ones.",
      iconName: "HeartHandshake",
    },
  ],
  quote: {
    text: "AVAAS is not building another ride-hailing app. We’re making mobility accessible through the simplest technology people already know — a phone call.",
    attribution: "AVAAS Core Philosophy",
  },
};
