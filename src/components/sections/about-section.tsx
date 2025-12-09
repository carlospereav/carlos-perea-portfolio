"use client";

import { motion } from "framer-motion";
import { profile, experience, education } from "../../data/portfolio";
import { Badge } from "../ui/badge";
import { Briefcase, GraduationCap, MapPin, Calendar, Heart } from "lucide-react";

export function AboutSection() {
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
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {profile.about.summary}
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.about.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-600 to-transparent" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-4 border-slate-950 shadow-lg shadow-cyan-500/20" />
                  
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                          {exp.type === 'volunteer' ? (
                            <Heart className="h-5 w-5 text-rose-400" />
                          ) : (
                            <Briefcase className="h-5 w-5 text-cyan-400" />
                          )}
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {exp.type === 'volunteer' && (
                      <Badge variant="outline" className="mb-3 border-rose-400/50 text-rose-400">
                        Volunteer
                      </Badge>
                    )}
                    
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-slate-300 text-sm leading-relaxed flex gap-2">
                          <span className="text-cyan-500 mt-1.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                      <p className="text-cyan-400 font-medium">{edu.institution}</p>
                      {edu.details && (
                        <ul className="mt-2 space-y-1">
                          {edu.details.map((detail, i) => (
                            <li key={i} className="text-slate-400 text-sm flex gap-2">
                              <span className="text-cyan-500">→</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.startDate === edu.endDate ? edu.endDate : `${edu.startDate} - ${edu.endDate}`}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


