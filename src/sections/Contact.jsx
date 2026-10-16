import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, MapPin, Send, Check, Loader2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [emailError, setEmailError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // UFO animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ufoX = useTransform(mouseX, [-300, 300], [-20, 20]);
  const ufoY = useTransform(mouseY, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById("contact")?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      return;
    }

    setStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Validate email on change
    if (name === "email") {
      validateEmail(value);
    }
  };

  const handleEmailBlur = () => {
    validateEmail(formData.email);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* 3D UFO Element */}
      <motion.div
        style={{
          x: ufoX,
          y: ufoY,
        }}
        className="absolute top-20 right-10 w-32 h-32 pointer-events-none hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          {/* UFO body */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan opacity-60 blur-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 rounded-full glass-card border-2 border-accent-cyan/30" />
          {/* UFO dome */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-8 rounded-t-full glass-card border-2 border-accent-indigo/30" />
          {/* Light beam */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-20 h-40"
            style={{
              background: "linear-gradient(180deg, rgba(99, 102, 241, 0.3) 0%, transparent 100%)",
              clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent-cyan text-sm font-medium tracking-widest uppercase">
            04. Contact
          </span>
          <h2 className="text-5xl font-black text-text-primary font-sans mt-3">
            Let's Connect
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-primary font-sans mb-4">
              Send a Message
            </h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              Have a project in mind or just want to chat? Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass-card text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-indigo/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                  required
                  className={`w-full px-4 py-3 rounded-xl glass-card text-text-primary placeholder-text-secondary/50 focus:outline-none transition-all duration-300 ${
                    emailError
                      ? "ring-2 ring-red-500/50 focus:ring-red-500/50"
                      : "focus:ring-2 focus:ring-accent-indigo/50"
                  }`}
                  placeholder="your.email@example.com"
                />
                {emailError && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    <span>{emailError}</span>
                  </div>
                )}
                {formData.email && !emailError && emailRegex.test(formData.email) && (
                  <div className="flex items-center gap-2 mt-2 text-green-400 text-sm">
                    <Check size={14} />
                    <span>Valid email format</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl glass-card text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-indigo/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || emailError !== ""}
                className="w-full group relative px-8 py-4 rounded-xl bg-accent-indigo text-text-primary font-bold overflow-hidden transition-all duration-300 glow-indigo disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "sending" && <Loader2 size={20} className="animate-spin" />}
                  {status === "success" && <Check size={20} />}
                  {status === "idle" && <Send size={20} />}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent!"}
                  {status === "idle" && "Send Message"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient bg-300%" />
              </button>
            </form>
          </motion.div>

          {/* Right — Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-primary font-sans mb-4">
              Get in Touch
            </h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              Open to opportunities, collaborations, and interesting conversations about technology and software engineering.
            </p>

            {/* Location */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center gap-4 p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20">
                <MapPin size={22} className="text-accent-indigo" />
              </div>
              <div>
                <p className="text-text-secondary text-xs font-mono mb-1">LOCATION</p>
                <p className="text-text-primary font-semibold">Damascus, Syria</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center justify-between p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20">
                  <Mail size={22} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="text-text-secondary text-xs font-mono mb-1">EMAIL</p>
                  <a
                    href="mailto:ghaitharoudaki11@gmail.com"
                    className="text-text-primary font-semibold hover:text-accent-cyan transition-colors"
                  >
                    ghaitharoudaki11@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-text-primary font-bold mb-4">Connect on Social</h4>
              <div className="grid grid-cols-3 gap-4">
                <motion.a
                  whileHover={{ y: -4, rotateZ: -2 }}
                  href="https://github.com/ghaitharoudaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-2 fill-text-secondary group-hover:fill-text-primary transition-colors">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <p className="text-text-secondary text-xs font-medium group-hover:text-text-primary transition-colors">GitHub</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, rotateZ: 2 }}
                  href="https://linkedin.com/in/ghaitharoudaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-2 fill-text-secondary group-hover:fill-text-primary transition-colors">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <p className="text-text-secondary text-xs font-medium group-hover:text-text-primary transition-colors">LinkedIn</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, rotateZ: -2 }}
                  href="mailto:ghaitharoudaki11@gmail.com"
                  className="group relative p-6 rounded-xl glass-card hover:glass-card-hover transition-all duration-300 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <Mail className="w-8 h-8 mx-auto mb-2 text-text-secondary group-hover:text-text-primary transition-colors" />
                    <p className="text-text-secondary text-xs font-medium group-hover:text-text-primary transition-colors">Email</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
