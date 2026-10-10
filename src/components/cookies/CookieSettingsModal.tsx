"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";
import { X, ShieldCheck, BarChart3, Target, Lock, Check } from "lucide-react";

export function CookieSettingsModal() {
  const {
    isSettingsOpen,
    closeSettings,
    preferences,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Sync state whenever settings modal opens
  useEffect(() => {
    if (isSettingsOpen) {
      setAnalytics(preferences.analytics);
      setMarketing(preferences.marketing);
    }
  }, [isSettingsOpen, preferences]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSettingsOpen) {
        closeSettings();
      }
    };
    if (isSettingsOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSettingsOpen, closeSettings]);

  if (!isSettingsOpen) return null;

  const handleSave = () => {
    savePreferences({ analytics, marketing });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-settings-title"
    >
      <div
        className="relative w-full max-w-2xl bg-avaas-navy border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-avaas-navyLight/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-avaas-blue/10 border border-avaas-blue/30 flex items-center justify-center text-avaas-blue">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="cookie-settings-title"
                className="text-lg font-semibold text-white tracking-tight"
              >
                Cookie Preferences
              </h2>
              <p className="text-xs text-slate-400">
                Manage your privacy choices for AVAAS Speech Systems
              </p>
            </div>
          </div>
          <button
            onClick={closeSettings}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close cookie settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto text-sm flex-1 custom-scrollbar">
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            We respect your privacy. When you visit our website, we store cookies
            on your browser to collect information. You can customize your
            cookie preferences below. For complete details, review our{" "}
            <Link
              href="/privacy"
              className="text-avaas-blue hover:underline font-medium"
              onClick={closeSettings}
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="text-avaas-blue hover:underline font-medium"
              onClick={closeSettings}
            >
              Terms of Use
            </Link>
            .
          </p>

          <div className="space-y-4">
            {/* 1. Essential Cookies */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-white text-sm">
                    Essential Cookies
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                    <Lock className="w-3 h-3" />
                    Always Active
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                These cookies are necessary for core website functionality,
                navigation security, and saving your consent preferences. They
                cannot be deactivated.
              </p>
            </div>

            {/* 2. Analytics Cookies */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <BarChart3 className="w-4 h-4 text-avaas-blue" />
                  <span className="font-semibold text-white text-sm">
                    Analytics Cookies
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full">
                    Optional
                  </span>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle Analytics Cookies"
                  />
                  <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-avaas-blue/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-avaas-blue"></div>
                </label>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                These cookies help us understand aggregate visitor usage, page
                flows, and system performance so we can continuously optimize
                the platform experience.
              </p>
            </div>

            {/* 3. Marketing Cookies */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <Target className="w-4 h-4 text-avaas-blue" />
                  <span className="font-semibold text-white text-sm">
                    Marketing Cookies
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full">
                    Optional
                  </span>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle Marketing Cookies"
                  />
                  <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-avaas-blue/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-avaas-blue"></div>
                </label>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                These cookies allow us to deliver tailored information regarding
                AVAAS updates, partner pilots, and product announcements.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-avaas-navyLight/60">
          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              type="button"
              onClick={rejectNonEssential}
              className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Reject All Optional
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/90 border border-slate-600 transition-colors"
            >
              Accept All
            </button>
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-auto px-5 py-2 rounded-lg text-xs font-semibold text-white bg-avaas-blue hover:bg-avaas-blue-hover shadow-sm transition-colors flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
