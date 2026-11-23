# 8X.LIFE — Digital Editorial Redesign

A high-performance digital editorial experience for **[8x.life](https://8x.life)**, designed around human orchestration in the era of automated intelligence. The project emphasizes editorial typography, strict contrast ratios, fluid responsiveness, and high-agency candidate self-selection.

---

## Core Thesis & Identity

> **Central Premise:** *"AI changes what is possible. People determine what happens next."*  
> At 8x, decentralized human networks across 50+ countries work alongside intelligent systems to execute outcomes across marketing distribution, engineering automation, and parallel qualitative research.

### Visual Architecture
* **Canvas Background:** `#F5F3EC` (Warm archival paper tone)
* **Primary Ink:** `#111111` (Deep saturated black)
* **High-Voltage Accent:** `#D7FF45` (Electric lime for focal interactions)
* **Warm Secondary:** `#FF704D` (Terracotta coral for badges and metadata)
* **Muted Neutral:** `#77766F` (Slate grey for secondary annotations)
* **Dark Contrast Surfaces:** `#0E0E0E` / `#161616` (Used for honest candidate fit gates)

### Typographic System
* **Display & Titles:** `Space Grotesk` (Tight negative tracking, fluid `clamp()` sizing)
* **Editorial Body:** `Inter` (Optimized readability and structured line heights)
* **Technical Labels:** `IBM Plex Mono` (Uppercase coordinates, timestamps, and badges)

---

## Architecture & Section Directory

```
src/
├── components/
│   ├── Navbar.tsx             # Frosted sticky header, scrollspy tracking, mobile drawer
│   ├── Hero.tsx               # Editorial headline, coordinate stamp, craft composition
│   ├── Marquee.tsx            # Continuous horizontal ticker for operating tenets
│   ├── CompanyScale.tsx       # Verified volume metrics (50+ countries, 250k+ managed)
│   ├── Manifesto.tsx          # 5-step thesis breakdown with sequential disclosures
│   ├── Principles.tsx         # 4 operational principles with daily litmus questions
│   ├── People.tsx             # Verified co-founder profiles (Jaka Bavdek, Theo Bui)
│   ├── FitCheck.tsx           # Dark self-selection matrix ("Thrive Here" vs "Think Twice")
│   ├── HiringPhilosophy.tsx   # Evidence-first 4-phase evaluation workflow
│   ├── Opportunities.tsx      # Synced live positions from 8x.careers/join
│   ├── FinalCTA.tsx           # Imposing closing call to action
│   └── Footer.tsx             # Official web directory, platform nodes, and legal info
├── data/
│   ├── manifesto.ts           # The 5 foundational manifesto statements
│   ├── principles.ts          # Operational principles and daily litmus tests
│   └── roles.ts               # Live role specifications and application routes
└── styles/
    └── globals.css            # Base typography, grid overlays, reduced-motion rules
```

---

## Getting Started

### System Requirements
* Node.js runtime (v18.0.0 or higher recommended)
* npm package manager (v9.0.0 or higher)

### Installation & Local Run
```bash
# Clone the repository
git clone https://github.com/aastha-yadav2/8x-life-editorial.git
cd 8x-life-editorial

# Install project dependencies
npm install

# Launch Vite local development server
npm run dev
```
Visit `http://localhost:5173` to view the running site.

### Production Build & Static Preview
```bash
# Verify TypeScript types and generate production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Quality Assurance & Verification

The project includes responsive layout testing and build verification across standard device widths:

* **Desktop (1440px):** Full-bleed asymmetrical layout with editorial framing.
* **Tablet (768px):** Clean two-column grid wrapping and preserved typography.
* **Mobile (390px & 360px):** Responsive `clamp()` typography, zero horizontal overflow, and accessible touch targets.
* **Reduced Motion:** Fully honors `prefers-reduced-motion: reduce` by dampening animations and transitions.
* **Automated CI:** GitHub Actions workflow executing type checking and production builds on all pushes to `main`.

---

## Deployment

The project is structured for zero-configuration deployment on platforms such as Vercel, Netlify, or Cloudflare Pages.

### Vercel Deployment via CLI
```bash
# Deploy to preview environment
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## Repository Documentation

* [Research & Website Audit](research/website-audit.md) — Baseline audit of legacy 8x web properties.
* [Design Decisions](research/design-decisions.md) — Detailed rationale for typographic and layout choices.
* [Contributing Guidelines](CONTRIBUTING.md) — Workflow and pull request conventions.
* [Changelog](CHANGELOG.md) — Historical release and refinement log.
* [Security Policy](SECURITY.md) — Vulnerability reporting and supported environments.
* [License](LICENSE) — Open source software license terms.
