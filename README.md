# Switch Signal

> A motion-rich Thai-first quiz-game hub for stylish personality formats, poetic self-discovery, and screenshot-worthy result reveals. Built to feel like a real consumer product with polished motion, collectible result cards, and multiple playable arcs.

---

## Badges

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-private-red?style=flat-square)

---

## Changelog

### v2.1 — Inner Light + Result Art Pass (2026-04-06)
- Added **The Name of Your Inner Light** — a new 4-room poetic self-discovery game with 16 questions and 8 result endings
- Introduced a new 5-axis poetic scoring model: `Glow`, `Veil`, `Tide`, `Flame`, and `Bloom`
- Added interlude screens between the four sections so the flow reads like a guided emotional journey instead of a flat form
- Built dedicated launcher, play, and result routes for the new game under `/games/inner-light`
- Added full-background result artwork support for all 8 poetic endings using files from `public/<result-name>.png`
- Added a very subtle artwork-origin micro-label inside the screenshot area
- Refined the language toggle so it is smaller and fades away on scroll instead of sitting on top of key content

### v2.0 — School Arc
- Added **Student or School Legend** — a second complete quiz with a dedicated 2-axis scoring system (`S` Structured / `E` Edge) and 5 school archetypes
- New `/games` route as a multi-quiz hub
- Custom `not-found.tsx` (404) page with on-brand design
- SEO: `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `twitter-image.tsx`
- `language-toggle.tsx` extracted as a standalone reusable component

### v1.0 — Original Release
- Relationship-dynamic personality quiz with 5 behavioral axes and 7 archetypes
- Thai-first bilingual UI with persistent language toggle
- Motion-rich quiz flow: 16 questions, animated transitions, result reveal
- Client-side only — state managed via `sessionStorage`

---

## Tech Stack

| Layer | Package | Version |
|---|---|---|
| Framework | `next` | 16.2.2 |
| UI Runtime | `react` / `react-dom` | 19.2.4 |
| Language | `typescript` | ^5 |
| Styling | `tailwindcss` | ^4 |
| Animation | `framer-motion` | ^12 |
| Icons | `lucide-react` | ^1.7 |
| Class Utilities | `clsx` + `tailwind-merge` + `class-variance-authority` | latest |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Quizzes

### Quiz 1 — Switch Signal (Relationship Arc)
**Route:** `/quiz` → `/result`

Surfaces relationship-dynamic archetypes through 5 behavioral axes scored across 16 questions.

| Axis | Label |
|---|---|
| `L` | Lead |
| `C` | Care |
| `S` | Soft |
| `T` | Tease |
| `F` | Flex |

**Direction score** = `L − S`

| Range | Side |
|---|---|
| `≥ 3` | Seme |
| `≤ −3` | Uke |
| Between | Versatile / Seke |

**Seme subtypes:**

| Archetype | Condition |
|---|---|
| Puppy Seme | `L ≥ 6 && C ≥ 8 && T ≥ 6` |
| Gentle Seme | `C ≥ 9 && L ≥ 7 && C ≥ T` |
| King Seme | _(default)_ |

**Uke subtypes:**

| Archetype | Condition |
|---|---|
| Queen Uke | `S ≥ 7 && T ≥ 8` |
| Fierce Uke | `S ≥ 7 && (L ≥ 6 \|\| T ≥ 6)` |
| Pure Uke | _(default)_ |

---

### Quiz 2 — Student or School Legend (School Arc)
**Route:** `/games/student-or-school-legend`

Reveals how you carry yourself at school through 20 questions mapped to 2 axes.

| Axis | Label |
|---|---|
| `S` | Structured |
| `E` | Edge |

**Archetypes:**

| ID | Name (EN) | Descriptor |
|---|---|---|
| `true-student` | The Real Student | Reliable, composed, sharp when it counts |
| `chill-student` | The Chill Student | Put together, but never painfully rigid |
| `hybrid` | The Study-Edge Hybrid | Responsible enough to deliver, bold enough to be unforgettable |
| `structured-edge` | The Structured Icon | Cool, intense, and clearly in control |
| `school-icon` | The School Icon | High presence, unmistakable aura, impossible to ignore |

---

### Quiz 3 — The Name of Your Inner Light (Poetic Arc)
**Route:** `/games/inner-light`

A 16-question poetic game that walks players through four inner rooms: light and color, silence and wounds, love and connection, and hidden becoming.

| Axis | Label |
|---|---|
| `G` | Glow |
| `V` | Veil |
| `T` | Tide |
| `F` | Flame |
| `B` | Bloom |

**Archetypes:**

| ID | Name (EN) |
|---|---|
| `quiet-flame` | The Quiet Flame |
| `midnight-bloom` | The Midnight Bloom |
| `tender-archive` | The Tender Archive |
| `velvet-storm` | The Velvet Storm |
| `soft-orbit` | The Soft Orbit |
| `golden-wound` | The Golden Wound |
| `hidden-spring` | The Hidden Spring |
| `unfinished-light` | The Unfinished Light |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                          # Landing / hub page
│   ├── layout.tsx                        # Root layout
│   ├── globals.css                       # Global design tokens
│   ├── not-found.tsx                     # Custom 404 page
│   ├── sitemap.ts                        # Dynamic sitemap
│   ├── robots.ts                         # robots.txt config
│   ├── opengraph-image.tsx               # OG image generator
│   ├── twitter-image.tsx                 # Twitter card image
│   ├── quiz/
│   │   └── page.tsx                      # Switch Signal quiz flow
│   ├── result/
│   │   └── page.tsx                      # Switch Signal result reveal
│   └── games/
│       ├── inner-light/
│       │   ├── layout.tsx
│       │   ├── page.tsx                  # Poetic Arc launcher
│       │   ├── play/page.tsx             # Poetic Arc play flow
│       │   └── result/page.tsx           # Poetic Arc result reveal
│       └── student-or-school-legend/
│           ├── layout.tsx
│           ├── page.tsx                  # School Arc launcher
│           ├── play/page.tsx             # School Arc play flow
│           └── result/page.tsx           # School Arc result reveal
│
├── components/
│   ├── floating-background.tsx
│   ├── footer-disclaimer.tsx
│   ├── hero-section.tsx
│   ├── language-toggle.tsx
│   ├── providers/
│   │   ├── locale-provider.tsx
│   │   ├── poetic-game-provider.tsx
│   │   ├── quiz-provider.tsx
│   │   └── school-game-provider.tsx
│   ├── poetic-game/                      # Poetic Arc components
│   │   ├── poetic-game-shell.tsx
│   │   └── poetic-game-result.tsx
│   ├── quiz/                             # Switch Signal quiz components
│   ├── result/                           # Switch Signal result components
│   ├── student-game/                     # School Arc components
│   │   ├── student-game-shell.tsx
│   │   └── student-game-result.tsx
│   └── ui/                               # Shared UI primitives
│
├── data/
│   ├── questions.ts                      # Switch Signal questions (16)
│   ├── archetypes.ts                     # Switch Signal archetypes (7)
│   ├── school-game.ts                    # School Arc questions (20) + archetypes (5)
│   ├── poetic-game.ts                    # Poetic Arc questions (16) + archetypes (8)
│   └── games.ts                          # Hub registry for live games
│
├── lib/
│   ├── scoring.ts
│   ├── school-game.ts
│   ├── poetic-game.ts
│   ├── seo.ts
│   └── utils.ts
│
└── types/
    ├── quiz.ts
    ├── school-game.ts
    └── poetic-game.ts
```

---

## Design System

- **Typography** — high-contrast serif display face paired with a modern sans for body readability
- **Visual language** — soft gradients, blurred glass surfaces, luminous shadows, and rounded geometry
- **Motion** — applied deliberately for pacing and emotional payoff; `prefers-reduced-motion` is fully respected
- **Result cards** — intentionally centered and dense for collectible screenshot aesthetics
- **Theming** — each archetype carries its own gradient accent from a curated Tailwind color palette

---

## Roadmap

- [ ] Result image export (canvas-based download)
- [ ] `localStorage` history across sessions
- [ ] Nickname input before quiz start
- [ ] Dark / light theme toggle
- [ ] Analytics integration
- [ ] Unit tests for score classification
- [ ] Optional ambient audio toggle
- [ ] Quiz 4 (TBD)
