import type { SchoolArchetype, SchoolArchetypeId, SchoolGameQuestion } from "@/types/school-game";

const defaultScores = {
  a: { S: 2 },
  b: { S: 1, E: 1 },
  c: { E: 1 },
  d: { E: 2 },
} as const;

export const schoolGameQuestions: SchoolGameQuestion[] = [
  {
    id: 1,
    prompt: {
      th: "เข้าโรงเรียนแล้วสิ่งแรกที่ทำคือ",
      en: "When you get to school, the first thing you do is",
    },
    answers: [
      { id: "1a", label: { th: "เช็กตารางเรียนและงานที่ต้องส่ง", en: "Check your class schedule and any assignments due" }, score: defaultScores.a },
      { id: "1b", label: { th: "ทักเพื่อนก่อนแล้วค่อยดูว่าเรียนอะไร", en: "Greet your friends first, then figure out the day" }, score: defaultScores.b },
      { id: "1c", label: { th: "เดินชิลๆ ขอแค่ทันเข้าแถวก็พอ", en: "Walk in casually as long as you make it on time" }, score: defaultScores.c },
      { id: "1d", label: { th: "เข้าประตูมาก็เหมือนตัวละครเปิดตัวในซีรีส์", en: "Walk in like your intro scene just started" }, score: defaultScores.d },
    ],
  },
  {
    id: 2,
    prompt: { th: "ถ้าครูบอกมีควิซเก็บคะแนนแบบไม่บอกล่วงหน้า", en: "If a teacher suddenly announces a graded pop quiz" },
    answers: [
      { id: "2a", label: { th: "ตั้งสติแล้วทำ เท่าที่รู้ก็ใส่ให้สุด", en: "Lock in and do your best with what you know" }, score: defaultScores.a },
      { id: "2b", label: { th: "แอบถามเพื่อนเบาๆ ว่าออกเรื่องไหน", en: "Quietly ask a friend what topic it might be" }, score: defaultScores.b },
      { id: "2c", label: { th: "ทำบ้างเดาบ้าง เอาฟีลไว้ก่อน", en: "Answer some, guess some, trust the vibe" }, score: defaultScores.c },
      { id: "2d", label: { th: "ทำหน้าเหมือนโลกไม่อาจแตะต้องข้าได้", en: "Keep a face like the universe cannot faze you" }, score: defaultScores.d },
    ],
  },
  {
    id: 3,
    prompt: { th: "เวลาพกของไปโรงเรียน กระเป๋าคุณมักมีอะไร", en: "What is usually inside your school bag?" },
    answers: [
      { id: "3a", label: { th: "หนังสือ สมุด ปากกาครบ", en: "Books, notebooks, and pens all organized" }, score: defaultScores.a },
      { id: "3b", label: { th: "ของจำเป็นครบ แต่มีของจุกจิกส่วนตัวเยอะ", en: "Essentials, plus a lot of personal extras" }, score: defaultScores.b },
      { id: "3c", label: { th: "มีแค่พอเอาตัวรอด", en: "Just enough to survive the day" }, score: defaultScores.c },
      { id: "3d", label: { th: "ของในกระเป๋ามีออร่า “อย่ามายุ่งกับฉัน”", en: "Everything in there says do not touch my stuff" }, score: defaultScores.d },
    ],
  },
  {
    id: 4,
    prompt: { th: "เวลาครูให้ทำงานกลุ่ม คุณมักเป็นคนแบบไหน", en: "When a teacher assigns group work, you are usually the one who" },
    answers: [
      { id: "4a", label: { th: "วางแผน แบ่งงาน เช็กเดดไลน์", en: "Plans it out, splits tasks, and tracks the deadline" }, score: { S: 2, E: 0 } },
      { id: "4b", label: { th: "ช่วยงานจริง แต่ก็ชวนคุยไปด้วย", en: "Actually helps, while keeping the mood fun" }, score: { S: 1, E: 1 } },
      { id: "4c", label: { th: "ทำตอนใกล้ส่ง แต่สุดท้ายก็ช่วย", en: "Shows up close to deadline, but still contributes" }, score: { E: 1 } },
      { id: "4d", label: { th: "ไม่ค่อยพูดเยอะ แต่ถ้าลงมือคือมีซีน", en: "Does not say much, but when you act, everyone notices" }, score: { S: 1, E: 2 } },
    ],
  },
  {
    id: 5,
    prompt: { th: "ถ้าเห็นเพื่อนโดนแซวแรงๆ", en: "If you see a friend getting teased too hard" },
    answers: [
      { id: "5a", label: { th: "เข้าไปช่วยเบรกสถานการณ์", en: "Step in and calm the situation down" }, score: { S: 2 } },
      { id: "5b", label: { th: "เปลี่ยนเรื่องให้บรรยากาศเบาลง", en: "Shift the conversation so the room softens" }, score: { S: 1, E: 1 } },
      { id: "5c", label: { th: "ดูก่อนว่ามันเล่นกันหรือเริ่มแรงจริง", en: "Watch first to see if it is joking or actually crossing a line" }, score: { E: 1 } },
      { id: "5d", label: { th: "แค่มองก็ทำให้คนเงียบได้แล้ว", en: "One look from you is enough to end it" }, score: { S: 1, E: 2 } },
    ],
  },
  {
    id: 6,
    prompt: { th: "สไตล์การนั่งในห้องเรียนของคุณ", en: "Your classroom seating style is usually" },
    answers: [
      { id: "6a", label: { th: "หน้าๆ หรือจุดที่เห็นกระดานชัด", en: "Near the front where you can see everything clearly" }, score: defaultScores.a },
      { id: "6b", label: { th: "กลางห้อง กำลังดี", en: "Somewhere in the middle, balanced and practical" }, score: defaultScores.b },
      { id: "6c", label: { th: "หลังห้อง โซนมีอิสระ", en: "In the back, where you feel free" }, score: defaultScores.c },
      { id: "6d", label: { th: "มุมประจำที่ทุกคนรู้ว่าเป็นที่ของคุณ", en: "That one signature spot everyone knows is yours" }, score: defaultScores.d },
    ],
  },
  {
    id: 7,
    prompt: { th: "เวลาครูถามคำถามกลางห้อง", en: "When a teacher asks something out loud in class" },
    answers: [
      { id: "7a", label: { th: "ถ้ารู้ก็ยกมือตอบ", en: "If you know it, you answer" }, score: defaultScores.a },
      { id: "7b", label: { th: "ถ้าไม่มั่นใจก็รอคนอื่นก่อน", en: "If unsure, you wait and see what others do" }, score: defaultScores.b },
      { id: "7c", label: { th: "หลบสายตาแบบเนียนๆ", en: "Avoid eye contact like a professional" }, score: defaultScores.c },
      { id: "7d", label: { th: "ตอบด้วยน้ำเสียงนิ่งจนห้องเงียบ", en: "Answer so calmly the whole room goes quiet" }, score: { S: 1, E: 2 } },
    ],
  },
  {
    id: 8,
    prompt: { th: "ถ้าโรงเรียนมีกฎใหม่ที่เข้มขึ้นมาก", en: "If the school introduces a strict new rule" },
    answers: [
      { id: "8a", label: { th: "ปรับตัวตามกฎก่อน", en: "Adapt to it first" }, score: defaultScores.a },
      { id: "8b", label: { th: "บ่นนิดหน่อยแต่ก็ทำตาม", en: "Complain a little, then follow it anyway" }, score: defaultScores.b },
      { id: "8c", label: { th: "หาช่องว่างของกฎแบบฉลาดๆ", en: "Find the loopholes without getting caught" }, score: defaultScores.c },
      { id: "8d", label: { th: "แค่ยืนเฉยๆ ก็ให้ฟีลต่อต้านระบบแล้ว", en: "You somehow look rebellious without saying a word" }, score: defaultScores.d },
    ],
  },
  {
    id: 9,
    prompt: { th: "เวลาพักเที่ยง คุณมักจะ", en: "At lunch break, you usually" },
    answers: [
      { id: "9a", label: { th: "กินข้าวแล้วจัดการงานที่ค้าง", en: "Eat, then handle unfinished work" }, score: defaultScores.a },
      { id: "9b", label: { th: "กินข้าวเมาท์กับเพื่อน", en: "Eat and gossip with friends" }, score: defaultScores.b },
      { id: "9c", label: { th: "เดินเรื่อยๆ หามุมชิล", en: "Wander around until you find a chill spot" }, score: defaultScores.c },
      { id: "9d", label: { th: "เดินผ่านโรงอาหารแบบมีคนหันมอง", en: "Walk through the cafeteria like people should notice" }, score: defaultScores.d },
    ],
  },
  {
    id: 10,
    prompt: { th: "ถ้ามีคนมาชนแล้วไม่ขอโทษ", en: "If someone bumps into you and does not apologize" },
    answers: [
      { id: "10a", label: { th: "พูดตรงๆ ให้เขาระวังหน่อย", en: "Tell them directly to be more careful" }, score: { S: 2 } },
      { id: "10b", label: { th: "มองหน้าแล้วปล่อยผ่าน", en: "Look at them and let it pass" }, score: { S: 1, E: 1 } },
      { id: "10c", label: { th: "บ่นกับเพื่อนแทน", en: "Complain to your friends instead" }, score: { E: 1 } },
      { id: "10d", label: { th: "ใช้แค่สายตาก็พอให้เขารู้ตัว", en: "Use one stare and let them figure it out" }, score: { E: 2 } },
    ],
  },
  {
    id: 11,
    prompt: { th: "ตอนสอบปลายภาค วิธีเอาตัวรอดของคุณคือ", en: "When final exams hit, your survival method is" },
    answers: [
      { id: "11a", label: { th: "อ่านล่วงหน้าเป็นช่วงๆ", en: "Study steadily in advance" }, score: defaultScores.a },
      { id: "11b", label: { th: "อ่านก่อนสอบแบบจริงจัง", en: "Lock in and study hard right before it" }, score: defaultScores.b },
      { id: "11c", label: { th: "พึ่งสรุปเพื่อนกับบุญเก่า", en: "Rely on your friends' summaries and old luck" }, score: defaultScores.c },
      { id: "11d", label: { th: "มีพลังบางอย่างที่ทำให้ดูนิ่งแม้ยังไม่อ่าน", en: "Some mysterious power keeps you looking calm even unprepared" }, score: defaultScores.d },
    ],
  },
  {
    id: 12,
    prompt: { th: "ถ้ารุ่นน้องมาขอคำแนะนำ", en: "If a younger student asks you for advice" },
    answers: [
      { id: "12a", label: { th: "อธิบายละเอียด ช่วยเท่าที่ช่วยได้", en: "Explain carefully and help as much as you can" }, score: { S: 2 } },
      { id: "12b", label: { th: "บอกแบบเข้าใจง่าย เป็นกันเอง", en: "Explain it simply and make it friendly" }, score: { S: 1, E: 1 } },
      { id: "12c", label: { th: "ตอบสั้นๆ แต่ได้ใจความ", en: "Keep it short, but useful" }, score: { E: 1 } },
      { id: "12d", label: { th: "พูดน้อย แต่คนฟังรู้สึกเกรงใจนิดๆ", en: "Say very little, but somehow sound important" }, score: { S: 1, E: 2 } },
    ],
  },
  {
    id: 13,
    prompt: { th: "เวลามีดราม่าในห้อง คุณมักจะ", en: "When there is drama in class, you usually" },
    answers: [
      { id: "13a", label: { th: "พยายามทำให้ทุกอย่างสงบ", en: "Try to settle everything down" }, score: { S: 2 } },
      { id: "13b", label: { th: "รับฟังทุกฝ่ายก่อน", en: "Hear everyone out first" }, score: { S: 1, E: 1 } },
      { id: "13c", label: { th: "อยู่เงียบๆ ไม่อยากยุ่ง", en: "Stay quiet and out of it" }, score: { E: 1 } },
      { id: "13d", label: { th: "ไม่ต้องพูดเยอะ แต่มีอิทธิพลต่อบรรยากาศ", en: "Do not say much, but your presence changes the mood" }, score: { E: 2 } },
    ],
  },
  {
    id: 14,
    prompt: { th: "สไตล์การแต่งตัวมาโรงเรียนของคุณ", en: "Your school uniform style is usually" },
    answers: [
      { id: "14a", label: { th: "เรียบร้อย เป๊ะตามระเบียบ", en: "Neat and exactly within regulation" }, score: defaultScores.a },
      { id: "14b", label: { th: "เรียบร้อยแต่มีดีเทลความเป็นตัวเอง", en: "Neat, but with little touches that feel like you" }, score: defaultScores.b },
      { id: "14c", label: { th: "เอาที่สบายและรอด", en: "Whatever is comfortable and still gets by" }, score: defaultScores.c },
      { id: "14d", label: { th: "แค่ถูกระเบียบขั้นต่ำ แต่ฟีลเกินระเบียบไปไกล", en: "Technically acceptable, spiritually way beyond the dress code" }, score: defaultScores.d },
    ],
  },
  {
    id: 15,
    prompt: { th: "ถ้าครูเรียกชื่อกลางคาบเพราะคุณคุย", en: "If the teacher calls you out in class for talking" },
    answers: [
      { id: "15a", label: { th: "ขอโทษแล้วหยุดทันที", en: "Apologize and stop immediately" }, score: defaultScores.a },
      { id: "15b", label: { th: "ยิ้มแห้งๆ แล้วเงียบ", en: "Smile awkwardly and go quiet" }, score: defaultScores.b },
      { id: "15c", label: { th: "เงียบแป๊บเดียว เดี๋ยวก็เริ่มใหม่", en: "Stay quiet for a second, then eventually start again" }, score: defaultScores.c },
      { id: "15d", label: { th: "เงียบแบบมีออร่า “ก็แล้วไง”", en: "Go quiet in a way that still says and what about it?" }, score: defaultScores.d },
    ],
  },
  {
    id: 16,
    prompt: { th: "ถ้าต้องขึ้นพรีเซนต์หน้าห้อง", en: "If you have to present in front of class" },
    answers: [
      { id: "16a", label: { th: "เตรียมสคริปต์และซ้อม", en: "Prepare a script and rehearse" }, score: defaultScores.a },
      { id: "16b", label: { th: "เตรียมคร่าวๆ แล้วด้นสดบางส่วน", en: "Prepare the main points and freestyle the rest" }, score: defaultScores.b },
      { id: "16c", label: { th: "พึ่งเซนส์หน้างาน", en: "Trust your instincts on the spot" }, score: defaultScores.c },
      { id: "16d", label: { th: "ขึ้นไปยืนเฉยๆ ก็เหมือนมีเวทีเป็นของตัวเอง", en: "Step up and somehow the room becomes your stage" }, score: { S: 1, E: 2 } },
    ],
  },
  {
    id: 17,
    prompt: { th: "สมุดจดของคุณเป็นแบบไหน", en: "What are your notes usually like?" },
    answers: [
      { id: "17a", label: { th: "เป็นระเบียบ อ่านง่าย ไฮไลต์ครบ", en: "Neat, readable, highlighted, and complete" }, score: defaultScores.a },
      { id: "17b", label: { th: "มีสาระปนลายมือเล่นนิดหน่อย", en: "Useful, but with some doodles or extra personality" }, score: defaultScores.b },
      { id: "17c", label: { th: "มีเฉพาะตอนจำเป็น", en: "Only when absolutely necessary" }, score: defaultScores.c },
      { id: "17d", label: { th: "สมุดอาจไม่เป๊ะ แต่ตัวจริงจำ vibe ได้หมด", en: "The notebook may not be perfect, but you remember the whole vibe" }, score: defaultScores.d },
    ],
  },
  {
    id: 18,
    prompt: { th: "ถ้ามีเรื่องต้องตัดสินใจในกลุ่มเพื่อน", en: "If your friend group needs to make a decision" },
    answers: [
      { id: "18a", label: { th: "ดูเหตุผลและผลกระทบ", en: "Think through the logic and consequences" }, score: { S: 2 } },
      { id: "18b", label: { th: "ฟังทุกคนก่อนแล้วค่อยเลือก", en: "Listen to everyone first, then choose" }, score: { S: 1, E: 1 } },
      { id: "18c", label: { th: "ตามเสียงส่วนใหญ่", en: "Go with the majority" }, score: { E: 1 } },
      { id: "18d", label: { th: "พูดประโยคเดียวแล้วทุกคนเงียบฟัง", en: "Say one sentence and suddenly everyone listens" }, score: { E: 2 } },
    ],
  },
  {
    id: 19,
    prompt: { th: "เวลาโดนครูดุ คุณมักจะ", en: "When a teacher scolds you, you usually" },
    answers: [
      { id: "19a", label: { th: "รับฟังแล้วเอาไปปรับ", en: "Take it in and adjust" }, score: defaultScores.a },
      { id: "19b", label: { th: "ฟังไว้ก่อน ค่อยคิดอีกที", en: "Listen first and decide how much to apply later" }, score: defaultScores.b },
      { id: "19c", label: { th: "ทำหน้าโอเคแต่ในใจลอยไปแล้ว", en: "Look attentive, but your mind is elsewhere already" }, score: defaultScores.c },
      { id: "19d", label: { th: "ยืนนิ่งแบบพระเอกตอนโดนกล่าวหา", en: "Stand there like a misunderstood lead in a school drama" }, score: defaultScores.d },
    ],
  },
  {
    id: 20,
    prompt: { th: "ถ้าให้เพื่อนนิยามคุณในโรงเรียน เขาน่าจะพูดว่า", en: "If your friends had to define you at school, they would probably say" },
    answers: [
      { id: "20a", label: { th: "คนนี้ตั้งใจและพึ่งพาได้", en: "Reliable and genuinely serious when it matters" }, score: defaultScores.a },
      { id: "20b", label: { th: "คนนี้เฟรนด์ลี่ เข้ากับคนง่าย", en: "Friendly and easy to get along with" }, score: defaultScores.b },
      { id: "20c", label: { th: "คนนี้ชิล เอาเรื่องอยู่ตอนจำเป็น", en: "Chill, but can step up when needed" }, score: defaultScores.c },
      { id: "20d", label: { th: "คนนี้ออร่าแรง มีของ", en: "Strong aura. Definitely has a presence." }, score: defaultScores.d },
    ],
  },
];

export const schoolArchetypes: Record<SchoolArchetypeId, SchoolArchetype> = {
  "true-student": {
    id: "true-student",
    name: { th: "นักเรียนตัวจริง", en: "The Real Student" },
    nickname: { th: "หัวหน้าห้องในโหมดคูล", en: "Class captain energy" },
    descriptor: { th: "มีวินัย พึ่งพาได้ และเอาเรื่องตอนถึงเวลาจริง", en: "Reliable, composed, and sharp when it actually counts." },
    summary: {
      th: "คุณให้พลังของคนที่ตั้งใจจริง ไม่ใช่เพราะอยากดูดี แต่เพราะคุณรู้ว่าถ้าจะทำก็อยากทำให้มันออกมาดี คนรอบตัวมักไว้ใจคุณทั้งเรื่องงาน เรื่องเรียน และเรื่องที่ต้องการคนมีสติอยู่ตรงนั้น",
      en: "You give off genuine student energy, not because you are trying to look perfect, but because you actually care about doing things well. People naturally trust you with work, plans, and anything that needs a steady presence.",
    },
    classAura: { th: "เรียบร้อย แต่ไม่จืด มีสมาธิ และทำให้ห้องดูมีแกน", en: "Structured but never dull. Focused, grounded, and quietly central." },
    survivalStyle: { th: "เอาตัวรอดด้วยระบบ ระเบียบ และการไม่ปล่อยให้อะไรพังง่ายๆ", en: "You survive school through order, timing, and not letting things fall apart." },
    misunderstood: { th: "คนอาจคิดว่าคุณจริงจังอย่างเดียว ทั้งที่จริงคุณแค่รู้จังหวะว่าเมื่อไรควรเล่น เมื่อไรควรเอาจริง", en: "People may think you are only serious, when really you just know when to play and when to lock in." },
    socialRole: { th: "เป็นคนที่ครูอุ่นใจ เพื่อนพึ่งได้ และงานกลุ่มอยากมีชื่อคุณอยู่ด้วย", en: "Teachers trust you, friends rely on you, and group projects feel safer with you in them." },
    aestheticKeywords: { th: ["คมสะอาด", "สมุดไฮไลต์", "uniform เป๊ะ", "calm leader"], en: ["clean lines", "highlighted notes", "sharp uniform", "calm leader"] },
    accent: { from: "from-sky-200", via: "via-cyan-100", to: "to-emerald-100" },
  },
  "chill-student": {
    id: "chill-student",
    name: { th: "นักเรียนสายชิล", en: "The Chill Student" },
    nickname: { th: "เด็กตั้งใจแบบไม่กดดัน", en: "Low-stress high-functioning" },
    descriptor: { th: "อยู่ในร่องในรอย แต่ไม่ทำให้ชีวิตดูตึงเกินไป", en: "Put together, but never painfully rigid." },
    summary: {
      th: "คุณไม่ใช่สายเป๊ะทุกมุม แต่ยังมีแกนของความรับผิดชอบอยู่ชัดเจน คุณรู้ว่าอะไรควรจริงจังและอะไรควรปล่อยให้เบาลง ทำให้พลังของคุณดูเป็นมิตร ใช้ชีวิตได้ และน่าคบมาก",
      en: "You are not rigidly perfect, but you clearly have your priorities straight. You know what to take seriously and what to let breathe, which makes your energy friendly, practical, and easy to like.",
    },
    classAura: { th: "ดูเบา แต่ไม่เบลอ เหมือนคนที่ balance ชีวิตได้ดี", en: "Relaxed, but not messy. Like someone who knows how to balance school and life." },
    survivalStyle: { th: "ใช้การอ่านสถานการณ์ดีๆ กับความยืดหยุ่นพาตัวเองผ่านวันเรียน", en: "You move through school by reading the room and staying flexible." },
    misunderstood: { th: "บางคนอาจคิดว่าคุณชิลเกินไป แต่จริงๆ คุณแค่ไม่ชอบทำอะไรให้ยากกว่าที่ต้องเป็น", en: "Some people might think you are too casual, when really you just refuse to overcomplicate things." },
    socialRole: { th: "เป็นเพื่อนที่อยู่ด้วยแล้วสบายใจ และไม่ทำให้ความกดดันในห้องสูงเกินจำเป็น", en: "You are the friend who keeps everyone sane and the room from feeling too tense." },
    aestheticKeywords: { th: ["สมดุล", "สบายแต่ดี", "เพื่อนเยอะ", "organized enough"], en: ["balanced", "easygoing polish", "social", "organized enough"] },
    accent: { from: "from-amber-100", via: "via-lime-100", to: "to-sky-100" },
  },
  hybrid: {
    id: "hybrid",
    name: { th: "ลูกครึ่งเรียน-ตึง", en: "The Study-Edge Hybrid" },
    nickname: { th: "ครูจับตา เพื่อนจำได้", en: "Memorable in every row" },
    descriptor: { th: "ส่งงานได้ แต่ก็มีออร่าตัวจี๊ดแบบคนจำชื่อได้เสมอ", en: "Responsible enough to deliver, bold enough to be unforgettable." },
    summary: {
      th: "คุณคือคนที่อยู่ตรงกลางอย่างมีเสน่ห์ มีทั้งด้านที่เอางานอยู่และด้านที่มี presence จนคนจำได้ง่าย คุณไม่ได้พยายามเข้าพิมพ์เดียว และนั่นแหละคือเหตุผลที่ทั้งครูทั้งเพื่อนต่างก็จับตาคุณอยู่เสมอ",
      en: "You sit in the delicious middle: responsible enough to get things done, bold enough to leave an impression. You do not fit a single mold, and that is exactly why people remember you.",
    },
    classAura: { th: "เป็นคนที่เหมือนจะนิ่ง แต่มีอะไรให้น่ามองตลอดเวลา", en: "You look composed, but there is always something magnetic under the surface." },
    survivalStyle: { th: "เอาตัวรอดด้วยการสลับโหมดให้ถูกจังหวะ ทั้งเรียน ทั้งเล่น ทั้งคุมบรรยากาศ", en: "You survive by switching modes well: study when needed, play when it works, and control the room when it matters." },
    misunderstood: { th: "คนอาจสรุปคุณเร็วเกินไปว่าเป็นสายเรียนหรือสายซ่า ทั้งที่จริงคุณเป็นลูกผสมที่คุมทั้งสองโลกได้พอดี", en: "People may try to label you too quickly, when really you move well between both worlds." },
    socialRole: { th: "เป็นคนที่มีทั้งเครดิตในห้องและคาแรกเตอร์ในสายตาคนอื่น", en: "You hold both credibility and character in the same space." },
    aestheticKeywords: { th: ["polished edge", "smart rebel", "มีซีน", "ไม่ธรรมดา"], en: ["polished edge", "smart rebel", "scene-stealing", "unexpected"] },
    accent: { from: "from-violet-200", via: "via-sky-100", to: "to-amber-100" },
  },
  "structured-edge": {
    id: "structured-edge",
    name: { th: "ตัวตึงมีระบบ", en: "The Structured Icon" },
    nickname: { th: "เด็กเรียนสายคุมเกม", en: "Controlled chaos, but make it efficient" },
    descriptor: { th: "ภายนอกดูนิ่ง ดูแรง ดูคูล แต่ข้างในยังคุมตัวเองดีมาก", en: "Cool, intense, and clearly in control of yourself." },
    summary: {
      th: "คุณมีออร่าของคนที่ดูนิ่ง คูล และไม่ค่อยยอมใครง่ายๆ แต่สิ่งที่ทำให้คุณน่าสนใจกว่าคาแรกเตอร์ภายนอกคือคุณยังมีระบบในแบบของตัวเอง คุณอาจไม่ได้ทำทุกอย่างตามกรอบ แต่คุณไม่ปล่อยให้ตัวเองหลุดเกมง่ายๆ",
      en: "You have the aura of someone cool, intense, and hard to push around. What makes you more interesting than the outside image, though, is that you still have your own system. You may not follow every rule, but you do not lose control either.",
    },
    classAura: { th: "นิ่งแบบมีแรงกดอากาศ แต่ไม่ใช่ความวุ่นวายไร้ทิศทาง", en: "Quietly intimidating, but never chaotic without direction." },
    survivalStyle: { th: "อยู่รอดด้วย self-control, timing, และการรู้ว่าจะยอมตรงไหนไม่ยอมตรงไหน", en: "You survive through self-control, timing, and knowing exactly where to bend and where not to." },
    misunderstood: { th: "คนอาจมองว่าคุณแรงอย่างเดียว แต่จริงๆ คุณแค่มีขอบ มีมาตรฐาน และไม่ชอบให้ใครมาจัดการเกินเหตุ", en: "People may read you as intense only, when really you just have boundaries and standards." },
    socialRole: { th: "เป็นคนที่มี presence ชัด แต่ก็ยังน่าไว้ใจในเวลาต้องเอาจริง", en: "You have clear presence, but you are still dependable when things become serious." },
    aestheticKeywords: { th: ["คูลจัด", "คุมเกม", "minimal threat", "มีวินัยเงียบๆ"], en: ["cool restraint", "game control", "minimal threat", "quiet discipline"] },
    accent: { from: "from-slate-200", via: "via-sky-100", to: "to-rose-100" },
  },
  "school-icon": {
    id: "school-icon",
    name: { th: "ตัวตึงประจำโรงเรียน", en: "The School Icon" },
    nickname: { th: "ดาวเด่นท้ายห้อง", en: "The back-row legend" },
    descriptor: { th: "ออร่าแรง เดินผ่านก็มีคนหัน แต่ยังต้องอ่านว่าเป็นคาแรกเตอร์ ไม่ใช่คำตัดสินชีวิตจริง", en: "High presence, unmistakable aura, and impossible to ignore." },
    summary: {
      th: "คุณคือคนที่มี presence ชัดแบบแทบไม่ต้องพยายาม เดินผ่านก็มีคนหัน มองเฉยๆ ก็เหมือนบรรยากาศขยับตาม สิ่งที่ทำให้คุณสนุกคือความนิ่ง ความคูล และพลังแบบ character lead มากกว่าจะเป็นความดุหรือความรุนแรงตรงๆ",
      en: "You are the kind of person whose presence lands before your words do. People notice when you walk by, and the room reacts even if you stay quiet. Your charm is not about aggression, but about lead-character calm, coolness, and undeniable energy.",
    },
    classAura: { th: "เป็นคนที่เหมือนมีไฟสปอร์ตไลต์ส่วนตัวติดตามอยู่ตลอด", en: "It feels like a private spotlight follows you around campus." },
    survivalStyle: { th: "เอาตัวรอดด้วย aura, confidence, และการรู้ว่าตัวเองมีผลต่อบรรยากาศแค่ไหน", en: "You survive with aura, confidence, and a deep awareness of your own impact on the room." },
    misunderstood: { th: "บางคนอาจคิดว่าคุณแรงเกินจริง ทั้งที่หลายครั้งคุณแค่มี presence สูงและไม่จำเป็นต้องพูดเยอะเพื่อให้คนรับรู้", en: "People may overread you as intense, when really you just have strong presence and do not need many words to be felt." },
    socialRole: { th: "เป็นคนที่กลายเป็นตำนานในสายตาเพื่อนได้ง่าย แม้คุณจะไม่ได้ตั้งใจให้มันเป็นแบบนั้นทุกครั้ง", en: "You become lore in other people's stories, even when you are just existing." },
    aestheticKeywords: { th: ["ตัวจี๊ด", "เดินผ่านมีซีน", "คูลแบบนิ่ง", "main character"], en: ["school icon", "scene energy", "quiet cool", "main character"] },
    accent: { from: "from-rose-200", via: "via-orange-100", to: "to-amber-100" },
  },
};
