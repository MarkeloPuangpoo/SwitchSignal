import type { QuizQuestion } from "@/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: {
      th: "เวลาเดินผ่านที่แคบหรือคนเยอะ คุณมักจะ...",
      en: "When walking through a crowded or narrow place, you usually...",
    },
    answers: [
      { id: "1a", label: { th: "เดินนำเล็กน้อยเพื่อเปิดทางให้อีกฝ่าย", en: "Walk slightly ahead and make space for the other person" }, score: { L: 2, C: 1 } },
      { id: "1b", label: { th: "เดินข้างกัน รักษาจังหวะไปพร้อมกัน", en: "Walk side by side and keep pace together" }, score: { F: 2, C: 1 } },
      { id: "1c", label: { th: "เดินตามจังหวะเขา ปล่อยให้อีกฝ่ายพา", en: "Follow their lead and let them guide" }, score: { S: 2, F: 1 } },
      { id: "1d", label: { th: "เกาะติดอยู่ใกล้ๆ แบบไม่ค่อยสนใจโลกภายนอกเท่าไร", en: "Stay clingy, close, or attached without caring much about the world" }, score: { S: 2, T: 1 } },
    ],
  },
  {
    id: 2,
    prompt: { th: "เวลาเลือกร้านหรือเมนูที่มีตัวเลือกเยอะมาก คุณมักจะ...", en: "When ordering food with lots of choices, you usually..." },
    answers: [
      { id: "2a", label: { th: "สั่งของตัวเองอย่างมั่นใจ และถ้าจะสั่งแทนเขาก็ทำได้", en: "Confidently order for yourself and could order for them too" }, score: { L: 2, C: 1 } },
      { id: "2b", label: { th: "ถามก่อนว่าเขาอยากกินอะไร แล้วค่อยจัดการสั่งให้เรียบร้อย", en: "Ask what they want first, then handle the ordering" }, score: { C: 2, L: 1 } },
      { id: "2c", label: { th: "พูดว่า “เอาเหมือนที่คุณสั่งเลย”", en: "Say “I’ll have what you’re having”" }, score: { S: 2 } },
      { id: "2d", label: { th: "ปล่อยให้อีกฝ่ายตัดสินใจ แล้วคุณก็ไปตามนั้น", en: "Let them decide and go with it" }, score: { S: 2, F: 1 } },
    ],
  },
  {
    id: 3,
    prompt: { th: "สไตล์แสดงความรักต่อหน้าคนอื่นของคุณคือ...", en: "Your style of public affection is usually..." },
    answers: [
      { id: "3a", label: { th: "เรียบง่ายแต่ชัดเจน เช่น จับมือหรือโอบไหล่", en: "Simple but clear, like hand-holding or an arm around them" }, score: { L: 2 } },
      { id: "3b", label: { th: "แซวเบาๆ จนอีกฝ่ายหน้าแดงนิดๆ", en: "Light teasing that makes them blush a little" }, score: { T: 2, L: 1 } },
      { id: "3c", label: { th: "เอนตัวเข้าไป อยากกอด อยากอ้อน อยากได้ความสนใจ", en: "Leaning in, cuddly, wanting attention" }, score: { S: 2 } },
      { id: "3d", label: { th: "ค่อนข้างเก็บอาการเวลาอยู่ข้างนอก แต่จะชัดเจนขึ้นตอนอยู่กันสองคน", en: "Reserved in public, more expressive in private" }, score: { F: 2 } },
    ],
  },
  {
    id: 4,
    prompt: { th: "ถ้ามีคนมาหาเรื่องคนของคุณ สัญชาตญาณแรกคือ...", en: "If someone starts trouble with your partner, your first instinct is..." },
    answers: [
      { id: "4a", label: { th: "ก้าวออกไปอยู่ข้างหน้าและรับสถานการณ์ทันที", en: "Step in immediately and take the front position" }, score: { L: 2, C: 1 } },
      { id: "4b", label: { th: "คุมสถานการณ์แบบนิ่งๆ โดยไม่ปล่อยให้อีกฝ่ายโดนต้อน", en: "Calmly control the situation without letting your partner get cornered" }, score: { C: 2, F: 1 } },
      { id: "4c", label: { th: "พร้อมเถียงกลับไว แต่ก็ยังเหลือบมองขอแบ็กอัปจากเขาอยู่", en: "Get mouthy fast, but still glance at your partner for backup" }, score: { T: 2, S: 1 } },
      { id: "4d", label: { th: "ชะงักไปนิด แล้วปล่อยให้อีกฝ่ายเป็นคนออกหน้า", en: "Freeze a little and let the other person take the lead" }, score: { S: 2 } },
    ],
  },
  {
    id: 5,
    prompt: { th: "เวลาคนรักร้องไห้หนักมาก คุณมักจะ...", en: "When your partner is crying hard, you usually..." },
    answers: [
      { id: "5a", label: { th: "ดึงเขาเข้ามากอดเงียบๆ แล้วอยู่ตรงนั้นให้เขาร้องออกมา", en: "Pull them into a quiet hug and let them cry it out" }, score: { C: 2, L: 1 } },
      { id: "5b", label: { th: "พยายามผ่อนบรรยากาศด้วยการปลอบ ของกิน หรือมุกเล็กๆ", en: "Try to lighten the mood with comfort, snacks, or jokes" }, score: { T: 2, C: 1 } },
      { id: "5c", label: { th: "อินจนแทบจะร้องไห้ไปด้วย", en: "Feel so much that you almost cry with them" }, score: { S: 2, C: 1 } },
      { id: "5d", label: { th: "คงความนิ่ง แล้วค่อยช่วยเขาคิดทางออกทีละอย่าง", en: "Stay calm and start helping them think through solutions" }, score: { L: 2, F: 1 } },
    ],
  },
  {
    id: 6,
    prompt: { th: "ถ้าอีกฝ่ายบอกว่าอยากอยู่คนเดียวสักพัก คุณมักจะ...", en: "If they say they want alone time, you usually..." },
    answers: [
      { id: "6a", label: { th: "เคารพพื้นที่นั้น แต่ก็ยังเช็กอินอย่างอ่อนโยน", en: "Respect it, but still gently check in" }, score: { C: 2, F: 1 } },
      { id: "6b", label: { th: "ให้พื้นที่เขา แต่แซวไว้ก่อนว่าเดี๋ยวต้องชดเชยเวลาคืนมา", en: "Let them have space, but tease that they owe you time later" }, score: { T: 2, F: 1 } },
      { id: "6c", label: { th: "แอบเหงานิดๆ แต่ก็ปล่อยให้เขาเป็นคนตัดสินใจ", en: "Feel lonely, but let them decide" }, score: { S: 2, C: 1 } },
      { id: "6d", label: { th: "ขอคุยกันสั้นๆ ก่อน เพื่อให้ความรู้สึกมันชัดขึ้น", en: "Ask to talk briefly first so things feel clear" }, score: { L: 2, C: 1 } },
    ],
  },
  {
    id: 7,
    prompt: { th: "ถ้ายังงอนกันอยู่แต่ต้องนอนเตียงเดียวกัน คุณมักจะ...", en: "If you're upset with each other but still sleeping in the same bed, you usually..." },
    answers: [
      { id: "7a", label: { th: "ยังคอยเช็กว่าเขาอุ่นสบายดีไหม ถึงจะเงียบอยู่ก็ตาม", en: "Still make sure they’re warm or comfortable, even if quiet" }, score: { C: 2, F: 1 } },
      { id: "7b", label: { th: "ยังกอดอยู่ แต่ทำหน้าดื้อๆ ไม่ยอมง่ายๆ", en: "Keep holding them, but with a stubborn face" }, score: { C: 2, L: 1 } },
      { id: "7c", label: { th: "งอนแบบจัดเต็ม แล้วรอให้อีกฝ่ายเข้ามาง้อ", en: "Sulk dramatically and wait for them to come to you" }, score: { T: 2, S: 1 } },
      { id: "7d", label: { th: "ยอมก่อน เพราะทนนอนไปทั้งที่ยังค้างคาไม่ไหว", en: "Give in first because you hate sleeping while still fighting" }, score: { S: 2, C: 1 } },
    ],
  },
  {
    id: 8,
    prompt: { th: "ถ้าอีกฝ่ายขอให้คุณลองแต่งตัวหรือทำลุคแบบที่เขาชอบ คุณมักจะ...", en: "If they ask you to try a style they like, you usually..." },
    answers: [
      { id: "8a", label: { th: "ลองได้ ถ้ายังรู้สึกว่าเป็นตัวเองอยู่", en: "Try it if it still feels like yourself" }, score: { C: 2, F: 1 } },
      { id: "8b", label: { th: "แอบต้านนิดๆ แล้วชวนเขามาอินกับสไตล์ของคุณแทน", en: "Push back a little and invite them into your style instead" }, score: { L: 2, T: 1 } },
      { id: "8c", label: { th: "ทำตามทันที เพราะอยากให้เขาภูมิใจเวลามองคุณ", en: "Do it right away because you want them to feel proud" }, score: { S: 2, C: 1 } },
      { id: "8d", label: { th: "เอามาผสมกับรสนิยมตัวเองให้ยังรู้สึกจริงกับตัวคุณ", en: "Blend it with your own taste so it still feels authentic" }, score: { F: 2, T: 1 } },
    ],
  },
  {
    id: 9,
    prompt: { th: "สไตล์ทำงานบ้านในอุดมคติของคุณคือ...", en: "Your ideal approach to chores is..." },
    answers: [
      { id: "9a", label: { th: "ฉันจัดการส่วนหนักๆ หรือส่วนที่ต้องตัดสินใจเอง", en: "I’ll handle the heavy or decisive parts" }, score: { L: 2, C: 1 } },
      { id: "9b", label: { th: "แบ่งกันทำ แล้วทำไปด้วยกัน", en: "We split things and do them together" }, score: { F: 2, C: 1 } },
      { id: "9c", label: { th: "ฉันเป็นหัวหน้าสายเล่น หยอกไปคุมงานไป", en: "I become the playful supervisor" }, score: { T: 2 } },
      { id: "9d", label: { th: "ถ้าเขาเหนื่อย ฉันทำเพิ่มให้ได้", en: "I’ll do more if they’re tired" }, score: { C: 2 } },
    ],
  },
  {
    id: 10,
    prompt: { th: "เวลาไปซูเปอร์มาร์เก็ตด้วยกัน คุณมักจะ...", en: "At the supermarket together, you usually..." },
    answers: [
      { id: "10a", label: { th: "เข็นรถแล้วหยิบของที่รู้ว่าเขาชอบ", en: "Push the cart and grab things you know they like" }, score: { C: 2, L: 1 } },
      { id: "10b", label: { th: "คุมลิสต์ งบ และดูว่ายังขาดอะไร", en: "Manage the list, budget, and what’s still missing" }, score: { L: 2, F: 1 } },
      { id: "10c", label: { th: "เกาะเขาไว้แล้วชี้ของที่อยากได้", en: "Cling to them and point at things you want" }, score: { S: 2, T: 1 } },
      { id: "10d", label: { th: "แยกเดินเพลินๆ แล้วค่อยกลับมาเจอกันตอนท้าย", en: "Wander a bit and regroup near the end" }, score: { F: 2, S: 1 } },
    ],
  },
  {
    id: 11,
    prompt: { th: "ถ้าอีกฝ่ายทำอาหารแล้วรสชาติยังไม่ค่อยดี คุณมักจะ...", en: "If they cook something that doesn’t taste very good, you usually..." },
    answers: [
      { id: "11a", label: { th: "กินไปก่อนและให้กำลังใจก่อนอย่างแรก", en: "Eat it and encourage them first" }, score: { C: 2 } },
      { id: "11b", label: { th: "พูดตรงอย่างอ่อนโยน แล้วเสนอว่าครั้งหน้ามาช่วยกัน", en: "Be honest gently and offer to help next time" }, score: { L: 2, C: 1 } },
      { id: "11c", label: { th: "แซวหน่อย แต่ก็กินจนหมดอยู่ดี", en: "Tease them, but still finish the food" }, score: { T: 2, C: 1 } },
      { id: "11d", label: { th: "ทำตัวน่ารักแล้วชวนออกไปหาอย่างอื่นกินด้วยกัน", en: "Act cute and suggest getting something else together" }, score: { S: 2, T: 1 } },
    ],
  },
  {
    id: 12,
    prompt: { th: "วิธีตามใจหรือเอาใจคนพิเศษของคุณคือ...", en: "Your style of spoiling someone is..." },
    answers: [
      { id: "12a", label: { th: "จำสิ่งที่เขาอยากได้เงียบๆ แล้วทำเซอร์ไพรส์ให้", en: "Quietly remembering what they wanted and surprising them" }, score: { C: 2 } },
      { id: "12b", label: { th: "ซัพพอร์ตตรงๆ ตอนที่เขาต้องการจริงๆ", en: "Supporting directly when they need it" }, score: { L: 2, C: 1 } },
      { id: "12c", label: { th: "ทำตัวน่าเอ็นดูเพื่อให้อีกฝ่ายมาเอาใจคุณแทน", en: "Acting cute so they’ll spoil you instead" }, score: { S: 2, T: 1 } },
      { id: "12d", label: { th: "ผลัดกันดูแลกันแบบเป็นธรรมชาติ", en: "Taking turns caring for each other naturally" }, score: { F: 2, C: 1 } },
    ],
  },
  {
    id: 13,
    prompt: { th: "ไดนามิกตอนกอดหรือตอนนอนที่คุณชอบที่สุดคือ...", en: "Your favorite cuddle or sleep dynamic is..." },
    answers: [
      { id: "13a", label: { th: "ให้อีกฝ่ายซบหรือพิงอยู่กับคุณ", en: "Letting them lean on or rest on you" }, score: { L: 2, C: 1 } },
      { id: "13b", label: { th: "กอดเขาจากด้านหลัง", en: "Holding them from behind" }, score: { L: 2, C: 1 } },
      { id: "13c", label: { th: "มุดเข้าไปหาเขา หรือชอบโดนกอดไว้", en: "Curling into them or being held" }, score: { S: 2, C: 1 } },
      { id: "13d", label: { th: "โหมดแมวติดเจ้าของ ทาบตัวหรือพาดตัวทับเขาไปเลย", en: "Clingy cat mode: draped over them somehow" }, score: { T: 2, S: 1 } },
    ],
  },
  {
    id: 14,
    prompt: { th: "ถ้ามีคนจ้องคุณใกล้ๆ มากๆ คุณมักจะ...", en: "If someone stares at you from very close, you usually..." },
    answers: [
      { id: "14a", label: { th: "สบตากลับตรงๆ ไม่หลบ", en: "Hold eye contact and stare back" }, score: { L: 2, T: 1 } },
      { id: "14b", label: { th: "ยิ้มแล้วแตะเขาเบาๆ ให้ใจเขาละลายเล่น", en: "Smile and lightly touch them just to make them melt" }, score: { C: 2, T: 1 } },
      { id: "14c", label: { th: "หลบตาแล้วหน้าแดง", en: "Look away and blush" }, score: { S: 2 } },
      { id: "14d", label: { th: "บ่นเบาๆ แต่ก็ไม่ได้ถอยหนีจริงจัง", en: "Complain softly but don’t really move away" }, score: { T: 2 } },
    ],
  },
  {
    id: 15,
    prompt: { th: "ถ้ามีลูกแมวจรโผล่มาที่บ้าน คุณมักจะ...", en: "If a stray kitten appears at home, you usually..." },
    answers: [
      { id: "15a", label: { th: "ตัดสินใจไว แล้วเริ่มเตรียมตัวดูแลทันที", en: "Decide quickly and start preparing to care for it" }, score: { L: 2, C: 1 } },
      { id: "15b", label: { th: "คุยกันก่อนว่าจะดูแลมันยังไงให้ดี", en: "Talk together first about how to handle it well" }, score: { F: 2, C: 1 } },
      { id: "15c", label: { th: "เล่นกับมันก่อน แล้วค่อยอ้อนขอเก็บไว้", en: "Play with it and then plead to keep it" }, score: { S: 2, T: 1 } },
      { id: "15d", label: { th: "บ่นเรื่องภาระก่อน แต่สุดท้ายก็ดูแลมันอยู่ดี", en: "Complain about responsibility but end up taking care of it anyway" }, score: { C: 2, T: 1 } },
    ],
  },
  {
    id: 16,
    prompt: { th: "เวลาเดินทางไกลด้วยรถ คุณมักจะ...", en: "On a long car trip, you usually..." },
    answers: [
      { id: "16a", label: { th: "เป็นคนขับเกือบตลอดทาง", en: "Drive most of the way" }, score: { L: 2, C: 1 } },
      { id: "16b", label: { th: "ผลัดกันขับและวางแผนไปด้วยกัน", en: "Split the driving and plan together" }, score: { F: 2, L: 1 } },
      { id: "16c", label: { th: "เป็น passenger princess / DJ / navigator", en: "Be the passenger princess / DJ / navigator" }, score: { S: 2, T: 1 } },
      { id: "16d", label: { th: "ขับได้เหมือนกัน แต่ชอบเวลามีเขาอยู่ข้างๆ คอยให้ความอุ่นใจ", en: "Drive too, but like having them close and reassuring beside you" }, score: { S: 2, C: 1 } },
    ],
  },
];
