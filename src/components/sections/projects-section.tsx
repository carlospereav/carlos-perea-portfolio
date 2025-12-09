"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, getAllCategories, type Project } from "../../data/portfolio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const categories = ["all", ...getAllCategories()];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Featured projects developed during my professional experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === "all" ? "All" : category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  variants,
}: {
  project: Project;
  variants: any;
}) {
  return (
    <motion.div variants={variants} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="h-full flex flex-col border-slate-800 hover:border-indigo-500/50 transition-colors bg-slate-900">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            {project.featured && (
              <Badge variant="default" className="ml-2">
                Featured
              </Badge>
            )}
          </div>
          <CardDescription className="text-slate-400">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>
          <p className="text-sm text-slate-500 line-clamp-2">
            {project.longDescription}
          </p>
        </CardContent>
        
        <CardFooter className="flex gap-2">
          {project.links.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {project.links.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}


