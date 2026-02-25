## Cursor Cloud specific instructions

This is a static React SPA (SITE — Strategic Institute of Technology Ethics) built with Vite + React 18 + Tailwind CSS. There is no backend, no database, and no API — all data is hardcoded in `src/constants/`.

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
- The ESLint config uses the flat config format (`eslint.config.js`). The codebase has ~76 pre-existing lint errors (unused React imports, missing prop-types, unescaped entities) that are not regressions.
