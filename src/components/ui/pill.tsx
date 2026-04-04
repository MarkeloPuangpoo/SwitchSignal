"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/locale-provider";

export function Pill({ className, children }: { className?: string; children: ReactNode }) {
  const { locale } = useLocale();

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center self-start rounded-full border border-white/50 bg-white/50 px-3 py-1 text-[0.72rem] font-medium text-zinc-600 backdrop-blur-lg",
        locale === "th" ? "tracking-[0.01em]" : "uppercase tracking-[0.24em]",
        className,
      )}
    >
      {children}
    </span>
  );
}
