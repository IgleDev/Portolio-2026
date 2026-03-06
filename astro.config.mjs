// @ts-check
import { defineConfig } from 'astro/config';
import { webcore } from 'webcoreui/integration'
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: env.PUBLIC_SITE_URL || 'http://localhost:4321',
  vite: {
    plugins: [tailwindcss()]
  },

  i18n : {
    defaultLocale : 'es',
    locales : ['es', 'gal', 'en'],
    routing : {
      prefixDefaultLocale : true,
    }
  },

  integrations: [icon(), webcore()]
});