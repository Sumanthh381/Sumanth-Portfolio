# Sumanth N M — AI Engineer

A complete dark editorial engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React and locally hosted Geist fonts.

## Run locally

Use **Node.js 24 LTS** and npm (minimum Node version: 20.9).

```sh
npm ci
npm run dev
```

Open `http://localhost:3000` in your local development environment.

```sh
npm run lint
npm run build
npm run typecheck
npm start
```

Run the build before the standalone type check on a fresh checkout so Next.js generates route types. `npm start` serves the production build; `PORT` can override port 3000. No API keys, database, model service or environment files are required.

## Routes and structure

- `/`: responsive homepage, expertise, project cards, experience, certifications and contact.
- `/projects/multi-mcp-enterprise-operations`: source-grounded flagship case study.
- `/projects/aviation-rag-chatbot`: verified public prototype and clearly separated owner-reported aviation extension.
- `/projects/ai-resume-parser`: owner-described project case study.
- `/projects/intelligent-email-automation`: owner-described project case study.
- Custom 404, generated Open Graph image, branded SVG icon and robots metadata.
- `lib/content.ts`: centralized personal details, social links, resume path, capabilities, experience, credentials and case-study content.
- `components/hero-system.tsx`: pointer-responsive decorative 3D globe with pause/resume, visibility-aware rendering and a static reduced-motion view.
- `components/project-sculpture.tsx`: CSS 3D layered project studies.
- `components/`: shared navigation, footer, section headings, diagrams, motion reveal and copy-email action.
- `app/globals.css`: design tokens, Tailwind import, responsive layouts and reduced-motion rules.

Server components handle content and routing. Only navigation, clipboard actions, architecture interaction, the interactive 3D canvas sculpture and subtle reveal effects use client components. Fonts are bundled locally; there are no runtime font requests. No fabricated profile photo, project screenshot or credential imagery is used.

## Content and source integrity

See [content provenance](docs/content-provenance.md) for inspected commits and evidence limits. Project test figures are historical repository evidence, not tests of this portfolio or commercial usage metrics. Aviation corpus figures are explicitly owner-reported. The linked RAG repository does not substantiate BM25, FastAPI or the aviation corpus; these are not presented as verified public implementation.

### Assets and information to add

- **LinkedIn:** uses the URL supplied in the owner’s resume.
- **Resume:** `public/sumanth-nm-resume.pdf` is the exact owner-uploaded resume, served by all download buttons. Do not replace it with generated content.
- **Experience:** EON and UNIPREP dates now follow the uploaded resume. Impact percentages are not promoted as independently verified results.
- **Certificates:** the original IIT Guwahati PDF and a rendered preview are included under `public/certificates/`. Other credentials are listed from the resume; their documents can be added later.
- **Additional repositories:** supply verified links for the resume parser and email automation projects.
- **Domain:** set optional `SITE_URL` to the verified HTTPS production origin before building on self-hosted deployments. Vercel uses its `VERCEL_PROJECT_PRODUCTION_URL` automatically; local builds default to localhost. Add canonical URLs and a sitemap when the production domain is confirmed.

## Deployment

### Vercel

1. Import `Sumanthh381/Sumanth-Portfolio` from GitHub.
2. Choose the **Next.js** preset and Node.js **24.x**.
3. Keep the root directory at the repository root, install with `npm ci`, and build with `npm run build`.
4. Deploy. Configure `main` as the production branch for automatic deployments.
5. Assign the verified custom domain when available and update metadata as noted above.

Vercel manages Next.js output; do not configure a static `out` directory. No environment variables are required.

### Node.js hosting

```sh
npm ci
npm run build
PORT=3000 npm start
```

Use a process manager and HTTPS reverse proxy for public hosting. This application uses the Next.js runtime for metadata images and route handling.

## Secrets and Git hygiene

`.gitignore` excludes dependencies, build outputs, all `.env*` files, common private-key formats and credential files. Keep credentials out of source, Git history and `NEXT_PUBLIC_*` variables. The current application contains no credentials and requires no secrets.

## Accessibility

Semantic landmarks, a skip link, visible keyboard focus, labeled controls, mobile navigation state, diagram selection announcements and reduced-motion support are included. Diagrams become vertical on small screens. Email opens the mail app; the adjacent button copies the address with a visible success or failure message.

## Optional browser checks

With the production server running, install Python Playwright in a separate environment and provide a Chromium executable:

```sh
python3 -m pip install playwright
CHROMIUM_PATH=/usr/bin/chromium python3 scripts/browser-smoke.py
```

The smoke test checks five viewport widths, all four case-study routes, architecture controls, mobile navigation, clipboard, PDF download, metadata assets, 404 recovery and reduced motion. Screenshots are written outside the checkout under `/tmp/sumanth-portfolio-checks`.

## Dependency audit status

`npm audit --omit=dev` reported zero production dependency vulnerabilities. The implementation-time `npm audit --audit-level=high` reported no high or critical findings, but 16 moderate development-tool advisories associated with transitive `minimatch` in the ESLint dependency chain. The suggested forced fix downgrades ESLint incompatibly and was not applied. Recheck upstream lint-tool updates before refreshing dependencies; this does not affect the passing application build.
