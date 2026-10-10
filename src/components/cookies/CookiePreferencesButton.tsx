"use client";

import React from "react";
import { useCookieConsent } from "./CookieConsentContext";
import { Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CookiePreferencesButtonProps {
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function CookiePreferencesButton({
  className,
  showIcon = false,
  children = "Cookie Preferences",
}: CookiePreferencesButtonProps) {
  const { openSettings } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openSettings}
      className={cn(
        "text-slate-400 hover:text-white transition-colors text-left inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline",
        className
      )}
    >
      {showIcon && <Settings2 className="w-3.5 h-3.5 text-avaas-blue" />}
      <span>{children}</span>
    </button>
  );
}
