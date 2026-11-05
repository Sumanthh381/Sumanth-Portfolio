# Portfolio validation

Validated in the cloud workspace on 4 November 2026 using Node.js 24.22.1 and npm 11.9.0.

- Clean `npm ci --no-audit --no-fund`: passed.
- `npm run lint`: passed, zero warnings.
- `npm run build`: passed; homepage and all four project detail routes prerendered successfully.
- `npm run typecheck`: passed.
- Chromium production-browser smoke test: passed at 1440, 1024, 768, 390 and 320 pixels. Homepage and all project pages had no horizontal overflow.
- Case-study architecture diagrams, mobile menu state and navigation, actual clipboard contents, resume download, PDF response, icon, Open Graph image, robots response, custom 404 and return link: passed.
- Reduced-motion preference: smooth scrolling disabled as expected.
- No browser page errors observed during the smoke run.
- Five public GitHub/profile/source-evidence links: HTTP 200.
- Downloadable resume: exact original owner-uploaded PDF, verified by SHA-256 comparison.
- IIT Guwahati certificate: original owner-uploaded PDF, verified by SHA-256 comparison; rendered preview and working PDF view/download links.
- Updated 3D visualization: nonempty decorative canvas, pause/resume and a static frame under reduced motion passed Chromium checks.
- Resume experience dates: EON November 2024–November 2025 and UNIPREP December 2025–June 2026 verified in rendered content.
- Repository source/asset scan: no common private-key or token patterns found; `.env` variants and credential-key formats confirmed ignored.
- `npm audit --omit=dev`: zero production dependency vulnerabilities.
- Optional `npm audit --audit-level=high`: exit 0, with 16 moderate findings in the ESLint/minimatch development-tool chain. No forced incompatible downgrade was applied.

The above validates this portfolio. Historical Multi-MCP results and owner-reported aviation results are separate and documented in content-provenance.md. Deployment to a hosting provider has not been performed.

## Dark theme update — 6 November 2026

Native Apple / system sans-serif stack replaces bundled Geist and italic serif headings. Browser checks confirm a pure-black page background, upright hero typography, responsive layouts at all five documented widths, working downloads and unchanged globe controls. Lint, TypeScript and production build passed. Visual review used Chromium; Apple-device font rendering follows the native system stack and was not separately tested on physical Apple hardware.
