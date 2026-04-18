import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const techBadges = [
  { label: "React", color: "text-ocean-500 border-ocean-200 bg-ocean-50" },
  { label: "Tailwind CSS", color: "text-ocean-500 border-ocean-200 bg-ocean-50" },
  { label: "Vite", color: "text-slate-600 border-slate-200 bg-slate-50" },
  { label: "Node.js", color: "text-slate-600 border-slate-200 bg-slate-50" },
  { label: "Cybersecurity", color: "text-ocean-600 border-ocean-300 bg-ocean-50" },
  { label: "TypeScript", color: "text-ocean-500 border-ocean-200 bg-ocean-50" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ghaitharoudaki",
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ghaitharoudaki",
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ghaitharoudaki11@gmail.com",
    svg: <Mail size={20} />,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #007abf 1px, transparent 1px),
            linear-gradient(to bottom, #007abf 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ocean-400/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-ocean-300/10 blur-2xl pointer-events-none animate-pulse-slow" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-8 flex flex-col items-center text-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ocean-200 dark:border-ocean-900 bg-ocean-50 dark:bg-ocean-950 text-ocean-600 dark:text-ocean-400 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-3"
        >
          Ghaith{" "}
          <span className="text-gradient">Aroudaki</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-2xl font-mono text-slate-500 dark:text-slate-400 mb-4 h-8"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Cybersecurity Enthusiast",
              2000,
              "UI/UX Craftsman",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl text-slate-500 dark:text-slate-400 text-sm md:text-lg leading-relaxed mb-8"
        >
          I build fast, beautiful, and secure web experiences.
          Combining frontend craftsmanship with a cybersecurity mindset
          to create applications that look great and stay safe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-ocean-500 text-white font-semibold hover:bg-ocean-400 transition-all duration-300 glow hover:glow shadow-lg shadow-ocean-500/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:border-ocean-400 hover:text-ocean-500 hover:dark:text-ocean-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-4 mb-8"
        >
          {socialLinks.map(({ svg, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-ocean-300 hover:text-ocean-500 hover:bg-ocean-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {svg}
            </a>
          ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {techBadges.map((badge) => (
            <span
              key={badge.label}
              className={`px-3 py-1 rounded-full border text-xs font-mono font-medium ${badge.color} dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300`}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}