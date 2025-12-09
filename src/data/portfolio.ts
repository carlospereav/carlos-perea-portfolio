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
  longDescription: string; // Markdown supported
  techStack: string[];
  image: string; // Path to assets
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
  tagline: "Transforming complex data into intelligent decisions and autonomous agents.",
  about: {
    summary: "Data Scientist and Mathematician specialized in Artificial Intelligence and Google Cloud. Professional experience developing solutions with LLMs (LangChain) and building modern data pipelines (Dataform, BigQuery). Passionate about applying Machine Learning and Agile methodologies to solve complex business problems. Fluent technical communication skills in English (C1 Certificate).",
    skills: [
      "Python",
      "SQL",
      "R",
      "Git",
      "Docker",
      "Agile - Scrum",
      "n8n",
      "LangChain",
      "LangGraph",
      "RAG",
      "ADK",
      "OpenAI API",
      "FastAPI",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "BigQuery",
      "Looker Studio",
      "Dataform",
      "Cloud Run",
      "Kubernetes"
    ]
  },
  socials: {
    github: "https://github.com/carlospereav",
    linkedin: "https://www.linkedin.com/in/carlospereav/",
    email: "mailto:carlos.pereav@gmail.com"
  }
};

// Projects Data - Real project only
export const projects: Project[] = [
  {
    id: "git-commit-classifier",
    title: "Git Commit Classifier",
    category: "NLP",
    description: "Deep Learning model built with PyTorch and Transformers to automatically classify Git commit messages according to Conventional Commits. Includes interactive demo with Streamlit.",
    longDescription: "A Deep Learning model built with PyTorch and Transformers (Hugging Face) that automatically classifies Git commit messages according to the Conventional Commits standard (feat, fix, docs, style, refactor, test, chore, etc.). The project includes an interactive application developed with Streamlit that allows users to test the model in real-time. The model uses pre-trained transformer architectures and has been fine-tuned specifically for the commit classification task.",
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
    location: "Badajoz, Spain",
    startDate: "Mar. 2024",
    endDate: "Nov. 2025",
    type: "work",
    description: [
      "Developed a recommendation engine using LangChain, exposed via FastAPI, to maximize cross-selling of services. Designed a dual strategy: real-time inference for CRM and massive asynchronous processing via OpenAI Batch API, optimizing operational costs.",
      "Designed a ReAct agent architecture using LangGraph for intelligent clinical analysis and the generation of personalized health recommendations, managing their distribution across multiple communication channels.",
      "Developed unsupervised Machine Learning models (Clustering) for the strategic planning of new center openings. Analyzed the geographic distribution of clients and workforce volume to detect underserved high-demand areas and maximize network coverage.",
      "Designed ETL pipelines in Dataform (GCP) and data modeling in BigQuery to centralize accounting information. Implemented a client segmentation algorithm (based on risk and payment behavior) and automated portfolio tracking via interactive dashboards in Looker Studio.",
      "Developed models to identify key profitability drivers, using Feature Importance techniques to isolate critical variables and generate executive reports that guided commercial strategy.",
      "Developed a chatbot using n8n for medical appointment management that analyzes user intent. The system integrates active client validation and automatic routing between the calendar and Contact Center, reducing manual administrative workload."
    ]
  },
  {
    id: "scouts",
    company: "Scouts de España",
    role: "Volunteer; Leisure and Free Time Instructor",
    location: "Badajoz, Spain",
    startDate: "Sept. 2021",
    endDate: "Sept. 2023",
    type: "volunteer",
    description: [
      "Leadership and Risk Management: Coordinated youth teams (ages 14-17) and planned logistics for mountain activities, ensuring compliance with safety protocols."
    ]
  }
];

// Education Data
export const education: Education[] = [
  {
    id: "master",
    institution: "Universidad de Extremadura - School of Industrial Engineering",
    degree: "Master's Degree in Project Management",
    location: "Badajoz, Spain",
    startDate: "Sept. 2024",
    endDate: "Jun. 2025"
  },
  {
    id: "grado",
    institution: "Universidad de Extremadura",
    degree: "Bachelor's Degree in Mathematics",
    location: "Badajoz, Spain",
    startDate: "Sept. 2018",
    endDate: "Nov. 2023",
    details: [
      "ERASMUS: Uniwersytet Zielonogórski (Poland) - Sept. 2021 to Jun. 2022",
      "SICUE: Universidad de Málaga (Spain) - Sept. 2022 to Jun. 2023"
    ]
  },
  {
    id: "cambridge",
    institution: "University of Cambridge",
    degree: "Cambridge English Certificate: Advanced C1 (CAE)",
    location: "Badajoz, Spain",
    startDate: "Dec. 2020",
    endDate: "Dec. 2020"
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
