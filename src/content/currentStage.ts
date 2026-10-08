/**
 * ============================================================================
 * AVAAS — Current Company Stage & Validation Status
 * ============================================================================
 * Accurate, transparent early-stage positioning for investors, partners, and YC.
 * Strict No-Fabrication Policy: No fictitious metrics or unverified figures.
 */

export interface CurrentStageContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  statement: string;
  focusAreas: Array<{
    title: string;
    description: string;
    status: "Active Focus" | "In Development" | "Planned";
  }>;
  commitment: {
    title: string;
    description: string;
  };
}

export const currentStageContent: CurrentStageContent = {
  sectionBadge: "Current Stage",
  heading: "Where we are today",
  subheading:
    "AVAAS is an early-stage startup focused on product development, validation and preparing for real-world deployment.",
  statement:
    "AVAAS is currently focused on product development, validation and preparing for real-world deployment. MVP development is underway, with the next stage focused on validating user demand, refining the experience and building the infrastructure required to scale.",
  focusAreas: [
    {
      title: "Conversational Telephony MVP",
      description:
        "Building and testing our core phone-based voice interaction flow, speech recognition, and intent understanding.",
      status: "Active Focus",
    },
    {
      title: "Concierge Validation Pilots",
      description:
        "Validating real-world user demand through concierge-assisted trials to observe caller behavior and speech patterns.",
      status: "Active Focus",
    },
    {
      title: "Location Resolution Testing",
      description:
        "Developing rules and datasets to resolve informal spoken landmarks into accurate geographic pickup points.",
      status: "In Development",
    },
    {
      title: "Mobility Platform Integration",
      description:
        "Designing the integration layer required to connect voice confirmations with authorized ride-hailing services.",
      status: "Planned",
    },
  ],
  commitment: {
    title: "Ground-Up Validation Before Scaling",
    description:
      "We prioritize genuine usability, caller comprehension, and solving real accessibility barriers over artificial scale.",
  },
};
