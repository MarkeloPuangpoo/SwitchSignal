import type { Locale, LocalizedText } from "@/types/quiz";
import type { PoeticArchetype, PoeticArchetypeId, PoeticAxisKey, PoeticGameQuestion, PoeticSection, PoeticSectionId } from "@/types/poetic-game";

export const poeticAxisLabels: Record<PoeticAxisKey, LocalizedText> = {
  G: { th: "Glow", en: "Glow" },
  V: { th: "Veil", en: "Veil" },
  T: { th: "Tide", en: "Tide" },
  F: { th: "Flame", en: "Flame" },
  B: { th: "Bloom", en: "Bloom" },
};

export const poeticAxisDescriptions: Record<PoeticAxisKey, LocalizedText> = {
  G: { th: "แสงอุ่น ความเป็นบ้าน และความอ่อนโยนที่ไม่ต้องประกาศตัว", en: "Warmth, softness, and the feeling of being a quiet home." },
  V: { th: "ความลึก ความเงียบ และโลกข้างในที่ซ่อนหลายชั้น", en: "Depth, silence, and an inner world with many hidden layers." },
  T: { th: "การเชื่อมโยง ความผูกพัน และอารมณ์ที่ไหลถึงผู้คนจริงๆ", en: "Connection, attachment, and emotion that reaches others for real." },
  F: { th: "ไฟ ความกล้า ความคม และแรงผลักให้ชีวิตขยับต่อ", en: "Fire, courage, intensity, and the urge to move life forward." },
  B: { th: "การเยียวยา การเติบโต และการงอกใหม่หลังผ่านคืนยาว", en: "Healing, growth, and the slow act of blooming again." },
};

export const poeticSections: PoeticSection[] = [
  {
    id: "light",
    title: { th: "แสงและสี", en: "Light and Color" },
    intro: {
      th: "ก่อนจะเข้าใจหัวใจ ลองมองก่อนว่าข้างในนั้นเรืองแสงแบบไหน",
      en: "Before understanding your heart, look first at the kind of light it carries.",
    },
    bridge: {
      th: "บางครั้งตัวตนก็เริ่มจากสีที่เราเลือกมองโลก",
      en: "Sometimes identity begins with the colors we use to see the world.",
    },
    ambientLabel: { th: "ห้องแรกในใจ", en: "Room one" },
  },
  {
    id: "silence",
    title: { th: "ความเงียบและแผล", en: "Silence and Wounds" },
    intro: {
      th: "บางส่วนของเราไม่ได้พูดเสียงดัง แต่มันปั้นรูปหัวใจเราอยู่ทุกวัน",
      en: "Some parts of us do not speak loudly, yet they shape the heart every day.",
    },
    bridge: {
      th: "ในความเงียบ มีบางอย่างพูดกับเราเสมอ",
      en: "Inside silence, something is always speaking back to us.",
    },
    ambientLabel: { th: "ห้องที่สอง", en: "Room two" },
  },
  {
    id: "connection",
    title: { th: "ความรักและการเชื่อมโยง", en: "Love and Connection" },
    intro: {
      th: "หัวใจแต่ละดวงไม่ได้รักเหมือนกัน บางดวงเป็นบ้าน บางดวงเป็นคลื่น บางดวงเป็นไฟ",
      en: "Every heart loves differently. Some become a home, some a wave, some a flame.",
    },
    bridge: {
      th: "หัวใจไม่ได้แค่เต้น มันยื่นมือไปหาใครบางคนด้วย",
      en: "A heart does not only beat. It also reaches toward someone.",
    },
    ambientLabel: { th: "ห้องที่สาม", en: "Room three" },
  },
  {
    id: "becoming",
    title: { th: "การเติบโตและตัวตนที่ซ่อนอยู่", en: "Growth and Hidden Becoming" },
    intro: {
      th: "ภายใต้ทุกแผล ทุกความรัก และทุกคืนที่เงียบ ยังมีบางอย่างในตัวคุณกำลังงอก",
      en: "Under every wound, every love, and every quiet night, something in you is still growing.",
    },
    bridge: {
      th: "หลังผ่านคืนยาวนาน แสงบางอย่างจะค่อยๆ มีชื่อ",
      en: "After long nights, a certain light slowly learns its own name.",
    },
    ambientLabel: { th: "ห้องสุดท้าย", en: "Final room" },
  },
];

export const poeticAnswerMood: Record<Locale, string[]> = {
  th: ["ใกล้ฉันที่สุด", "คล้ายฉันในวันที่เงียบลง", "เป็นฉันอีกด้านหนึ่ง", "ไม่ใช่ทั้งหมด แต่มีบางส่วนของฉันอยู่ตรงนั้น"],
  en: ["Closest to me", "Me on a quieter day", "Another side of me", "Not entirely me, but a piece of me lives there"],
};

export const poeticQuestions: PoeticGameQuestion[] = [
  {
    id: 1,
    section: "light",
    prompt: { th: "ถ้าหัวใจของคุณมีแสงของตัวเอง แสงนั้นจะเป็นแบบไหน", en: "If your heart had its own light, what kind would it be?" },
    answers: [
      { id: "1a", label: { th: "แสงเทียนนิ่งๆ ที่อุ่นและไม่เร่งรีบ", en: "A still candle glow, warm and unhurried" }, score: { G: 2, B: 1 } },
      { id: "1b", label: { th: "แสงนีออนบนถนนหลังฝนตก สวย เศร้า และมีเรื่องเล่า", en: "Neon on rain-soaked streets, beautiful, sad, and full of story" }, score: { V: 2, T: 1 } },
      { id: "1c", label: { th: "แสงเช้าที่ค่อยๆ เปิดม่านให้โลกตื่น", en: "Morning light slowly opening the curtains for the world" }, score: { B: 2, G: 1 } },
      { id: "1d", label: { th: "แสงดาวไกลๆ ที่ไม่พูดมาก แต่ทำให้คนเงยหน้ามอง", en: "A distant star that says little yet makes people look up" }, score: { V: 2, F: 1 } },
    ],
  },
  {
    id: 2,
    section: "light",
    prompt: { th: "ถ้าช่วงชีวิตนี้มีสีเพียงสีเดียว สีของมันจะเป็น", en: "If this chapter of your life could be only one color, it would be" },
    answers: [
      { id: "2a", label: { th: "ครีมอุ่นๆ ที่เหมือนอ้อมกอดและความทรงจำ", en: "Warm cream, like an embrace and a memory" }, score: { G: 2, T: 1 } },
      { id: "2b", label: { th: "น้ำเงินเข้มที่นิ่ง ลึก และเก็บอะไรไว้มากกว่าที่เห็น", en: "Deep blue, still and carrying more than it shows" }, score: { V: 2, T: 1 } },
      { id: "2c", label: { th: "แดงไวน์ที่สุกงอม รุนแรง และมีบางอย่างอยากปะทุ", en: "Wine red, ripe, intense, and ready to erupt" }, score: { F: 2, B: 1 } },
      { id: "2d", label: { th: "เทาเงินที่เย็น เงียบ และสวยแบบไม่เรียกร้อง", en: "Silver gray, cool, quiet, and beautiful without asking to be seen" }, score: { V: 2, G: 1 } },
    ],
  },
  {
    id: 3,
    section: "light",
    prompt: { th: "ถ้าตัวตนของคุณเป็นฤดูกาลหนึ่ง มันจะเป็น", en: "If your identity were a season, it would be" },
    answers: [
      { id: "3a", label: { th: "ฤดูฝนที่เปียกชื้น อ่อนไหว และเต็มไปด้วยกลิ่นดิน", en: "Rainy season, damp, tender, and full of earth-scent" }, score: { T: 2, V: 1 } },
      { id: "3b", label: { th: "ฤดูหนาวที่เงียบ สงบ และชัดเจน", en: "Winter, quiet, calm, and sharply clear" }, score: { V: 2, G: 1 } },
      { id: "3c", label: { th: "ฤดูใบไม้ผลิที่กำลังเริ่มบาน แม้ยังไม่สมบูรณ์", en: "Spring, just beginning to bloom, even if not fully formed" }, score: { B: 2, F: 1 } },
      { id: "3d", label: { th: "ฤดูร้อนที่ตรงไปตรงมา สว่างแรง และไม่หลบสายตาใคร", en: "Summer, direct, bright, and unafraid of anyone’s gaze" }, score: { F: 2, G: 1 } },
    ],
  },
  {
    id: 4,
    section: "light",
    prompt: { th: "ห้องในฝันของคุณควรมีอะไรเป็นอย่างแรก", en: "The first thing your dream room should have is" },
    answers: [
      { id: "4a", label: { th: "หน้าต่างใหญ่ให้แสงและลมเข้ามาแตะทุกเช้า", en: "A wide window that lets light and wind in every morning" }, score: { G: 2, B: 1 } },
      { id: "4b", label: { th: "มุมเล็กๆ ที่โลกภายนอกเอื้อมมาไม่ถึง", en: "A small corner the outside world cannot fully reach" }, score: { V: 2, T: 1 } },
      { id: "4c", label: { th: "ของวางกระจัดกระจายที่เล่าเรื่องเจ้าของห้องได้เอง", en: "Scattered objects that tell the story of their owner" }, score: { T: 2, B: 1 } },
      { id: "4d", label: { th: "ผนังโล่งและพื้นที่ว่างมากพอให้ความคิดสะท้อนกลับมา", en: "Bare walls and enough space for thoughts to echo back" }, score: { V: 2, B: 1 } },
    ],
  },
  {
    id: 5,
    section: "silence",
    prompt: { th: "เวลาความเงียบเข้ามานั่งข้างๆ คุณรู้สึกว่า", en: "When silence sits beside you, it feels like" },
    answers: [
      { id: "5a", label: { th: "มันคือบ้านที่ไม่มีใครแย่งพื้นที่จากฉัน", en: "A home where no one takes space away from me" }, score: { V: 2, G: 1 } },
      { id: "5b", label: { th: "มันคือกระจกที่ทำให้เห็นตัวเองชัดเกินไป", en: "A mirror that shows me more clearly than I expected" }, score: { V: 2, T: 1 } },
      { id: "5c", label: { th: "มันคือคำถามที่ยังไม่มีภาษาอธิบาย", en: "A question that still has no language for itself" }, score: { T: 2, G: 1 } },
      { id: "5d", label: { th: "มันคือบาดแผลเก่าที่ยังสวยอยู่ในแสงบางมุม", en: "An old wound that still looks beautiful in certain light" }, score: { V: 2, B: 1 } },
    ],
  },
  {
    id: 6,
    section: "silence",
    prompt: { th: "ถ้าความเศร้าของคุณกลายเป็นงานศิลปะ มันจะเป็น", en: "If your sadness became a work of art, it would be" },
    answers: [
      { id: "6a", label: { th: "ภาพวาดสีหม่นที่มีรอยแปรงหนักเบาเหมือนหายใจ", en: "A muted painting with brushstrokes that breathe" }, score: { B: 2, G: 1 } },
      { id: "6b", label: { th: "บทกวีสั้นๆ ที่อ่านจบแล้วทิ้งอะไรไว้ในอก", en: "A short poem that leaves something in the chest" }, score: { F: 2, G: 1 } },
      { id: "6c", label: { th: "เพลงบรรเลงที่ไม่มีคำ แต่ทำให้คนฟังเงียบลง", en: "An instrumental piece that quiets everyone listening" }, score: { V: 2, T: 1 } },
      { id: "6d", label: { th: "รูปถ่ายเบลอๆ ที่ยิ่งไม่ชัด ยิ่งยากจะลืม", en: "A blurry photograph that becomes harder to forget the less clear it is" }, score: { V: 2, B: 1 } },
    ],
  },
  {
    id: 7,
    section: "silence",
    prompt: { th: "คุณมักเก็บอะไรไว้กับตัวเองมากที่สุด", en: "What do you most often keep to yourself?" },
    answers: [
      { id: "7a", label: { th: "ความฝันที่ยังไม่แน่ใจว่าโลกนี้จะรับไหวไหม", en: "Dreams I am not yet sure this world can hold" }, score: { B: 2, V: 1 } },
      { id: "7b", label: { th: "ความเจ็บที่เล่าออกไปก็ยังไม่หมดอยู่ดี", en: "Pain that would still remain even if I told the whole story" }, score: { V: 2, T: 1 } },
      { id: "7c", label: { th: "ความคิดแปลกๆ ที่ยังหาคนฟังด้วยภาษาเดียวกันไม่เจอ", en: "Strange thoughts that still have not found the right listener" }, score: { F: 2, V: 1 } },
      { id: "7d", label: { th: "ความรักที่เคยให้ไป โดยไม่เคยเรียกร้องให้ใครจดจำ", en: "Love I once gave without ever asking anyone to remember it" }, score: { T: 2, G: 1 } },
    ],
  },
  {
    id: 8,
    section: "silence",
    prompt: { th: "เวลาโดนเข้าใจผิด คุณมักเป็นแบบไหน", en: "When you are misunderstood, you usually" },
    answers: [
      { id: "8a", label: { th: "เงียบ แล้วปล่อยให้เวลาเป็นคนอธิบายแทน", en: "Go quiet and let time explain for me" }, score: { V: 2, B: 1 } },
      { id: "8b", label: { th: "เจ็บ แต่ยังรักษาหน้าไว้จนดูเหมือนไม่รู้สึก", en: "Hurt, but hold myself together until I look untouched" }, score: { V: 2, F: 1 } },
      { id: "8c", label: { th: "อยากพูดให้หมดใจ แต่คำกลับติดอยู่ตรงคอ", en: "Want to say everything, but the words stay in my throat" }, score: { T: 2, V: 1 } },
      { id: "8d", label: { th: "เอาความรู้สึกนั้นไปแปรเป็นบางอย่างที่แข็งแรงกว่าเดิม", en: "Turn that feeling into something stronger than before" }, score: { F: 2, B: 1 } },
    ],
  },
  {
    id: 9,
    section: "connection",
    prompt: { th: "เวลาเจอใครใหม่ๆ คุณมักเผยด้านไหนของตัวเองก่อน", en: "When you meet someone new, which side of yourself appears first?" },
    answers: [
      { id: "9a", label: { th: "ด้านอ่อนโยนที่ทำให้คนสบายใจ", en: "The gentle side that makes people feel at ease" }, score: { G: 2, T: 1 } },
      { id: "9b", label: { th: "ด้านลึกลับที่เหมือนยังมีอีกหลายชั้น", en: "The mysterious side that suggests more layers underneath" }, score: { V: 2, F: 1 } },
      { id: "9c", label: { th: "ด้านขี้เล่นที่ทำให้บรรยากาศเบาขึ้น", en: "The playful side that lightens the room" }, score: { F: 2, G: 1 } },
      { id: "9d", label: { th: "ด้านนิ่งๆ ที่เหมือนประตูยังไม่ได้เปิดทั้งหมด", en: "The composed side that still keeps the door only half open" }, score: { V: 2, G: 1 } },
    ],
  },
  {
    id: 10,
    section: "connection",
    prompt: { th: "เวลาคุณหลงรักบางอย่าง มันมักเริ่มจาก", en: "When you fall in love with something, it usually begins with" },
    answers: [
      { id: "10a", label: { th: "รายละเอียดเล็กๆ ที่คนอื่นอาจมองข้าม", en: "Small details other people might overlook" }, score: { G: 2, T: 1 } },
      { id: "10b", label: { th: "ความรู้สึกบางอย่างที่มาโดยไม่ขอเหตุผล", en: "A feeling that arrives without asking for reason" }, score: { V: 2, T: 1 } },
      { id: "10c", label: { th: "การได้คุยลึกพอจนรู้ว่าอีกฝ่ายมีโลกข้างในจริง", en: "Conversation deep enough to reveal a real inner world" }, score: { T: 2, B: 1 } },
      { id: "10d", label: { th: "แรงดึงดูดฉับพลันแบบฟ้าผ่ากลางอก", en: "A sudden pull like lightning through the chest" }, score: { F: 2, T: 1 } },
    ],
  },
  {
    id: 11,
    section: "connection",
    prompt: { th: "ถ้ามีใครสักคนมองทะลุเข้ามาเห็นข้างในจริงๆ คุณอยากให้เขาเห็นอะไร", en: "If someone could truly see inside you, what would you want them to notice?" },
    answers: [
      { id: "11a", label: { th: "ความเปราะบางที่ยังพยายามสวยงามอยู่ทุกวัน", en: "Vulnerability still trying to remain beautiful every day" }, score: { V: 2, B: 1 } },
      { id: "11b", label: { th: "ความมุ่งมั่นเงียบๆ ที่ไม่ชอบประกาศตัว", en: "A quiet determination that never needs an announcement" }, score: { F: 2, G: 1 } },
      { id: "11c", label: { th: "ความอ่อนโยนที่ไม่ค่อยถูกมองเห็นตั้งแต่แรก", en: "Tenderness that people do not always see at first" }, score: { G: 2, T: 1 } },
      { id: "11d", label: { th: "ไฟบางอย่างที่ถึงจะเงียบ แต่ไม่เคยดับเลย", en: "A certain fire that stays alive even in silence" }, score: { F: 2, B: 1 } },
    ],
  },
  {
    id: 12,
    section: "connection",
    prompt: { th: "ในความรัก ลึกๆ แล้วคุณเป็นคนแบบไหน", en: "Deep down, what kind of person are you in love?" },
    answers: [
      { id: "12a", label: { th: "คนที่จำรายละเอียดได้แม่นกว่าที่ตัวเองพูดออกมา", en: "Someone who remembers more details than they ever say aloud" }, score: { G: 2, T: 1 } },
      { id: "12b", label: { th: "คนที่รักแบบค่อยๆ ซึมลึกเหมือนน้ำซึมลงดิน", en: "Someone who loves slowly and deeply, like water entering earth" }, score: { T: 2, V: 1 } },
      { id: "12c", label: { th: "คนที่ถ้ามั่นใจแล้ว จะทุ่มทั้งใจโดยไม่ครึ่งกลาง", en: "Someone who gives fully once they are sure" }, score: { F: 2, T: 1 } },
      { id: "12d", label: { th: "คนที่อยากถูกรักแบบถูกเข้าใจจริง ไม่ใช่แค่ถูกเลือก", en: "Someone who wants to be understood for real, not merely chosen" }, score: { T: 2, V: 1 } },
    ],
  },
  {
    id: 13,
    section: "becoming",
    prompt: { th: "คุณรู้สึกใกล้ตัวเองที่สุดตอนไหน", en: "When do you feel closest to yourself?" },
    answers: [
      { id: "13a", label: { th: "ตอนอยู่คนเดียวโดยไม่ต้องแสดงอะไรให้ใครเห็น", en: "When I am alone and do not have to perform for anyone" }, score: { V: 2, G: 1 } },
      { id: "13b", label: { th: "ตอนกำลังสร้างบางอย่างจากความคิดข้างใน", en: "When I am building something from inside my own thoughts" }, score: { B: 2, F: 1 } },
      { id: "13c", label: { th: "ตอนคุยลึกๆ กับใครสักคนจนเวลาเริ่มหายไป", en: "When deep conversation makes time disappear" }, score: { T: 2, G: 1 } },
      { id: "13d", label: { th: "ตอนเดินทางไปเรื่อยๆ โดยยังไม่รู้ปลายทางทั้งหมด", en: "When I keep moving without knowing the full destination yet" }, score: { F: 2, B: 1 } },
    ],
  },
  {
    id: 14,
    section: "becoming",
    prompt: { th: "สิ่งที่ทำให้คุณรู้สึกว่า “ฉันยังมีชีวิตอยู่จริงๆ” คือ", en: "What makes you feel truly alive?" },
    answers: [
      { id: "14a", label: { th: "การได้รู้สึกลึก โดยไม่รีบปิดหัวใจตัวเอง", en: "Feeling deeply without rushing to shut my heart down" }, score: { T: 2, V: 1 } },
      { id: "14b", label: { th: "การได้สร้างสิ่งใหม่จากสิ่งที่เคยแตกสลาย", en: "Making something new from what once broke apart" }, score: { B: 2, F: 1 } },
      { id: "14c", label: { th: "การได้เชื่อมต่อกับใครบางคนอย่างแท้จริง", en: "Connecting with someone in a way that feels real" }, score: { T: 2, G: 1 } },
      { id: "14d", label: { th: "การได้หลุดออกจากกรอบเดิมแล้วเห็นฟ้าอีกแบบ", en: "Breaking from an old frame and seeing a different sky" }, score: { F: 2, B: 1 } },
    ],
  },
  {
    id: 15,
    section: "becoming",
    prompt: { th: "ถ้าหัวใจของคุณเป็นสถานที่หนึ่ง มันจะเป็น", en: "If your heart were a place, it would be" },
    answers: [
      { id: "15a", label: { th: "ห้องสมุดเงียบๆ ที่เต็มไปด้วยรอยขีดเขียนข้างหน้าหนังสือ", en: "A quiet library filled with notes in the margins" }, score: { V: 2, G: 1 } },
      { id: "15b", label: { th: "แกลเลอรีที่มีแสงเงา พื้นที่ว่าง และสิ่งที่พูดด้วยความเงียบ", en: "A gallery of shadow, light, and things that speak through silence" }, score: { B: 2, V: 1 } },
      { id: "15c", label: { th: "สวนรกร้างที่แม้ไม่มีใครดูแล ดอกไม้ก็ยังหาทางบาน", en: "An overgrown garden where flowers still find a way to bloom" }, score: { B: 2, G: 1 } },
      { id: "15d", label: { th: "ดาดฟ้าตึกตอนตีสอง มีลม เมือง และคำถามที่ยังไม่จบ", en: "A rooftop at 2 a.m. with wind, city lights, and unfinished questions" }, score: { V: 2, F: 1 } },
    ],
  },
  {
    id: 16,
    section: "becoming",
    prompt: { th: "ถ้าประกายข้างในตัวคุณต้องมีชื่อหนึ่งชื่อ คุณคิดว่ามันคือ", en: "If the spark inside you had to choose a name, what would it be?" },
    answers: [
      { id: "16a", label: { th: "ความอ่อนโยนที่ไม่อ่อนแอ", en: "Tenderness that is not weakness" }, score: { G: 2, F: 1 } },
      { id: "16b", label: { th: "ความลึกลับที่ยังอยากถูกรู้จักจริงๆ", en: "A mystery that still wants to be truly known" }, score: { V: 2, T: 1 } },
      { id: "16c", label: { th: "ความกล้าที่ค่อยๆ เติบโตจากรอยแผล", en: "Courage slowly growing out of old wounds" }, score: { B: 2, F: 1 } },
      { id: "16d", label: { th: "ความงามของคนที่รอดมาได้ และยังไม่หยุดบาน", en: "The beauty of someone who survived and kept blooming" }, score: { B: 2, G: 1 } },
    ],
  },
];

export const poeticArchetypes: Record<PoeticArchetypeId, PoeticArchetype> = {
  "quiet-flame": {
    id: "quiet-flame",
    name: { th: "The Quiet Flame", en: "The Quiet Flame" },
    tagline: { th: "ไฟที่ไม่จำเป็นต้องส่งเสียงดัง ก็ทำให้ทั้งห้องอุ่นขึ้นได้", en: "A fire that does not need to shout in order to warm the whole room." },
    summary: {
      th: "ข้างในมีไฟ แต่ไม่ได้เผาผลาญทุกอย่างเล่นๆ คุณเข้มพอจะอยู่กับความจริง และอ่อนโยนพอจะไม่ใช้ความคมของตัวเองทำร้ายใครง่ายๆ",
      en: "There is fire in you, but it does not burn for spectacle. You are strong enough to stand beside truth and gentle enough not to use your sharpness carelessly.",
    },
    light: { th: "อบอุ่นแต่ชัด มีแรงสว่างที่ไม่ต้องอธิบายตัวเองมาก", en: "Warm yet distinct, carrying a clarity that does not need over-explaining." },
    silence: { th: "ไม่ใช่การปิดตัว แต่คือการเก็บเปลวไฟไว้ให้ถูกเวลา", en: "Not a shutdown, but a way of keeping the flame for the right moment." },
    love: { th: "รักผ่านการปกป้อง การอยู่จริง การไม่ถอยเมื่อมันสำคัญ", en: "You love through protection, staying present, and not backing away when it matters." },
    misunderstood: { th: "หลายคนคิดว่าแข็ง ทั้งที่จริงรู้สึกลึกกว่าที่แสดง", en: "People often call you hard, when the truth is that you feel more deeply than you show." },
    becoming: { th: "การยอมให้ความอ่อนโยนออกมานั่งข้างไฟของตัวเองโดยไม่อาย", en: "Letting tenderness sit beside your fire without embarrassment." },
    accent: { from: "from-amber-200", via: "via-rose-200", to: "to-orange-100", glow: "shadow-[0_30px_80px_rgba(251,146,60,0.24)]" },
  },
  "midnight-bloom": {
    id: "midnight-bloom",
    name: { th: "The Midnight Bloom", en: "The Midnight Bloom" },
    tagline: { th: "ดอกไม้ที่เลือกบานในความมืด ไม่ได้กลัวแสง แค่รู้จักเวลาของตัวเอง", en: "A flower that blooms in the dark does not fear the light. It simply knows its own timing." },
    summary: {
      th: "คุณเติบโตในพื้นที่เงียบๆ โลกภายในลึก ละเอียด และค่อยๆ ผลิความหมายออกมาเมื่อเจออากาศที่ใช่",
      en: "You grow in quiet places. Your inner world is deep, detailed, and slowly reveals meaning when the air around it feels right.",
    },
    light: { th: "ไม่สว่างจ้า แต่มีแรงดึงดูดแบบที่คนอยากหยุดมอง", en: "Not glaringly bright, but magnetic enough to make people pause." },
    silence: { th: "คือดินดี ไม่ใช่คุก มันทำให้บางอย่างในตัวคุณมีราก", en: "It is fertile soil, not a prison. It helps parts of you grow roots." },
    love: { th: "รักแบบค่อยๆ เปิดประตู ไม่รีบ แต่จริง", en: "You love by opening the door slowly. Never rushed, always real." },
    misunderstood: { th: "คนมักคิดว่าอ่านยากหรือไกลเกินเอื้อม ทั้งที่จริงแค่ต้องการพื้นที่ปลอดภัยพอ", en: "People read you as distant or difficult, when really you just need enough safety to unfold." },
    becoming: { th: "ความกล้าที่จะบานต่อหน้าสายตาคนอื่น โดยไม่ลดทอนความลึกของตัวเอง", en: "The courage to bloom in front of others without flattening your depth." },
    accent: { from: "from-indigo-200", via: "via-fuchsia-100", to: "to-slate-100", glow: "shadow-[0_30px_80px_rgba(99,102,241,0.22)]" },
  },
  "tender-archive": {
    id: "tender-archive",
    name: { th: "The Tender Archive", en: "The Tender Archive" },
    tagline: { th: "คลังความทรงจำที่อ่อนโยน จดจำทุกสิ่งที่คนอื่นเผลอลืม", en: "A tender archive that remembers what everyone else accidentally leaves behind." },
    summary: {
      th: "คุณเก็บโลกไว้ในรายละเอียด น้ำเสียง แสงปลายบ่าย และคำธรรมดาบางคำ ล้วนถูกวางไว้ในใจอย่างประณีต",
      en: "You keep the world through detail. Tone, late-afternoon light, and ordinary words are all stored in you with exquisite care.",
    },
    light: { th: "นุ่ม ละเมียด และมีอุณหภูมิของความเข้าใจ", en: "Soft, delicate, and full of understanding." },
    silence: { th: "เต็มไปด้วยห้องเล็กๆ ของความทรงจำและความรู้สึกที่ยังมีชีวิต", en: "Filled with small rooms where memory and feeling remain alive." },
    love: { th: "รักผ่านการจำ การฟัง และการอยู่กับสิ่งเล็กๆ ที่มีความหมายมากกว่าที่เห็น", en: "You love through remembering, listening, and treasuring the small things that hold larger meaning." },
    misunderstood: { th: "ความเงียบของคุณมักถูกมองว่าเฉยชา ทั้งที่จริงมันเต็มไปด้วยความใส่ใจ", en: "Your quiet is often mistaken for detachment, though it is full of care." },
    becoming: { th: "การพูดความต้องการของตัวเองให้ดังพอ โดยไม่ต้องสูญเสียความละเมียด", en: "Speaking your needs clearly without losing your gentleness." },
    accent: { from: "from-stone-200", via: "via-rose-100", to: "to-amber-50", glow: "shadow-[0_30px_80px_rgba(251,191,36,0.14)]" },
  },
  "velvet-storm": {
    id: "velvet-storm",
    name: { th: "The Velvet Storm", en: "The Velvet Storm" },
    tagline: { th: "พายุที่ห่มด้วยกำมะหยี่ ทั้งแรง ทั้งสวย และยากจะมองข้าม", en: "A storm wrapped in velvet, intense, beautiful, and impossible to ignore." },
    summary: {
      th: "คุณรู้สึกแรงและรักแรง มีเสน่ห์ของความเข้ม ความกล้า และอารมณ์ที่เคลื่อนไหวเหมือนฟ้าคะนองในคืนหรูหรา",
      en: "You feel intensely and love intensely. There is beauty in your force, bravery, and emotion, like thunder moving through a glamorous night.",
    },
    light: { th: "สว่างแบบมีแรงดัน ทำให้บรรยากาศรอบตัวเปลี่ยนได้จริง", en: "Bright with pressure behind it, able to change the air in a room." },
    silence: { th: "ไม่เคยว่างเปล่า มันเต็มไปด้วยกระแสไฟก่อนอะไรบางอย่างจะเกิดขึ้น", en: "Never empty. It is charged with electricity before something begins." },
    love: { th: "รักแบบเต็มตัว มีแรงโน้มถ่วง และพร้อมเปลี่ยนแปลงชีวิตเพราะความรู้สึกจริง", en: "You love fully, with gravity and a willingness to let feeling change your life." },
    misunderstood: { th: "คนชอบคิดว่าคุณมากเกินไป ทั้งที่จริงคุณแค่ไม่รู้จักการรักแบบครึ่งใจ", en: "People say you are too much when really you simply do not love halfway." },
    becoming: { th: "การทำให้ความเข้มของตัวเองกลายเป็นศิลปะ แทนที่จะกลายเป็นบาดแผล", en: "Turning your intensity into art instead of injury." },
    accent: { from: "from-rose-300", via: "via-fuchsia-200", to: "to-violet-100", glow: "shadow-[0_30px_80px_rgba(236,72,153,0.22)]" },
  },
  "soft-orbit": {
    id: "soft-orbit",
    name: { th: "The Soft Orbit", en: "The Soft Orbit" },
    tagline: { th: "แรงโน้มถ่วงที่อ่อนโยน ดึงคนเข้ามาโดยไม่ต้องตะโกน", en: "A gentle gravity that draws people close without ever shouting." },
    summary: {
      th: "คุณทำให้คนอื่นรู้สึกปลอดภัยโดยธรรมชาติ ไม่ใช่เพราะพูดเก่งเสมอไป แต่เพราะอารมณ์ของคุณมีที่ว่างให้คนอื่นหายใจ",
      en: "You make people feel safe almost by instinct. Not always by saying the perfect thing, but by creating enough room for others to breathe.",
    },
    light: { th: "อุ่นและโอบรับ เหมือนแสงในบ้านที่เปิดรอใครบางคนกลับมา", en: "Warm and welcoming, like a house left lit for someone coming home." },
    silence: { th: "ไม่กัดกิน มันคอยฟัง คอยรองรับ คอยประคอง", en: "It does not consume. It listens, supports, and steadies." },
    love: { th: "รักแบบเป็นบ้าน เป็นวงโคจร เป็นที่กลับมาได้แม้วันที่โลกยุ่งเหยิง", en: "You love like a home, an orbit, a place one can return to when the world gets loud." },
    misunderstood: { th: "ความนุ่มของคุณมักถูกอ่านว่าอ่อนแอ ทั้งที่จริงคุณมีแรงยึดเหนี่ยวมหาศาล", en: "Your softness is often read as weakness, though your ability to hold others is immense." },
    becoming: { th: "การตั้งขอบเขตโดยไม่รู้สึกผิด เพื่อให้ความอ่อนโยนของตัวเองไม่ถูกใช้จนหมด", en: "Setting boundaries without guilt so your gentleness does not get used up." },
    accent: { from: "from-amber-100", via: "via-rose-100", to: "to-sky-100", glow: "shadow-[0_30px_80px_rgba(251,191,36,0.18)]" },
  },
  "golden-wound": {
    id: "golden-wound",
    name: { th: "The Golden Wound", en: "The Golden Wound" },
    tagline: { th: "บาดแผลที่ไม่เพียงรอดมาได้ แต่มันยังสะท้อนแสงเป็นทอง", en: "A wound that did not merely survive. It learned to catch the light like gold." },
    summary: {
      th: "ความเจ็บในตัวคุณไม่ได้หายไปเฉยๆ แต่มันถูกหลอมเป็นรสนิยม มุมมอง และความเข้าใจที่ลึกกว่าที่คนจำนวนมากจะพูดออกมาได้",
      en: "Your pain did not simply disappear. It was forged into taste, perspective, and a depth of understanding many people never learn to name.",
    },
    light: { th: "งามแบบมีรอยต่อ ไม่สมบูรณ์ แต่จริงจนแตะใจ", en: "Beautiful through its seams, imperfect yet deeply true." },
    silence: { th: "เต็มไปด้วยประวัติศาสตร์ภายใน ที่ยังส่งเสียงแม้วันที่คุณไม่ได้เล่า", en: "Full of inner history that still speaks even when you do not." },
    love: { th: "อยากถูกรักแบบเห็นทั้งแสงและรอย ไม่ใช่เลือกมองแค่ด้านที่สวย", en: "You want a love that sees both the glow and the fracture, not only the polished parts." },
    misunderstood: { th: "หลายคนเห็นความเศร้า แต่ไม่เห็นพลังที่คุณใช้ประคองตัวเองมาตลอด", en: "Many people see your sadness without noticing the strength it took to carry yourself this far." },
    becoming: { th: "การยอมให้ตัวเองเบาขึ้น โดยไม่คิดว่าต้องเก็บทุกแผลไว้เพื่อพิสูจน์ความจริง", en: "Allowing yourself to become lighter without feeling the need to keep every wound as proof." },
    accent: { from: "from-amber-200", via: "via-yellow-100", to: "to-stone-100", glow: "shadow-[0_30px_80px_rgba(245,158,11,0.2)]" },
  },
  "hidden-spring": {
    id: "hidden-spring",
    name: { th: "The Hidden Spring", en: "The Hidden Spring" },
    tagline: { th: "ฤดูใบไม้ผลิที่ซ่อนอยู่ในใจคุณ ไม่ได้อ่อน แต่กำลังงอกอย่างเงียบงาม", en: "The spring hidden in your heart is not weak. It is simply growing in quiet grace." },
    summary: {
      th: "คุณมีพลังฟื้นตัวสูง แม้เคยหม่น เคยพัง หรือเคยหลง แต่ข้างในยังมีแรงของการงอกใหม่เสมอ",
      en: "You carry a remarkable instinct for renewal. Even when things have felt dim, broken, or lost, something in you keeps choosing to grow.",
    },
    light: { th: "สดขึ้นเรื่อยๆ เหมือนเช้าที่ค่อยๆ เปิดตัวโดยไม่แย่งสายตาใคร", en: "Increasingly bright, like morning arriving without demanding attention." },
    silence: { th: "คือที่พักของเมล็ด ไม่ใช่จุดจบของการเติบโต", en: "It is where seeds rest, not where growth ends." },
    love: { th: "รักผ่านการบำรุง การอยู่เคียง และการทำให้คนข้างๆ กลับมาหายใจเต็มปอดได้อีกครั้ง", en: "You love through nourishment, companionship, and helping people breathe fully again." },
    misunderstood: { th: "คนอาจมองว่าคุณนุ่มหรือธรรมดาเกินไป ทั้งที่จริงคุณมีพลังชีวิตที่ลึกและยืนยาว", en: "People may mistake you for being merely soft, when your life-force is actually deep and enduring." },
    becoming: { th: "การยอมรับว่าตัวเองก็สมควรได้รับแสง ไม่ใช่มีหน้าที่เป็นแสงให้คนอื่นอย่างเดียว", en: "Accepting that you also deserve light, not just the task of becoming it for others." },
    accent: { from: "from-lime-100", via: "via-emerald-100", to: "to-sky-100", glow: "shadow-[0_30px_80px_rgba(52,211,153,0.18)]" },
  },
  "unfinished-light": {
    id: "unfinished-light",
    name: { th: "The Unfinished Light", en: "The Unfinished Light" },
    tagline: { th: "แสงที่ยังไม่เสร็จสมบูรณ์ และนั่นแหละคือความงามของมัน", en: "A light still unfinished, and that is exactly where its beauty lives." },
    summary: {
      th: "คุณยังเปลี่ยน ยังขยับ และยังสร้างตัวเองอยู่ตลอด ความเป็นระหว่างทางของคุณไม่ได้แปลว่าหลง แต่มันแปลว่ายังไม่หยุดโต",
      en: "You are still shifting, building, and becoming. Your in-between state does not mean you are lost. It means you have not stopped growing.",
    },
    light: { th: "สด คม และมีแรงของอนาคตอยู่ในนั้น", en: "Fresh, sharp, and full of future tension." },
    silence: { th: "คือห้องทดลองที่คุณเอาชีวิตมาลองประกอบใหม่ซ้ำๆ", en: "It is a laboratory where you keep assembling your life in new ways." },
    love: { th: "รักผ่านความเป็นไปได้ ผ่านการชวนกันเติบโต ผ่านคำว่าเรายังไปได้อีก", en: "You love through possibility, shared growth, and the feeling that there is still more ahead." },
    misunderstood: { th: "บางคนคิดว่าคุณยังไม่นิ่งพอ ทั้งที่จริงคุณกำลังกลายเป็นบางอย่างที่มีชีวิตมาก", en: "Some people think you are not settled enough, when really you are becoming something very alive." },
    becoming: { th: "การให้รากกับตัวเองมากขึ้น เพื่อที่แสงจะเดินทางได้ไกลโดยไม่ต้องรีบเผา", en: "Giving yourself more roots so your light can travel farther without burning out." },
    accent: { from: "from-sky-200", via: "via-violet-100", to: "to-amber-50", glow: "shadow-[0_30px_80px_rgba(96,165,250,0.2)]" },
  },
};

export const poeticSectionHeadings: Record<PoeticSectionId, LocalizedText> = {
  light: { th: "แสงหลักของคุณ", en: "Your central light" },
  silence: { th: "ความเงียบของคุณ", en: "Your silence" },
  connection: { th: "วิธีที่คุณรัก", en: "How you connect" },
  becoming: { th: "ประกายที่กำลังเติบโต", en: "What is growing in you" },
};

export const poeticSectionInsightCopy: Record<PoeticSectionId, Record<PoeticAxisKey, LocalizedText>> = {
  light: {
    G: { th: "อบอุ่น นุ่ม และทำให้คนอื่นรู้สึกว่ามีบ้านอยู่ใกล้ๆ", en: "Warm, soft, and quietly home-like to the people around you." },
    V: { th: "ลึก เงียบ และมีแรงดึงดูดแบบไม่ต้องเรียกร้องสายตา", en: "Deep, quiet, and magnetic without ever asking for attention." },
    T: { th: "ชุ่มอารมณ์ เหมือนแสงที่สะท้อนผ่านน้ำและความทรงจำ", en: "Emotion-soaked, like light reflected through water and memory." },
    F: { th: "คม ชัด และมีแรงสว่างที่ทำให้บรรยากาศเปลี่ยนได้จริง", en: "Sharp, bright, and able to shift the atmosphere around you." },
    B: { th: "อ่อนโยนและกำลังผลิ เหมือนเช้าที่ค่อยๆ เปิดโลกขึ้นใหม่", en: "Tender and emerging, like morning slowly opening the world." },
  },
  silence: {
    G: { th: "ความเงียบของคุณประคอง มากกว่ากัดกิน มันทำให้ใจได้พัก", en: "Your silence holds rather than harms. It gives the heart somewhere to rest." },
    V: { th: "ความเงียบคือถ้ำลึกที่เก็บเรื่องเล่าของคุณไว้อย่างสง่างาม", en: "Your silence is a deep chamber that keeps your story with grace." },
    T: { th: "ความเงียบของคุณยังสั่นไหวด้วยความรู้สึก มันไม่เคยว่างเปล่า", en: "Your silence still trembles with feeling. It is never empty." },
    F: { th: "ความเงียบของคุณเก็บพลังไว้เหมือนฟ้าก่อนพายุจะเปิดตัว", en: "Your silence stores force like a sky moments before a storm." },
    B: { th: "ความเงียบของคุณเป็นดินดี ที่ทำให้แผลค่อยๆ กลายเป็นการเติบโต", en: "Your silence is fertile soil, slowly turning old wounds into growth." },
  },
  connection: {
    G: { th: "คุณเชื่อมโยงผ่านความนุ่มนวล การจำรายละเอียด และการอยู่ตรงนั้นจริงๆ", en: "You connect through gentleness, remembered details, and true presence." },
    V: { th: "คุณเชื่อมผ่านการเปิดโลกข้างในทีละชั้น เมื่อรู้สึกว่าปลอดภัยพอ", en: "You connect by revealing your inner world layer by layer once safety is real." },
    T: { th: "คุณรักแบบซึมลึก ให้ความรู้สึกมีน้ำหนักและไม่ชอบสิ่งฉาบบาง", en: "You love deeply, giving emotion real weight and resisting anything shallow." },
    F: { th: "คุณเชื่อมโยงด้วยแรงดึงดูด ความชัด และพลังที่ไม่รักแบบครึ่งใจ", en: "You connect through magnetism, clarity, and a refusal to love halfway." },
    B: { th: "คุณรักผ่านการบำรุง การพากันเติบโต และการทำให้กันหายใจได้อีกครั้ง", en: "You love through nourishment, mutual growth, and helping each other breathe again." },
  },
  becoming: {
    G: { th: "ข้างในคุณกำลังเติบโตไปสู่ความอ่อนโยนที่มั่นคงและไม่ยอมทรยศหัวใจตัวเอง", en: "You are becoming a steadier tenderness that does not betray its own heart." },
    V: { th: "ประกายที่งอกอยู่คือความลึกที่พร้อมจะมีชื่อ โดยไม่ต้องลดทอนตัวเอง", en: "What is growing is a depth finally ready to have a name without shrinking itself." },
    T: { th: "คุณกำลังกลายเป็นคนที่เชื่อมโยงได้จริงขึ้น โดยไม่ต้องสูญเสียความเปราะบาง", en: "You are becoming someone who can connect more fully without losing vulnerability." },
    F: { th: "ประกายของคุณกำลังเปลี่ยนจากแรงปะทุ เป็นพลังที่เลือกทิศทางของตัวเองได้", en: "Your spark is evolving from raw intensity into force with chosen direction." },
    B: { th: "คุณกำลังงอกใหม่อย่างชัดเจน เหมือนชีวิตเริ่มเรียกชื่อเวอร์ชันต่อไปของคุณ", en: "You are very clearly blooming into the next version of yourself." },
  },
};

export const poeticArchetypeByAxes: Record<PoeticAxisKey, Partial<Record<PoeticAxisKey, PoeticArchetypeId>>> = {
  G: { V: "tender-archive", T: "soft-orbit", B: "hidden-spring", F: "hidden-spring" },
  V: { T: "golden-wound", B: "midnight-bloom", G: "midnight-bloom", F: "midnight-bloom" },
  T: { F: "velvet-storm", G: "soft-orbit", V: "soft-orbit", B: "soft-orbit" },
  F: { G: "quiet-flame", T: "velvet-storm", B: "unfinished-light", V: "unfinished-light" },
  B: { G: "hidden-spring", V: "midnight-bloom", F: "unfinished-light", T: "unfinished-light" },
};
