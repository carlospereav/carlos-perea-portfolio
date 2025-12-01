# Sistema de Diseño y UI/UX

## 1. Paleta de Colores

Queremos transmitir "Inteligencia", "Datos" y "Modernidad". Usaremos un modo oscuro por defecto (Dark Mode First) ya que es preferido en el sector tech, con opción a claro.

- **Fondo Principal**: `slate-950` (Oscuro profundo, casi negro).
- **Fondo Secundario (Cartas/Paneles)**: `slate-900` con bordes sutiles `slate-800`.
- **Acento Principal**: `indigo-500` (Para botones primarios, enlaces activos).
- **Acento Secundario (Gradientes)**: `cyan-500` a `blue-600` (Para textos destacados o fondos abstractos).
- **Texto Principal**: `slate-100`.
- **Texto Secundario**: `slate-400`.

## 2. Tipografía

- **Fuentes**: Inter o Geist Sans (Modernas, grotescas, altamente legibles en pantallas).
- **Títulos**: Bold o ExtraBold para jerarquía clara.
- **Código**: JetBrains Mono o Fira Code para mostrar snippets de código o terminales.

## 3. Componentes Visuales Clave

### A. Tarjetas de Proyecto (Project Cards)

Deben tener un efecto "Glassmorphism" sutil o bordes brillantes al hacer hover.

**Contenido de la tarjeta:**

- Imagen de portada / GIF del proyecto.
- Título.
- Tags de tecnologías (ej: PyTorch, NLP).
- Breve descripción (2 líneas).
- Botones: "Demo", "GitHub", "Leer más".

### B. Visualización de Datos (Decorativa)

Usar partículas conectadas o mallas geométricas (tipo grafo) en el fondo del Hero para aludir a redes neuronales o grafos de conocimiento (LangGraph).

**Librería sugerida**: `react-tsparticles` o simplemente SVG animados con CSS/Framer Motion.

### C. Navegación

Barra de navegación flotante ("Sticky Navbar") con efecto blur en la parte superior.

## 4. Experiencia de Usuario (UX)

- **Feedback**: Los elementos interactivos deben reaccionar inmediatamente (micro-interacciones).
- **Performance**: Las imágenes deben usar lazy-loading.
- **Accesibilidad**: Mantener contraste alto y etiquetas ARIA donde sea necesario.