/**
 * ============================================================================
 * AVAAS — Navigation Configuration
 * ============================================================================
 * Edit this file to update the navbar links, anchors, and CTA labels.
 * Note: Team link is intentionally excluded as team profiles are not public.
 */

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Technology", href: "/#technology" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Blog", href: "https://avaasblog.netlify.app/", isExternal: true },
  { label: "Contact", href: "/#contact" },
];

export const navCta = {
  label: "Get in Touch",
  href: "/#contact",
};
