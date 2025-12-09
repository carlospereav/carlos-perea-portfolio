"use client";

import { motion } from "framer-motion";
import { profile } from "../../data/portfolio";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            {profile.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-2"
          >
            {profile.role}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-500 max-w-2xl mb-8"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <Button onClick={() => scrollToSection("projects")} size="lg">
              View Projects
            </Button>
            <Button onClick={() => scrollToSection("about")} variant="outline" size="lg">
              About Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-400 hover:text-slate-100 transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


