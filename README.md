# yaiir.dev — Portfolio

Portfolio personal de Dylan González, construido con [Next.js](https://nextjs.org) (App Router), Tailwind CSS v4 y TypeScript.

**Demo:** [yaiirdev.vercel.app](https://yaiirdev.vercel.app)

## Características

- **Multi-idioma (es/en)** con rutas `/[lang]`, diccionarios JSON y detección automática vía `Accept-Language` en `proxy.ts`.
- **Generación estática** de ambas locales con `generateStaticParams`.
- **Animaciones** de entrada y scroll-reveal con CSS + `IntersectionObserver` (respetando `prefers-reduced-motion`), y efecto typewriter propio sin dependencias.
- **Responsive** con menú móvil.

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) — redirige a `/es` o `/en` según el idioma del navegador.

## Estructura

```
app/[lang]/       # Layout raíz, página y diccionarios por idioma
components/       # Secciones y componentes reutilizables
dictionaries/     # Contenido traducido (es.json, en.json)
lib/              # Configuración de i18n y datos del sitio
proxy.ts          # Detección y redirección de idioma
```

Para actualizar el contenido (experiencia, proyectos, habilidades), edita `dictionaries/es.json` y `dictionaries/en.json`. Los datos de contacto y redes están en `lib/site.ts`.
