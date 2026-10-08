export interface CookiePreferences {
  essential: true; // Always true
  analytics: boolean;
  marketing: boolean;
  answered: boolean;
  timestamp?: string;
}

export const COOKIE_CONSENT_STORAGE_KEY = "avaas_cookie_consent_v1";

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  answered: false,
};

export function getStoredCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null) {
      return {
        essential: true,
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
        answered: Boolean(parsed.answered),
        timestamp: parsed.timestamp,
      };
    }
  } catch (e) {
    console.error("Failed to parse stored cookie preferences", e);
  }
  return null;
}

export function saveStoredCookiePreferences(
  prefs: Omit<CookiePreferences, "essential" | "answered"> & { answered?: boolean }
): CookiePreferences {
  const finalPrefs: CookiePreferences = {
    essential: true,
    analytics: Boolean(prefs.analytics),
    marketing: Boolean(prefs.marketing),
    answered: true,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_STORAGE_KEY,
        JSON.stringify(finalPrefs)
      );
      window.dispatchEvent(
        new CustomEvent("avaas_cookie_consent_updated", { detail: finalPrefs })
      );
    } catch (e) {
      console.error("Failed to save cookie preferences", e);
    }
  }

  return finalPrefs;
}
