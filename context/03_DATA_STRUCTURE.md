# Estructura de Datos y Contenido Real

> **Instrucción para la IA**: Utiliza este contenido real para poblar la aplicación. No uses "Lorem Ipsum". Crea un archivo `src/data/portfolio.ts` con esta información.

## 1. Perfil (Profile Data)

```json
{
  "name": "Tu Nombre",
  "role": "Senior Data Scientist & AI Engineer",
  "tagline": "Transformando datos complejos en decisiones inteligentes y agentes autónomos.",
  "about": {
    "summary": "Especializado en Deep Learning y Sistemas Multi-Agente. Con más de X años de experiencia combinando investigación académica con soluciones de producción escalables.",
    "skills": ["Python", "PyTorch", "TensorFlow", "LangChain", "LangGraph", "SQL", "Docker", "AWS", "FastAPI"]
  },
  "socials": {
    "github": "https://github.com/tu-usuario",
    "linkedin": "https://linkedin.com/in/tu-usuario",
    "email": "mailto:tu@email.com"
  }
}
```

## 2. Proyectos (Projects Data)

Cada proyecto debe tener atributos ricos para permitir filtrado y visualización detallada.

```typescript
export interface Project {
  id: string;
  title: string;
  category: 'Computer Vision' | 'NLP' | 'Agents' | 'Time Series';
  description: string;
  longDescription: string; // Markdown soportado
  techStack: string[];
  image: string; // Ruta a assets
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "pytorch-classifier",
    title: "Advanced Image Classifier",
    category: "Computer Vision",
    description: "Clasificador de imágenes optimizado utilizando Transfer Learning con ResNet50 y PyTorch.",
    longDescription: "Desarrollo de un pipeline completo de entrenamiento y evaluación. Implementación de técnicas de Data Augmentation y optimización de hiperparámetros con Optuna. Desplegado como microservicio REST usando FastAPI.",
    techStack: ["PyTorch", "FastAPI", "Docker", "Opencv"],
    image: "/images/projects/classifier.jpg",
    links: { github: "#", demo: "#" },
    featured: true
  },
  {
    id: "langgraph-agents",
    title: "Autonomous Research Agents",
    category: "Agents",
    description: "Sistema multi-agente orquestado con LangGraph para investigación autónoma de mercados.",
    longDescription: "Arquitectura basada en grafos donde múltiples agentes (Investigador, Crítico, Redactor) colaboran. Utiliza memoria persistente y búsqueda web en tiempo real. Estado gestionado a través de LangGraph state channels.",
    techStack: ["LangChain", "LangGraph", "OpenAI API", "Tavily"],
    image: "/images/projects/agents.jpg",
    links: { github: "#" },
    featured: true
  },
  {
    id: "rag-financial",
    title: "Financial RAG Assistant",
    category: "NLP",
    description: "Chatbot experto en finanzas utilizando Retrieval Augmented Generation sobre documentos 10K.",
    longDescription: "Indexación vectorial con Pinecone/ChromaDB. Embeddings personalizados para terminología financiera. Interfaz construida con Streamlit embebida.",
    techStack: ["LlamaIndex", "Pinecone", "Streamlit", "HuggingFace"],
    image: "/images/projects/rag.jpg",
    links: { github: "#", demo: "#" },
    featured: false
  }
];
```
