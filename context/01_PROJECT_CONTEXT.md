# Contexto del Proyecto: Portafolio de Data Scientist

## 1. Visión del Producto

El objetivo es crear un portafolio web personal de alto impacto para un Data Scientist Senior/Avanzado. El sitio debe funcionar como una tarjeta de presentación interactiva (similar a LinkedIn pero más visual) y un hub central para demos técnicas.

### Objetivos Clave

- **Profesionalismo**: Diseño limpio, minimalista y orientado a la tecnología.
- **Interactividad**: No solo texto estático. Los proyectos deben sentirse "vivos" (videos, demos embebidas, o enlaces claros a repositorios).
- **Narrativa**: Una sección "Sobre mí" que cuente la historia profesional, no solo una lista de habilidades.
- **Escalabilidad**: Debe ser fácil añadir nuevos proyectos (Agentes, Modelos, Dashboards) en el futuro.

## 2. Stack Tecnológico Sugerido

Para este proyecto, utilizaremos un stack moderno, rápido y fácil de mantener:

- **Framework**: React (Vite) o Next.js (App Router). Recomendación: Next.js por su SEO y optimización de imágenes.
- **Lenguaje**: TypeScript (Obligatorio para mantener tipado estático y robustez).
- **Estilos**: Tailwind CSS (para desarrollo rápido y responsive).
- **UI Components**: Shadcn/ui (para componentes base accesibles y elegantes).
- **Animaciones**: Framer Motion (para transiciones suaves entre secciones y hover effects en las tarjetas de proyectos).
- **Iconos**: Lucide-React.

## 3. Arquitectura de la Información

El sitio constará de una "Single Page Application" (SPA) con navegación suave (scroll) o modales para detalles profundos, para mantener al usuario inmerso.

### Secciones Principales

- **Hero Section**: Introducción breve, foto profesional, título y llamada a la acción (Ver Proyectos / Contactar).
- **Tech Stack**: Carrusel o Grid visual de tecnologías (Python, PyTorch, LangChain, AWS, SQL, etc.).
- **About Me**: Biografía profesional, trayectoria y filosofía de trabajo.
- **Featured Projects (El Core)**: Grid de proyectos destacados.
  - Proyecto 1: Clasificador PyTorch.
  - Proyecto 2: Agentes LangGraph.
- **Blog/Insights (Opcional)**: Breves pensamientos técnicos.
- **Footer/Contact**: Enlaces a LinkedIn, GitHub, Email.

## 4. Instrucciones de Comportamiento para la IA

- Actúa como un Senior Frontend Engineer con experiencia en UX.
- Prioriza la legibilidad de código y la modularización de componentes.
- No uses `any` en TypeScript. Define interfaces para los proyectos y perfiles.
- Asegura que el sitio sea totalmente Responsive (Móvil primero).