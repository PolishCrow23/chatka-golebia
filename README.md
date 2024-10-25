## Commands
All commands are run from the root of the project, from a terminal:

| Command	| Action |
 ------------- | ------------- 
| `npm install`	| Installs dependencies |
| `npm run dev`	| Starts local dev server at localhost:4321 |
| `npm run build`	| Build your production site to ./dist/ |
| `npm run preview`	| Preview your build locally, before deploying | 
| `npm run astro ...`	| Run CLI commands like astro add, astro check |
| `npm run astro -- --help` |	Get help using the Astro CLI |

Server-side rendering (SSR) is enabled (Netlify adapter): `astro.config.mjs` in root folder for Supabase.

Supabase client is in `src/lib/supabase.ts`.

The following authentication endpoints are at `src/pages/api/auth`:

- `POST /api/auth/register.ts`
- `POST /api/auth/signin.ts`
- `GET /api/auth/signout.ts`

The following auth pages for endpoints are at `src/pages`:
- `src/pages/register`
- `src/pages/signin`
- `src/pages/dashboard`
