# Design system

Tokens live in `src/index.css` (`@theme`). Tailwind v4 reads them directly. There is no separate `tailwind.config.js`.

## Color

| Token | Value | Use |
|---|---|---|
| ink | `#07090f` | Page background |
| ink-2 | `#0e1320` | Raised strips, inputs |
| panel | `#141b2b` | Cards |
| panel-2 | `#1b2436` | Featured cards |
| mint | `#49f0b8` | Primary action, positive change |
| mint-2 | `#14b88a` | Links on light surfaces |
| gold | `#e7c98a` | Emphasis, risk, premium |
| paper | `#f6f3ec` | Text on dark, admin page background |
| mist | `#93a0b5` | Secondary text |
| rose | `#ff6b81` | Negative prices |

Admin content sits on `paper` with white cards and an ink sidebar. The portal uses `.portal` CSS variables so the same components flip between dark and light.

## Type

- UI: Outfit
- Headlines: Instrument Serif
- Both load from Google Fonts in `index.html`

## Shape

- Cards: `rounded-3xl`, 1px line at 10% white
- Buttons: full pill. Mint fill with ink text for the main action
- Spacing: page content `max-w-6xl`, portal and admin content padded `px-4 sm:px-6`

## Voice

Short sentences. No borrowed broker names, logos, or slogans. Sample numbers are labelled as illustrative. The trade screen says **Demo / simulated**.

## Risk

The CFD warning in `src/config/brand.ts` appears in the footer and on the funding and home close. Do not soften it.
