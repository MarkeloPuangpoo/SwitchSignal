"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import type { Locale } from "@/types/quiz";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const STORAGE_KEY = "switch-signal.locale";

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "th";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "th" || saved === "en" ? saved : "th";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "th" ? "th" : "en";
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }

  return context;
}
