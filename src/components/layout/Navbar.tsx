"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationItems, navCta } from "@/content/navigation";
import { companyInfo } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-avaas-blue rounded-md p-1"
            aria-label={`${companyInfo.tradeName} Homepage`}
          >
            <div className="relative h-7 w-28 sm:h-8 sm:w-32">
              <Image
                src="/avaas-logo.svg"
                alt="AVAAS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {navigationItems.map((item) => {
              if (item.isExternal) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-avaas-blue transition-colors rounded-md hover:bg-slate-100/60"
                  >
                    {item.label}
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-avaas-blue transition-colors rounded-md hover:bg-slate-100/60"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={navCta.href}
              variant="dark"
              size="sm"
              className="font-medium"
            >
              {navCta.label}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-avaas-blue hover:bg-slate-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-avaas-blue"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-1">
            {navigationItems.map((item) => {
              if (item.isExternal) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-800 hover:text-avaas-blue hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-avaas-blue hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Button
                href={navCta.href}
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navCta.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
