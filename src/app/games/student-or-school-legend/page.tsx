"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, Sparkles, Zap } from "lucide-react";

import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";

const copy = {
  th: {
    pill: "เกมใหม่ใน hub",
    title: "สายเรียน หรือ สายซ่า?",
    body: "เกมถามตอบคาแรกเตอร์ในโรงเรียน 20 ข้อที่ออกแบบให้สนุก ขำ และแชร์ต่อได้ โดยผลลัพธ์จะอ่านคุณเป็นคาแรกเตอร์ ไม่ใช่ตัดสินคุณจริงๆ",
    cta: "เริ่มเล่นเกมนี้",
    back: "กลับไปที่ hub",
    tags: ["20 คำถาม", "ผลลัพธ์ 5 แบบ", "เล่นเดี่ยว", "แชร์ต่อได้"],
    panels: [
      { icon: GraduationCap, title: "อ่าน vibe ในโรงเรียน", body: "ดูว่าคุณมีพลังสายเรียน สายชิล หรือสายตัวจี๊ดแบบไหน" },
      { icon: Zap, title: "อารมณ์สนุก ไม่แรงเกิน", body: "ใช้ภาษาคาแรกเตอร์แทนการตัดสินตรงๆ เพื่อให้เล่นขำได้แบบปลอดภัยกว่า" },
      { icon: BadgeCheck, title: "ทำจบแล้วได้ persona", body: "ผลลัพธ์จะเป็นแนวคนตั้งใจ คนคุมเกม หรือดาวเด่นประจำโรงเรียน" },
    ],
  },
  en: {
    pill: "New game in the hub",
    title: "Student or School Icon?",
    body: "A 20-question school-character quiz built to be funny, shareable, and high-energy, while keeping the result framed as character flavor rather than real-life judgment.",
    cta: "Start this game",
    back: "Back to the hub",
    tags: ["20 questions", "5 endings", "solo play", "shareable result"],
    panels: [
      { icon: GraduationCap, title: "Read your school vibe", body: "Find out whether your energy leans serious, chill, or unforgettable." },
      { icon: Zap, title: "Playful, not harsh", body: "The whole tone stays character-based and fun without romanticizing aggression." },
      { icon: BadgeCheck, title: "Finish with a persona", body: "Your result lands as a clear school-role character you can share." },
    ],
  },
} as const;

export default function StudentOrSchoolLegendPage() {
  const { locale } = useLocale();
  const content = copy[locale];

  return (
    <main className="app-shell">
      <FloatingBackground />
      <div className="relative z-10 flex min-h-screen flex-col py-6 sm:py-8">
        <section className="section-frame flex flex-1 items-center">
          <div className="grid w-full gap-6 xl:grid-cols-[1fr_0.92fr] xl:items-center">
            <div className="space-y-6">
              <Pill>{content.pill}</Pill>
              <div className="space-y-4">
                <h1 className={`max-w-4xl text-4xl font-semibold text-zinc-950 sm:text-5xl lg:text-6xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.12]" : "tracking-[-0.06em]"}`}>
                  {content.title}
                </h1>
                <p className={`max-w-2xl text-zinc-700 sm:text-lg ${locale === "th" ? "text-[1rem] leading-8 sm:text-[1.06rem]" : "text-base leading-7"}`}>
                  {content.body}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {content.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/55 bg-white/58 px-4 py-2 text-sm text-zinc-700 shadow-[0_10px_26px_rgba(15,23,42,0.05)]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/games/student-or-school-legend/play">
                  <Button size="lg" className="w-full sm:w-auto">
                    {content.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    {content.back}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {content.panels.map((panel) => {
                const Icon = panel.icon;

                return (
                  <Card key={panel.title} className="p-5 sm:p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-white/55 bg-white/64">
                        <Icon className="h-5 w-5 text-zinc-800" />
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-zinc-950">{panel.title}</h2>
                        <p className={`text-zinc-600 ${locale === "th" ? "text-[0.95rem] leading-7" : "text-sm leading-6"}`}>{panel.body}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}

              <Card className="relative overflow-hidden p-5 sm:p-6">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(191,219,254,0.16),rgba(255,255,255,0),rgba(253,224,71,0.12))]" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="font-semibold text-zinc-950">{locale === "th" ? "ผลลัพธ์แนวคาแรกเตอร์" : "Character-first results"}</div>
                    <div className={`text-zinc-600 ${locale === "th" ? "text-[0.92rem] leading-7" : "text-sm leading-6"}`}>
                      {locale === "th"
                        ? "เช่น นักเรียนตัวจริง, ลูกครึ่งเรียน-ตึง, ตัวตึงมีระบบ หรือดาวเด่นท้ายห้อง"
                        : "Think: real student, hybrid wildcard, structured icon, or back-row legend."}
                    </div>
                  </div>
                  <Sparkles className="h-5 w-5 shrink-0 text-amber-500" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <div className="mt-auto pt-8">
          <FooterDisclaimer />
        </div>
      </div>
    </main>
  );
}
