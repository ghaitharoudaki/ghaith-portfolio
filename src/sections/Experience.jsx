import { motion } from "framer-motion";
import { desc } from "framer-motion/client";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Finance & Operations Intern",
    organization: "Chocolate Bar",
    period: "August 22 – September 22",
    description:
      "Completed a 200-hour intensive internship rotating through Finance, HR, and Supply Chain Management departments. Demonstrated strong teamwork and communication skills while consistently exceeding performance expectations.",
  },
  {
    type: "work",
    title: "Freelance Frontend Developer",
    organization: "Self-Employed",
    period: "2025 – Present",
    description:
      "Provided freelance frontend development services for various clients, Mainly in the MENA region.",
  }
];

const education = [
  {
    type: "education",
    title: "B.Sc. Information Technology & Software Engineering",
    organization: "Syrian Private University",
    period: "2023 – 2028",
  },
];

function TimelineItem({ item, index }) {
  const isWork = item.type === "work";
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

      {/* Dot */}
      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-ocean-400 border-2 border-white dark:border-slate-800 ring-2 ring-ocean-200 dark:ring-ocean-900" />

      <div className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700 hover:border-ocean-300 hover:shadow-lg hover:shadow-ocean-500/5 transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-ocean-500 transition-colors">
              {item.title}
            </h3>
            <p className="text-ocean-500 dark:text-ocean-400 text-sm font-medium mt-0.5">
              {item.organization}
            </p>
          </div>
          <span className="shrink-0 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-600 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300 text-xs font-mono">
            {item.period}
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-3">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800">
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
            03. Experience
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mt-2">
            Where I've Been
          </h2>
          <div className="mt-3 w-12 h-1 bg-ocean-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 rounded-lg bg-ocean-50 dark:bg-ocean-950 border border-ocean-100 dark:border-ocean-900">
                <Briefcase size={16} className="text-ocean-500" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">Work Experience</h3>
            </div>
            {experiences.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 rounded-lg bg-ocean-50 dark:bg-ocean-950 border border-ocean-100 dark:border-ocean-900">
                <GraduationCap size={16} className="text-ocean-500" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">Education</h3>
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