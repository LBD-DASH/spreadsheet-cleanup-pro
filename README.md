# Spreadsheet Cleanup Pro

Static Astro site for an AI-assisted data cleanup and reporting service for small firms.

Live: https://lbd-dash.github.io/spreadsheet-cleanup-pro/

```bash
npm ci
npm run dev      # http://localhost:4321/spreadsheet-cleanup-pro/
npm run build    # outputs dist/
```

- `src/content/services/*.md`: service pages (schema in `src/content.config.ts`)
- `src/data/partners.json`: only place partner links live (affiliateUrl empty)
- `src/pages/`: home, services, how it works, request a quote, FAQ, about, privacy, disclosure, sitemap.xml, robots.txt
- `.github/workflows/deploy.yml`: deploys to GitHub Pages on push to `main`

Custom domain later: set `SITE_URL` and `BASE_PATH` in the workflow and add `public/CNAME`. See [PLAYBOOK.md](./PLAYBOOK.md).
