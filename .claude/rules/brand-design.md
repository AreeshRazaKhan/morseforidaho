# Brand Design Rules — Morse For Idaho

Source of truth: `C:\Users\Dev\Downloads\Morse for idaho\brand-guide-v1.html` (Brand Guide v1.0).
These rules are **binding** for all UI, layout, and visual work in this repo. Read alongside
`code-style.md`. When the guide and the rules conflict, the brand guide wins — update this file.

---

## 1 · Brand DNA

- **Archetype:** Patriot · Heritage Classic sub-direction.
- **Emotional quality:** Timeless, Principled, Dignified.
- **Philosophy:** *The bench is a trust, not a platform.* Every asset should feel like it
  belongs on a document that matters — a certificate, a constitution, a sworn oath.
- **Candidate:** David Morse · Running for Fourth District Judge · Idaho · Election May 19, 2026.

### Four Design Principles (non-negotiable)

1. **Stewardship, Not Nostalgia** — heritage is referenced, never performed. Inherited, not costumed.
2. **Engraved Authority** — gold hairlines, small-caps labels, serif wordmarks. Every rule earned.
3. **Asymmetric Composure** — break the grid on purpose. Confident, not chaotic.
4. **Reverent Simplicity** — whitespace on parchment carries as much weight as ink.

---

## 2 · Color System

All colors live as CSS variables in `globals.css` and as Tailwind theme tokens. **Never hardcode
hex values in components.**

### Primary Palette
| Token | Hex | Use |
|---|---|---|
| `--navy` / `navy` | `#2C3858` | Hero backgrounds, headers, primary authority surfaces |
| `--burgundy` / `burgundy` | `#681828` | CTAs, link highlights, eyebrow accents, pull-quote emphasis |
| `--gold` / `gold` | `#D8B868` | Emblems, 1px hairline rules, italic display accents, seal detail |

### Neutrals (Parchment family)
| Token | Hex | Use |
|---|---|---|
| `--parchment` | `#FAF8F2` | Default page background (softer than white) |
| `--parchment-2` | `#F2ECDF` | Cards, alternating section fills |
| `--parchment-3` | `#E7DFC9` | Dotted rules, card borders |
| `--ink` | `#383028` | Body text on parchment (warmer than pure black) |
| `--ink-soft` | `#5A5247` | Secondary body |
| `--ink-muted` | `#8A8175` | Captions, metadata |

### Depth & Accent
| Token | Hex | Use |
|---|---|---|
| `--navy-deep` | `#1F2940` | Nav bar, footer, inner fills on dark sections |
| `--navy-ink` | `#141B2C` | Deepest shadow tier |
| `--burgundy-deep` | `#4A0F1B` | Hover state on burgundy CTAs |
| `--burgundy-light` | `#8B2A3E` | Secondary burgundy emphasis |
| `--gold-muted` | `#A08838` | Eyebrow labels, small-caps, tertiary gold |
| `--gold-deep` | `#7A6828` | Pressed states on gold |

### Semantic
| Token | Hex | Use |
|---|---|---|
| `--success` | `#4A6B3A` | Confirmations, endorsement badges |
| `--warning` | `#A0782A` | Non-critical alerts (gold family) |
| `--error` | `#681828` | Form errors (same as burgundy) |
| `--info` | `#3A5272` | Informational notices |

### Gold Discipline (critical rule)

- Heritage Gold is the **rarest voice** in the palette.
- **Never** use gold as a background on parchment — contrast fails.
- Gold appears **only** inside a navy or burgundy container, **or** as a 1px hairline rule,
  **or** as italic display type on dark.
- Overuse cheapens the entire system.

---

## 3 · Typography

Two serifs. One voice. Load via `next/font/google` in `app/layout.jsx`.

### Families

- **Display — `EB Garamond`** (`--font-display`) · weights 400, 500 italic, 600, 700, 800.
  Used for all H1–H4, logo wordmark, pull quotes, Roman numerals.
- **Body — `Source Serif Pro`** (`--font-body`) · weights 300, 400, 600, 700, 900.
  Used for all paragraphs, buttons, labels, UI copy.

No sans-serif. Ever.

### Type Scale (desktop reference)

| Role | Family | Size / Line | Tracking |
|---|---|---|---|
| H1 · Hero | Display 700 | `86px / 0.98` | `-0.02em` |
| H2 · Section | Display 700 | `56px / 1.1` | — |
| H3 · Subsection | Display 700 | `34px / 1.2` | — |
| H4 · Card | Display 700 | `24px / 1.3` | — |
| Eyebrow | Body 700 uppercase | `12px / 1.4` | `3px`, burgundy color |
| Body Large | Body 400 | `18px / 1.75` | — |
| Body | Body 400 | `16px / 1.65` | — |
| Caption | Body 600 | `13px / 1.5` | `0.5px`, muted only |

**Rules:**
- Body copy **never** drops below 16px. 13px captions reserved for legal lines, timestamps, metadata.
- Italic is reserved for **accent phrases** in the display family (EB Garamond 500 italic) — never
  whole paragraphs. Pattern: `<span className="italic font-medium text-burgundy">word</span>` inside H1–H3.
- Max one H1 per page. Never skip heading levels.
- Long-form body copy capped at `max-w-[60ch]`.

---

## 4 · Logo

The Morse lockup is a **stacked wordmark**: surname in display serif + 1px gold rule + office
line in small caps.

- Reserve clear space **equal to the cap-height of "MORSE"** on every side.
- Four approved variants: on parchment (navy wordmark), on navy (gold wordmark), on burgundy
  (gold wordmark), muted alt (burgundy wordmark).
- **Never:** stretch, skew, rotate, outline, drop-shadow, bevel, glow, substitute typefaces,
  place over busy imagery, or put gold "MORSE" on parchment.

---

## 5 · Layout & Spacing — Asymmetric Bento

This is the section that drives the whole site direction. Read carefully.

### Spacing Scale (8px base)

`4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128` → Tailwind `1 / 2 / 4 / 6 / 8 / 12 / 16 / 24 / 32`.
All margins, padding, gaps derive from this scale.

### Grid

- 12-column base.
- Tiles freely span **3 / 4 / 5 / 7 / 8 / 12** columns — favor **irregular, non-halving spans**
  (5+7, 4+8, 3+4+5, 8+4). Avoid 6+6 — it reads as corporate symmetry.
- **Never mirror a layout left-right on the same page.**
- **One hero tile dominates per section**; smaller tiles orbit it.
- Vertical rhythm must **break at every section change** — alternate parchment and navy
  backgrounds, shift tile heights, rotate which column the hero lives in.

### Bento / Asymmetric Composition Requirements

Every major section must:

1. Have one **dominant** tile (hero card, oversized stat, quote) and 2–5 supporting tiles.
2. Mix tile aspect ratios within the same grid — tall portrait next to wide landscape next to square.
3. Use **negative space** deliberately: at least one tile in every section should be empty
   parchment or navy with a single Roman numeral, number, or gold rule.
4. Shift the dominant tile's column position between sections (left → right → center → left).
5. Break the bounding box: oversized serif watermarks, numerals, or "MORSE" wordmarks should
   bleed off-canvas (clipped by `overflow-hidden` on the section).

### Section Rhythm

- Alternate background surfaces: `parchment → navy → parchment-2 → navy-deep → parchment`.
- Section padding: `py-24 md:py-32` minimum. Heroes: `py-32 md:py-48`.
- Horizontal gutter: `px-6 md:px-12 lg:px-20`.
- Max container: `max-w-[1400px]` (artistic sections may break to `max-w-none`).

### Artistic Stunning Requirements

The rebuild is explicitly **not** a template site. Every page should feel hand-composed:

- Oversized editorial numerals (Roman or Arabic) as layout anchors — `text-[200px]` to `text-[400px]`,
  color `parchment-3` or `gold/10`, positioned absolutely as background.
- Display type must regularly run large: H2s at `text-6xl md:text-8xl`, H1 hero at `text-7xl md:text-9xl`.
- Gold 1px hairline rules as section dividers — never solid thick borders.
- Section labels: small-caps eyebrow + 30px gold hairline (`<span class="before:content-[''] before:w-[30px] before:h-px before:bg-burgundy">`).
- Pull quotes must break the column grid — span wider than body copy, set in italic display.

---

## 6 · UI Components

Three primitives compose every page: **Buttons · Navigation · Cards**. All use the same
spacing, radius, and type ratios. Build with shadcn/ui primitives and restyle via Tailwind
tokens — never write custom CSS classes.

### Buttons

- Padding `py-4 px-7`, radius `rounded-sm` (4px), font `text-xs font-bold uppercase tracking-[1.8px]`.
- Variants:
  - `primary` — burgundy bg, parchment text. Main CTAs. Hover → `burgundy-deep`.
  - `gold` — gold bg, navy text. **Donate only.** Hover → `gold-muted` bg, parchment text.
  - `ghost` — transparent, navy text + navy border. Secondary actions. Hover → fills navy.
  - `dark` — navy bg, parchment text. Secondary emphasis on light sections.
- Icon: right-arrow `→` only. No lucide icons inside CTAs.

### Header / Nav

- `h-[72px]`, navy-deep background, fixed top.
- Gold display wordmark left (`MORSE`), uppercase small-caps link list center
  (`text-[11px] tracking-[1.6px] text-parchment/60 font-semibold`), burgundy CTA right.
- Gold hairline `border-b border-gold/15` appears only on scroll.

### Cards

- `rounded-[14px]`, `border border-parchment-3`, `bg-white`, `p-8`.
- Gold Roman-numeral eyebrow (`I · FOUNDATION`), display H4 title, 13.5px body.
- Hover: `translate-y-[-3px]` — no shadow change.

### Forms

- Inputs: `border-parchment-3`, parchment-2 fill, ink text, burgundy focus ring.
- Every input has a persistent label (never placeholder-only).
- Errors announced via ARIA live regions.

---

## 7 · Design Patterns (signature motifs)

Maximum **two patterns per page**. Never combine a drop cap with a Roman numeral in the same column.

1. **Double-Rule Frame** — two parallel 1px gold hairlines, 5px apart. Certificate motif.
   Reserved for portraits, endorsement cards, formal/printed contexts. Never on buttons or UI chrome.
2. **Illuminated Drop Cap** — oversized EB Garamond 500 italic, Patriot Burgundy, ~3 body-line
   height, first letter of long-form content only (bios, letters, policy briefs).
3. **Roman Numeral Anchors** — large italic gold Roman numeral paired with small-caps subtitle.
   Every major section opens with one. The campaign reads like a bound volume, not a scroll.
4. **Gold-Rule Pull Quote** — italic display type, 3px solid gold left rule, first line in gold.
   Endorsement quotes and section openers only.

Web heroes prefer Roman numerals over double-rule frames. Drop caps are for long-form text only.

---

## 8 · Photography & Imagery

- **Warm natural light. Real Idaho places. Real Idaho people. No stock. No gloss.**
- Candidate mood: courthouse steps, kitchen tables, veteran halls. Never podiums. Never flag props.
- Hero treatment: 180° navy gradient from transparent (top) to `navy/90` (bottom), starting at 40% height.
- No filters, vignettes, or color grades beyond the gradient.
- Every photo of David has descriptive alt text. Decorative watermarks use `aria-hidden="true"`.
- Use Next.js `<Image />` always, per `code-style.md`.

---

## 9 · Accessibility (WCAG AA minimum, AAA primary)

- Parchment + ink body: 11:1+. Navy + parchment: 12.4:1. Burgundy + parchment: 11.8:1.
- Gold + navy text: 6.7:1 (AA) — this is the **only** permitted gold-text combination.
- Focus ring: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold`.
- Never rely on color alone to convey state.
- Motion respects `prefers-reduced-motion`. No parallax. No autoplay video with sound.
- Form errors via ARIA live regions, not color.

---

## 10 · Voice (copy direction)

- Short, declarative, serif sentences. Three-word taglines favored:
  *"Faith. Family. Freedom." · "Experienced. Ethical. Fair." · "Stand for Idaho."*
- Chapters, not sections. Articles, not posts.
- Eyebrows use Roman numerals and small caps: `CHAPTER · II · THE PLATFORM`.
- Avoid: exclamation points, emoji, hype adjectives ("amazing", "incredible"), partisan attack lines.
- Favor: constitutional language, courtroom vocabulary, oath-like cadence.

---

## 11 · Implementation Checklist

When adding a new section or page, verify:

- [ ] Background alternates from the previous section (parchment ↔ navy family).
- [ ] Grid is asymmetric — no 6+6, no mirrored halves.
- [ ] One dominant tile; the rest orbit.
- [ ] At least one oversized display numeral or watermark anchors the layout.
- [ ] Eyebrow label + 30px gold hairline opens the section.
- [ ] Only tokens used — zero hardcoded hex, zero inline style colors.
- [ ] Gold used sparingly, never on parchment, never as background of text block.
- [ ] All headings use EB Garamond; all body uses Source Serif Pro.
- [ ] Body ≥ 16px; captions ≥ 13px only for metadata.
- [ ] Max two signature patterns on the page.
- [ ] Section passes AA contrast on every text/background combination.
- [ ] Uses shadcn/ui primitives restyled with tokens, not custom markup.
- [ ] Global footer renders the "Powered by Operation 1776" attribution line, legibly visible (not `/30` or lower opacity) — required on every page.
