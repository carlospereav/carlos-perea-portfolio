# Plan de Ejecución para el Agente (Cursor/Antigravity)

Este es el plan paso a paso para construir el portafolio. Sigue este orden estrictamente para evitar errores de contexto.

## Fase 1: Configuración Inicial (Scaffolding)

### Inicializar proyecto Next.js con TypeScript, Tailwind CSS y ESLint

```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint
```

### Instalar dependencias clave

```bash
npm install framer-motion lucide-react clsx tailwind-merge
npm install -D @tailwindcss/typography
```

> **Nota**: `@tailwindcss/typography` es para renderizar el markdown de las descripciones.

### Configurar la estructura de carpetas

```
src/
├── components/  # ui, layout, features
├── data/        # donde irá el archivo portfolio.ts
└── lib/         # utilidades
```

## Fase 2: Componentes Base y Diseño

- Crear el archivo de datos `src/data/portfolio.ts` copiando el contenido de `03_DATA_STRUCTURE.md`.
- Crear componentes UI atómicos (Botones, Cards, Badges) siguiendo las directrices de `02_DESIGN_SYSTEM.md`.
- Implementar el Layout Principal (Header con navegación, Footer).

## Fase 3: Desarrollo de Secciones (Core)

- **Hero Section**: Implementar texto animado con Framer Motion y fondo sutil.
- **About Section**: Maquetar la sección de biografía y skills.
- **Projects Grid**:
  - Crear componente `ProjectCard`.
  - Implementar grid responsivo.
  - Añadir sistema de filtrado por categoría (NLP, CV, Agents).

## Fase 4: Interactividad y Detalles

### Project Detail View

- Crear una página dinámica `/projects/[id]` o un Modal interceptor.
- Esta vista debe renderizar el `longDescription` y mostrar la galería de imágenes o videos.

### Animaciones

- Añadir `AnimatePresence` para transiciones de página.
- Añadir efectos de entrada (Staggered fade-in) para los elementos de la lista.

## Fase 5: Optimización y Entrega

- Verificar responsividad en móviles.
- Asegurar accesibilidad (alt tags, contrastes).
- Generar build de producción para probar.

---

> **Instrucción para el Agente**: Comienza ejecutando la Fase 1. Una vez completada, espera confirmación antes de pasar a la Fase 2. Lee siempre `02_DESIGN_SYSTEM.md` antes de estilizar cualquier componente.