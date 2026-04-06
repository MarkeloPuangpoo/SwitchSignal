"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

import { appCopy } from "@/data/copy";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/locale-provider";
import type { Locale } from "@/types/quiz";

const locales: Locale[] = ["th", "en"];

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full border border-white/50 bg-white/52 p-1 shadow-[0_12px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        className,
      )}
      aria-hidden={!isVisible}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/68 text-zinc-700">
        <Languages className="h-4 w-4" />
      </div>
      <div className="flex items-center gap-1">
        {locales.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            className={cn(
              "rounded-full px-2.5 py-1.5 text-[0.82rem] font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70",
              locale === value ? "bg-zinc-950 text-white shadow-[0_8px_20px_rgba(24,24,27,0.14)]" : "text-zinc-600 hover:bg-white/70 hover:text-zinc-950",
            )}
            aria-pressed={locale === value}
            tabIndex={isVisible ? 0 : -1}
          >
            {appCopy.locale[value][locale]}
          </button>
        ))}
      </div>
    </div>
  );
}
