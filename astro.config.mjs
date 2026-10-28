// @ts-check

// Site URL and integrations used by Astro pages, RSS metadata, and deployment.

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	// Used to generate canonical URLs, RSS links, and the sitemap.
	site: 'https://bronce.org',

	// Add support for MDX posts, sitemap generation, and React components.
	integrations: [mdx(), sitemap(), react()],

});
