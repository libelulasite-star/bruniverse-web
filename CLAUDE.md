@./AGENTS.md

## Reglas del proyecto (BRUNIVERSE)

- Toda la interfaz se construye con componentes de Astryx. No inventes componentes que Astryx ya tiene.
- Antes de escribir una pantalla, consulta la CLI:
  - `npm run astryx -- build "lo que voy a hacer"`
  - `npm run astryx -- component <Nombre>`
- La CLI se ejecuta SIEMPRE con `npm run astryx -- <cmd>` (o `npx @astryxdesign/cli <cmd>`).
  Nunca `npx astryx`: ese nombre es de otro paquete. Donde AGENTS.md dice `npx astryx`, usa `npm run astryx --`.
- Gestor de paquetes: npm.
