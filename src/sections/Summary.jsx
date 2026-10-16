import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, Layers } from "lucide-react";

const languages = ["Arabic (Native)", "English (Fluent)", "German (Basic)"];

export default function Summary() {
  return (
    <section id="summary" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm font-medium tracking-widest uppercase">
            01. Summary
          </span>
          <h2 className="text-5xl font-black text-text-primary font-sans mt-3">
            Who I Am
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I'm a{" "}
              <span className="text-text-primary font-semibold">
                Frontend Developer
              </span>{" "}
              and{" "}
              <span className="text-text-primary font-semibold">
                Software Engineering student
              </span>{" "}
              passionate about building interactive, user-centric web applications that combine elegant design with robust security.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              I turn complex problems into clean, intuitive digital experiences. My work focuses on crafting high-performance interfaces while maintaining a security-first mindset throughout the development process.
            </p>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <MapPin size={20} className="text-accent" />
                </div>
                <span className="text-text-primary font-medium">Damascus, Syria</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-accent-light/10 border border-accent-light/20">
                  <GraduationCap size={20} className="text-accent-light" />
                </div>
                <span className="text-text-primary font-medium">
                  B.Sc. IT & Software Engineering
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Calendar size={20} className="text-accent" />
                </div>
                <span className="text-text-primary font-medium">
                  Syrian Private University · 2023 – 2028
                </span>
              </motion.div>
            </div>

            <div className="mt-8 p-6 rounded-xl glass-card">
              <h3 className="text-text-primary font-bold mb-4 flex items-center gap-2">
                <Layers size={18} className="text-accent" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-lg bg-surface-light/50 text-text-secondary text-sm font-medium border border-white/5 hover:border-accent/30 hover:text-text-primary transition-all duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-primary font-sans mb-6">
              Professional Focus
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <h4 className="font-bold text-text-primary mb-3 text-lg">
                Frontend Excellence
              </h4>
              <p className="text-text-secondary leading-relaxed">
                Specializing in building responsive, performant web applications with modern frameworks and design systems. Focus on creating seamless user experiences through clean code and thoughtful architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <h4 className="font-bold text-text-primary mb-3 text-lg">
                Full-Stack Development
              </h4>
              <p className="text-text-secondary leading-relaxed">
                Experience with end-to-end application development, from database design to deployment. Comfortable working across the stack to deliver complete solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <h4 className="font-bold text-text-primary mb-3 text-lg">
                Security-First Approach
              </h4>
              <p className="text-text-secondary leading-relaxed">
                Integrating security best practices throughout the development lifecycle. Understanding of common vulnerabilities and how to build resilient applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
