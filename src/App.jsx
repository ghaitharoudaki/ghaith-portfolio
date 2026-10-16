import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Minus,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const projects = [
  {
    number: "01",
    title: "ThreatLens",
    type: "Security analysis",
    year: "2025",
    description:
      "A full-stack URL threat analyzer that turns VirusTotal signals into a clear, scan-friendly report.",
    tech: ["React", "Node.js", "VirusTotal API"],
    live: "https://threatlens-io.vercel.app",
    github: "https://github.com/ghaitharoudaki/threatlens",
    tone: "blue",
  },
  {
    number: "02",
    title: "Security Header Grader",
    type: "Developer tool",
    year: "2025",
    description:
      "A practical HTTP security header evaluator with grading, feedback, and side-by-side comparison.",
    tech: ["React", "Node.js", "Railway"],
    live: "https://security-grader.vercel.app",
    github: "https://github.com/ghaitharoudaki/security-grader",
    tone: "coral",
  },
  {
    number: "03",
    title: "Crewly",
    type: "Product experience",
    year: "2026",
    description:
      "A collaborative productivity experience designed to keep team work visible, organized, and moving.",
    tech: ["React", "Supabase", "Vercel"],
    live: "https://crewlytech.com",
    tone: "ink",
  },
  {
    number: "04",
    title: "SA Studio",
    type: "Commerce experience",
    year: "Live",
    description:
      "A multi-page catalog for a luxury fabric and wallpaper brand, backed by a Supabase content system.",
    tech: ["React", "Supabase", "Cloudinary"],
    live: "https://sastudio-sy.com",
    github: "https://github.com/ghaitharoudaki/sa-studio",
    tone: "paper",
  },
  {
    number: "05",
    status: "In Progress",
    title: "Red Phoenix",
    type: "Global operations platform",
    year: "2026",
    description:
      "Global supply chain and project execution firm in China handling turnkey procurement, quality assurance, and international end-to-end logistics. Enterprise-grade platform for seamless global operations.",
    tech: ["Logistics Engine", "Global Procurement", "Project Execution", "React/Next.js"],
    tone: "orange",
  },
];

const skillGroups = [
  {
    label: "01",
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Vite"],
  },
  {
    label: "02",
    title: "Backend & Databases",
    skills: ["Node.js", "Supabase", "Cloudinary", "Data modeling"],
  },
  {
    label: "03",
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Vercel", "Railway", "Figma", "VS Code"],
  },
  {
    label: "04",
    title: "AI-Assisted Engineering",
    skills: ["Lovable", "Context engineering", "Agent-assisted development", "Exploring AI-supported testing pipelines"],
  },
];

const experience = [
  {
    date: "2026—now",
    role: "Co-Founder & Software Engineer",
    place: "Crewly",
    detail:
      "Co-founding and engineering digital solutions with a dedicated team of software engineers, building scalable web applications, branding engines, and custom software systems for clients worldwide.",
  },
  {
    date: "2025—now",
    role: "Freelance Frontend Developer",
    place: "Self-employed · MENA",
    detail: "Building focused digital experiences for clients across the region.",
  },
  {
    date: "200 hours",
    role: "Finance & Operations Intern",
    place: "Chocolate Bar",
    detail: "Rotated through Finance, HR, and Supply Chain Management.",
  },
];

const education = {
  degree: "B.Sc. Information Technology & Software Engineering",
  institution: "Syrian Private University",
  period: "2023—2028",
  focus: "Focused on software development, data structures, algorithms, and cybersecurity fundamentals.",
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function SectionTitle({ index, children, detail }) {
  return (
    <div className="section-title">
      <span className="section-index">{index}</span>
      <div>
        <h2>{children}</h2>
        {detail && <p>{detail}</p>}
      </div>
    </div>
  );
}

function ArrowLink({ href, children, muted = false }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`arrow-link${muted ? " arrow-link-muted" : ""}`}
    >
      {children}
      <ArrowUpRight size={15} strokeWidth={1.8} />
    </a>
  );
}

function UfoVisual() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    setTilt({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handlePointerLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="ufo-scene"
      aria-label="Interactive 3D UFO illustration"
      role="img"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        "--ufo-tilt-x": `${tilt.x * 7}deg`,
        "--ufo-tilt-y": `${tilt.y * -5}deg`,
      }}
    >
      <div className="ufo-rig">
        <span className="ufo-beam" />
        <div className="ufo">
          <div className="ufo-dome">
            <span />
          </div>
          <div className="ufo-body">
            <span className="ufo-light ufo-light-one" />
            <span className="ufo-light ufo-light-two" />
            <span className="ufo-light ufo-light-three" />
            <span className="ufo-light ufo-light-four" />
            <span className="ufo-light ufo-light-five" />
            <span className="ufo-light ufo-light-six" />
          </div>
        </div>
        <span className="ufo-shadow" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-corner hero-corner-bottom">DAMASCUS, SYRIA</div>
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
      >
        <motion.p className="hero-kicker" variants={reveal}>
          Frontend developer <span>+</span> systems thinker
        </motion.p>
        <motion.h1 variants={reveal}>
          Ghaith
          <br />
          <em>Aroudaki</em>
        </motion.h1>
        <motion.div className="hero-rule" variants={reveal}>
          <span />
          <span />
          <span />
        </motion.div>
        <motion.p className="hero-intro" variants={reveal}>
          I build clear, high-quality web experiences for people who care about
          the details.
        </motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <a href="#projects" className="button button-primary">
            See the work <ArrowDownRight size={17} />
          </a>
          <a href="#contact" className="text-link">
            Let&apos;s talk <MoveUpRight size={16} />
          </a>
        </motion.div>
      </motion.div>
      <UfoVisual />
    </section>
  );
}

function Summary() {
  return (
    <section id="summary" className="section section-paper">
      <div className="section-grid">
        <SectionTitle index="01">Summary</SectionTitle>
        <div className="summary-layout">
          <motion.p
            className="summary-statement"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
          >
            I&apos;m an IT &amp; Software Engineering student who likes the space
            between a good idea and a great interface.
          </motion.p>
          <motion.div
            className="summary-notes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
          >
            <p>
              My work combines frontend craft, product thinking, and a careful
              eye for how systems behave once they leave the mockup.
            </p>
            <div className="summary-facts">
              <div><MapPin size={15} /> Damascus, Syria</div>
              <div><Minus size={15} /> Syrian Private University</div>
              <div><Minus size={15} /> 2023—2028</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSkills() {
  return (
    <section id="skills" className="section section-ink">
      <div className="section-grid">
        <SectionTitle index="02" detail="A practical stack, organized by how I use it.">
          Technical skills
        </SectionTitle>
        <div className="skills-table">
          {skillGroups.map((group) => (
            <motion.div
              className="skill-row"
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
            >
              <span className="skill-number">{group.label}</span>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section section-cobalt">
      <div className="section-grid">
        <SectionTitle index="03" detail="Selected work, built to be used.">
          Things I&apos;ve built
        </SectionTitle>
        <div className="projects-list">
          {projects.map((project, index) => {
            const Card = project.live ? motion.a : motion.article;
            const cardProps = project.live
              ? {
                  href: project.live,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Open ${project.title} live site`,
                }
              : {
                  role: "article",
                  tabIndex: 0,
                  onClick: (event) => event.preventDefault(),
                  onKeyDown: (event) => {
                    if (event.key === "Enter" || event.key === " ") event.preventDefault();
                  },
                };

            return (
            <Card
              key={project.title}
              className={`project-row project-${project.tone}${project.live ? " project-link-card" : " project-unlinked"}`}
              {...cardProps}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay: index * 0.07 } } }}
            >
              <div className="project-meta">
                <span>{project.number || String(index + 1).padStart(2, "0")}</span>
                <span>{project.status || project.year}</span>
              </div>
              <div className="project-main">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
              <div className="project-links" aria-hidden="true">
                <ArrowUpRight size={24} strokeWidth={1.5} />
              </div>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-paper">
      <div className="section-grid">
        <SectionTitle index="04" detail="Experience is a record of what I choose to make useful.">
          Experience
        </SectionTitle>
        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.article
              key={item.role}
              className="experience-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={reveal}
              transition={{ delay: index * 0.1 }}
            >
              <span className="experience-date">{item.date}</span>
              <div>
                <h3>{item.role}</h3>
                <p>{item.place}</p>
              </div>
              <p className="experience-detail">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section section-slate">
      <div className="section-grid">
        <SectionTitle index="05" detail="The foundation behind the work.">
          Education
        </SectionTitle>
        <motion.article
          className="education-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={reveal}
        >
          <span className="experience-date">{education.period}</span>
          <div>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
          </div>
          <p className="experience-detail">{education.focus}</p>
        </motion.article>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section section-coral">
      <div className="section-grid highlight-grid">
        <SectionTitle index="06">Highlight</SectionTitle>
        <motion.article
          className="highlight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={reveal}
        >
          <div className="highlight-stamp"><Sparkles size={22} /> 2026</div>
          <div>
            <p className="project-type">Hackathon / competitive build</p>
            <h3>SYNC&apos;26 Hackathon</h3>
            <p>
              Built a live AI voice character, exploring expressive voice
              interaction and real-time conversational experiences.
            </p>
          </div>
          <ArrowUpRight size={32} strokeWidth={1.4} />
        </motion.article>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ghaitharoudaki11@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="section section-ink contact-section">
      <div className="section-grid">
        <SectionTitle index="07">Open to the right role</SectionTitle>
        <div className="contact-layout">
          <div>
            <p className="contact-lead">
              If you&apos;re looking for someone who can make a product feel
              considered from the first click, I&apos;d like to hear from you.
            </p>
            <a className="button button-coral" href={`mailto:${email}`}>
              Start a conversation <Mail size={16} />
            </a>
          </div>
          <div className="contact-details">
            <div className="contact-email">
              <span>Email</span>
              <a href={`mailto:${email}`}>{email}</a>
              <button onClick={copyEmail} aria-label="Copy email address">
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
            <div className="contact-socials">
              <ArrowLink href="https://github.com/ghaitharoudaki">GitHub</ArrowLink>
              <ArrowLink href="https://linkedin.com/in/ghaitharoudaki">LinkedIn</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="site" id="top">
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <TechnicalSkills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
