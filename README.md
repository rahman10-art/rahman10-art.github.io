# Muntaha Rahman — Engineering Portfolio

Personal portfolio for analog/mixed-signal IC design, space instrumentation and
biomedical hardware projects. Built with **Next.js 15**, **TypeScript** and
**Tailwind CSS v4**, exported as a static site and deployed to **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit content

Everything on the site comes from **`src/data/content.ts`**:

- `profile` — name, headline, bio, links (email, LinkedIn, résumé)
- `projects` — each project's summary, key metrics, sections, tables and figures
- `publications`, `skills`

To add a project: put its images in `src/assets/<project>/`, import them at the
top of `content.ts`, and add an entry to the `projects` array. A case-study
page is generated automatically at `/projects/<slug>/`.

## Project structure

```
src/
  app/
    page.tsx                 Home page (hero, projects, about, skills, contact)
    projects/[slug]/page.tsx Project case-study page
    layout.tsx, globals.css  Shell, fonts, theme (light + dark)
  components/                Header, Footer, ProjectCard, Tag, SectionHeading
  data/content.ts            ← all site content
  assets/                    Images
.github/workflows/deploy.yml Builds and deploys to GitHub Pages on push to main
```

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` rebuilds and redeploys the site.

The site will be at `https://<username>.github.io/<repo>/`. Name the repo
`<username>.github.io` to serve it at the root URL instead — the workflow
handles the base path automatically either way. A custom domain can be added
under Settings → Pages.
