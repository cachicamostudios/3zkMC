import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: '3zkMC',
    description: 'Create Mod builds, schematics and Project Sphere updates.',
    site: context.site!,
    // Sin barra final, igual que la canónica y el sitemap (build.format 'file').
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  });
}
