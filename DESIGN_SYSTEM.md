# SparkEdu Design System

> Edgy, modern, classic. No gimmicks.
> Reference aesthetic: apple.com

---

## Principles

1. **Clarity first** — every element earns its place. If it doesn't add meaning, remove it.
2. **Typography does the heavy lifting** — large, confident headings. No decorative blobs.
3. **Light and dark sections alternate** — creates visual rhythm without color overload.
4. **One brand color, used sparingly** — `#5B3FDE` for brand moments only.
5. **Motion is purposeful** — subtle fade/slide on scroll entry. No loops, bounces, or glows.

---

## Color

### Light Backgrounds
| Token              | Value       | Use                          |
|--------------------|-------------|------------------------------|
| `--color-bg`       | `#FFFFFF`   | Default section background   |
| `--color-bg-secondary` | `#F5F5F7` | Alternating sections, cards |

### Dark Backgrounds
| Token                   | Value     | Use                          |
|-------------------------|-----------|------------------------------|
| `--color-bg-dark`       | `#1D1D1F` | Hero, feature panels         |
| `--color-bg-dark-raised`| `#2C2C2E` | Cards on dark sections       |

### Text
| Token                     | Value                    | Use                         |
|---------------------------|--------------------------|-----------------------------|
| `--color-text`            | `#1D1D1F`                | Primary on light            |
| `--color-text-secondary`  | `#6E6E73`                | Supporting copy on light    |
| `--color-text-tertiary`   | `#86868B`                | Captions, metadata          |
| `--color-text-white`      | `#F5F5F7`                | Primary on dark             |
| `--color-text-white-dim`  | `rgba(245,245,247,0.68)` | Supporting copy on dark     |

### Brand
| Token                | Value                    | Use                               |
|----------------------|--------------------------|-----------------------------------|
| `--color-brand`      | `#5B3FDE`                | CTAs, brand moments, active states|
| `--color-brand-hover`| `#4930B8`                | Hover state for brand elements    |
| `--color-brand-subtle`| `rgba(91,63,222,0.08)`  | Badge backgrounds, highlights     |

### Borders
| Token                      | Value                    | Use                  |
|----------------------------|--------------------------|----------------------|
| `--color-border`           | `rgba(0,0,0,0.08)`      | Default on light     |
| `--color-border-strong`    | `rgba(0,0,0,0.15)`      | Emphasis on light    |
| `--color-border-dark`      | `rgba(255,255,255,0.10)`| Default on dark      |
| `--color-border-dark-strong`| `rgba(255,255,255,0.18)`| Emphasis on dark    |

---

## Typography

**Font:** Inter (loaded from Google Fonts)
**Fallback:** `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`

### Scale

| Name         | Size (clamp)          | Weight | Line-height | Letter-spacing | Use                      |
|--------------|-----------------------|--------|-------------|----------------|--------------------------|
| Display 2XL  | 48–96px               | 700    | 1.04        | -0.03em        | Hero headline            |
| Display XL   | 40–72px               | 700    | 1.06        | -0.028em       | Section openers          |
| Display LG   | 32–56px               | 700    | 1.08        | -0.025em       | Feature headings         |
| Body LG      | 18px                  | 400    | 1.6         | —              | Intro paragraphs         |
| Body MD      | 17px                  | 400    | 1.6         | —              | Standard body copy       |
| Body SM      | 15px                  | 400    | 1.55        | —              | Secondary body           |
| Label MD     | 14px                  | 500    | 1.4         | 0.005em        | UI labels                |
| Label SM     | 12px                  | 600    | 1.4         | 0.06em         | Overlines (uppercase)    |

### Overline (eyebrow) labels
Use `UPPERCASE • TRACKED • SMALL` text above section headlines to orient the reader.
```html
<span class="overline">Product</span>
<span class="overline-brand">New</span>   <!-- for brand-colored overlines -->
<span class="overline-dark">Feature</span> <!-- on dark backgrounds -->
```

---

## Spacing (8-pt grid)

| Token       | Value  |
|-------------|--------|
| `--space-1` | 8px    |
| `--space-2` | 16px   |
| `--space-3` | 24px   |
| `--space-4` | 32px   |
| `--space-5` | 40px   |
| `--space-6` | 48px   |
| `--space-8` | 64px   |
| `--space-10`| 80px   |
| `--space-12`| 96px   |
| `--space-16`| 128px  |
| `--space-20`| 160px  |

Sections use `--space-20` vertical padding (160px desktop, 96px mobile).

---

## Border Radius

| Token         | Value  | Use                        |
|---------------|--------|----------------------------|
| `--radius-sm` | 6px    | Small elements, inputs     |
| `--radius-md` | 12px   | Badges, small cards        |
| `--radius-lg` | 18px   | Standard cards             |
| `--radius-xl` | 24px   | Media frames, large cards  |
| `--radius-pill`| 9999px| Buttons, tags              |

---

## Shadows

Shadows are extremely subtle — just enough to lift elements.

| Token         | Use                          |
|---------------|------------------------------|
| `--shadow-sm` | Default card resting state   |
| `--shadow-md` | Card hover / elevated panels |
| `--shadow-lg` | Modals, dropdowns            |
| `--shadow-xl` | Media frames, hero images    |

---

## Buttons

### Variants
| Class            | Background      | Text   | Use                             |
|------------------|-----------------|--------|---------------------------------|
| `.btn-primary`   | `#1D1D1F`       | White  | Primary CTA on light sections   |
| `.btn-brand`     | `#5B3FDE`       | White  | Brand CTA, enrollment           |
| `.btn-outline`   | Transparent     | Dark   | Secondary on light sections     |
| `.btn-ghost-light`| White 10%      | White  | Secondary on dark sections      |

All buttons use pill shape (`border-radius: 9999px`) and scale subtly on hover (`scale(1.02)`).
**No translateY hover effect** — scale only.

---

## Cards

| Class           | Surface         | Use                               |
|-----------------|-----------------|-----------------------------------|
| `.card`         | White           | On `--color-bg` sections          |
| `.card-raised`  | White + shadow  | On `--color-bg-secondary` sections|
| `.card-dark`    | `#2C2C2E`       | On `--color-bg-dark` sections     |

---

## Section Layout Pattern

Alternate sections follow this sequence:

```
1. Dark   — Hero (black bg, white text, large CTA)
2. Light  — VIZ feature overview (#FFFFFF)
3. Gray   — VIZ feature detail (#F5F5F7)
4. Dark   — Sparky product (#1D1D1F)
5. Gray   — About Us (#F5F5F7)
6. Light  — Contact / CTA (#FFFFFF)
```

---

## Motion

- **Entry animation:** `opacity: 0 → 1` + `translateY(24px → 0)` over 500ms, `ease-out`
- **Stagger:** 80ms between sibling elements
- **No loops.** No glows. No blobs. No bounces.
- **Respect `prefers-reduced-motion`** — all transitions collapse to 0.01ms.

---

## What we removed

| Old element              | Replaced by                                      |
|--------------------------|--------------------------------------------------|
| Purple/yellow/pink blobs | Geometry, whitespace, strong typography          |
| Poppins + Caveat fonts   | Inter (single unified typeface)                  |
| Pill gradient buttons    | Clean pill buttons: dark fill or outline only    |
| `playful-card` class     | `card`, `card-raised`, `card-dark`               |
| `.text-gradient` rainbow | `.text-brand-gradient` (brand purple only)       |
| Gradient section bgs     | Flat white / flat gray / flat dark               |
| `--color-accent` (pink)  | Removed — no accent color                        |
| `--color-secondary` (yellow)| Removed — brand is purple only               |

---

## Tailwind Aliases

Quick reference for Tailwind classes that map to design tokens:

```
bg-bg              → #FFFFFF
bg-bg-secondary    → #F5F5F7
bg-bg-dark         → #1D1D1F
bg-bg-raised       → #2C2C2E

text-ink           → #1D1D1F
text-ink-secondary → #6E6E73
text-ink-tertiary  → #86868B

text-brand         → #5B3FDE
bg-brand           → #5B3FDE
bg-brand-subtle    → rgba(91,63,222,0.08)

border-line        → rgba(0,0,0,0.08)
border-line-strong → rgba(0,0,0,0.15)
border-line-dark   → rgba(255,255,255,0.10)

shadow-sm / md / lg / xl  → design system shadows
rounded-sm/md/lg/xl/pill  → design system radii

text-display-2xl   → clamp(48px, 8vw, 96px)
text-display-xl    → clamp(40px, 6vw, 72px)
text-display-lg    → clamp(32px, 4.5vw, 56px)
text-body-lg / md / sm
text-label-md / sm
```
