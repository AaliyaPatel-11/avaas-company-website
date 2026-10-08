/**
 * ============================================================================
 * AVAAS — Contact & Inquiries Configuration
 * ============================================================================
 * Direct communication channels for investors, partners, and collaborators.
 */

export interface ContactChannel {
  type: string;
  label: string;
  value: string;
  href: string;
  note: string;
}

export interface ContactContent {
  sectionBadge: string;
  heading: string;
  subheading: string;
  description: string;
  channels: ContactChannel[];
  inquiryTypes: Array<{
    label: string;
    subject: string;
  }>;
}

export const contactContent: ContactContent = {
  sectionBadge: "Get In Touch",
  heading: "Let’s build the future of voice-first mobility.",
  subheading:
    "Whether you're interested in partnering with AVAAS, exploring our technology, working with us, or simply learning more about what we're building, we'd love to hear from you.",
  description:
    "We actively welcome conversations with mobility operators, accessibility advocates, transit researchers, and early-stage investors.",
  channels: [
    {
      type: "Email",
      label: "General & Partnership Inquiries",
      value: "avaas.pvt@gmail.com",
      href: "mailto:avaas.pvt@gmail.com?subject=AVAAS%20Inquiry",
      note: "Primary response channel",
    },
    {
      type: "Phone",
      label: "Direct Phone Line",
      value: "+91 63038 50467",
      href: "tel:+916303850467",
      note: "Mon – Fri, 9:00 AM – 6:00 PM IST",
    },
    {
      type: "Headquarters",
      label: "Registered Corporate Office",
      value: "Hyderabad, Telangana, India",
      href: "https://maps.google.com/?q=Hyderabad,+Telangana",
      note: "Malkajgiri, Rangareddy District",
    },
  ],
  inquiryTypes: [
    {
      label: "Investor Inquiry",
      subject: "Investor Inquiry — AVAAS Speech Systems",
    },
    {
      label: "Fleet / Mobility Partnership",
      subject: "Partnership Exploration — AVAAS Voice Integration",
    },
    {
      label: "Pilots & Research Collaboration",
      subject: "Pilot / Research Collaboration — AVAAS",
    },
    {
      label: "General Discussion",
      subject: "General Inquiry — AVAAS",
    },
  ],
};
