import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Layers } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6" style={{ marginTop: '25vh' }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Your Design Agency,
              <br />
              <span className="text-gradient">In One Tab.</span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
              From concept to completion, everything you need in one stunning platform.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center pt-8">
            <Button 
              variant="gradient" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              Start Creating Now
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