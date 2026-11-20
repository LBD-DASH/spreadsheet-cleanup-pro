import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  // One Markdown file per service: src/content/services/<slug>.md
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string().min(15).max(70),
    description: z.string().min(70).max(160),
    summary: z.string(),
    order: z.number().int(),
    lastUpdated: z.coerce.date(),
    forWho: z.string(),
    youProvide: z.array(z.string()).min(1),
    youReceive: z.array(z.string()).min(1),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(2),
  }),
});

export const collections = { services };
