import { defineConfig } from 'astro/config';

export default defineConfig({
  // [TODO] set the production URL per site (used for canonical and Open Graph URLs).
  site: 'https://example.com',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  // Generate responsive srcset for every <Image>; layout styles stay in site CSS.
  image: {
    layout: 'constrained',
    responsiveStyles: false,
    breakpoints: [320, 480, 640, 750, 828, 1080, 1280, 1600],
  },
});
