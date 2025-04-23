
import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      onClick={handleToggle}
      className="ml-2"
      size="icon"
      variant="ghost"
      aria-label="Alternar modo claro/escuro"
    >
      {isDark ? (
        <Sun className="text-white" />
      ) : (
        <Moon className="text-black" />
      )}
    </Button>
  );
}
