import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/content/company";
import { siteConfig } from "@/content/siteConfig";
import { navigationItems } from "@/content/navigation";
import { CookiePreferencesButton } from "@/components/cookies";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-avaas-navy text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1 & 2: Company Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-32 bg-white/95 rounded px-2 py-1">
                <Image
                  src="/avaas-logo.svg"
                  alt="AVAAS Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>

            <p className="text-sm font-medium text-slate-200">
              {companyInfo.legalName}
            </p>

            <p className="text-xs text-slate-400 font-mono">
              CIN: {companyInfo.cin}
            </p>

            <p className="text-sm text-slate-400 italic">
              &ldquo;{companyInfo.motto}&rdquo;
            </p>

            <p className="text-xs text-avaas-orange font-medium tracking-wide">
              {companyInfo.tagline}
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-avaas-orange hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="AVAAS LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.links.instagram && (
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-avaas-orange hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="AVAAS Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.links.facebook && (
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-avaas-orange hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="AVAAS Facebook Page"
                >
                  <span className="text-xs font-bold">f</span>
                </a>
              )}
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Legal & Compliance
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <CookiePreferencesButton className="text-sm" />
              </li>
              <li>
                <a
                  href="https://info.avaas.me"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Official Company Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Registered Corporate Office */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Registered Office
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-avaas-orange shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {companyInfo.registeredOffice.fullFormatted}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-avaas-orange shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-avaas-orange shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contact.displayPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {companyInfo.legalName}. All rights reserved.
          </p>
          <p className="text-slate-400">
            {companyInfo.positioning} • info.avaas.me
          </p>
        </div>
      </div>
    </footer>
  );
}
