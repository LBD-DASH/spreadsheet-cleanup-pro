# Playbook: adding a page

## Add one service page (Markdown collection)
1. Create `src/content/services/<slug>.md`. Copy an existing file for the frontmatter; the schema in `src/content.config.ts` fails the build if a field is missing or the title/description length is wrong.
2. Write only what we can stand behind: no prices, statistics, testimonials, client names, time-saved figures or guarantees. Any factual claim about the outside world needs a source link and "last checked <date>", otherwise leave it out.
3. Use "Request a quote" for every call to action. Do not use em dashes.
4. `npm run build`, then check `dist/services/<slug>/index.html` exists and the sitemap lists it (it does so automatically).
5. Grep for em dashes: `grep -rn $'\xe2\x80\x94' src dist PLAYBOOK.md README.md STATUS.md` must return nothing.
6. Commit and push to `main`; GitHub Actions deploys. Confirm with `curl -I https://lbd-dash.github.io/spreadsheet-cleanup-pro/services/<slug>/` returning 200.

## Add a standalone page
Create `src/pages/<name>.astro` using `Base.astro` and `PageHead.astro`, add it to the list in `src/pages/sitemap.xml.ts`, and link it from the header or footer in `src/layouts/Base.astro`. Always build links with `withBase()`.

## Partners
Outbound partner links live only in `src/data/partners.json`. Keep `affiliateUrl` empty until a program approves. Never invent IDs.

## Priority list of next pages
1. Request a quote: real contact method (after Kevin decides it)
2. Service page: cleaning customer lists (only with a verifiable, honest description)
3. Service page: moving from spreadsheets to a simple database (scope-honest)
4. Guide: how to prepare a spreadsheet before sending it for cleanup (practical, no claims)
5. Guide: what makes a spreadsheet hard to report on
6. Industry pages (e.g. bookkeeping, property, trades), only if we can describe real workflows without invented claims
7. Case studies, only with a real client's written permission
