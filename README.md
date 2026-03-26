# Oasis Glow – Desert Luxe Fashion

<!-- Oasis Glow – Ready for Salla import -->

Production-ready Salla **Twilight** theme for fashion and apparel (abayas, modest wear, luxury streetwear, accessories, jewelry, thobes). Built on the official **[SallaApp/theme-raed](https://github.com/SallaApp/theme-raed)** architecture: Twig, Tailwind, `twilight.json`, webpack — extended with a **glassmorphic bento desert luxe** look, gold neon accents, full RTL, and optional Ramadan/Eid festive mode.

## Static HTML preview (multi-page)

Open **`preview/index.html`** in your browser (or double-click). Included pages:

| Page | File |
|------|------|
| Home | `preview/index.html` |
| Shop / listing | `preview/shop.html` |
| Product (PDP) | `preview/product.html` |
| Cart | `preview/cart.html` |
| About | `preview/about.html` |
| Contact + form | `preview/contact.html` |
| Account / login | `preview/account.html` |

The root file **`oasis-glow-preview.html`** redirects to `preview/index.html`.  
Shared styles: `preview/assets/preview.css` · scripts: `preview/assets/preview.js` (theme toggle, mobile menu, 3D tilt).

## Preview with Salla CLI

1. Install [Salla Theme CLI](https://docs.salla.dev/) and authenticate.
2. From this project folder:

```bash
pnpm install
pnpm run production
```

> This repo’s `package.json` enforces `pnpm`. If you use npm: `npm install --ignore-scripts` then `npm run production`.

3. Link or upload the theme to your dev store and use **Theme preview** in the Salla dashboard, or use the CLI preview command as documented in [Salla theme development](https://docs.salla.dev/).

4. After changing Twig or assets, rebuild assets (`pnpm run production` or `pnpm run dev` for watch).

## Marketplace listing

### Arabic

**Oasis Glow – لوكس صحراوي للأزياء**  
ثيم Salla احترافي بلمسة زجاجية فاخرة وشبكة بينتو عصرية، وهج ذهبي ناعم، ودعم RTL كامل. مثالي لمتاجر العبايات، الموضة المحتشمة، الإكسسوارات، والمجوهرات. يتضمن هيرو زجاجي، لوك بوك، بطاقات منتجات بإطار زجاجي وميل ثلاثي الأبعاد، وشريط إضافة للسلة بنيون — مع وضع احتفالي لرمضان والعيد ووضع طاقة منخفضة للحركة.

### English

**Oasis Glow – Desert Luxe Fashion**  
A premium glassmorphic Salla theme with bento-style homepage sections, soft sand-gold neon, desert-night backgrounds, and full RTL. Ideal for abaya boutiques, modest fashion, accessories, and jewelry. Includes glass hero, fashion lookbook, 3D-tilt product gallery frame, neon sticky add-to-cart, optional Ramadan/Eid overlay, and low-energy animation mode.

## Screenshot ideas (marketplace)

1. **Hero** — Full-viewport glass hero with Arabic headline “اكتشف الفخامة الصحراوية”, English subline, neon CTA, desert-night photography.
2. **Bento grid** — 6–8 asymmetric cards (hero product, collections, story, lookbook) with glass borders and per-card glow.
3. **Product page** — Glass-framed image gallery with 3D tilt, gold-accent options, glass related-products strip.

## Theme settings (high level)

| Setting | Purpose |
|--------|---------|
| Ramadan/Eid festive mode | Subtle gold overlay + warmer accent feel |
| Accent color | CSS variable `--oasis-accent` (default gold) |
| Neon glow | Enables neon shadows and pulse on key CTAs |
| Low energy | Reduces motion (animations / parallax / tilt intensity feel) |
| Hero background image | Default hero image for glass hero block |
| Light mode | Default from merchant; visitors can still toggle (localStorage) |

## Custom components (`twilight.json`)

| Path | Role |
|------|------|
| `home.glass-hero` | Full-screen glass hero |
| `home.bento-grid` | Up to 8 bento cards |
| `home.fashion-lookbook` | Horizontal scroll or grid lookbook |
| `product.glass-card` | Registers glass gallery treatment (see `product/single.twig`) |
| `product.neon-atc` | Optional label above sticky ATC; bar styled in `single.twig` |

## Import validation (“The given data failed to pass validation”)

Official reference: [Twilight.json – Salla Docs](https://docs.salla.dev/421921m0) and [theme-raed `twilight.json`](https://github.com/SallaApp/theme-raed/blob/master/twilight.json).

### Root / author fields

| Field | Role |
|--------|------|
| `name` | `{ "ar", "en" }` display names |
| `version` | Semver (e.g. `1.0.0`) |
| `theme_name` | Short name (author settings in docs) |
| `repository` | Git URL (Raed uses this key) |
| `repo_url` | Same purpose in docs — set **identical** to `repository` if both are present |
| `author_email` | Prefer matching your **Salla Partners** account email |
| `support_url` | Valid support URL |

**Important:** In Partners, the connected **GitHub repo URL** should match **`repository` / `repo_url`**. If you fork the theme, change both to your fork.

### Features

Only documented [theme features](https://docs.salla.dev/421921m0#theme-features) (e.g. `component-testimonials`, `filters`). Do not invent feature slugs.

### Custom `home.*` components

- Unique UUID on each component **`key`**.
- Optional **`name`** matching the Twig segment (`home.bento-grid` → `bento-grid`).
- **`path`** must be `home.*` (custom components are for the home builder).
- **Collections:** include **`key`** on the collection and on **each** nested field (same pattern as Raed `home.custom-testimonials`).
- Prefer Raed-like **`description` / `labelHTML`** on collections where applicable.

### Debugging

1. Partners portal → **DevTools → Network** → failed request → read **`errors`** / **`message`**.
2. Align repo URLs and `author_email`.
3. If needed, temporarily remove the three Oasis components from `components` and re-import to isolate the issue.

This repo’s `twilight.json` follows the above: `version`, `theme_name`, `repo_url`, crypto UUIDs, `name` on Oasis components, collection/field `key`s, and `oasis_hero_bg` default `""` instead of `null`.

## License

Follows the upstream theme-raed license and Salla marketplace terms.
