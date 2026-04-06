"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, House, Layers3, Sparkles, Stars } from "lucide-react";

import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";

const copy = {
  th: {
    title: "ประกายข้างในตัวคุณ มีชื่อว่าอะไร",
    body: "แบบสอบถามเชิงศิลปะที่จะค่อยๆ พาไปพบแสง สี แผล ความรัก และตัวตนที่ยังไม่เคยถูกเรียกชื่ออย่างชัดเจน",
    cta: "เริ่มเดินเข้าไปในใจตัวเอง",
    note: "นี่ไม่ใช่ข้อสอบ ไม่มีคำตอบที่ถูกกว่า มีแค่สิ่งที่ใกล้ตัวคุณที่สุดในตอนนี้",
    back: "กลับไปที่ hub",
    pill: "poetic self-discovery game",
    cards: [
      { title: "4 ห้องในใจ", body: "แสงและสี, ความเงียบและแผล, ความรักและการเชื่อมโยง, และการเติบโตที่กำลังก่อรูป" },
      { title: "16 คำถาม", body: "แต่ละข้อถูกจัดให้ไหลเหมือนเรื่องเล่า ไม่ใช่ข้อสอบที่เอามากองรวมกัน" },
      { title: "8 ชื่อผลลัพธ์", body: "จบแล้วจะได้ชื่อหนึ่งชื่อ พร้อมบทกวีสั้นๆ ที่สรุปแสง เงียบ รัก และการเติบโตของคุณ" },
    ],
    preview: "ปลายทางของเกมนี้",
    previewTitle: "ผลลัพธ์จะไม่บอกแค่ว่าคุณเป็นอะไร",
    previewBody: "แต่มันจะสรุปออกมาเหมือนอ่านบทกวีประจำใจ โดยมีทั้งแสงหลักของคุณ ความเงียบของคุณ วิธีที่คุณรัก และประกายที่กำลังเติบโต",
  },
  en: {
    title: "What Is the Name of Your Inner Light?",
    body: "An artful personality game that slowly leads you through light, color, wounds, love, and the parts of you that have not yet been named clearly.",
    cta: "Begin the walk inward",
    note: "This is not a test. There is no most correct answer, only the one that feels closest to you right now.",
    back: "Back to the hub",
    pill: "poetic self-discovery game",
    cards: [
      { title: "4 inner rooms", body: "Light and color, silence and wounds, love and connection, then the self that is still becoming" },
      { title: "16 questions", body: "Arranged to move like a story rather than a pile of disconnected prompts" },
      { title: "8 endings", body: "You finish with a named archetype and a short poem about your light, silence, love, and growth" },
    ],
    preview: "Where it lands",
    previewTitle: "The result does more than label you",
    previewBody: "It reads like a personal poem, naming your central light, your silence, the way you love, and the spark still growing inside you.",
  },
} as const;

export default function InnerLightPage() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const text = copy[locale];

  return (
    <main className="app-shell">
      <FloatingBackground />

      <div className="relative z-10 flex min-h-screen flex-col py-6 sm:py-8">
        <section className="section-frame flex flex-1 items-center">
          <div className="mx-auto grid w-full max-w-6xl gap-6 xl:grid-cols-[1fr_0.92fr] xl:items-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Pill>{text.pill}</Pill>
                <h1 className={`max-w-4xl text-5xl font-semibold text-zinc-950 sm:text-6xl lg:text-7xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.12]" : "tracking-[-0.06em]"}`}>
                  {text.title}
                </h1>
                <p className={`max-w-2xl text-zinc-700 ${locale === "th" ? "text-[1.04rem] leading-9 sm:text-[1.12rem]" : "text-lg leading-8"}`}>{text.body}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/games/inner-light/play">
                  <Button size="lg" className="w-full sm:w-auto">
                    {text.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <House className="h-4 w-4" />
                    {text.back}
                  </Button>
                </Link>
              </div>

              <p className={`max-w-xl text-zinc-500 ${locale === "th" ? "text-[0.95rem] leading-7" : "text-sm leading-6"}`}>{text.note}</p>

              <div className="grid gap-3 sm:grid-cols-3">
                {text.cards.map((item) => (
                  <div key={item.title} className="rounded-[1.65rem] border border-white/50 bg-white/54 p-4 shadow-[0_14px_35px_rgba(15,23,42,0.06)]">
                    <div className="text-sm font-semibold text-zinc-950">{item.title}</div>
                    <p className={`mt-2 text-zinc-600 ${locale === "th" ? "text-[0.9rem] leading-6" : "text-sm leading-6"}`}>{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="relative overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(255,255,255,0.52),rgba(224,242,254,0.42))]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <Pill className="bg-white/72">{text.preview}</Pill>
                    <Sparkles className="h-5 w-5 text-zinc-500" />
                  </div>

                  <div className="space-y-3">
                    <h2 className={`text-3xl font-semibold text-zinc-950 sm:text-4xl ${locale === "th" ? "tracking-[-0.03em] leading-[1.15]" : "tracking-[-0.05em]"}`}>
                      {text.previewTitle}
                    </h2>
                    <p className={`text-zinc-700 ${locale === "th" ? "text-[0.98rem] leading-8" : "text-base leading-7"}`}>{text.previewBody}</p>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/55 bg-white/64 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-white/75">
                        <Stars className="h-5 w-5 text-zinc-900" />
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-950">The Quiet Flame</div>
                        <div className={`text-zinc-500 ${locale === "th" ? "text-[0.84rem] tracking-[0.01em]" : "text-xs tracking-[0.14em] uppercase"}`}>
                          quiet warmth • hidden steel
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        locale === "th" ? "แสงหลักของคุณ: อบอุ่นแต่ไม่ส่งเสียงดัง" : "Your light: warm without ever turning loud",
                        locale === "th" ? "ความเงียบของคุณ: เป็นที่พัก ไม่ใช่คุก" : "Your silence: a refuge, not a prison",
                        locale === "th" ? "วิธีที่คุณรัก: ค่อยๆ ดูแลจนคนรู้สึกปลอดภัย" : "How you love: slowly, steadily, until people feel safe",
                        locale === "th" ? "ประกายที่กำลังเติบโต: ความกล้าที่อ่อนโยน" : "What is growing: courage softened by tenderness",
                      ].map((line) => (
                        <div key={line} className="rounded-[1.35rem] border border-white/55 bg-white/62 px-4 py-3 text-zinc-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                          {line}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Glow", "Veil", "Tide", "Flame", "Bloom"].map((axis) => (
                        <span key={axis} className="rounded-full border border-white/55 bg-white/70 px-3 py-1.5 text-sm text-zinc-700">
                          {axis}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Layers3, title: locale === "th" ? "4 หมวด" : "4 sections", body: locale === "th" ? "เดินผ่าน 4 ห้องในใจแทนการตอบคำถามกองเดียว" : "Move through four inner rooms instead of one flat questionnaire." },
                      { icon: Sparkles, title: locale === "th" ? "ผลลัพธ์แบบกวี" : "Poetic result", body: locale === "th" ? "ชื่อผลลัพธ์กับบรรทัดสรุป 4 ชั้นจะถูกจัดเหมือนบทกวีประจำตัว" : "The ending is framed like a personal poem with four custom lines." },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.title} className="rounded-[1.4rem] border border-white/55 bg-white/58 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/75">
                            <Icon className="h-4 w-4 text-zinc-900" />
                          </div>
                          <div className="text-sm font-semibold text-zinc-950">{item.title}</div>
                          <p className={`mt-2 text-zinc-600 ${locale === "th" ? "text-[0.88rem] leading-6" : "text-sm leading-6"}`}>{item.body}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <div className="mt-auto pt-8">
          <FooterDisclaimer />
        </div>
      </div>
    </main>
  );
}
