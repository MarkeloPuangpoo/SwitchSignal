import type { GameDefinition } from "@/types/game";

export const gameRegistry: GameDefinition[] = [
  {
    id: "inner-light-atlas",
    slug: "inner-light",
    title: {
      th: "ประกายข้างในตัวคุณ",
      en: "The Name of Your Inner Light",
    },
    category: {
      th: "เกมค้นหาตัวตนเชิงกวี",
      en: "Poetic self-discovery game",
    },
    description: {
      th: "เกม 16 ข้อที่พาคุณเดินผ่าน 4 ห้องในใจตัวเอง ตั้งแต่แสงและสี ไปจนถึงชื่อของประกายที่กำลังก่อตัวอยู่ข้างใน",
      en: "A 16-question poetic game that leads you through four inner rooms, from light and color to the name of the spark still forming inside you.",
    },
    hook: {
      th: "ละเอียด ละมุน และจบด้วยผลลัพธ์ที่เหมือนอ่านบทกวีประจำตัวมากกว่าทำควิซธรรมดา",
      en: "Elegant, intimate, and designed to end like a personal poem rather than an ordinary quiz result.",
    },
    href: "/games/inner-light",
    status: "live",
    questionCount: 16,
    accent: {
      from: "from-violet-200",
      via: "via-sky-100",
      to: "to-amber-50",
    },
  },
  {
    id: "school-vibe-check",
    slug: "student-or-school-legend",
    title: {
      th: "สายเรียน หรือ สายซ่า?",
      en: "Student or School Icon?",
    },
    category: {
      th: "เกมคาแรกเตอร์ในโรงเรียน",
      en: "School character quiz game",
    },
    description: {
      th: "เกมถามตอบ 20 ข้อที่จะบอกว่าคุณคือเด็กตั้งใจ เด็กตัวจี๊ด หรือเป็นลูกครึ่งเรียน-ตึงแบบคนที่ครูจับตา เพื่อนจำได้",
      en: "A 20-question school-character quiz that reveals whether you are a real student, a chill wildcard, or a memorable school icon.",
    },
    hook: {
      th: "ขำได้ แชร์ได้ และให้คาแรกเตอร์แบบมีซีน โดยไม่พาโทนไปทางความรุนแรงตรงๆ",
      en: "Funny, shareable, and full of character without drifting into glorified aggression.",
    },
    href: "/games/student-or-school-legend",
    status: "live",
    questionCount: 20,
    accent: {
      from: "from-blue-200",
      via: "via-cyan-100",
      to: "to-amber-100",
    },
  },
  {
    id: "switch-signal-dynamics",
    slug: "switch-signal",
    title: {
      th: "Switch Signal: Dynamic Archetypes",
      en: "Switch Signal: Dynamic Archetypes",
    },
    category: {
      th: "เกมแบบสอบถามความสัมพันธ์",
      en: "Relationship dynamic quiz game",
    },
    description: {
      th: "เกมแรกใน hub ที่จะพาคุณตอบคำถาม 16 ข้อเพื่ออ่านพลังความสัมพันธ์และเคมีของตัวเองในแบบ screenshot-worthy",
      en: "The first live game in the hub, built around 16 questions that read your relationship energy with a screenshot-worthy payoff.",
    },
    hook: {
      th: "โทนนุ่มหรู พาเล่นลื่น และจบด้วยผลลัพธ์ที่เหมือน social card ชิ้นหนึ่ง",
      en: "Soft-luxe, highly polished, and designed to end on a collectible social-card result.",
    },
    href: "/quiz",
    status: "live",
    questionCount: 16,
    accent: {
      from: "from-rose-200",
      via: "via-amber-100",
      to: "to-sky-100",
    },
  },
];
