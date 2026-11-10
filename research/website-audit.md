# 8X.LIFE Website Audit & Competitive Deconstruction

**Target Properties Analyzed:**
- `https://8x.life/` (Current Homepage)
- `https://8x.life/manifesto` (The 8x Manifesto)
- `https://8x.life/team` (Official Leadership/Team)
- `https://www.8x.careers/join` (Careers & Live Roles)
- `https://e2.vc/` (Visual & Editorial Benchmark)

---

## 1. Information Architecture & Navigation Audit

### Current `8x.life` IA
- **Homepage Structure:**
  - Extremely minimal, almost brutalist single-column Next.js presentation.
  - Hero wordmark with a vector SVG logomark.
  - Primary statement: *"250k+ people in 50+ countries, working in marketing, engineering and research. 8x Social for consumer brands, 8x LinkedIn for B2B, plus 8x Research, 8x Sales and 8x Hiring."*
  - Dual pathways: "For brands" vs "For people".
  - Metrics & social proof: 250,000 in network, 300M+ organic views, 12,000+ posts, 60+ countries.
  - Minimal founder mention referencing "The two founders".
  - Links out to sub-properties: `8x.social`, `8x.business`, `8x.careers`.
- **Navigation:**
  - Minimal or absent global navigation; relies heavily on browser history and inline footer links.
  - Dedicated sub-pages: `/manifesto` (6 single-sentence statements), `/team` (simple unstyled 2-item list: Jaka Bavdek and Theo Bui).
  - Lack of a sticky or unified employer-branding nav bar across pages.

### Candidate Experience on `8x.careers/join`
- **Application Workflow:**
  - Direct, radical deviation from traditional recruiting: No long ATS forms or CV upload prerequisites.
  - Practical-first philosophy: Submitting an application triggers an automated or immediate practical trial/assignment.
  - Role inventory: 10 live positions (Intrapreneur, Product Designer, Account Manager - Reddit, and 7 Market Lead Internships across Europe, Latin America, and Asia).
  - Disconnect: A candidate landing on `8x.life` encounters a sparse B2B agency-like description rather than an inspiring employer brand that clarifies *why* someone top-tier should join or what high-velocity life at 8x feels like.

---

## 2. Typography & Visual Hierarchy

### Current `8x.life`
- **Type Choices:** Uses system serif/newsreader font variables (`newsreader` variable) coupled with plain sans-serif utility text.
- **Hierarchy:** High contrast in sentiment, but low typographic dynamism. Headings and body copy lack rhythmic scaling, editorial tension, and modern web craft.
- **Composition:** Centered, narrow max-width (`max-w-[42rem]`), resulting in a blog-post or text-document aesthetic rather than a high-caliber digital flagship.

### Benchmark Inspiration: `e2.vc` (VASA Agency)
- **Primary Typeface:** Tight-tracked geometric grotesque (`Inter Tight`) set at massive scale (`clamp(3.5rem, 8vw, 9rem)`).
- **Visual Rhythm:** High editorial asymmetry, alternating between generous margins and unexpected offset columns.
- **Color Palette:** Warm organic paper background (`#FCF7F0`) contrasted against deep ink black (`#111111`) and punchy accents (cobalt blue on e2; electric lime `#D7FF45` and coral `#FF704D` for 8x).
- **Editorial Voice:** Direct, human, confident, and unapologetic. Replaces corporate jargon with authentic founder-level declarations.

---

## 3. Imagery & Media Strategy

### Existing Gaps
- `8x.life` currently uses illustrative placeholder statements (*"Names on this page are examples. Photos from Unsplash."*) or abstract dots (*"Each dot is a person"*).
- There is no authentic photographic framing of how modern distributed operators work, build, and ship.
- Generic corporate stock photos (handshakes, smiling people in suits, sterile glass offices) would destroy credibility.

### Redesign Image Strategy
- High-contrast, monochromatic and duotone editorial photography emphasizing craft, focus, industrial architecture, and late-night shipping culture.
- Tasteful abstract geometric graphics and ticker strips.
- Authentic representation of the founders with official links to their personal portfolios (`jakabavdek.com`, `theobui.com`).
- Explicit policy: **Never misrepresent stock models as internal employees.**

---

## 4. Content Gaps & Candidate Journey

| Stage | Existing Flaw on 8x.life | Editorial Redesign Solution |
| :--- | :--- | :--- |
| **First Impression (Hero)** | Cold, clinical B2B agency overview; reads like a vendor pitch. | **"THE FUTURE IS BUILT BY PEOPLE WHO MAKE IT HAPPEN."** Sets an electric, high-agency tone. Clarifies remote-first & global scope immediately. |
| **Philosophy & Culture** | Buried on `/manifesto` as 6 disjointed lines. | **Integrated Manifesto & Principles:** Seamless editorial narrative on human orchestration in the AI era. |
| **Culture Fit / Filter** | Implicit only; unsuitable candidates apply thinking it's standard corporate remote work. | **The Honest Fit Check:** High-contrast black/lime self-selection gate (*"You May Thrive Here If"* vs *"Think Twice If"*). |
| **Hiring Mechanics** | Vague until candidate reaches deep into 8x.careers. | **"SHOW US YOUR WORK. NOT JUST YOUR CV."** Highlights the immediate practical assignment and 2-week trial mechanism upfront. |
| **Role Discovery** | Users must leave the site to discover what jobs even exist. | **Curated Live Roles Showcase:** Distinguishes 8x core roles from global launch internships with direct deep-links to `8x.careers/join`. |

---

## 5. Responsive Behavior & Performance

- **Current Responsive Experience:** The existing site collapses cleanly simply because it is a bare-bones single column.
- **Redesign Requirements:**
  - Responsive layout scaling across 360px (compact mobile), 390px (iPhone), 768px (tablet), and 1440px+ (desktop).
  - Use fluid typography with CSS `clamp()`.
  - Accessible mobile drawer navigation with focus trapping and smooth anchor scrolling.
  - Zero horizontal overflow (`overflow-x: clip` / `overflow-x: hidden`).
  - Strict support for `prefers-reduced-motion`.

