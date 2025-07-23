import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { value: "light", icon: Sun },
    { value: "dark", icon: Moon },
    { value: "system", icon: Monitor }
  ];

  const currentIndex = themes.findIndex(t => t.value === theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(nextTheme.value)}
      className="glass-bg border border-white/10 hover:border-white/20 w-10 h-10 p-0"
    >
      {themes.map(({ value, icon: Icon }) => (
        <Icon
          key={value}
          className={`h-4 w-4 transition-all ${
            theme === value 
              ? "scale-100 opacity-100" 
              : "scale-0 opacity-0 absolute"
          }`}
        />
      ))}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}