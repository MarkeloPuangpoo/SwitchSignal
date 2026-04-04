# Switch Signal

A motion-rich personality quiz that surfaces relationship dynamics through five behavioral axes. Built to feel like a real consumer product — soft-luxe visuals, tactile interactions, a screenshot-worthy result reveal, and a Thai-first bilingual UI.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| UI Primitives | shadcn-style (CVA + clsx) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Landing page** — editorial hero section, teaser card, and feature walkthrough
- **Quiz flow** — 16 questions, 4 choices each, progress bar, previous/next navigation, animated transitions, and restart
- **Result page** — archetype reveal, axis score visualizations, insight cards, and a shareable result card
- **Bilingual UI** — Thai-first copy with persistent Thai/English toggle across all pages
- **Client-side only** — no backend; quiz state lives in memory and `sessionStorage`

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Landing page
│   ├── quiz/page.tsx       # Quiz flow
│   ├── result/page.tsx     # Result reveal
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── floating-background.tsx
│   ├── footer-disclaimer.tsx
│   ├── hero-section.tsx
│   ├── providers/
│   │   └── quiz-provider.tsx
│   ├── quiz/
│   ├── result/
│   └── ui/
├── data/
│   ├── archetypes.ts
│   └── questions.ts
├── lib/
│   ├── scoring.ts
│   └── utils.ts
└── types/
    └── quiz.ts
```

## Scoring System

Quiz responses are mapped to five axes:

| Axis | Label |
|---|---|
| `L` | Lead |
| `C` | Care |
| `S` | Soft |
| `T` | Tease |
| `F` | Flex |

After 16 questions, a **direction score** is computed as `L − S`:

| Direction | Classification |
|---|---|
| `≥ 3` | Seme |
| `≤ −3` | Uke |
| Between | Versatile / Seke |

**Seme subtypes:**

| Subtype | Condition |
|---|---|
| Puppy Seme | `L ≥ 6 && C ≥ 8 && T ≥ 6` |
| Gentle Seme | `C ≥ 9 && L ≥ 7 && C ≥ T` |
| King Seme | _(default)_ |

**Uke subtypes:**

| Subtype | Condition |
|---|---|
| Queen Uke | `S ≥ 7 && T ≥ 8` |
| Fierce Uke | `S ≥ 7 && (L ≥ 6 \|\| T ≥ 6)` |
| Pure Uke | _(default)_ |

## Design System

- **Typography** — high-contrast serif display face paired with a modern sans for body text
- **Visual language** — soft gradients, blurred glass surfaces, luminous shadows, and rounded geometry
- **Motion** — used deliberately for pacing and emotional payoff; `prefers-reduced-motion` is respected throughout
- **Result card** — intentionally centered and dense for collectible screenshot aesthetics

## Roadmap

- [ ] Result image export
- [ ] localStorage history
- [ ] Nickname input before quiz
- [ ] Theme toggle (dark/light)
- [ ] Analytics integration
- [ ] Unit tests for score classification
- [ ] Optional ambient audio toggle
