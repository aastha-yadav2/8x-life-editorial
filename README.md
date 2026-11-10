# 8X.LIFE — Premium Editorial Redesign

A production-quality, responsive website redesign for [8x.life](https://8x.life), inspired by the editorial confidence, human storytelling, and bold typographic rhythm of [e2.vc](https://e2.vc).

> **Core Concept:** *"BUILT BY PEOPLE WHO MAKE THINGS HAPPEN."*  
> **Brand Mission:** AI changes what's possible. People change what happens next. At 8x, we bring together ambitious people, intelligent systems, and relentless execution to turn ideas into real-world outcomes.

---

## 🚀 Live Preview & Architecture

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (Custom editorial palette, fluid typography with `clamp()`)
- **Animation:** Framer Motion (Restrained text reveals, scroll springs, infinite ticker)
- **Icons:** Lucide React
- **Typography:**
  - Headlines: Space Grotesk (Heavy weights, tight tracking)
  - Body: Inter (Clear editorial legibility)
  - Metadata & Tickers: IBM Plex Mono (Technical coordinates, timestamps, badges)
- **Color Palette:**
  - Background Canvas: `#F5F3EC`
  - Primary Ink: `#111111`
  - Accent Lime: `#D7FF45`
  - Secondary Coral: `#FF704D`
  - Muted Slate: `#77766F`
  - Dark Surface: `#0E0E0E` / `#161616`

---

## 📑 Completed Sections

1. **Header Navigation:** Sticky frosted header with custom 8x SVG mark, anchor links (`#manifesto`, `#how-we-work`, `#people`, `#roles`), mobile drawer with accessible focus handling, and direct link to live careers.
2. **Hero Section:** Editorial metadata stamp (`LIFE AT 8X / GLOBAL / REMOTE-FIRST`), oversized headline typography, supporting copy, dual CTAs, high-contrast engineering craftsmanship composition, and active coordinate indicators.
3. **Infinite Marquee Ticker:** `THINK BIGGER / MOVE FASTER / OWN THE OUTCOME / BUILD WHAT MATTERS`.
4. **Company Scale:** Verified metrics: `50+ COUNTRIES`, `250K+ HUMANS MANAGED`, `300M+ ORGANIC REACH`, with clear context across Marketing, Engineering, and Research.
5. **The 8x Manifesto:** 5 sequential tenets with animated typography, horizontal separators, and deep-link to `8x.life/manifesto`.
6. **How We Work:** 4 proposed editorial principles (Ownership, Execution, Curiosity, Accountability) with daily litmus test prompts.
7. **The Human Side:** Verified co-founders Jaka Bavdek (CEO) and Theo Bui (CTO) with official profile links to `jakabavdek.com` and `theobui.com`, and global timezone anchors.
8. **The Honest Fit Check:** Visually contrasting dark section (`bg-[#0E0E0E] text-[#D7FF45]`) featuring radical self-selection gates (*You May Thrive Here If* vs. *Think Twice If*).
9. **Hiring Philosophy:** *"SHOW US YOUR WORK. NOT JUST YOUR CV."* Explaining the 4-step evidence-first hiring model and immediate practical challenge.
10. **Open Opportunities:** 10 verified live roles synced from `8x.careers/join` with filtering between 8x Core Roles and Global Launch Internships.
11. **Final Call to Action:** Imposing *"MAKE SOMETHING THAT MATTERS"* closing banner with *"FIND YOUR ROLE"* CTA.
12. **Footer:** Comprehensive editorial directory linking to all official 8x destinations, ecosystem platforms (`8x.social`, `8x.business`, `8x.careers`), and legal notices.

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ (tested on Node v24.13.0)
- npm 9+ (tested on npm 11.6.2)

### Setup
```bash
# Clone or navigate to workspace
cd d:/8x

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Verification
```bash
# Build TypeScript and Vite bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Vercel Deployment Instructions

### Method 1: Deploy with Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Method 2: Deploy via Git (GitHub / GitLab / Bitbucket)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: 8x.life premium editorial redesign"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com/new):
   - Import your repository.
   - Framework Preset: **Vite** (auto-detected).
   - Root Directory: `./`.
   - Build Command: `npm run build`.
   - Output Directory: `dist`.
3. Click **Deploy**. Vercel will build and assign a global production URL (e.g., `https://8x-life.vercel.app`).

---

## 🔬 Research & Documentation
- Comprehensive audit: [`/research/website-audit.md`](./research/website-audit.md)
- Design decisions & e2.vc comparison: [`/research/design-decisions.md`](./research/design-decisions.md)
- Responsive screenshots: [`/research/screenshots/`](./research/screenshots/)

