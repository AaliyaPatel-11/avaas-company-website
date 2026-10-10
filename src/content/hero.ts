/**
 * ============================================================================
 * AVAAS — Hero Section Content
 * ============================================================================
 * Edit this file to update the main hero headline, subtext, taglines, and CTAs.
 */

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  tagline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  pillars: Array<{
    title: string;
    subtitle: string;
  }>;
}

export const heroContent: HeroContent = {
  badge: "Early-Stage Technology Startup • info.avaas.me",
  headline: "Book Any Ride with Just Your Voice",
  subheadline:
    "Call AVAAS and book a ride through a voice-first experience powered by AI. Making mobility accessible through natural phone conversations instead of complex smartphone apps.",
  tagline: "Your voice • Your ride • Anywhere • Anytime",
  primaryCta: {
    label: "Explore AVAAS",
    href: "#about",
  },
  secondaryCta: {
    label: "Get in Touch",
    href: "#contact",
  },
  pillars: [
    {
      title: "WHAT",
      subtitle: "Voice-First Mobility",
    },
    {
      title: "HOW",
      subtitle: "Simple Phone Call & Conversational AI",
    },
    {
      title: "WHY",
      subtitle: "Accessibility & Zero App Friction",
    },
  ],
};
