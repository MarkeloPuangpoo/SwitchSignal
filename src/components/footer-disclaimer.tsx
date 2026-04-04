"use client";

import Link from "next/link";
import { ArrowUpRight, GitBranch, Sparkles } from "lucide-react";

import { appCopy } from "@/data/copy";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/providers/locale-provider";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";

export function FooterDisclaimer() {
  const { locale } = useLocale();

  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-8 pt-4 text-sm text-zinc-600 sm:px-6 lg:px-8">
      <Card className="overflow-hidden p-0">
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.24),rgba(251,207,232,0)_38%),radial-gradient(circle_at_bottom_right,rgba(191,219,254,0.2),rgba(191,219,254,0)_34%)]" />

          <div className="relative grid gap-5 p-5 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8 lg:p-7">
            <div className="space-y-4">
              <Pill>{t(appCopy.footer.pill, locale)}</Pill>
              <div className="space-y-3">
                <h2 className={`text-2xl font-semibold text-zinc-950 sm:text-3xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.18]" : "tracking-[-0.05em]"}`}>
                  {t(appCopy.footer.heading, locale)}
                </h2>
                <p className={`max-w-2xl text-zinc-700 ${locale === "th" ? "text-[0.98rem] leading-7 sm:text-[1.02rem]" : "text-base leading-7"}`}>
                  {t(appCopy.footer.body, locale)}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-zinc-700">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/58 px-3.5 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                  <Sparkles className="h-4 w-4 text-rose-400" />
                  <span className={`text-sm ${locale === "th" ? "tracking-[0.01em]" : ""}`}>
                    {t(appCopy.footer.creatorLabel, locale)} <span className="font-semibold text-zinc-950">{t(appCopy.footer.creatorValue, locale)}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="https://github.com/MarkeloPuangpoo"
                target="_blank"
                rel="noreferrer"
                className="group w-full max-w-sm"
              >
                <div className="rounded-[1.6rem] border border-white/55 bg-white/62 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/76 hover:shadow-[0_22px_55px_rgba(15,23,42,0.1)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200/70 bg-zinc-950 text-white shadow-[0_10px_24px_rgba(24,24,27,0.18)]">
                        <GitBranch className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="font-semibold text-zinc-950">{t(appCopy.footer.githubCta, locale)}</div>
                        <div className={`text-zinc-500 ${locale === "th" ? "text-[0.84rem] leading-6" : "text-xs"}`}>
                          {t(appCopy.footer.githubHint, locale)}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-900" />
                  </div>
                </div>
              </Link>

              <div className="max-w-sm rounded-[1.4rem] border border-white/45 bg-white/42 px-4 py-3 text-zinc-600 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <div className="mb-1 font-medium text-zinc-800">{t(appCopy.footer.disclaimerTitle, locale)}</div>
                <p className={locale === "th" ? "text-[0.9rem] leading-6" : "text-sm leading-6"}>{t(appCopy.footerDisclaimer, locale)}</p>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/45 px-5 py-3 text-zinc-500 sm:px-6 lg:px-7">
            <p className={locale === "th" ? "text-[0.82rem] tracking-[0.01em]" : "text-xs uppercase tracking-[0.18em]"}>
              {t(appCopy.footer.bottomNote, locale)}
            </p>
          </div>
        </div>
      </Card>
    </footer>
  );
}
