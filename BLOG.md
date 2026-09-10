# Cómo escribir en el blog

El vault de Obsidian está en **`src/content/3zkmc-blog/`**. Ábrelo desde
Obsidian con *Open folder as vault* apuntando a esa carpeta.

## Escribir un post

1. Nota nueva en el vault. **El nombre del archivo es la URL**:
   `red-baron-plane.md` → `3zkmc.com/blog/red-baron-plane/`.
   Usa minúsculas y guiones, sin espacios ni acentos.
2. Rellena las Properties (el frontmatter):

```yaml
---
title: Título del post
date: 2026-09-10
description: Una frase. Sale en el listado, en el RSS y en Google.
draft: true          # ponlo en false cuando esté listo
schematic: https://3zkmcuser.gumroad.com/l/xxxxx   # opcional
---
```

⚠️ **Si el título o la descripción llevan dos puntos, ponlos entre comillas.**
El frontmatter es YAML y los `:` lo rompen:

```yaml
title: "The Red Baron: a Create: Aeronautics build"   # ✅ con comillas
title: The Red Baron: a Create: Aeronautics build     # ❌ falla el build
```

Si el build se queja de `bad indentation of a mapping entry`, es esto.

- `draft: true` → no se publica. Es tu borrador.
- `schematic` → si lo pones, aparece automáticamente un botón de descarga
  al final del post. Si no, no sale nada.
- El CTA de la newsletter sale **siempre**, no hay que hacer nada.

## Imágenes

Van a `src/content/3zkmc-blog/attachments/`. Obsidian ya está configurado
para guardarlas ahí solo.

⚠️ **Conviértelas a webp antes**, como siempre:

```bash
cwebp -q 85 imagen.png -o imagen.webp
```

## Publicar

```bash
npm run build     # comprueba que compila
git add -A && git commit -m "post: título" && git push
```

Cloudflare Pages reconstruye solo. El post queda vivo y el RSS actualizado.

## Ver en local mientras escribes

```bash
npm run dev
```

## Ajustes de Obsidian que ya están puestos

`useMarkdownLinks: true` (enlaces markdown estándar, no `[[wikilinks]]` — Astro
no entiende los wikilinks) y la carpeta de adjuntos apuntando a `attachments/`.
Están en `.obsidian/app.json` dentro del vault; no hay que tocarlos.
