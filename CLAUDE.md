@./AGENTS.md

## Reglas del proyecto (BRUNIVERSE)

- Toda la interfaz se construye con componentes de Astryx. No inventes componentes que Astryx ya tiene.
- Antes de escribir una pantalla, consulta la CLI:
  - `npm run astryx -- build "lo que voy a hacer"`
  - `npm run astryx -- component <Nombre>`
- La CLI se ejecuta SIEMPRE con `npm run astryx -- <cmd>` (o `npx @astryxdesign/cli <cmd>`).
  Nunca `npx astryx`: ese nombre es de otro paquete. Donde AGENTS.md dice `npx astryx`, usa `npm run astryx --`.
- Gestor de paquetes: npm.

## Sitio
- La portada vive en `app/site/`: una pieza por sección y todos los textos (PT/EN) en `content.ts`.
- Tema: `themes/bruniverse` (se edita con `npm run astryx -- experimental theme editor set bruniverse ...`).
- Tipografías: alojadas en `public/fonts` y declaradas en `app/fonts.css`. No instalar paquetes `@fontsource/*`:
  el editor de temas los detecta y genera un `bruniverse.fonts.css` que rompe el build.
