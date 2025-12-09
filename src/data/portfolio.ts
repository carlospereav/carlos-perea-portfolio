// Profile Data Interface
export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: {
    summary: string;
    skills: string[];
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

// Experience Data Interface
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: 'work' | 'volunteer';
}

// Education Data Interface
export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  details?: string[];
}

// Project Data Interface
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

// Profile Data
export const profile: Profile = {
  name: "Carlos Perea Vega",
  role: "Data Scientist & AI Engineer",
  tagline: "Transformando datos complejos en decisiones inteligentes y agentes autónomos.",
  about: {
    summary: "Data Scientist y Matemático especializado en Inteligencia Artificial y Google Cloud. Experiencia profesional desarrollando soluciones con LLMs (LangChain) y construyendo pipelines de datos modernos (Dataform, BigQuery). Apasionado por aplicar Machine Learning y metodologías Ágiles para resolver problemas de negocio complejos.",
    skills: [
      "Python",
      "SQL",
      "R",
      "Git",
      "Docker",
      "LangChain",
      "LangGraph",
      "RAG",
      "OpenAI API",
      "FastAPI",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "BigQuery",
      "Dataform",
      "Looker Studio",
      "Cloud Run",
      "Kubernetes",
      "n8n"
    ]
  },
  socials: {
    github: "https://github.com/carlospereav",
    linkedin: "https://www.linkedin.com/in/carlospereav/",
    email: "mailto:carlos.pereav@gmail.com"
  }
};

// Projects Data - Solo proyecto real
export const projects: Project[] = [
  {
    id: "git-commit-classifier",
    title: "Git Commit Classifier",
    category: "NLP",
    description: "Modelo de Deep Learning construido con PyTorch y Transformers para clasificar automáticamente mensajes de commit de Git según Conventional Commits. Incluye demo interactiva con Streamlit.",
    longDescription: "Un modelo de Deep Learning construido con PyTorch y Transformers (Hugging Face) que clasifica automáticamente los mensajes de commit de Git según el estándar Conventional Commits (feat, fix, docs, style, refactor, test, chore, etc.). El proyecto incluye una aplicación interactiva desarrollada con Streamlit que permite a los usuarios probar el modelo en tiempo real. El modelo utiliza arquitecturas de transformers pre-entrenadas y ha sido fine-tuneado específicamente para la tarea de clasificación de commits.",
    techStack: ["PyTorch", "Transformers", "Hugging Face", "Streamlit", "Python", "Deep Learning", "NLP", "Google Cloud Run"],
    image: "/images/projects/git-commit-classifier.jpg",
    links: { 
      github: "https://github.com/carlospereav/git-commit-classifier",
      demo: "https://git-commit-classifier-323279730842.europe-southwest1.run.app" 
    },
    featured: true
  }
];

// Experience Data
export const experience: Experience[] = [
  {
    id: "vitaly",
    company: "Vitaly Health Services",
    role: "Data Scientist",
    location: "Badajoz, España",
    startDate: "Mar. 2024",
    endDate: "Nov. 2025",
    type: "work",
    description: [
      "Desarrollo de un motor de recomendación con LangChain expuesto mediante FastAPI para maximizar la venta cruzada de servicios. Diseño de estrategia dual: inferencia en tiempo real para CRM y procesamiento asíncrono masivo mediante OpenAI Batch API.",
      "Diseño de arquitectura de agentes ReAct con LangGraph para análisis clínico inteligente y generación de recomendaciones de salud personalizadas.",
      "Desarrollo de modelos de Machine Learning no supervisado (Clustering) para la planificación estratégica de nuevas aperturas de centros.",
      "Diseño de pipelines ETL en Dataform (GCP) y modelado de datos en BigQuery. Implementación de algoritmo de segmentación de clientes y automatización del seguimiento de cartera mediante dashboards en Looker Studio.",
      "Desarrollo de modelos para identificar drivers clave de rentabilidad utilizando técnicas de Feature Importance.",
      "Desarrollo de chatbot en n8n para gestión de citas médicas con validación de clientes y enrutamiento automático."
    ]
  },
  {
    id: "scouts",
    company: "Scouts de España",
    role: "Monitor de Ocio y Tiempo Libre",
    location: "Badajoz, España",
    startDate: "Sept. 2021",
    endDate: "Sept. 2023",
    type: "volunteer",
    description: [
      "Liderazgo y Gestión de Riesgos: Coordinación de equipos juveniles (14-17 años) y planificación logística de actividades de montaña, asegurando el cumplimiento de protocolos de seguridad."
    ]
  }
];

// Education Data
export const education: Education[] = [
  {
    id: "master",
    institution: "Universidad de Extremadura",
    degree: "Máster Universitario en Dirección y Gestión de Proyectos",
    location: "Badajoz, España",
    startDate: "Sept. 2024",
    endDate: "Jun. 2025"
  },
  {
    id: "grado",
    institution: "Universidad de Extremadura",
    degree: "Grado en Matemáticas",
    location: "Badajoz, España",
    startDate: "Sept. 2018",
    endDate: "Nov. 2023",
    details: [
      "ERASMUS: Uniwersytet Zielonogórski (Polonia) - Sept. 2021 a Jun. 2022",
      "SICUE: Universidad de Málaga - Sept. 2022 a Jun. 2023"
    ]
  },
  {
    id: "cambridge",
    institution: "University of Cambridge",
    degree: "Cambridge English Certificate: Advanced C1 (CAE)",
    location: "Badajoz, España",
    startDate: "Dic. 2020",
    endDate: "Dic. 2020"
  }
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

// Helper function to get all categories
export const getAllCategories = (): Project['category'][] => {
  return Array.from(new Set(projects.map(project => project.category))) as Project['category'][];
};
