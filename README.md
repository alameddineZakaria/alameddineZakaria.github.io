# Zakaria Alameddine — Portfolio

A simple portfolio site introducing my projects and linking out to each one.

## Local development

```bash
npm install
npm run dev
```

## Editing content

Everything lives in [`src/config.ts`](src/config.ts):

- `siteConfig` — name, tagline, and social links
- `projects` — the project list. Each entry has a `name`, `description`,
  `url` (set to `null` while a project isn't hosted yet — the card will show
  a "Coming soon" badge instead of a link), and optional `tags`.

## Deployment

This repo is a GitHub Pages **user site** (`alameddineZakaria.github.io`), so
it serves from the root of the domain. Deployment is automatic:

1. Push to `main`.
2. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the
   site and publishes it via GitHub Actions.
3. One-time setup: in the repo's **Settings → Pages**, set "Source" to
   **GitHub Actions**.

The site will be live at `https://alameddineZakaria.github.io`.
