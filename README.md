# Switch Signal

Switch Signal is a polished, motion-rich relationship-dynamic personality quiz built with Next.js 16, TypeScript, Tailwind CSS v4, shadcn-style UI primitives, and Framer Motion. It is designed to feel like a real consumer product: soft-luxe visuals, tactile interactions, a screenshot-worthy result reveal, and bilingual Thai-first UI with a built-in language toggle.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Overview

- Landing page with premium editorial hero, teaser card, and productized explanation
- Quiz flow with 16 local questions, 4 choices each, progress tracking, previous/next flow, restart, and animated transitions
- Result page with archetype reveal, axis visualizations, insight cards, and a dedicated social-share style result card
- Thai-first copy across landing, quiz, and result pages with persistent Thai/English language switching
- No backend for v1; quiz state is stored client-side and mirrored into `sessionStorage`

## Folder Structure

```text
src/
  app/
    page.tsx
    quiz/page.tsx
    result/page.tsx
    layout.tsx
    globals.css
  components/
    floating-background.tsx
    footer-disclaimer.tsx
    hero-section.tsx
    providers/quiz-provider.tsx
    quiz/
    result/
    ui/
  data/
    archetypes.ts
    questions.ts
  lib/
    scoring.ts
    utils.ts
  types/
    quiz.ts
```

## Scoring System

- Five axes drive the quiz: `L` Lead, `C` Care, `S` Soft, `T` Tease, `F` Flex
- Each answer contributes points to one or more axes
- After 16 questions, direction is computed as `L - S`
- Classification rules:
  - `direction >= 3`: Seme side
  - `direction <= -3`: Uke side
  - otherwise: Versatile / Seke
- Seme subtypes:
  - Puppy Seme: `L >= 6 && C >= 8 && T >= 6`
  - Gentle Seme: `C >= 9 && L >= 7 && C >= T`
  - otherwise King Seme
- Uke subtypes:
  - Queen Uke: `S >= 7 && T >= 8`
  - Fierce Uke: `S >= 7 && (L >= 6 || T >= 6)`
  - otherwise Pure Uke

## Design Notes

- Editorial typography pairs a high-contrast serif display face with a modern sans for app readability
- The visual system relies on soft gradients, blurred glass surfaces, luminous shadows, and rounded geometry instead of generic Tailwind defaults
- Motion is used throughout for pacing and emotional payoff, while `prefers-reduced-motion` is respected
- Result design is intentionally centered and dense enough to feel collectible in screenshots without feeling cluttered

## Future Enhancements

- Result image export
- localStorage history
- Nickname input
- Theme toggle
- Analytics hooks
- Unit tests for score classification
- Optional ambient sound toggle
