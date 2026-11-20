import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absUrl } from '../lib/url';

export const GET: APIRoute = async ({ site }) => {
  const services = await getCollection('services');
  const day = (d: Date) => d.toISOString().slice(0, 10);
  const latest = services.reduce((m, s) => (s.data.lastUpdated > m ? s.data.lastUpdated : m), new Date(0));
  const urls = [
    { loc: absUrl('', site), lastmod: day(latest) },
    { loc: absUrl('services/', site) },
    ...services.map((s) => ({ loc: absUrl(`services/${s.id}/`, site), lastmod: day(s.data.lastUpdated) })),
    ...['how-it-works', 'request-a-quote', 'faq', 'about', 'privacy', 'disclosure'].map((p) => ({ loc: absUrl(`${p}/`, site) })),
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc>${(u as any).lastmod ? `<lastmod>${(u as any).lastmod}</lastmod>` : ''}</url>`).join('\n') +
    `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
