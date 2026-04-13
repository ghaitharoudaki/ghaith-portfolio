import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "ghaitharoudaki11@gmail.com",
    href: "mailto:ghaitharoudaki11@gmail.com",
    copyable: true,
  },
  {
    label: "GitHub",
    value: "github.com/ghaitharoudaki",
    href: "https://github.com/ghaitharoudaki",
    copyable: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ghaitharoudaki",
    href: "https://linkedin.com/in/ghaitharoudaki",
    copyable: false,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ghaitharoudaki11@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            04. Contact
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Get In Touch
          </h2>
          <div className="mt-3 w-12 h-1 bg-ocean-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Let's work together
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              I'm currently open to new opportunities — whether it's a part-time role,
              freelance project, or just a conversation about tech and cybersecurity.
              My inbox is always open!
            </p>

            <div className="flex items-center gap-3 text-slate-500 mb-8">
              <div className="p-2 rounded-lg bg-ocean-50 border border-ocean-100">
                <MapPin size={16} className="text-ocean-500" />
              </div>
              <span>Damascus, Syria</span>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-ocean-300 transition-colors group"
                >
                  <div>
                    <p className="text-xs text-slate-400 font-mono mb-0.5">
                      {link.label}
                    </p>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 text-sm font-medium hover:text-ocean-500 transition-colors"
                    >
                      {link.value}
                    </a>
                  </div>
                  {link.copyable && (
                    <button
                      onClick={handleCopy}
                      className="p-2 rounded-lg hover:bg-ocean-50 text-slate-400 hover:text-ocean-500 transition-colors"
                    >
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-ocean-200 bg-gradient-to-br from-ocean-50 to-white p-10 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-ocean-300/20 blur-2xl" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-ocean-500 flex items-center justify-center mb-6 glow">
                <Mail size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Send me an email
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Prefer email? Just click below and shoot me a message.
              </p>
              <a
                href="mailto:ghaitharoudaki11@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ocean-500 text-white font-semibold hover:bg-ocean-400 transition-all duration-300 glow shadow-lg shadow-ocean-500/20"
              >
                <Mail size={16} />
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}