import { motion } from "framer-motion";
import { Code2, Layers } from "lucide-react";

const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3", "Vite", "Next.js", "Framer Motion"],
  backend: ["Node.js", "Clean Architecture", "API-Driven Development", "Supabase"],
  tools: ["Git & GitHub", "VS Code", "Figma", "Vercel", "Railway", "Prompt Engineering and Optimization"],
  aiEngineering: ["Lovable", "Context Engineering", "Agent-Assisted Development", "Exploring AI-Supported Testing Pipelines"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm font-medium tracking-widest uppercase">
            02. Skills
          </span>
          <h2 className="text-5xl font-black text-text-primary font-sans mt-3">
            Technical Skills
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                <Code2 size={20} className="text-accent" />
              </div>
              <h4 className="font-bold text-text-primary">Frontend Development</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-accent/5 text-text-secondary text-sm font-medium border border-accent/20 hover:bg-accent/10 hover:border-accent/30 hover:text-text-primary transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-accent-light/10 border border-accent-light/20">
                <Layers size={20} className="text-accent-light" />
              </div>
              <h4 className="font-bold text-text-primary">Backend & APIs</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-accent-light/5 text-text-secondary text-sm font-medium border border-accent-light/20 hover:bg-accent-light/10 hover:border-accent-light/30 hover:text-text-primary transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                <Code2 size={20} className="text-accent" />
              </div>
              <h4 className="font-bold text-text-primary">Tools & Workflow</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-accent/5 text-text-secondary text-sm font-medium border border-accent/20 hover:bg-accent/10 hover:border-accent/30 hover:text-text-primary transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-accent-light/10 border border-accent-light/20">
                <Layers size={20} className="text-accent-light" />
              </div>
              <h4 className="font-bold text-text-primary">AI-Assisted Engineering</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.aiEngineering.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-accent-light/5 text-text-secondary text-sm font-medium border border-accent-light/20 hover:bg-accent-light/10 hover:border-accent-light/30 hover:text-text-primary transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
