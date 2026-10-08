"use client";

import React from "react";
import { CookieConsentBanner } from "./CookieConsentBanner";
import { CookieSettingsModal } from "./CookieSettingsModal";

export function CookieConsent() {
  return (
    <>
      <CookieConsentBanner />
      <CookieSettingsModal />
    </>
  );
}
