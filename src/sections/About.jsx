import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 95 },
  { name: "German", level: "Basic", percent: 25 },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
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
            01. About
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Who I Am
          </h2>
          <div className="mt-3 w-12 h-1 bg-ocean-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I'm a <span className="text-ocean-500 font-semibold">Frontend Developer</span> and{" "}
              <span className="text-ocean-500 font-semibold">IT & Software Engineering student</span> with
              a passion for building interactive, user-centric web applications.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I combine frontend craftsmanship with a cybersecurity mindset — building
              things that not only look great but are built to be secure and efficient.
              I enjoy turning complex problems into clean, intuitive digital experiences.
            </p>

            {/* Info cards */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 rounded-lg bg-ocean-50 border border-ocean-100">
                  <MapPin size={16} className="text-ocean-500" />
                </div>
                <span>Damascus, Syria</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 rounded-lg bg-ocean-50 border border-ocean-100">
                  <GraduationCap size={16} className="text-ocean-500" />
                </div>
                <span>B.Sc. Information Technology & Software Engineering</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 rounded-lg bg-ocean-50 border border-ocean-100">
                  <Calendar size={16} className="text-ocean-500" />
                </div>
                <span>Syrian Private University · 2023 – 2028</span>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-10">
              <h3 className="text-slate-800 font-semibold mb-4">Languages</h3>
              <div className="flex flex-col gap-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">{lang.name}</span>
                      <span className="text-sm text-slate-400 font-mono">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-ocean-400 to-ocean-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SkillGroup
              title="Frontend Development"
              skills={[
                { name: "React", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "TypeScript", level: 70 },
                { name: "Tailwind CSS", level: 90 },
                { name: "HTML5 & CSS3", level: 90 },
                { name: "Vite", level: 80 },
              ]}
            />
            <div className="mt-10">
              <SkillGroup
                title="Engineering & Security"
                skills={[
                  { name: "Cybersecurity Principles", level: 80 },
                  { name: "API Integration", level: 75 },
                  { name: "Node.js & Express", level: 65 },
                  { name: "Git & GitHub", level: 85 },
                  { name: "Data Structures & Algorithms", level: 70 },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="text-slate-800 font-semibold mb-5 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-ocean-400 inline-block" />
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700">{skill.name}</span>
              <span className="text-sm text-slate-400 font-mono">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="h-full bg-gradient-to-r from-ocean-400 to-ocean-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}