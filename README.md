# Alifya Awalia Dhiva - Portfolio (skeuomorphic)

Next.js 16 static export, same setup as the OPD PWA host. No API keys, no env vars required.

## Run
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com > Add New > Project > import the repo. Framework preset: Next.js (auto). Build command and output are auto-detected.
3. Optional: set NEXT_PUBLIC_SITE_URL to your final domain (used for social preview metadata).

## Edit content
- src/data/site.ts      links, about, experience, certificates, papers
- src/data/projects.ts  project cards and every project detail page
- public/img/           screenshots and photos (extracted from the Canva PDF)
- src/app/globals.css   skeuomorphic design tokens (paper, leather, brass)

## Certificates and CV
- CV: `public/certs/cv/Alifya-Awalia-Dhiva-CV.pdf`, shown on /cv/ as page images with Download / Open PDF buttons.
- Certificates: `public/certs/{course,appreciation}/` hold each PDF, with page images in `pages/`.
  The list lives in `src/data/certs.ts`. To add one, drop the PDF in, render its pages to `pages/<id>-<n>.jpg`
  (plus `<id>-thumb.jpg`) and add an entry.
- Photo: `public/img/portrait.jpg` (4:5 ratio, used in the hero frame and About).
