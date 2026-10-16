import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, Code2, Shield, Layers } from "lucide-react";

const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3", "Vite", "Next.js", "Framer Motion"],
  backend: ["Node.js", "Clean Architecture", "API-Driven Development", "Supabase"],
  tools: ["Git & GitHub", "VS Code", "Figma", "Vercel", "Railway", "Prompt Engineering and Optimization"],
  security: ["Cybersecurity Principles", "Secure Coding", "Security Headers", "Threat Analysis"],
  aiEngineering: ["Lovable", "Context Engineering", "Agent-Assisted Development", "Exploring AI-Supported Testing Pipelines"],
};

const languages = ["Arabic (Native)", "English (Fluent)", "German (Basic)"];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent-indigo text-sm font-medium tracking-widest uppercase">
            01. About
          </span>
          <h2 className="text-5xl font-black text-text-primary font-sans mt-3">
            Who I Am
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — bio */}
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

            {/* Info cards */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20">
                  <MapPin size={20} className="text-accent-indigo" />
                </div>
                <span className="text-text-primary font-medium">Damascus, Syria</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20">
                  <GraduationCap size={20} className="text-accent-cyan" />
                </div>
                <span className="text-text-primary font-medium">
                  B.Sc. IT & Software Engineering
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20">
                  <Calendar size={20} className="text-accent-indigo" />
                </div>
                <span className="text-text-primary font-medium">
                  Syrian Private University · 2023 – 2028
                </span>
              </motion.div>
            </div>

            {/* Languages */}
            <div className="mt-8 p-6 rounded-xl glass-card">
              <h3 className="text-text-primary font-bold mb-4 flex items-center gap-2">
                <Layers size={18} className="text-accent-cyan" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-lg bg-surface-light/50 text-text-secondary text-sm font-medium border border-white/5 hover:border-accent-cyan/30 hover:text-text-primary transition-all duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-primary font-sans mb-6">
              Technical Skills
            </h3>

            {/* Frontend Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20">
                  <Code2 size={20} className="text-accent-indigo" />
                </div>
                <h4 className="font-bold text-text-primary">Frontend Development</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-accent-indigo/5 text-text-secondary text-sm font-medium border border-accent-indigo/20 hover:bg-accent-indigo/10 hover:border-accent-indigo/30 hover:text-text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend & APIs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20">
                  <Layers size={20} className="text-accent-cyan" />
                </div>
                <h4 className="font-bold text-text-primary">Backend & APIs</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-accent-cyan/5 text-text-secondary text-sm font-medium border border-accent-cyan/20 hover:bg-accent-cyan/10 hover:border-accent-cyan/30 hover:text-text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20">
                  <Shield size={20} className="text-accent-indigo" />
                </div>
                <h4 className="font-bold text-text-primary">Security</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.security.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-accent-indigo/5 text-text-secondary text-sm font-medium border border-accent-indigo/20 hover:bg-accent-indigo/10 hover:border-accent-indigo/30 hover:text-text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20">
                  <Code2 size={20} className="text-accent-cyan" />
                </div>
                <h4 className="font-bold text-text-primary">Tools & Workflow</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-accent-cyan/5 text-text-secondary text-sm font-medium border border-accent-cyan/20 hover:bg-accent-cyan/10 hover:border-accent-cyan/30 hover:text-text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* AI-Assisted Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20">
                  <Layers size={20} className="text-accent-indigo" />
                </div>
                <h4 className="font-bold text-text-primary">AI-Assisted Engineering</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.aiEngineering.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-accent-indigo/5 text-text-secondary text-sm font-medium border border-accent-indigo/20 hover:bg-accent-indigo/10 hover:border-accent-indigo/30 hover:text-text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
