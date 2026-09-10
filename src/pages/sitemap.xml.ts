import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// Sitemap generado, no a mano: cada post nuevo entra solo.
// Se usan las URLs limpias porque son las que Cloudflare Pages sirve con 200
// (las .html hacen 308), y son las que declaran los <link rel="canonical">.
const estaticas = [
  { ruta: '/', prioridad: '1.0', frecuencia: 'weekly' },
  { ruta: '/blog/', prioridad: '0.9', frecuencia: 'weekly' },
  { ruta: '/newsletter', prioridad: '0.9', frecuencia: 'monthly' },
  { ruta: '/descargas', prioridad: '0.8', frecuencia: 'monthly' },
  { ruta: '/factories', prioridad: '0.8', frecuencia: 'monthly' },
  { ruta: '/sphere', prioridad: '0.7', frecuencia: 'monthly' },
];

export async function GET(context: APIContext) {
  const base = context.site!.origin;
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const urls = [
    ...estaticas.map(
      (p) =>
        `  <url>\n    <loc>${base}${p.ruta}</loc>\n` +
        `    <changefreq>${p.frecuencia}</changefreq>\n` +
        `    <priority>${p.prioridad}</priority>\n  </url>`
    ),
    ...posts.map(
      (post) =>
        `  <url>\n    <loc>${base}/blog/${post.id}/</loc>\n` +
        `    <lastmod>${post.data.date.toISOString().split('T')[0]}</lastmod>\n` +
        `    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    ),
  ].join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
