export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-ocean-500 font-semibold">
          {"<GA />"}
        </span>
        <p className="text-slate-400 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} Ghaith Aroudaki
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ghaitharoudaki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-ocean-500 text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ghaitharoudaki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-ocean-500 text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ghaitharoudaki11@gmail.com"
            className="text-slate-400 dark:text-slate-500 hover:text-ocean-500 text-sm transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}