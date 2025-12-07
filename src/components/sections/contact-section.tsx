"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <a href={profile.socials.email}>
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


