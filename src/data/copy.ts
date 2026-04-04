import type { AxisKey, Locale, LocalizedText } from "@/types/quiz";

export const axisLabels: Record<AxisKey, LocalizedText> = {
  L: { th: "นำ", en: "Lead" },
  C: { th: "ดูแล", en: "Care" },
  S: { th: "อ่อนโยน", en: "Soft" },
  T: { th: "ขี้แซว", en: "Tease" },
  F: { th: "ยืดหยุ่น", en: "Flex" },
};

export const appCopy = {
  brandTag: { th: "แบบทดสอบไดนามิกความสัมพันธ์", en: "Relationship Dynamic Quiz" },
  subtitle: { th: "ควิซเล่นๆ วัดพลังความสัมพันธ์", en: "A playful relationship-dynamic quiz" },
  heroBody: {
    th: "ควิซความสัมพันธ์ที่ทั้งละมุน อ่านง่าย และมีเสน่ห์แบบอยากแคปเก็บไว้ ออกแบบมาเพื่อจับโทนพลังและไดนามิกของคุณ ไม่ใช่ตัดสินคุณค่าใคร",
    en: "A playful relationship-dynamic quiz. Softly romantic, highly readable, and designed to capture the shape of your vibe, not your value.",
  },
  startQuiz: { th: "เริ่มทำควิซ", en: "Start the quiz" },
  howItWorks: { th: "วิธีเล่น", en: "How it works" },
  heroFooter: {
    th: "16 คำถาม 4 ตัวเลือกต่อข้อ พร้อมการ์ดผลลัพธ์ที่ออกแบบมาให้รู้สึกพิเศษพอจะอยากแคปเก็บหรือโพสต์ต่อ",
    en: "Sixteen questions, four answers each, and a result card styled to feel worth keeping. Charming, intimate, and built for screenshots.",
  },
  previewResult: { th: "ตัวอย่างผลลัพธ์", en: "Preview Result" },
  youCouldBe: { th: "คุณอาจเป็น", en: "You could be" },
  editorialEnergyLabel: { th: "โทนโดยรวม:", en: "Editorial energy:" },
  editorialEnergyValue: {
    th: "สมดุลแบบพลิ้วไหว ละมุนหรู และมีความขี้เล่นนิดๆ แบบโอปอล",
    en: "adaptive chemistry, luxe softness, and a little opaline mischief.",
  },
  stepsTitle: { th: "วิธีเล่น", en: "How it works" },
  stepsHeading: {
    th: "ควิซฟีลนุ่มหรูที่มี emotional payoff จริงตอนเฉลยผล",
    en: "A soft-luxe quiz flow with a real emotional payoff.",
  },
  stepsBody: {
    th: "ทุกหน้าถูกออกแบบให้สงบ ลื่นมือ และน่าอยู่ต่ออีกนิด ระบบคะแนนโปร่งใส แอนิเมชันมีจังหวะพอดี และผลลัพธ์ให้ความรู้สึกเหมือนของสะสมชิ้นหนึ่ง",
    en: "Every screen is designed to feel calm, tactile, and worth lingering in. The logic stays transparent, the motion stays restrained, and the result feels like a collectible.",
  },
  startNow: { th: "เริ่มตอนนี้", en: "Start now" },
  disclaimerPill: { th: "ข้อชี้แจงเล็กๆ", en: "Small disclaimer" },
  disclaimerHeading: {
    th: "ที่นี่พูดถึงไดนามิกและ vibe ไม่ใช่ลำดับชั้นหรือคุณค่าของใคร",
    en: "This is about dynamic and vibe, never rank.",
  },
  disclaimerBody: {
    th: "Switch Signal เล่นกับพลังในความสัมพันธ์ว่าใครเป็นคนพา ใครละมุน ใครขี้แซว และใครปรับจูนเก่ง มันตั้งใจให้ playful และมีบทกวีเบาๆ โดยไม่ได้บอกว่าคุณควรเป็นแบบไหน",
    en: "Switch Signal plays with relational energy: who leads, who softens, who teases, who adapts. It is intentionally playful and lightly poetic, and it does not define what anyone should be.",
  },
  homeHighlights: [
    {
      th: "ระบบคะแนนชัดเจน เก็บไว้ใน structured local data ทั้งหมด",
      en: "Thoughtful scoring kept local in structured data.",
    },
    {
      th: "เลือกคำตอบด้วยคีย์บอร์ดได้ มี focus state ชัดเจน ใช้งานลื่น",
      en: "Accessible keyboard-friendly selection and visible focus treatment.",
    },
    {
      th: "การ์ดผลลัพธ์ออกแบบให้สวยทั้งบนมือถือและตอนแคปหน้าจอ",
      en: "Result card built to look good on mobile and desktop screenshots.",
    },
  ],
  steps: [
    {
      title: { th: "ตอบตามสัญชาตญาณ", en: "Answer instinctively" },
      description: {
        th: "16 สถานการณ์ที่ตั้งใจอ่านเคมีความสัมพันธ์ของคุณ ไม่ใช่ให้ตอบแบบดูดี",
        en: "Sixteen mood-rich scenarios designed to read your chemistry style, not your performance.",
      },
    },
    {
      title: { th: "ให้แกนคะแนนเล่าเรื่อง", en: "Let the axes speak" },
      description: {
        th: "Lead, Care, Soft, Tease และ Flex จะค่อยๆ วาดพลังของคุณออกมาภายใต้โมเดลคะแนนที่ชัดเจน",
        en: "Lead, Care, Soft, Tease, and Flex build your profile with a clean scoring model under the gloss.",
      },
    },
    {
      title: { th: "เก็บโมเมนต์ตอนเฉลย", en: "Keep the payoff" },
      description: {
        th: "ผลลัพธ์มาในรูปแบบ social card ที่ดูพรีเมียมพอจะรู้สึกว่าอยากเก็บ อยากแชร์",
        en: "Your result arrives as a premium social card made to feel special on both screen and screenshot.",
      },
    },
  ],
  footerDisclaimer: {
    th: "Switch Signal เป็นควิซเล่นๆ เรื่องไดนามิกความสัมพันธ์ ไม่ใช่การจัดลำดับคุณค่า ตัวตน หรือสถานะของใคร ใช้มันเป็นกระจกส่องเคมีระหว่างคน มากกว่าจะเป็นคำตัดสิน",
    en: "Switch Signal is a playful vibe quiz about relationship dynamics, not status, worth, or rigid identity. Use it like a mirror for chemistry, not a verdict.",
  },
  footer: {
    pill: { th: "ปิดท้ายแบบมีซิกเนเจอร์", en: "A polished sign-off" },
    heading: { th: "ทำให้ควิซจบแบบรู้สึกว่าแบรนด์ยังอยู่ต่อ", en: "End on a branded, memorable note" },
    body: {
      th: "Switch Signal ถูกออกแบบให้เป็น playful ritual ที่ดูดีพอจะอยากส่งต่อ ทั้งในความรู้สึก การเคลื่อนไหว และจังหวะการเฉลยผล",
      en: "Switch Signal is designed as a playful ritual worth sharing, with care put into the feeling, motion, and emotional payoff.",
    },
    creatorLabel: { th: "สร้างและดูแลโดย", en: "Crafted by" },
    creatorValue: { th: "MarkeloPuangpoo", en: "MarkeloPuangpoo" },
    githubCta: { th: "ดู GitHub", en: "View GitHub" },
    githubHint: { th: "งานและโปรเจกต์เพิ่มเติม", en: "More work and projects" },
    disclaimerTitle: { th: "Playful, not prescriptive", en: "Playful, not prescriptive" },
    bottomNote: {
      th: "Made for soft chaos, good chemistry, and screenshot-worthy reveals.",
      en: "Made for soft chaos, good chemistry, and screenshot-worthy reveals.",
    },
  },
  quiz: {
    backHome: { th: "กลับหน้าแรก", en: "Back home" },
    ready: { th: "พร้อมดูผล", en: "Ready to reveal" },
    inProgress: { th: "กำลังทำควิซ", en: "In progress" },
    restartAria: { th: "เริ่มควิซใหม่", en: "Restart quiz" },
    oneMoreTap: { th: "อีกแค่แตะเดียว เดี๋ยวเราจะเฉลย archetype ของคุณ", en: "One more tap and we’ll reveal your archetype." },
    saved: { th: "บันทึกคำตอบแล้ว ไปต่อเมื่อรู้สึกว่าใช่", en: "Selection saved. Move when the answer feels right." },
    instinct: { th: "เลือกคำตอบที่ใกล้กับสัญชาตญาณจริงของคุณที่สุด ไม่ต้องเลือกคำตอบในอุดมคติ", en: "Choose the option that feels most like your instinct, not your ideal." },
    previous: { th: "ก่อนหน้า", en: "Previous" },
    next: { th: "ถัดไป", en: "Next" },
    reveal: { th: "ดูผลลัพธ์", en: "Reveal result" },
    question: { th: "คำถาม", en: "Question" },
    complete: { th: "เสร็จแล้ว", en: "complete" },
    readMoment: { th: "ลองนึกภาพจังหวะนี้", en: "Read the moment" },
    option: { th: "ตัวเลือก", en: "Option" },
  },
  result: {
    finalArchetype: { th: "archetype ของคุณ", en: "Final Archetype" },
    axisMix: { th: "สัดส่วนแกนพลัง", en: "Your axis mix" },
    retake: { th: "ทำควิซอีกครั้ง", en: "Retake quiz" },
    backHome: { th: "กลับหน้าแรก", en: "Back to home" },
    coreVibe: { th: "แก่นพลังของคุณ", en: "Core vibe" },
    howYouLove: { th: "สไตล์เวลาคุณรัก", en: "How you love" },
    misunderstood: { th: "สิ่งที่คนมักเข้าใจคุณผิด", en: "Misunderstood" },
    chemistry: { th: "เคมีที่เข้ากันที่สุด", en: "Best chemistry with" },
    chemistryHeadingSuffix: { th: "ในวงโคจรที่ใช่", en: "in the right orbit" },
    keywords: { th: "คำภาพรวมของ aesthetic", en: "Aesthetic keywords" },
    shareCard: { th: "ผลลัพธ์จาก Switch Signal", en: "Switch Signal Result" },
  },
  notFound: {
    pill: { th: "404 • สัญญาณหาย", en: "404 • Signal Lost" },
    heading: {
      th: "เหมือนคุณหลุดออกนอกเส้นทางของเคมีนี้ไปนิดหนึ่ง",
      en: "Looks like you drifted outside this particular chemistry path.",
    },
    body: {
      th: "หน้านี้ไม่มีอยู่ หรืออาจถูกย้ายไปแล้ว แต่บรรยากาศยังอยู่ครบ คุณกลับไปหน้าแรกหรือเริ่มทำควิซใหม่ได้เลย",
      en: "This page does not exist, or it may have moved. The vibe is still intact though. Head home or jump back into the quiz.",
    },
    primary: { th: "กลับหน้าแรก", en: "Back home" },
    secondary: { th: "เริ่มทำควิซ", en: "Start the quiz" },
    ambient: { th: "softly off-script, still on brand", en: "softly off-script, still on brand" },
  },
  locale: {
    th: { th: "ไทย", en: "Thai" },
    en: { th: "English", en: "English" },
  } satisfies Record<Locale, LocalizedText>,
};
