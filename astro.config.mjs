// @ts-check
import { defineConfig } from 'astro/config';

// Cloudflare Pages ya sirve URLs limpias y hace 308 desde las .html,
// así que el formato por defecto de Astro ('directory') coincide con
// lo que está en producción. No hace falta build.format: 'file'.
export default defineConfig({
  site: 'https://3zkmc.com',
});
