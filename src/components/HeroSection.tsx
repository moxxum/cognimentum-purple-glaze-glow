import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Layers } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-primary/30 animate-float" />
          <Zap className="absolute top-1/3 right-1/4 w-6 h-6 text-gradient-end/40 animate-float" style={{ animationDelay: '2s' }} />
          <Layers className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary-light/30 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Main Content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Your Entire Design Agency,
              <br />
              <span className="text-gradient">In One Tab.</span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Experience the future of design with AI-powered tools that transform your creative workflow. 
              From concept to completion, everything you need in one stunning platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="gradient" 
              size="lg" 
              className="text-lg px-8 py-6 animate-glow-pulse"
            >
              Start Creating Now
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              Watch Demo
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="glass-bg glass-hover rounded-2xl p-6 border border-white/10">
              <Sparkles className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">AI-Powered Design</h3>
              <p className="text-foreground/60 text-sm">
                Generate stunning visuals with advanced AI that understands your creative vision.
              </p>
            </div>
            
            <div className="glass-bg glass-hover rounded-2xl p-6 border border-white/10">
              <Zap className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-foreground/60 text-sm">
                From concept to completion in minutes, not hours. Accelerate your entire design process.
              </p>
            </div>
            
            <div className="glass-bg glass-hover rounded-2xl p-6 border border-white/10">
              <Layers className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">All-in-One Platform</h3>
              <p className="text-foreground/60 text-sm">
                Brainstorming, creation, collaboration, and delivery - everything integrated seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}