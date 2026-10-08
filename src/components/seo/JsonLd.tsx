import React from "react";
import { companyInfo } from "@/content/company";
import { siteConfig } from "@/content/siteConfig";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.legalName,
    alternateName: companyInfo.tradeName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/avaas-logo.svg`,
    email: companyInfo.contact.email,
    telephone: companyInfo.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyInfo.registeredOffice.line1}, ${companyInfo.registeredOffice.line2}`,
      addressLocality: "Malkajgiri, Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500047",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
      siteConfig.links.blog,
    ].filter(Boolean),
    description: siteConfig.description,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.tradeName,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: companyInfo.legalName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
