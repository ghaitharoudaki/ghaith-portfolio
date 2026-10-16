import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "ThreatLens — URL Threat Analyzer",
    description:
      "Full-stack web application that analyzes URLs for security threats using the VirusTotal API. Features a dark glassmorphism UI, URL autocomplete, scan history, and real-time threat reporting.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "VirusTotal API", "Vercel"],
    live: "https://threatlens-io.vercel.app",
  },
  {
    number: "02",
    title: "Security Header Grader",
    description:
      "Full-stack tool that evaluates HTTP security headers for any website and returns a letter grade with detailed feedback. Includes a side-by-side site comparison feature and a clean, responsive UI.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Railway", "Vercel"],
    live: "https://security-grader.vercel.app",
  },
  {
    number: "03",
    title: "SA Studio",
    description:
      "Responsive multi-page website for a luxury fabric and wallpaper brand, featuring a collections catalog, fabric detail pages, and a Supabase-powered backend. Built with a sophisticated dark theme and premium design system.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Vercel"],
    live: "https://sastudio-sy.com",
  },
  {
    number: "04",
    title: "Crewly",
    description:
      "A digital platform presenting project management, professional development, and business tools. Built to empower teams with streamlined workflows and collaboration features.",
    tech: ["React", "TypeScript", "Node.js"],
    live: "#",
  },
  {
    number: "05",
    title: "Red Phoenix",
    description:
      "Global supply chain and project execution firm in China handling turnkey procurement, quality assurance, and international end-to-end logistics. Enterprise-grade platform for seamless global operations.",
    tech: ["Logistics Engine", "Global Procurement", "Project Execution", "React/Next.js"],
    live: "#",
    inProgress: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm font-medium tracking-widest uppercase">
            02. Projects
          </span>
          <h2 className="text-5xl font-black text-text-primary font-sans mt-3">
            Featured Work
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full" />
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.number}
              href={project.live}
              target={project.live !== "#" ? "_blank" : "_self"}
              rel={project.live !== "#" ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl glass-card hover:glass-card-hover transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 md:p-10">
                <div className="flex flex-col gap-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-accent text-sm font-medium">
                        {project.number}
                      </span>
                      {project.inProgress && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          In Progress
                        </span>
                      )}
                    </div>
                    <ExternalLink size={20} className="text-text-secondary group-hover:text-accent transition-colors" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary font-sans mb-4 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-surface-light/30 border border-white/5 text-text-secondary text-sm font-medium font-mono group-hover:border-accent/30 group-hover:text-text-primary transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
