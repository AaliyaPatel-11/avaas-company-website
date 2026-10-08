/**
 * ============================================================================
 * AVAAS — Site Configuration & SEO Metadata
 * ============================================================================
 * Edit this file to update domain, global SEO descriptions, social links,
 * and canonical routing.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    instagram: string;
    facebook?: string; // Optional: Left undefined/empty until officially configured
    blog: string;
    email: string;
    phone: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "AVAAS SPEECH SYSTEMS PRIVATE LIMITED",
  shortName: "AVAAS",
  tagline: "Your voice • Your ride • Anywhere • Anytime",
  description:
    "AVAAS is building a voice-first mobility platform that enables people to access ride-booking services through a simple phone conversation instead of navigating smartphone applications.",
  url: "https://info.avaas.me",
  ogImage: "https://info.avaas.me/avaas-logo.jpeg",
  links: {
    linkedin: "https://www.linkedin.com/company/project-avaas/",
    instagram: "https://www.instagram.com/avaas_private_limited/",
    facebook: "", // Editable placeholder — icons only display if non-empty
    blog: "https://avaasblog.netlify.app/",
    email: "mailto:avaas.pvt@gmail.com",
    phone: "tel:+916303850467",
  },
};
