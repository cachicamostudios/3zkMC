// @ts-check
import { defineConfig } from 'astro/config';

// build.format 'file': cada página sale como nombre.html (factories.html, no
// factories/index.html). Es exactamente la forma que tienen hoy las páginas en
// producción: Cloudflare Pages las sirve en /factories y hace 308 desde
// /factories.html. Con el formato por defecto ('directory'), migrar una página
// cambiaría su URL a /factories/ y todo lo ya indexado empezaría a redirigir.
export default defineConfig({
  site: 'https://3zkmc.com',
  build: { format: 'file' },
});
