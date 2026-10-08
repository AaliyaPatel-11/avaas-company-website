"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  CookiePreferences,
  DEFAULT_COOKIE_PREFERENCES,
  getStoredCookiePreferences,
  saveStoredCookiePreferences,
} from "@/lib/cookieConsent";

interface CookieConsentContextType {
  preferences: CookiePreferences;
  isBannerVisible: boolean;
  isSettingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (custom: { analytics: boolean; marketing: boolean }) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preferences, setPreferences] = useState<CookiePreferences>(
    DEFAULT_COOKIE_PREFERENCES
  );
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = getStoredCookiePreferences();
    if (stored && stored.answered) {
      setPreferences(stored);
      setIsBannerVisible(false);
    } else {
      setIsBannerVisible(true);
    }

    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CookiePreferences>;
      if (customEvent.detail) {
        setPreferences(customEvent.detail);
      }
    };

    window.addEventListener("avaas_cookie_consent_updated", handleConsentUpdate);
    return () => {
      window.removeEventListener(
        "avaas_cookie_consent_updated",
        handleConsentUpdate
      );
    };
  }, []);

  const openSettings = useCallback(() => {
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    const updated = saveStoredCookiePreferences({
      analytics: true,
      marketing: true,
    });
    setPreferences(updated);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const updated = saveStoredCookiePreferences({
      analytics: false,
      marketing: false,
    });
    setPreferences(updated);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
  }, []);

  const savePreferences = useCallback(
    (custom: { analytics: boolean; marketing: boolean }) => {
      const updated = saveStoredCookiePreferences(custom);
      setPreferences(updated);
      setIsBannerVisible(false);
      setIsSettingsOpen(false);
    },
    []
  );

  // Prevent SSR flicker before hydration
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        isBannerVisible,
        isSettingsOpen,
        openSettings,
        closeSettings,
        acceptAll,
        rejectNonEssential,
        savePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
}
