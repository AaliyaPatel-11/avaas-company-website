/**
 * ============================================================================
 * AVAAS — Phased Product Roadmap
 * ============================================================================
 * Source: AVAAS Pitch Deck (Slide 10) & Company Strategy.
 * Clearly distinguishes current validation work from future integration plans.
 */

export interface RoadmapPhase {
  phase: string;
  title: string;
  badge: string;
  timeline: string;
  objective: string;
  deliverables: string[];
  isCurrent?: boolean;
}

export interface RoadmapContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  phases: RoadmapPhase[];
}

export const roadmapContent: RoadmapContent = {
  sectionBadge: "Roadmap",
  heading: "A phased path to voice-first mobility",
  subheading:
    "A structured, validation-driven development roadmap moving from hands-on user validation to automated platform integrations and multi-service expansion.",
  phases: [
    {
      phase: "PHASE 1",
      title: "Concierge Hustle & Validation",
      badge: "Current Phase",
      timeline: "Phase 1",
      isCurrent: true,
      objective:
        "Manually facilitate ride bookings and validate real-world demand, understand user behaviour and refine the product experience.",
      deliverables: [
        "Manual voice-assisted ride facilitation to test real demand",
        "Observe caller communication patterns and common landmark phrasing",
        "Refine conversational dialogue flow and confirmation prompts",
        "Gather feedback from elderly and non-tech-savvy users",
      ],
    },
    {
      phase: "PHASE 2",
      title: "Ride-Hailing Integration",
      badge: "Future Phase",
      timeline: "Phase 2",
      isCurrent: false,
      objective:
        "Integrate with established mobility platforms and automate ride discovery, booking and confirmation through authorized integrations.",
      deliverables: [
        "Automate voice interaction with conversational AI agents",
        "Build authorized API connectors with established ride-hailing services",
        "Automate driver details and ride confirmation back to the caller",
        "Expand regional dialect and vernacular language capabilities",
      ],
    },
    {
      phase: "PHASE 3",
      title: "Instant Grocery & Everyday Services",
      badge: "Future Vision",
      timeline: "Phase 3",
      isCurrent: false,
      objective:
        "Extend the voice-first interface beyond mobility into groceries and other everyday services.",
      deliverables: [
        "Extend voice interface to essential grocery ordering and errands",
        "Partner with local delivery and daily service providers",
        "Expand regional language coverage across India",
        "Enable voice-first access to essential everyday digital services",
      ],
    },
  ],
};
