import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-bg rounded-2xl px-6 py-4 border border-white/10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-gradient">
              Cognimentum
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#blog" className="text-foreground/80 hover:text-foreground transition-colors">
                Blog
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:inline-flex">
                Login
              </Button>
              <Button variant="gradient" className="animate-glow-pulse">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}