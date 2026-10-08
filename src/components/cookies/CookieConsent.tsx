"use client";

import React, { useEffect, useState } from "react";
import { CookieConsentBanner } from "./CookieConsentBanner";
import { CookieSettingsModal } from "./CookieSettingsModal";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CookieConsentBanner />
      <CookieSettingsModal />
    </>
  );
}
