---
version: alpha
name: Drawing Sheet
description: Portfolio of a mobility & aerospace engineer — an engineering drawing sheet with one red approval stamp.
colors:
  primary: "#111111"
  secondary: "#3A3A3A"
  secondary-soft: "#737373"
  tertiary: "#A8251F"
  tertiary-deep: "#841C17"
  tertiary-on-night: "#E0685F"
  neutral: "#F9F9F9"
  neutral-2: "#F3F3F3"
  neutral-3: "#EBEBEB"
  outline: "#DADADA"
  night: "#141414"
  night-surface: "#1D1D1D"
  on-night: "#E6E6E6"
  on-night-soft: "#9A9A9A"
typography:
  headline-display:
    fontFamily: IBM Plex Sans
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.05
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 76.8px
    fontWeight: 700
    lineHeight: 1.1
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 29.6px
    fontWeight: 400
    lineHeight: 1.3
  title-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.35
  lede:
    fontFamily: IBM Plex Sans
    fontSize: 15.6px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 13.5px
    fontWeight: 400
    lineHeight: 1.7
  button:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
  label-md:
    fontFamily: Fira Code
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
  label-sm:
    fontFamily: Fira Code
    fontSize: 11.5px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 64px
  section: 130px
  container: 1100px
  gutter: 20px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "#FFFFFF"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 11px
  button-primary-hover:
    backgroundColor: "{colors.tertiary-deep}"
  button-ghost:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 11px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-on-night:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.lg}"
    padding: 24px
  tag:
    backgroundColor: "{colors.neutral-3}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 3px
  link-accent:
    textColor: "{colors.tertiary}"
    typography: "{typography.button}"
  link-accent-on-night:
    textColor: "{colors.tertiary-on-night}"
    typography: "{typography.button}"
---

# Drawing Sheet

## Overview

The site is the portfolio of Shuwen Gong — aerospace final-assembly engineer turned mobility engineer (Chalmers), aimed at engineering recruiters at Volvo Group and Einride. The positioning is ADAS, active safety, and system modelling and control; electrification is a supporting track, never the headline. Its reference object is **an engineering drawing sheet**: pale paper, one weight of graphite ink, hairline construction lines, monospaced annotations in the margin — and a single red approval stamp. Everything on the page belongs to that world.

The page should feel precise, quiet and confident, not sold. The reader is a working engineer who will judge the craft; the design's job is to present the evidence (projects, patent, timeline) cleanly and let one red mark carry all the emphasis. Two sections — Featured Work and Engineering Experience — are printed on night paper to give the sheet a rhythm; they expand from an inset block to full width as the reader scrolls, like a sheet unrolling.

Behind the content runs a faint line-art street scene (road with sparse traffic, pedestrians on both kerbs, aircraft with contrails, a skyline with mountains and clouds). It is drawn in the same single-weight ink as the drawing sheet and stays well below text contrast so it never competes with reading.

## Colors

A one-ink-plus-one-stamp system. There is exactly one accent hue; nothing else is coloured.

- **Ink — Primary ({colors.primary}):** headlines and core text. Near-black, never pure black.
- **Ink soft — Secondary ({colors.secondary}):** running copy inside cards and panels.
- **Ink muted ({colors.secondary-soft}):** secondary copy, ledes, captions. Deliberately darker than a typical #888 so it stays legible over the line-art background (4.5:1 on paper).
- **Stamp — Tertiary ({colors.tertiary}):** the single red approval stamp. It appears only as: the primary button, small accent links, the ink-rule under section headings, the year chips on the career timeline, the small entry marker before each experience heading, the surname in the hero (and the G in the nav wordmark), and launched paper planes. Hover deepens it to {colors.tertiary-deep}. It is a brick red on purpose; the brighter vermilion #E8382F was tried and rejected as too loud.
- **Stamp on night ({colors.tertiary-on-night}):** the stamp lightened for use as *text* on night surfaces. Brick red on night paper is only ~2.5:1, so small accent text on dark sections must use this token (5.1:1 on {colors.night-surface}).
- **Paper — Neutral ({colors.neutral}):** the page. {colors.neutral-2} and {colors.neutral-3} are the two deeper paper tones for chips, icon wells and inner panels. {colors.outline} is the hairline rule.
- **Night ({colors.night}) / Night surface ({colors.night-surface}):** the two dark sections and the cards printed on them. Elevation on night is expressed by *lightness*, not glow: a card is a lighter surface than its section. Text on night is {colors.on-night}; soft text is {colors.on-night-soft}.

## Typography

Two faces, clearly different in job. **IBM Plex Sans** carries every word a person reads; **Fira Code** carries every piece of data a person scans.

- **Display and headlines:** Plex Sans at weight 700 — never heavier (Plex has no 800; synthesised bold is not allowed). The hero name is {typography.headline-display}, fluid between 54px and 80px; section titles are {typography.headline-lg}, dropping to 48px on phones. Headings are roman. Emphasis, when needed, is weight or the stamp colour, never italic.
- **Tagline:** {typography.headline-md} in muted ink, typed in letter by letter on load.
- **Titles inside cards:** {typography.title-md}.
- **Running text:** {typography.body-md} on the page, {typography.body-sm} inside cards and panels, {typography.lede} for section ledes. Keep measures under 75 characters; ledes are capped at 560px.
- **Data labels:** Fira Code, sentence case, no letter-spacing tricks. {typography.label-md} for in-card meta lines (dates, roles) and pane titles; {typography.label-sm} for tags, year chips and the modal badge. Monospace means dates and numbers align without extra work.
- **Buttons and links:** {typography.button}.

## Layout

A fixed-max-width sheet: content sits in a **1100px** container with 32px side padding, always left-aligned — the drawing sheet is read from the top-left, so nothing is centred except the avatar column in the hero and the company/game stacks on the career timeline.

Sections are separated by generous but uneven vertical space (around {spacing.section}; About and Additional sit tighter, Contact breathes more; ~100px on phones) and by *tone*: paper → night → paper → night → paper. Within a section, layout is done with grid and gap, never per-element margins.

- **Hero:** two columns, text left (1fr) and a 188px avatar column right; height is set by its content, not the viewport. Padding is bottom-heavy (80px above, 108px below) so the hero settles into the page instead of floating.
- **About:** four capability cards in one row (two per row under 900px, one per row under 580px).
- **Featured Work:** three equal project cards, thumbnail bleeding to the card's top edge.
- **Additional Projects:** six cards, three per row.
- **Engineering Experience:** three stacked company panels; the games panel holds a left-to-right career timeline with company above, dated year chip on the line, titles below; the far-right stop is 1.5× wide to hold two titles side by side.
- **Spacing scale:** {spacing.xs} {spacing.sm} {spacing.md} {spacing.lg} {spacing.xl} {spacing.2xl}; grid gutter {spacing.gutter}; card padding 24px.

## Elevation & Depth

Depth is mostly *tonal*. On paper, cards are a slightly opaque paper tone over the animated background with a hairline {colors.outline} border and a barely-there shadow (`0 1px 3px rgba(0,0,0,.06)`); hover lifts the card 4px and tints the border to the stamp colour; the shadow stays put. On night, depth is lightness: section {colors.night}, card {colors.night-surface}, inner panel a 4% white wash — shadows on night stay tight and dark, never a coloured halo.

The two night sections carry the page's one dramatic depth cue: they start as an inset block hugging the 1100px column and expand to full bleed as they scroll into view.

## Shapes

Rounded, but with a hierarchy. Outer containers (project cards, company panels, timeline stops) use {rounded.lg}; inner panels and buttons use {rounded.md}; tags use {rounded.sm}; pills (status badge, year chips) and the avatar are {rounded.full}. Never the same radius on a container and the thing inside it.

## Components

- **Primary button** — stamp red fill, white text, {rounded.md}; hover deepens to {colors.tertiary-deep} and lifts 1–2px with a red-tinted shadow. Used once per view (CV, email).
- **Ghost button** — hairline {colors.outline} border on paper, ink-soft text; hover darkens the border. LinkedIn, GitHub.
- **Accent link** — small 600-weight text in the stamp colour ("View details", "GitHub"); on night sections use {colors.tertiary-on-night}. Hover fades to 65% opacity. No arrows appended.
- **Card** — see Elevation. Project cards: thumbnail (greyscale at rest, colour on hover), small icon well, title, body-sm, tag row, link row.
- **Tag / chip** — {colors.neutral-3} fill, hairline border, Fira Code label-sm. Sentence case.
- **Year chip** — Fira Code pill on the timeline line: on paper, stamp-red text and border on paper fill; on night, solid stamp fill with white text.
- **Ink-rule** — the 110px red brush stroke under each section heading; static.
- **Entry marker** — a 10px stamp-red square before each experience and education heading; it replaces the older accent side-rail.
- **Status badge** — pill with a red dot: "Open to ADAS & active safety roles".

## Motion

One orchestrated entrance, then everything is just there.

- **Load:** the hero types the name (72ms/character) then the tagline (34ms/character); the caret keeps blinking at the end of the tagline; then badge, tags, identity list, buttons and avatar fade in together over 600ms with 40–320ms stagger. No other section animates on entry.
- **Scroll:** the two night sections expand from inset to full bleed, driven by scroll position (no easing curve — it tracks the finger).
- **Hover:** 200–300ms ease-out; a lift and a border tint at most, plus the cursor glow on cards — never a shadow escalation or a scale stacked on top.
- **Ambient:** the street scene moves at a deliberately slow rate (speed factor 0.281); a paper plane forms at an idle cursor over 3s and flies off, or launches on click.
- **Reduced motion:** the background renders a single static frame, the typewriter is skipped and the hero shows complete, and all CSS transitions and the caret blink are disabled.

## Do's and Don'ts

- **Do** keep exactly one accent. If something needs colour and it isn't the stamp, it doesn't need colour.
- **Don't** use the stamp red as small text on night surfaces — use {colors.tertiary-on-night}.
- **Don't** bring back #E8382F or any brighter red; the brick red is the decision.
- **Do** set every label in sentence case. **Don't** add uppercase tracked eyebrows above headings, "A · B · C" badge strings, or a "→" after button text.
- **Don't** animate sections into view on scroll. The typewriter is the page's only entrance.
- **Do** use Plex Sans 700 as the heaviest weight. **Don't** italicise headings.
- **Do** keep the line-art background below text contrast; if a reader notices it while reading, it is too dark.
- **Don't** introduce gradients, glows, coloured shadows, glass panels as decoration, or a second typeface family.
- **Do** give outer and inner containers different radii; **don't** nest a bordered card inside a bordered card without a reason a reader can see.
- **Do** ship every interactive element with a visible `:focus-visible` ring in the stamp colour.
- **Don't** give hover lift, glow or a zoom cursor to anything that is not clickable — About cards, hero tags, the avatar and the game/company logos stay still; only project cards, buttons, links and lightbox images respond.
