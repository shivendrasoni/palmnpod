// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL to the production domain so share previews (og:image) resolve.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.palmandpod.com',
  image: {
    responsiveStyles: false,
  },
  server: {
    allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.ngrok.io'],
  },
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.ngrok.io'],
    },
    preview: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.ngrok.io'],
    },
  },
});
