# 8X.LIFE — Design Decisions & Editorial Strategy

## 1. Core Creative Concept
**"BUILT BY PEOPLE WHO MAKE THINGS HAPPEN."**

The objective of this redesign is not to create another interchangeable Silicon Valley SaaS landing page with pastel purple gradients, floating 3D icons, or glowing glass cards. Instead, we treat 8x as a modern editorial publication: authoritative, intellectually demanding, candid, and magnetizing to high-agency builders while deliberately repelling those who seek bureaucratic comfort.

---

## 2. What Was Borrowed from `e2.vc` (and What Was Deliberately Not Copied)

### Borrowed Elements:
1. **Editorial Confidence & Tone:** Uncompromising, direct prose that talks to builders as peers, not prospects.
2. **Warm Editorial Paper Base:** Shifting away from harsh `#000000` or sterile `#FFFFFF` in favor of warm tactile off-white (`#F5F3EC`).
3. **Typographic Scale & Asymmetry:** Headings command the viewport using tight tracking, responsive `clamp()`, and intentional broken line wraps.
4. **Tactile Metadata & Micro-Details:** Technical monospace annotations (`IBM Plex Mono`) serving as metadata stamps, editorial section numbers (`01 — 05`), and coordinates.

### Deliberately Not Copied:
1. **VC-Specific Narratives:** `e2.vc` focuses on capital allocation, portfolio companies, and regional venture narratives (CEE/Türkiye). 8x is an operating human orchestration company building and shipping products at scale.
2. **Gimmicky Physics/Games:** While `e2.vc` features draggable physics elements and letter-bounce games, 8x demands operational gravitas and clarity of purpose. Interactive motion is kept purposeful, fast, and respectful of user attention.
3. **Different Color Signature:** Rather than `e2.vc`'s electric cobalt blue (`#3451F5`), 8x establishes an unmistakable high-voltage identity combining ink `#111111`, electric lime `#D7FF45`, and warm terracotta `#FF704D`.

---

## 3. Visual System & Design Tokens

### Color Palette
- **Background (`canvas`):** `#F5F3EC` (Warm off-white, reminiscent of luxury editorial stock)
- **Primary Text (`ink`):** `#111111` (Deep saturated charcoal black)
- **Accent (`lime`):** `#D7FF45` (Electric high-contrast yellow-green for active states and fit-check highlights)
- **Secondary (`coral`):** `#FF704D` (Warm terracotta/orange for subtle warmth, tags, and markers)
- **Muted (`slate`):** `#77766F` (Neutral warm grey for subheaders, timestamps, and secondary captions)
- **Surface / Card (`white`):** `#FFFFFF` (Crisp contrast highlights)
- **Inverted Dark (`ink-deep`):** `#0E0E0E` / `#161616` (Used for the honest fit check section to create visceral contrast)

### Typography Hierarchy
- **Display & Headings:** `Space Grotesk` (700 Bold / 600 SemiBold). Tight negative tracking (`tracking-tight`), dramatic scaling (`clamp(2.5rem, 6vw, 5.5rem)`).
- **Body & Editorial Reading:** `Inter` (400 Regular / 500 Medium). High legibility across screen sizes, optimized for editorial density (`leading-relaxed`).
- **Technical Metadata, Labels & Tickers:** `IBM Plex Mono` (400 / 500). Uppercase, generous letter-spacing (`tracking-wider`), used for section numbering, country tags, and operational badges.

---

## 4. Section-by-Section Architectural Strategy

### A. Navigation
- **Sticky Header:** Frosted warm glass blur (`backdrop-blur-md bg-[#F5F3EC]/90`) with crisp 1px borders.
- **Brand Mark:** Custom SVG editorial 8x wordmark and logomark.
- **Anchor Flow:** Smooth navigation to `#manifesto`, `#how-we-work`, `#people`, and `#roles`.
- **Primary Action:** Direct external link to live hiring portal (`https://www.8x.careers/join`).
- **Mobile Menu:** Full-screen overlay drawer with animated staggered links and accessible focus trapping.

### B. Hero Section
- **Editorial Eyebrow:** `LIFE AT 8X / GLOBAL / REMOTE-FIRST` in `IBM Plex Mono`.
- **Headline Architecture:**
  ```text
  THE FUTURE
  IS BUILT BY
  PEOPLE WHO
  MAKE IT HAPPEN.
  ```
- **Editorial Composition:** Striking multi-layered composition featuring geometric crop frames, authentic craftsmanship photography, and live status badges.
- **Interactive Ticker (Marquee):** Smooth infinite loop ticker broadcasting core operating mantras: `THINK BIGGER / MOVE FASTER / OWN THE OUTCOME / BUILD WHAT MATTERS`.

### C. Company Scale Metrics
- Bold metric cards grounding the employer brand in verified real-world operational scale:
  - **50+ COUNTRIES** — Global remote execution with distributed talent across timezones.
  - **250K+ HUMANS MANAGED** — Massive-scale human orchestration across marketing, engineering, and research.
  - **300M+ ORGANIC REACH** — Unpaid, authentic audience engagement delivered by decentralized creators.

### D. The 8x Manifesto
- Sequential editorial layout breaking down the 5 core tenets:
  1. *AI is changing the world.*
  2. *As building becomes easier, distribution becomes increasingly valuable.*
  3. *Jobs will change, but work will continue to evolve.*
  4. *Human execution remains essential.*
  5. *8x supplies and orchestrates humans to deliver business outcomes.*
- Interactive accordion or sequential reveal with visual horizontal rules and deep-link out to `https://8x.life/manifesto`.

### E. How We Work (Proposed Principles)
- 4 clear, opinionated operating principles:
  - `01 OWNERSHIP` — Take responsibility for outcomes, not just assigned tasks.
  - `02 EXECUTION` — Turn ideas into shipped work.
  - `03 CURIOSITY` — Keep learning, experimenting and questioning assumptions.
  - `04 ACCOUNTABILITY` — Make progress visible. Be honest about results.
- Transparent disclaimer tag indicating these are proposed editorial principles inferred from company positioning.

### F. The Human Side (Leadership)
- Direct, unadorned presentation of the 2 verified co-founders:
  - **Jaka Bavdek** (Co-founder, CEO) → `https://jakabavdek.com/`
  - **Theo Bui** (Co-founder, CTO) → `https://www.theobui.com/`
- Clean monochrome portrait aesthetic, no invented biographies or artificial quotes.

### G. The Honest Fit Check (Radical Self-Selection)
- Full-bleed inverted dark theme (`bg-[#111111] text-[#D7FF45]`).
- Side-by-side comparison matrix:
  - **YOU MAY THRIVE HERE IF** (Autonomous initiative, comfortable with ambiguity, bias toward action).
  - **THINK TWICE IF** (Needs prescribed step-by-step instructions, resists shifting priorities, talks rather than ships).
- Protects both candidate time and internal hiring velocity.

### H. Hiring Philosophy
- **"SHOW US YOUR WORK. NOT JUST YOUR CV."**
- Details the immediate practical assignment model: skip lengthy recruiter phone screens and get evaluated on an actual problem within hours.
- Clear mention of the 2-week trial mechanism and partner company networks.

### I. Open Opportunities (Verified Live Roles)
- 10 verified live roles sourced directly from `8x.careers/join`.
- Categorized into:
  - **8x Core Roles** (Intrapreneur, Product Designer, Reddit Account Manager).
  - **Global Market Launch Leads** (Spain, UK, Germany, Poland, Japan, Portugal/Brazil, Southeast Asia).
- Direct external routing to the official submission forms.

### J. Final Call to Action & Footer
- Imposing closing statement: **"MAKE SOMETHING THAT MATTERS."**
- Comprehensive editorial footer linking to official destinations (`8x.life`, `/manifesto`, `/team`, `8x.careers`, LinkedIn).

---

## 5. Technical Architecture & Performance Budget
- **Framework:** React 19 / 18 + Vite + TypeScript
- **Styling:** Tailwind CSS with custom font tokens and fluid sizing (`clamp`)
- **Animation:** Framer Motion (subtle scroll reveals, layout springs, marquee ticker, respect for `prefers-reduced-motion`)
- **Icons:** `lucide-react`
- **Accessibility:** Semantic landmarks (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), ARIA attributes for modal drawer, keyboard tab index handling, contrast compliance WCAG AA/AAA.

