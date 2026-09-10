# Cómo escribir en el blog

El vault de Obsidian está en **`src/content/3zkmc-blog/`**. Ábrelo desde
Obsidian con *Open folder as vault* apuntando a esa carpeta.

## Escribir un post

**Con la plantilla** (lo más rápido): nota nueva → paleta de comandos
(`Cmd+P`) → **Insertar plantilla** → `post`. Te rellena el frontmatter y la
estructura, con instrucciones dentro que borras al terminar.

La plantilla vive en `_templates/` dentro del vault. Esa carpeta está
excluida del build, así que nunca se publica por accidente.

**A mano**, si prefieres:

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

Ajustes del plugin:

- **Sin auto-commit** (`autoSaveInterval: 0`) — nada se commitea solo
- **Sin auto-push** (`autoPushInterval: 0`)
- **Pull al abrir el vault** (`autoPullOnBoot: true`)

Es decir: **Commit-and-sync es la única forma de que algo salga**, y significa
exactamente "publicar". Si no lo pulsas, no se mueve nada.

Esto es distinto de tus otros vaults, donde hay auto-commit cada 5 minutos.
El motivo: allí el vault es solo contenido, aquí comparte repo con el código
del sitio, y un auto-commit se llevaría también el código a medio escribir.

**Desde la terminal**, si lo prefieres:

```bash
npm run build     # comprueba que compila
git add -A && git commit -m "post: título" && git push
```

## La newsletter sale del mismo post

No hay que reescribir nada. Al publicar, el post genera solo su versión de
email en **https://3zkmc.com/drafts** — asunto, cuerpo, enlace al post y, si
lleva `schematic:`, el enlace de descarga. Botón de copiar y a pegar en
[gumroad.com/emails](https://gumroad.com/emails).

Esa página no la indexa Google (`noindex` + excluida en robots.txt).

Si quieres que el email diga algo distinto de la `description`, añade al
frontmatter:

```yaml
newsletterIntro: "El texto que quieres en el email, en vez de la description."
```

## Ver en local mientras escribes

```bash
npm run dev
```

## Ajustes de Obsidian que ya están puestos

`useMarkdownLinks: true` (enlaces markdown estándar, no `[[wikilinks]]` — Astro
no entiende los wikilinks) y la carpeta de adjuntos apuntando a `attachments/`.
Están en `.obsidian/app.json` dentro del vault; no hay que tocarlos.
