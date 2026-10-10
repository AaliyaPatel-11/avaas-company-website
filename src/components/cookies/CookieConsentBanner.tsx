"use client";

import React from "react";
import { useCookieConsent } from "./CookieConsentContext";
import { Settings2, Cookie, Check, X } from "lucide-react";

export function CookieConsentBanner() {
  const {
    isBannerVisible,
    acceptAll,
    rejectNonEssential,
    openSettings,
  } = useCookieConsent();

  if (!isBannerVisible) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 md:p-6 pointer-events-none"
    >
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="relative rounded-2xl bg-avaas-navy/95 backdrop-blur-md border border-slate-700/80 p-4 sm:p-5 md:p-6 shadow-2xl text-slate-100 ring-1 ring-white/10 transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* Text and Icon */}
            <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
              <div className="w-10 h-10 rounded-xl bg-avaas-blue/10 border border-avaas-blue/20 flex items-center justify-center text-avaas-blue shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    We use cookies
                  </h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    Privacy
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  AVAAS uses cookies and similar technologies to improve website
                  functionality, understand how visitors use our website, and
                  enhance your experience. You can choose which cookies to allow.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 shrink-0 pt-2 lg:pt-0">
              <button
                type="button"
                onClick={openSettings}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-avaas-blue order-3 sm:order-1"
              >
                <Settings2 className="w-4 h-4 text-slate-400" />
                Cookie Settings
              </button>

              <button
                type="button"
                onClick={rejectNonEssential}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/90 border border-slate-600 hover:border-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-avaas-blue order-2"
              >
                <X className="w-3.5 h-3.5 text-slate-400" />
                Reject Non-Essential
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-avaas-blue hover:bg-avaas-blue-hover shadow-sm shadow-avaas-blue/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-avaas-blue focus-visible:ring-offset-2 focus-visible:ring-offset-avaas-navy active:scale-[0.98] order-1 sm:order-3"
              >
                <Check className="w-4 h-4" />
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
