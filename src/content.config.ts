import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts are authored as Markdown or MDX files in src/content/blog/.
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Keep post metadata consistent so pages, RSS, and sorting can rely on these fields.
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Coerce frontmatter strings into Dates for sorting and display.
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
