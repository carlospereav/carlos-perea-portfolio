"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { profile } from "../../data/portfolio";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="w-[120px] hidden md:block" />
        
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
          >
            Sobre mí
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
          >
            Contacto
          </button>
        </nav>

        <div className="flex items-center space-x-2 w-[120px] justify-end">
          <Button variant="ghost" size="icon" asChild>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={profile.socials.email} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
