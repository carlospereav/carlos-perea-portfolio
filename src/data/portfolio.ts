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
