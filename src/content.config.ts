import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // One or two sentences that answer the title question outright.
    answer: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    applies: z.array(z.string()),
  }),
});

export const collections = { notes };
