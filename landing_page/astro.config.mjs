// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL to the production domain so share previews (og:image) resolve.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  image: {
    responsiveStyles: false,
  },
});
