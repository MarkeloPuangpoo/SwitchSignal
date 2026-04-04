import type { ArchetypeId, ResultArchetype } from "@/types/quiz";

export const archetypes: Record<ArchetypeId, ResultArchetype> = {
  "king-seme": {
    id: "king-seme",
    name: { th: "King Seme", en: "King Seme" },
    descriptor: {
      th: "นิ่ง สุขุม และมีแรงดึงดูดแบบคนที่พร้อมปกป้องโดยไม่ต้องพูดมาก",
      en: "Composed gravity, velvet certainty, and a quietly protective pull.",
    },
    summary: {
      th: "คุณมีพลังของการเป็นคนนำที่ไม่ได้ดัง แต่รู้สึกได้ทันที คนมักรับรู้ความมั่นคงของคุณก่อนที่คุณจะพูดเสียอีก และความรักของคุณมักมาในรูปของการกระทำที่ชัดเจน น่าเชื่อใจ และให้ความรู้สึกปลอดภัยอย่างเป็นธรรมชาติ",
      en: "You carry a kind of leadership that feels less loud than inevitable. People read your steadiness before you speak, and your affection lands in gestures that feel deliberate, grounded, and unmistakably safe.",
    },
    coreVibe: {
      th: "อำนาจแบบสงบ สง่างาม และมีความอบอุ่นซ่อนอยู่ข้างใน คุณชอบทำให้บรรยากาศนิ่งลงก่อน แล้วค่อยเผยด้านละมุนเมื่อไว้ใจกันแล้ว",
      en: "Elegant command with a warm pulse underneath. You like the room to settle when you arrive, then soften once trust is there.",
    },
    howYouLove: {
      th: "คุณรักด้วยการวางโครงให้ทุกอย่างเข้าที่ สังเกตว่าอะไรควรได้รับการดูแล และทำให้ความทุ่มเทของคุณรู้สึกเชื่อถือได้มากกว่าจะเป็นการแสดงออกเพื่อให้เห็น",
      en: "You love by creating structure, by noticing what needs handling, and by making devotion feel dependable rather than performative.",
    },
    misunderstood: {
      th: "บางคนอาจตีความการคุมเกมของคุณว่าเย็นชา ทั้งที่หลายครั้งคุณกำลังแสดงความห่วงใยผ่านการรับผิดชอบสิ่งต่างๆ ก่อนที่อีกฝ่ายจะต้องเอ่ยขอ",
      en: "People sometimes mistake your control for distance, when really you are often expressing care by taking responsibility before anyone has to ask.",
    },
    bestChemistry: {
      th: "คุณเปล่งประกายที่สุดเมื่ออยู่กับคนที่นุ่มพอจะรับพลังของคุณ และคมพอจะหยอกให้ด้านจริงจังของคุณยิ้มออกมาได้",
      en: "You glow beside someone soft enough to receive you, but sharp enough to tease your serious side into a smile.",
    },
    aestheticKeywords: {
      th: ["ตัดเย็บเนี้ยบ", "ไหมยามค่ำ", "หนังอุ่นๆ", "ทองแบบเงียบสงบ"],
      en: ["tailored", "midnight silk", "warm leather", "quiet gold"],
    },
    motif: { th: "เส้นมงกุฎบนกระจกสีสนธยา", en: "Crown linework and dusk-toned glass" },
    accent: { from: "from-rose-200", via: "via-amber-100", to: "to-fuchsia-200", glow: "rgba(244, 114, 182, 0.24)" },
  },
  "gentle-seme": {
    id: "gentle-seme",
    name: { th: "Gentle Seme", en: "Gentle Seme" },
    descriptor: {
      th: "พลังปกป้องที่อ่อนโยน สุภาพ และเต็มไปด้วยความใส่ใจ",
      en: "Protective tenderness dressed in composure and care.",
    },
    summary: {
      th: "พลังของคุณเป็นคนพา แต่ไม่เคยทับคนอื่น คุณรู้วิธีเริ่มต้นหรือรับหน้าที่โดยไม่ทำให้ความละมุนหายไป และหลายคนมักรู้สึกว่าถูกดูแลจากคุณก่อนจะรู้ด้วยซ้ำว่าคุณสังเกตเขาละเอียดแค่ไหน",
      en: "Your energy leads, but never bulldozes. You know how to take initiative without erasing softness, and people often feel looked after by you long before they realize how deeply you are paying attention.",
    },
    coreVibe: {
      th: "เส้นสายสะอาด มือที่อบอุ่น และน้ำเสียงที่ทำให้สบายใจ คุณทำให้ความรักดูสง่างามและน่าเชื่อถือ",
      en: "Clean lines, warm hands, a reassuring voice. You make affection feel elegant and easy to trust.",
    },
    howYouLove: {
      th: "คุณรักผ่านความสม่ำเสมอ การปลอบโยนที่คิดมาแล้ว และการเป็นคนนำแบบที่ทำให้อีกฝ่ายรู้สึกถูกรัก ไม่ใช่ถูกจัดการ",
      en: "You love through steadiness, thoughtful comfort, and a kind of leadership that makes the other person feel cherished rather than managed.",
    },
    misunderstood: {
      th: "ความนิ่งของคุณอาจถูกมองว่าเก็บอารมณ์ แต่จริงๆ แล้วความรู้สึกของคุณมักลึกและภักดีกว่าที่เห็นในแวบแรกมาก",
      en: "Your calm can get mistaken for restraint, but your feelings usually run deeper and more devoted than you let on at first glance.",
    },
    bestChemistry: {
      th: "คุณเข้ากันได้สวยกับคนที่แสดงออกเก่ง เปิดอารมณ์ หรือมีความดราม่านิดๆ เพราะความอ่อนโยนของคุณทำให้เขาได้เบ่งบานอย่างปลอดภัย",
      en: "You pair beautifully with someone expressive, emotionally open, or a little dramatic, because your gentleness gives them room to bloom.",
    },
    aestheticKeywords: {
      th: ["แคชเมียร์", "ชมพูครีม", "แสงเทียนชา", "โครงนุ่มนวล"],
      en: ["cashmere", "cream blush", "tea light", "soft structure"],
    },
    motif: { th: "แสงริบบิ้นและกลีบพอร์ซเลน", en: "Ribboned light and porcelain bloom" },
    accent: { from: "from-peach-100", via: "via-rose-100", to: "to-sky-100", glow: "rgba(251, 191, 36, 0.18)" },
  },
  "puppy-seme": {
    id: "puppy-seme",
    name: { th: "Puppy Seme", en: "Puppy Seme" },
    descriptor: {
      th: "สดใส มั่นใจ ขี้เล่น และทุ่มเทแบบทำให้คนรอบตัวใจอ่อน",
      en: "Bright devotion, playful confidence, and affectionate mischief.",
    },
    summary: {
      th: "คุณเป็นคนนำด้วยความคึกคักมากกว่าความห่างเหิน การมีอยู่ของคุณเต็มไปด้วยพลัง ความทะเล้นนิดๆ และความภักดีแบบจริงจัง ทำให้ความโรแมนติกกับคุณดูเหมือนจะมีทั้งความสบายใจ เสียงหัวเราะ และจุ๊บหน้าผากแบบไม่ทันตั้งตัว",
      en: "You lead with enthusiasm instead of distance. Your presence is energetic, a little cheeky, and deeply loyal, giving off the feeling that romance with you would be equal parts comfort, laughter, and sudden forehead kisses.",
    },
    coreVibe: {
      th: "คาริสม่ายามโกลเดนอะวร์พร้อมรอยยิ้ม คุณอบอุ่น ตรงไปตรงมา และถ้าผูกพันแล้วก็ยากมากที่จะมองข้าม",
      en: "Golden-hour charisma with a grin. You are eager, warm, and impossible to ignore once attached.",
    },
    howYouLove: {
      th: "คุณรักผ่านการให้ความสนใจ การหยอกเล่น ความซื่อสัตย์ต่อความรู้สึก และความอยากให้อีกฝ่ายอยู่ใกล้ ยิ้มง่าย และอิ่มทางใจอยู่เสมอ",
      en: "You love through attention, teasing, loyalty, and a constant desire to keep the other person close, smiling, and emotionally fed.",
    },
    misunderstood: {
      th: "บางคนอาจคิดว่าความขี้เล่นของคุณมีแค่ด้านเบาๆ แต่ลึกลงไปนั้นมีสัญชาตญาณที่จริงจังมากในการปกป้องและอยู่ข้างคนที่คุณรัก",
      en: "People sometimes read your playfulness as lighthearted only, when underneath it is a very real instinct to protect and stay devoted.",
    },
    bestChemistry: {
      th: "คุณมีประกายมากกับคนที่ชอบถูกเอาใจ และรับมือกับความวุ่นวายเล็กๆ การ flirt และความหวานแบบติดหนึบได้ในเวลาเดียวกัน",
      en: "You spark with someone who enjoys being adored and can handle a little chaos, flirting, and clingy sweetness in the same breath.",
    },
    aestheticKeywords: {
      th: ["แดดอุ่น", "ฮันนี่กลอส", "นิตแวร์ขี้เล่น", "ชมพูอุ่น"],
      en: ["sunlit", "honey gloss", "playful knit", "warm blush"],
    },
    motif: { th: "วงแสงสว่างและผิวเคลือบใส", en: "Halo arcs and bright lacquer" },
    accent: { from: "from-amber-100", via: "via-rose-100", to: "to-orange-200", glow: "rgba(251, 146, 60, 0.22)" },
  },
  "pure-uke": {
    id: "pure-uke",
    name: { th: "Pure Uke", en: "Pure Uke" },
    descriptor: {
      th: "อ่อนโยน เปิดใจ และมีแกนโรแมนติกที่สว่างอยู่ข้างใน",
      en: "Open-hearted softness with a romantic, luminous center.",
    },
    summary: {
      th: "คุณมีพลังของการรับที่เป็นธรรมชาติ ทำให้ความรักรู้สึกนุ่มนวลและจริงใจ มีบางอย่างในตัวคุณที่ทั้งเปราะบางและดึงดูดแบบเงียบๆ ราวกับเป็นคนที่เปลี่ยน vulnerability ให้กลายเป็นบรรยากาศ ไม่ใช่การแสดง",
      en: "You have a naturally receiving energy that makes affection feel tender and sincere. There is something unguarded and quietly magnetic about you, like a person who turns vulnerability into atmosphere rather than spectacle.",
    },
    coreVibe: {
      th: "ความนุ่มแบบแสงจันทร์ แขนเสื้ออุ่นๆ และสายตาที่พูดมากกว่าคำพูด",
      en: "Moonlit softness, warm sleeves, and eyes that say more than your words do.",
    },
    howYouLove: {
      th: "คุณรักด้วยการเอนเข้าไปหา ไว้ใจอย่างช้าๆ แต่เต็มที่ และทำให้ความใกล้ชิดรู้สึกหวาน ลึก และชัดทางอารมณ์",
      en: "You love by leaning in, trusting slowly but fully, and making closeness feel sweet, intimate, and emotionally vivid.",
    },
    misunderstood: {
      th: "ความอ่อนโยนมักถูกเข้าใจผิดว่าอ่อนแอ แต่ความอ่อนไหวของคุณคือรูปแบบหนึ่งของการมองเห็น คุณรับรู้สิ่งสำคัญได้ไวและตอบสนองอย่างลึกจริง",
      en: "Softness is often mistaken for passivity, but your sensitivity is its own kind of discernment. You feel what matters and respond with real depth.",
    },
    bestChemistry: {
      th: "คุณรู้สึกถูกโอบรับที่สุดเมื่ออยู่กับคนที่มั่นคง ทำให้สบายใจ และมีความอบอุ่นพอจะทำให้ด้านนุ่มของคุณถูกชื่นชมแทนที่จะถูกมองว่าเปราะ",
      en: "You feel most held beside someone steady, reassuring, and affectionate enough to make your softer side feel celebrated instead of fragile.",
    },
    aestheticKeywords: {
      th: ["เพิร์ลโกลว์", "โรสวอเตอร์", "ชั้นผ้าโปร่ง", "ดอกไม้เงียบๆ"],
      en: ["pearl glow", "rosewater", "sheer layers", "quiet bloom"],
    },
    motif: { th: "กลีบจันทร์และหมอกมุก", en: "Lunar petal and pearl haze" },
    accent: { from: "from-pink-100", via: "via-rose-50", to: "to-lilac-100", glow: "rgba(244, 114, 182, 0.2)" },
  },
  "queen-uke": {
    id: "queen-uke",
    name: { th: "Queen Uke", en: "Queen Uke" },
    descriptor: {
      th: "ละมุนแบบราชินี มีเสน่ห์ชัด เล่นใหญ่กำลังดี และขี้แซวจนต้านยาก",
      en: "Regal softness with theatrical charm and irresistible tease.",
    },
    summary: {
      th: "คุณรู้วิธีรับความสนใจอย่างคนที่รู้ว่ามันเหมาะกับตัวเอง ความนุ่มของคุณถูกประดับด้วยประกาย อารมณ์ขัน และความเป็น dramatic ที่พอดี ทำให้การมีอยู่ของคุณทั้งสวยสะดุดตา ดึงดูด และอันตรายนิดๆ ในแบบที่น่าหลงใหล",
      en: "You know how to receive attention like it belongs there. Your softness is adorned with sparkle, humor, and a flair for emotional stagecraft, making your presence feel glamorous, magnetic, and slightly dangerous in the prettiest way.",
    },
    coreVibe: {
      th: "กลอส ลูกไม้ และสายตาที่บอกว่าคุณรู้ดีว่าตัวเองมีอิทธิพลแค่ไหน",
      en: "Gloss, lace, and a look that says you know exactly what effect you have.",
    },
    howYouLove: {
      th: "คุณรักด้วยเสน่ห์ ความน่ามอง การแสดงออกชัดเจน และพรสวรรค์ในการทำให้ความใกล้ชิดมีสีสัน สนุก และน่าจดจำ",
      en: "You love through allure, charm, expressive affection, and a talent for making intimacy feel vivid, fun, and deliciously memorable.",
    },
    misunderstood: {
      th: "บางคนอาจลดทอนคุณให้เหลือแค่ความ dramatic หรือ attitude ทั้งที่จริงคุณมักใช้ความแวววาวและการหยอกเย้าเป็นภาษาของความไว้ใจและความอ่อนโยน",
      en: "People may reduce you to dramatics or attitude, when in truth you often use glamour and teasing as a language for tenderness and trust.",
    },
    bestChemistry: {
      th: "คุณเหมาะมากกับคนที่มั่นคงพอจะหลงรักความเปล่งประกายของคุณโดยไม่ทำให้มันหม่นลง และมั่นใจพอจะ flirt กลับอย่างมีชั้นเชิง",
      en: "You thrive with someone grounded enough to adore your sparkle without dimming it, and confident enough to flirt back properly.",
    },
    aestheticKeywords: {
      th: ["กลอส", "ชมพูแชมเปญ", "ซาตินพลิ้ว", "แคตอาย"],
      en: ["gloss", "champagne pink", "satin flare", "cat-eye"],
    },
    motif: { th: "ลายดาวพุ่งและแผ่นเงาแวววาว", en: "Starburst filigree and gloss panels" },
    accent: { from: "from-fuchsia-200", via: "via-rose-100", to: "to-amber-100", glow: "rgba(217, 70, 239, 0.24)" },
  },
  "fierce-uke": {
    id: "fierce-uke",
    name: { th: "Fierce Uke", en: "Fierce Uke" },
    descriptor: {
      th: "ข้างในนุ่ม แต่ขอบคม มีไฟ และจำยากมากที่จะลืม",
      en: "Soft at the core, sharp at the edges, and very hard to forget.",
    },
    summary: {
      th: "แม้คุณอาจอยู่ในฝั่งที่เป็นผู้รับมากกว่า แต่คุณไม่เคยเป็นแค่ฉากหลัง ความหวานของคุณมีเขี้ยวเล็กๆ ปฏิกิริยาของคุณมีสัญชาตญาณ และพลังทางอารมณ์ของคุณก็ชัดพอจะทำให้คนอยากขยับเข้ามาใกล้อีก",
      en: "You may be on the receiving side of the dynamic, but you are never passive scenery. There is bite in your sweetness, instinct in your reactions, and a striking kind of emotional voltage that keeps people leaning closer.",
    },
    coreVibe: {
      th: "พลังแบบกลีบดอกไม้กับคมมีด อ่อนโยน แต่มีป้ายเตือนเขียนด้วยลิปกลอส",
      en: "Petal and blade energy. Tenderness, but with a warning label written in lip gloss.",
    },
    howYouLove: {
      th: "คุณรักด้วยความเข้มข้น ความรู้สึกที่มาไว และความอยากใกล้ชิดที่ยังเหลือพื้นที่ให้การงัดข้อ การหยอก และศักดิ์ศรีเล็กๆ ของตัวเอง",
      en: "You love with intensity, quick feeling, and a desire for closeness that still leaves room for pushback, banter, and flashes of pride.",
    },
    misunderstood: {
      th: "บางคนอ่านความคมของคุณเป็นความไม่นิ่ง แต่บ่อยครั้งคุณแค่แสดงออกชัด มองคนขาด และไม่ยอมให้ตัวเองถูกบีบให้ง่ายขึ้นเพื่อความสะดวกของใคร",
      en: "Some people read your edges as instability, when often you are simply expressive, discerning, and unwilling to be flattened into someone more convenient.",
    },
    bestChemistry: {
      th: "คุณเหมาะกับคนที่อบอุ่นและมั่นคงพอจะรองรับไฟในตัวคุณโดยไม่พยายามดับมัน",
      en: "You suit someone warm and sturdy who can hold space for your fire without trying to extinguish it.",
    },
    aestheticKeywords: {
      th: ["แดงกุหลาบเข้ม", "ไลเนอร์คม", "ซิลก์ตึงๆ", "storm rose"],
      en: ["crimson blush", "sharp liner", "silk tension", "storm rose"],
    },
    motif: { th: "กลีบคมและนีออนรูจ", en: "Blade petals and neon rouge" },
    accent: { from: "from-rose-200", via: "via-red-100", to: "to-orange-100", glow: "rgba(239, 68, 68, 0.22)" },
  },
  "versatile-seke": {
    id: "versatile-seke",
    name: { th: "Versatile / Seke", en: "Versatile / Seke" },
    descriptor: {
      th: "เคมีแบบไปด้วยกันได้ ปรับพลังเก่ง และสมดุลอย่างเป็นธรรมชาติ",
      en: "Mutual chemistry, adaptive energy, and beautifully fluid balance.",
    },
    summary: {
      th: "คุณไม่ได้เกิดมาเพื่อไดนามิกแบบหน้าเดียว เสน่ห์ของคุณอยู่ที่ช่วงกว้างของตัวเอง คุณนำก็ได้ ละลายก็ได้ หยอกก็ได้ ปลอบก็ได้ กอดก็ได้ หรือเป็นฝ่ายถูกกอดก็ได้ ขึ้นอยู่กับความรู้สึก จังหวะ และคนตรงหน้า",
      en: "You are not built for one-note dynamics. Your charm lives in range: the ability to lead or melt, tease or comfort, hold or be held, depending on the feeling, the timing, and the person in front of you.",
    },
    coreVibe: {
      th: "แรงดึงดูดที่สมดุลแต่เปลี่ยนแสงได้ คุณเคลื่อนไปตามเคมี ไม่ได้ยึดติดกับบทเดิมๆ",
      en: "Balanced magnetism with a mercurial streak. You move with chemistry instead of fixed script.",
    },
    howYouLove: {
      th: "คุณรักผ่านการตอบรับกันไปมา ความ reciprocity และสัญชาตญาณในการร่วมสร้างไดนามิก มากกว่าจะบังคับให้มันต้องอยู่ในรูปใดรูปหนึ่ง",
      en: "You love through responsiveness, reciprocity, and the instinct to co-create a dynamic instead of forcing one into place.",
    },
    misunderstood: {
      th: "บางคนอาจคิดว่าความยืดหยุ่นของคุณคือความไม่แน่ใจ ทั้งที่จริงมันมักเป็นความฉลาดทางอารมณ์ และการไม่ยอมแข็งทื่อเพียงเพื่อให้ดูชัดเจน",
      en: "People sometimes mistake your flexibility for indecision, when it is often emotional intelligence and a refusal to perform rigidity just to seem certain.",
    },
    bestChemistry: {
      th: "คุณเข้ากันมากกับคนที่มั่นใจพอจะเล่น คุย และปล่อยให้ไดนามิกค่อยๆ เติบโตเป็นสิ่งที่มีชีวิตจริง",
      en: "You match especially well with anyone confident enough to play, communicate, and let the dynamic evolve into something alive.",
    },
    aestheticKeywords: {
      th: ["โอปอลชิมเมอร์", "เงินเหลว", "คอนทราสต์สมดุล", "แสงสะท้อน"],
      en: ["opal sheen", "liquid silver", "balanced contrast", "mirrored light"],
    },
    motif: { th: "ส่วนโค้งคู่และปริซึมโอปอล", en: "Twin arcs and opaline prism" },
    accent: { from: "from-sky-100", via: "via-rose-100", to: "to-violet-100", glow: "rgba(125, 211, 252, 0.24)" },
  },
};
