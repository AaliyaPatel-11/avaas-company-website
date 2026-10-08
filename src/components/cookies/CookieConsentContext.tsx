"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  CookiePreferences,
  DEFAULT_COOKIE_PREFERENCES,
  getStoredCookiePreferences,
  saveStoredCookiePreferences,
} from "@/lib/cookieConsent";

export interface CookieConsentContextType {
  preferences: CookiePreferences;
  isBannerVisible: boolean;
  isSettingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (custom: { analytics: boolean; marketing: boolean }) => void;
}

const fallbackContext: CookieConsentContextType = {
  preferences: DEFAULT_COOKIE_PREFERENCES,
  isBannerVisible: false,
  isSettingsOpen: false,
  openSettings: () => {},
  closeSettings: () => {},
  acceptAll: () => {},
  rejectNonEssential: () => {},
  savePreferences: () => {},
};

const CookieConsentContext = createContext<CookieConsentContextType>(fallbackContext);

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

  useEffect(() => {
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

  const contextValue = useMemo(
    () => ({
      preferences,
      isBannerVisible,
      isSettingsOpen,
      openSettings,
      closeSettings,
      acceptAll,
      rejectNonEssential,
      savePreferences,
    }),
    [
      preferences,
      isBannerVisible,
      isSettingsOpen,
      openSettings,
      closeSettings,
      acceptAll,
      rejectNonEssential,
      savePreferences,
    ]
  );

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextType {
  const context = useContext(CookieConsentContext);
  return context || fallbackContext;
}
