# AVAAS SPEECH SYSTEMS PRIVATE LIMITED — Official Website

Official corporate web portal for **AVAAS SPEECH SYSTEMS PRIVATE LIMITED**, designed and structured for investor evaluations (including Y Combinator, angel networks, accelerators), mobility partners, and users.

- **Production URL**: `https://info.avaas.me`
- **Legal Entity**: AVAAS SPEECH SYSTEMS PRIVATE LIMITED
- **CIN**: `U62099TS2026PTC223870`
- **Registered Office**: No. 503, Jabburam Apartments, H.No. 20-22/2, Malkajgiri, Rangareddy, Hyderabad – 500047, Telangana, India
- **Email**: `avaas.pvt@gmail.com`
- **Phone**: `+91 63038 50467`
- **Tagline**: *Your voice • Your ride • Anywhere • Anytime*
- **Positioning**: *Building the future of voice-first mobility*

---

## Centralized Content Architecture (`src/content/`)

All site content is modularized and separated from the presentation layer to allow easy updates without modifying React components:

| File | Purpose |
| :--- | :--- |
| `src/content/siteConfig.ts` | Global domain, SEO descriptions, OpenGraph, social links |
| `src/content/company.ts` | Legal name, CIN, registered office, phone, email, corporate motto |
| `src/content/navigation.ts` | Navbar items, external links, and primary CTA actions |
| `src/content/hero.ts` | Hero headline, subheadline, taglines, value pillars, and CTAs |
| `src/content/about.ts` | Founder origin story, app friction vs. voice comparison, target audience |
| `src/content/whyAvaas.ts` | 4 value proposition pillars & competitive comparison table |
| `src/content/howItWorks.ts` | 4-step user journey, location intelligence demo, pilot validation note |
| `src/content/technology.ts` | 6 architecture layers (Telephony, Speech ASR, AI, Spatial, Multilingual, Mobility Gateway) |
| `src/content/currentStage.ts` | Honest early-stage MVP positioning and active development focus |
| `src/content/roadmap.ts` | Phased roadmap (Phase 1 Concierge Hustle, Phase 2 Mobility Integration, Phase 3 Scale & Everyday Services) |
| `src/content/vision.ts` | Today's mobility focus vs. Long-term everyday voice interface |
| `src/content/blog.ts` | Preview cards and link to the official AVAAS Blog (`https://avaasblog.netlify.app/`) |
| `src/content/contact.ts` | Direct contact channels, location, and inquiry types |
| `src/content/legal.ts` | Draft Privacy Policy and Terms of Use content |

---

## Future CMS Readiness

The content layer in `src/content/` exposes standardized TypeScript interfaces. To integrate a headless CMS (such as Sanity, Contentful, Strapi, or Decap CMS) in the future:
1. Fetch data in `src/content/` from your CMS API or webhook.
2. Re-export the typed objects from `src/content/index.ts`.
3. No UI components need to be modified.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS Keyframe & Hardware-Accelerated Waveforms (prefers-reduced-motion compliant)

---

## Development & Deployment Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Start production server
npm start
```
