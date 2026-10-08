/**
 * ============================================================================
 * AVAAS — Blog & Insights Preview
 * ============================================================================
 * Links to the official blog at https://avaasblog.netlify.app/
 */

export interface BlogArticlePreview {
  title: string;
  category: string;
  readTime: string;
  summary: string;
  url: string;
}

export interface BlogContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  description: string;
  blogUrl: string;
  ctaText: string;
  featuredArticles: BlogArticlePreview[];
}

export const blogContent: BlogContent = {
  sectionBadge: "Insights & Perspectives",
  heading: "From the AVAAS team",
  subheading:
    "Ideas, experiments, and perspectives on voice AI, mobility, accessibility, and the future of human-computer interaction.",
  description:
    "We document our findings on telephony agent architecture, multimodal landmark extraction, and designing technology for the next billion users.",
  blogUrl: "https://avaasblog.netlify.app/",
  ctaText: "Read the AVAAS Blog",
  featuredArticles: [
    {
      title: "Rethinking Mobility: Why Apps Aren't Accessible to Everyone",
      category: "Digital Inclusion",
      readTime: "4 min read",
      summary:
        "Analyzing the invisible digital literacy barrier in modern transit apps and how phone-based voice models restore equal access.",
      url: "https://avaasblog.netlify.app/",
    },
    {
      title: "Conversational Spatial Intelligence: Resolving Colloquial Landmarks",
      category: "Technology",
      readTime: "5 min read",
      summary:
        "How voice systems translate informal spoken descriptions like 'near the chai stall across from IKEA' into actionable dispatch coordinates.",
      url: "https://avaasblog.netlify.app/",
    },
    {
      title: "Telephony-First AI: Building Low-Latency Voice Agents for Real Calls",
      category: "Engineering",
      readTime: "6 min read",
      summary:
        "Navigating full-duplex audio pipelines, SIP integration, and acoustic noise filtering over standard cellular networks.",
      url: "https://avaasblog.netlify.app/",
    },
  ],
};
