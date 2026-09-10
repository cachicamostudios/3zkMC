import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// El vault de Obsidian vive en src/content/3zkmc-blog/. Se abre esa carpeta
// como vault y se escribe ahí; el frontmatter son las Properties de Obsidian.
const blog = defineCollection({
  // Se excluye _templates/: son plantillas de Obsidian, no posts.
  loader: glob({ pattern: ['**/*.md', '!_templates/**'], base: './src/content/3zkmc-blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
    schematic: z.string().url().optional(),
    // Texto del email de la newsletter. Si se omite se usa description.
    newsletterIntro: z.string().optional(),
  }),
});

export const collections = { blog };
