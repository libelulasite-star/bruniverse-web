# BRUNIVERSE Consulting — sitio web

Landing bilingüe (PT/EN) hecha con Next.js y el sistema de diseño Astryx (tema BRUNIVERSE).

## Desarrollo

```bash
npm ci
npm run dev
```

Abre http://localhost:3000

## Publicación

Cada push a `main` construye el sitio estático (`npm run build` → `out/`) y lo publica en GitHub Pages
con el workflow `.github/workflows/pages.yml`. La variable `NEXT_PUBLIC_BASE_PATH` indica la subruta
(`/<repo>` en GitHub Pages; vacía en un dominio propio).
