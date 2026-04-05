import type { AxisKey, Locale, LocalizedText } from "@/types/quiz";

export const axisLabels: Record<AxisKey, LocalizedText> = {
  L: { th: "นำ", en: "Lead" },
  C: { th: "ดูแล", en: "Care" },
  S: { th: "อ่อนโยน", en: "Soft" },
  T: { th: "ขี้แซว", en: "Tease" },
  F: { th: "ยืดหยุ่น", en: "Flex" },
};

export const appCopy = {
  brandTag: { th: "hub เกมคาแรกเตอร์และ mini quiz", en: "A hub for character games and mini quizzes" },
  subtitle: { th: "พื้นที่รวมเกมตอบคำถามที่เล่นสนุก สวย และพร้อมโตเป็นจักรวาลเกมย่อย", en: "A polished home for stylish quiz games and mini play drops" },
  heroBody: {
    th: "Switch Signal ตอนนี้เป็น hub สำหรับเกมตอบคำถามและ mini experiences ที่เน้นคาแรกเตอร์ ความขำ และผลลัพธ์ที่อยากแชร์ต่อ โดยวางระบบไว้ให้เพิ่มเกมใหม่ได้แบบลื่นและยังคงภาพลักษณ์เดียวกันทั้งแบรนด์",
    en: "Switch Signal is now a polished hub for quiz games and mini experiences built around character, replayable fun, and share-worthy reveals, with a system ready for future launches.",
  },
  startQuiz: { th: "เปิดเกมเด่น", en: "Open featured game" },
  howItWorks: { th: "ดูภาพรวม hub", en: "Explore the hub" },
  heroFooter: {
    th: "ตอนนี้ hub มีหลายเกมให้เริ่มเล่นได้แล้ว และตัวระบบถูกจัดให้รองรับเกมถัดไปแบบไม่ทำให้หน้าตาและอารมณ์ของแบรนด์หลุดออกจากกัน",
    en: "Multiple games are already live, and the system is shaped to welcome future drops without losing a cohesive brand feel.",
  },
  previewResult: { th: "เกมเด่นใน hub", en: "Featured game" },
  youCouldBe: { th: "เปิดให้เล่นตอนนี้", en: "Live right now" },
  editorialEnergyLabel: { th: "จุดเด่น:", en: "Why it hits:" },
  editorialEnergyValue: {
    th: "มีทั้งความเป็นเกม ความเป็นแบรนด์ และความสนุกที่คนอยากกดเล่นต่อหรือส่งให้เพื่อน",
    en: "Designed to feel like a real game product with a clean brand system and easy-to-share fun.",
  },
  stepsTitle: { th: "ระบบของ hub", en: "How the hub works" },
  stepsHeading: {
    th: "โครงใหม่ที่พร้อมให้เพิ่มเกมต่อโดยไม่ต้องสร้างโปรดักต์ใหม่ทุกครั้ง",
    en: "A future-ready hub structure for launching more games without rebuilding the product each time.",
  },
  stepsBody: {
    th: "เราเปลี่ยนหน้าแรกให้เป็นศูนย์กลางของเกมทั้งหมด แยกชั้นข้อมูลให้พร้อมรองรับหลายเกม และยังคงงานภาพ การเคลื่อนไหว และโทนแบรนด์ให้อยู่ในภาษาเดียวกัน",
    en: "The home experience now acts as a central game hub, with structure ready for multiple experiences while keeping the same visual language, motion, and brand mood.",
  },
  startNow: { th: "เข้าเกมที่เปิดอยู่", en: "Open the live game" },
  disclaimerPill: { th: "ข้อชี้แจงเล็กๆ", en: "Small disclaimer" },
  disclaimerHeading: {
    th: "แต่ละเกมอาจคนละมู้ด แต่ทั้งหมดจะยังอยู่ในมาตรฐานเดียวกัน",
    en: "Each game can have its own mood, while still belonging to one polished system.",
  },
  disclaimerBody: {
    th: "Switch Signal ถูกวางให้เป็นบ้านของเกมตอบคำถามหลายแบบ ตั้งแต่เกมอ่านคาแรกเตอร์ เกมโทนขำๆ ไปจนถึง mini quiz ที่จบแล้วได้ผลลัพธ์สวยพอจะหยิบไปแชร์ต่อ โดยไม่ต้องเปลี่ยนภาษาภาพใหม่ทุกครั้ง",
    en: "Switch Signal is built as a home for multiple quiz-game formats, from character reads to funny social tests and future mini drops, without reinventing the visual language each time.",
  },
  homeHighlights: [
    {
      th: "มี game registry กลางสำหรับเติมเกมใหม่โดยไม่ต้องรื้อหน้าแรกใหม่ทั้งก้อน",
      en: "A central game registry keeps future launches clean and scalable.",
    },
    {
      th: "หน้าแรกทำหน้าที่เป็น launcher จริง ให้ผู้เล่นเลือกเกมได้เลยจากที่เดียว",
      en: "The home page now acts like a real launcher, letting players pick a game from one place.",
    },
    {
      th: "ภาพรวม งาน motion และ tone ถูกคุมให้รองรับหลายเกมในภาษาเดียวกัน",
      en: "Motion, visuals, and tone are shaped to support many games inside one consistent brand system.",
    },
  ],
  steps: [
    {
      title: { th: "เลือกเกมจาก hub", en: "Choose from the hub" },
      description: {
        th: "หน้าแรกทำหน้าที่เป็นศูนย์กลางให้ผู้เล่นเลือกว่าตอนนี้อยากลอง format ไหน",
        en: "The home experience now acts as a central selection point for different quiz and game formats.",
      },
    },
    {
      title: { th: "เปิดเกมที่พร้อมแล้ว", en: "Launch the live game" },
      description: {
        th: "เลือกเข้าเกมที่อยากเล่นได้ทันที แต่ละเกมมี launcher, flow, และผลลัพธ์ของตัวเองชัดเจน",
        en: "Jump straight into the game you want. Each one has its own launcher, flow, and payoff.",
      },
    },
    {
      title: { th: "พร้อมต่อยอดเกมใหม่", en: "Ready for future drops" },
      description: {
        th: "โครงนี้ตั้งใจทำมาเพื่อเพิ่มเกมใหม่ทีละเกม โดยไม่ต้องเปลี่ยนบุคลิกของโปรดักต์ทุกครั้ง",
        en: "The structure is now ready to grow game by game without reinventing the product each time.",
      },
    },
  ],
  footerDisclaimer: {
    th: "Switch Signal คือพื้นที่ของเกมตอบคำถามเชิงคาแรกเตอร์และ mini quiz ที่ทำมาเพื่อความสนุก การสะท้อน mood และการแชร์ต่อ ไม่ใช่คำตัดสินตัวตน คุณค่า หรือสถานะของใครจริงๆ",
    en: "Switch Signal is a home for character-driven quiz games and mini experiences made for fun, mood reading, and sharing, not for judging anyone’s worth, identity, or status.",
  },
  footer: {
    pill: { th: "ปิดท้ายแบบมีซิกเนเจอร์", en: "A polished sign-off" },
    heading: { th: "จบหน้าแล้ว แต่ระบบนี้ยังพร้อมปล่อยเกมต่อได้อีก", en: "The page ends here, but the hub is built for what drops next" },
    body: {
      th: "Switch Signal ถูกรีเฟรมให้เป็น game hub ที่รวมเกมตอบคำถามหลายอารมณ์ไว้ในระบบเดียว ตั้งแต่เกมคาแรกเตอร์เบาๆ ไปจนถึงผลลัพธ์แบบ share card ที่รู้สึกเหมือนเป็น digital collectible ชิ้นเล็กๆ",
      en: "Switch Signal has been reframed as a game hub for multiple quiz-driven moods, from light character reads to share-card payoffs that feel like tiny digital collectibles.",
    },
    creatorLabel: { th: "สร้างและดูแลโดย", en: "Crafted by" },
    creatorValue: { th: "MarkeloPuangpoo", en: "MarkeloPuangpoo" },
    githubCta: { th: "ดู GitHub", en: "View GitHub" },
    githubHint: { th: "งานและโปรเจกต์เพิ่มเติม", en: "More work and projects" },
    disclaimerTitle: { th: "เล่นเอาฟีล ไม่ใช่ตัดสินจริง", en: "Playful, not prescriptive" },
    bottomNote: {
      th: "Built for game-night energy, clean motion, and results worth sharing.",
      en: "Built for game-night energy, clean motion, and results worth sharing.",
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
      th: "เหมือนคุณหลุดออกนอกเส้นทางของ hub นี้ไปนิดหนึ่ง",
      en: "Looks like you drifted outside this part of the hub.",
    },
    body: {
      th: "หน้านี้ไม่มีอยู่ หรืออาจถูกย้ายไปแล้ว แต่ตัว hub ยังอยู่ครบ คุณกลับไปเลือกเกมจากหน้าแรก หรือเข้าเกมที่เปิดให้เล่นอยู่ตอนนี้ได้เลย",
      en: "This page does not exist, or it may have moved. The hub is still intact though. Head back home or jump into a live game.",
    },
    primary: { th: "กลับไปที่ hub", en: "Back to the hub" },
    secondary: { th: "ดูเกมที่เปิดอยู่", en: "Open a live game" },
    ambient: { th: "softly off-script, still on brand", en: "softly off-script, still on brand" },
  },
  locale: {
    th: { th: "ไทย", en: "Thai" },
    en: { th: "English", en: "English" },
  } satisfies Record<Locale, LocalizedText>,
};
