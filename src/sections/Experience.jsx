import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Co-Founder & Software Engineer",
    organization: "Crewly",
    period: "2024 – Present",
    description:
      "Co-founding and engineering digital solutions with a dedicated team of software engineers, building scalable web applications, branding engines, and custom software systems for clients worldwide.",
  },
  {
    type: "work",
    title: "Freelance Frontend Developer",
    organization: "Self-Employed",
    period: "2025 – Present",
    description:
      "Providing freelance frontend development services for various clients, mainly in the MENA region. Specializing in React, TypeScript, and modern web technologies.",
  },
  {
    type: "work",
    title: "Finance & Operations Intern",
    organization: "Chocolate Bar",
    period: "August 22 – September 22",
    description:
      "Completed a 200-hour intensive internship rotating through Finance, HR, and Supply Chain Management departments. Demonstrated strong teamwork and communication skills while consistently exceeding performance expectations.",
  },
];

const education = [
  {
    type: "education",
    title: "B.Sc. Information Technology & Software Engineering",
    organization: "Syrian Private University",
    period: "2023 – 2028",
    description: "Focused on software development, data structures, algorithms, and cybersecurity fundamentals.",
  },
];

function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-indigo/50 via-accent-cyan/30 to-transparent" />

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-indigo ring-4 ring-accent-indigo/20"
      />

      <div className="group p-6 rounded-2xl glass-card hover:glass-card-hover transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-bold text-text-primary text-lg group-hover:text-gradient transition-colors">
              {item.title}
            </h3>
            <p className="text-accent text-sm font-semibold mt-1">
              {item.organization}
            </p>
          </div>
          <span className="shrink-0 px-3 py-1 rounded-lg bg-surface-light/50 border border-white/5 text-text-secondary text-xs font-mono">
            {item.period}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
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
            03. Experience
          </span>
          <h2 className="text-5xl font-black text-text-primary font-sans mt-3">
            Professional Journey
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <Briefcase size={20} className="text-accent" />
              </div>
              <h3 className="font-bold text-text-primary font-sans text-xl">
                Work Experience
              </h3>
            </div>
            {experiences.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-accent-light/10 border border-accent-light/20">
                <GraduationCap size={20} className="text-accent-light" />
              </div>
              <h3 className="font-bold text-text-primary font-sans text-xl">Education</h3>
            </div>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
