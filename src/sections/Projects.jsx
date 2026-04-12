import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "ThreatLens — URL Threat Analyzer",
    description:
      "Full-stack web application that analyzes URLs for security threats using the VirusTotal API. Features a dark glassmorphism UI, URL autocomplete, scan history, and real-time threat reporting.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "VirusTotal API", "Vercel"],
    live: "https://threatlens-io.vercel.app",
    github: "https://github.com/ghaitharoudaki/threatlens",
    status: "Live",
    featured: true,
  },
  {
    number: "02",
    title: "Security Header Grader",
    description:
      "Full-stack tool that evaluates HTTP security headers for any website and returns a letter grade with detailed feedback. Includes a side-by-side site comparison feature and a clean, responsive UI.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Railway", "Vercel"],
    live: "https://security-grader.vercel.app",
    github: "https://github.com/ghaitharoudaki/security-grader",
    status: "Live",
    featured: true,
  },
  {
    number: "03",
    title: "SA Studio",
    description:
      "Responsive multi-page website for a luxury fabric and wallpaper brand, featuring a collections catalog, fabric detail pages, and a Supabase-powered backend. Built with a deep forest green and burgundy design system.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Cloudinary", "Vercel"],
    github: "https://github.com/ghaitharoudaki/sa-studio",
    status: "In Progress",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-ocean-500 text-sm font-medium tracking-widest uppercase">
            02. Projects
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Things I've Built
          </h2>
          <div className="mt-3 w-12 h-1 bg-ocean-400 rounded-full" />
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-slate-200 bg-white hover:border-ocean-300 hover:shadow-xl hover:shadow-ocean-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ocean-400 to-ocean-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                  {/* Left content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-ocean-400 text-sm font-medium">
                        {project.number}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          project.status === "Live"
                            ? "bg-green-50 text-green-600 border border-green-200"
                            : "bg-amber-50 text-amber-600 border border-amber-200"
                        }`}
                      >
                        {project.status === "Live" ? "● " : "◌ "}
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-ocean-500 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-500 leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — links */}
                  <div className="flex md:flex-col gap-3 shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ocean-500 text-white text-sm font-medium hover:bg-ocean-400 transition-colors glow-sm"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:border-ocean-300 hover:text-ocean-500 transition-colors"
                      >
                        <Code2 size={15} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}