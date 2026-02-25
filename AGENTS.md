## Cursor Cloud specific instructions

This is a static React SPA (SITE — Strategic Institute of Technology Ethics) built with Vite + React 18 + Tailwind CSS + shadcn/ui. There is no backend, no database, and no API — all data is hardcoded in `src/constants/`.

### Services

| Service | Command | Default Port |
|---|---|---|
| Vite Dev Server | `npm run dev` | 5173 |

### Key commands

- **Install deps:** `npm install`
- **Dev server:** `npm run dev` (add `--host 0.0.0.0` for remote access)
- **Lint:** `npm run lint` (pre-existing lint errors exist in the repo; these are not regressions)
- **Build:** `npm run build`

### Notes

- No lockfile is committed (`package-lock.json` is in `.gitignore`), so `npm install` resolves fresh versions each time.
- No test framework is configured — there are no automated tests to run.
- The ESLint config uses the flat config format (`eslint.config.js`). The codebase has ~65 pre-existing lint errors (unused React imports, missing prop-types) that are not regressions.
- **Dark/Light mode:** Managed via `ThemeProvider` context in `src/context/ThemeContext.jsx`. Toggle button is in the Navbar. Theme preference is stored in `localStorage` under `site-theme`.
- **shadcn/ui components** are in `src/components/ui/`. The `cn()` utility is in `src/lib/utils.js`.
- **SEO:** Each page sets its own meta tags via the `SEO` component using `react-helmet-async`. Structured data (Schema.org) is also per-page.
- **PWA/Service Worker:** Configured via `vite-plugin-pwa` in `vite.config.js`. The service worker is only generated on production builds.
- **Code splitting:** All page routes use `React.lazy()` in `App.jsx`. The `Suspense` fallback is a spinner.
- **Splash screen:** Controlled by `sessionStorage` key `site-splash-shown` — only shows once per session. Clear session storage to re-trigger it.
