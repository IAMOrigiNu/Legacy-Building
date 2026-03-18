# Design System Specification: The Architectural Authority

## 1. Overview & Creative North Star: "The Modern Estate"
This design system is built to transcend the "template" aesthetic of property management. Our Creative North Star is **"The Modern Estate"**—a digital philosophy that balances the rigid strength of Albany’s architectural heritage with the fluid, welcoming transparency of modern community-focused services.

We move beyond standard grids by embracing **Intentional Asymmetry**. By utilizing high-contrast typography scales and overlapping "layered" surfaces, we create a layout that feels curated rather than generated. This system rejects the "boxed-in" feel of traditional real estate portals, opting instead for a breathable, editorial experience that commands authority through restraint.

---

## 2. Colors & Surface Philosophy
The palette is rooted in `primary` (#00193c), a deep, authoritative navy, softened by `secondary` slate tones and grounded by `tertiary` warm umbers.

### The "No-Line" Rule
To maintain a premium, high-end feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through:
- **Tonal Shifts:** Transitioning from `surface` (#f8fafb) to `surface-container-low` (#f2f4f5).
- **Negative Space:** Using the `16` (5.5rem) or `20` (7rem) spacing tokens to define content blocks.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create depth:
1.  **Base:** `surface` (The foundation).
2.  **Sectioning:** `surface-container-low` (Subtle grouping).
3.  **Actionable Elements:** `surface-container-lowest` (#ffffff) for cards to create a "lifted" feel against darker backgrounds.

### The "Glass & Gradient" Rule
For hero sections and primary CTAs, do not use flat fills.
- **Gradients:** Use a subtle linear transition from `primary` (#00193c) to `primary_container` (#002d62) at a 135-degree angle.
- **Glassmorphism:** For floating navigation or over-image labels, use `surface` at 80% opacity with a `backdrop-filter: blur(12px)`.

---

## 3. Typography: Editorial Authority
We utilize a high-contrast pairing of **Noto Serif** for prestige and **Manrope** for functional clarity.

*   **The Power of Display:** Use `display-lg` (3.5rem) in `primary` for hero statements. The Noto Serif typeface communicates a legacy-focused, "established" tone.
*   **The Functional Body:** All UI instructions and long-form content use `manrope`. Use `body-lg` (1rem) for general copy to ensure accessibility for Albany’s diverse community demographic.
*   **The "Label" Signature:** Small labels (`label-md`) should be set in all-caps with a `0.05rem` letter-spacing to mimic architectural blueprints.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-standard." We use **Ambient Depth**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift without a single line of CSS shadow.
*   **Ambient Shadows:** Where floating is required (e.g., Modals), use: `box-shadow: 0 12px 40px rgba(25, 28, 29, 0.06);`. The shadow color must be a tint of `on-surface` (#191c1d), never pure black.
*   **The "Ghost Border" Fallback:** If a border is required for input clarity, use `outline-variant` (#c4c6d1) at **20% opacity**.
*   **The Corner Radius:** Use `md` (0.375rem) for functional elements (buttons/inputs) and `xl` (0.75rem) for large containers to soften the "Authoritative" tone into a "Welcoming" one.

---

## 5. Components & Interaction

### Buttons
*   **Primary:** `primary` background with `on_primary` text. Use `xl` roundedness for a modern, approachable feel.
*   **Tertiary (Editorial):** No background. `primary` text with a 2px underline using `tertiary_fixed_dim`.

### Input Fields
*   **Style:** Ghost-bordered (20% `outline-variant`) with a `surface-container-low` fill.
*   **Focus:** Transition background to `surface-container-lowest` and border opacity to 100%.

### Cards & Lists
*   **Anti-Divider Rule:** Forbid the use of `<hr>` tags.
*   **Implementation:** Separate list items using `spacing-4` (1.4rem) and subtle background shifts. A "Property Card" should use `surface-container-lowest` with an `xl` radius and a `0.5` padding scale for internal margins.

### Signature Component: The "Legacy Card"
A large-format card for property highlights. It features an image with a `20%` overlay of `primary`, with `display-sm` typography bleeding slightly over the image edge to break the grid.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use `spacing-16` and `spacing-20` to create dramatic, editorial-style breathing room.
*   **Do** overlap elements (e.g., a text box slightly overhanging an image) to create a custom, high-end feel.
*   **Do** use `tertiary` (#2a1500) sparingly as an "ink" color for small accents or icons to add warmth.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Always use `on_surface` (#191c1d).
*   **Don’t** use 1px solid borders to separate the "Header" from the "Body." Use a shift from `surface-container-lowest` to `surface`.
*   **Don’t** crowd the layout. If in doubt, double the white space. Authority is conveyed through the confidence to leave pixels empty.

---

## 7. Spacing & Rhythm
Rhythm is dictated by the **3.5rem (Spacing 10)** increment. All major sections should be separated by this value to create a predictable, trustworthy cadence for the user as they navigate through property listings and service divisions.