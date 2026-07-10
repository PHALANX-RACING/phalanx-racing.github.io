import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Build-log koleksiyonu: her .md dosyası bir yazı
const buildlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/buildlog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { buildlog };
