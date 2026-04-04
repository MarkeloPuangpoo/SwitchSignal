"use client";

import { Languages } from "lucide-react";

import { appCopy } from "@/data/copy";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/locale-provider";
import type { Locale } from "@/types/quiz";

const locales: Locale[] = ["th", "en"];

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={cn("flex items-center gap-2 rounded-full border border-white/55 bg-white/60 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-zinc-700">
        <Languages className="h-4 w-4" />
      </div>
      <div className="flex items-center gap-1">
        {locales.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70",
              locale === value ? "bg-zinc-950 text-white shadow-[0_10px_25px_rgba(24,24,27,0.18)]" : "text-zinc-600 hover:bg-white/70 hover:text-zinc-950",
            )}
            aria-pressed={locale === value}
          >
            {appCopy.locale[value][locale]}
          </button>
        ))}
      </div>
    </div>
  );
}
