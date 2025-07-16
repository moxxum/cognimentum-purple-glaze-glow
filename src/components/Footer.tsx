export function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-bg rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-gradient">
                Cognimentum
              </div>
              <span className="text-foreground/50 text-sm">
                © 2025 Cognimentum
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-foreground/60 hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-foreground/60 hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#contact" className="text-foreground/60 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}