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

**Desde Obsidian** (plugin Obsidian Git, ya instalado y activado):

1. Pon `draft: false`
2. Paleta de comandos → **Git: Commit-and-sync** (o el botón de la barra lateral)

Cloudflare Pages reconstruye solo. El post queda vivo y el RSS actualizado.

Ajustes puestos, copiados de tu vault de cachicamo:

- **Auto-commit cada 5 min** (`autoSaveInterval: 5`)
- **Auto-push desactivado** (`autoPushInterval: 0`) → el push lo lanzas tú.
  Es lo que hace que "publicar" sea una decisión y no un accidente.
- Pull automático cada 10 min, y pull antes de push

⚠️ **Ojo con el auto-commit:** este vault vive dentro del repo del sitio, así
que el auto-commit cada 5 minutos barre **cualquier** cambio del repo, no solo
tus notas — incluido código a medias. Si vas a tocar el sitio y el blog a la
vez, pon `autoSaveInterval: 0` en los ajustes del plugin y commitea a mano
desde el panel de Source Control.

**Desde la terminal**, si lo prefieres:

```bash
npm run build     # comprueba que compila
git add -A && git commit -m "post: título" && git push
```

## Ver en local mientras escribes

```bash
npm run dev
```

## Ajustes de Obsidian que ya están puestos

`useMarkdownLinks: true` (enlaces markdown estándar, no `[[wikilinks]]` — Astro
no entiende los wikilinks) y la carpeta de adjuntos apuntando a `attachments/`.
Están en `.obsidian/app.json` dentro del vault; no hay que tocarlos.
