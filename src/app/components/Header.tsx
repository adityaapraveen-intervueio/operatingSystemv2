import { motion } from "motion/react";
import intervueLogo from "figma:asset/b2c9e0cc6e570a4eef3f72abb44e3b9aa3b91360.png";

export function Header({ title, theme = "dark" }: { title: string; theme?: "dark" | "light" }) {
  const isLight = theme === "light";
  
  return (
    <header className="flex items-center justify-between w-full px-12 py-6 shrink-0">
      {/* Intervue Logo */}
      <img
        src={intervueLogo}
        alt="Intervue"
        className="h-6 w-auto object-contain"
        style={isLight ? { filter: 'invert(1)' } : undefined}
      />

      {/* Slide Title */}
      <div className={`text-xs font-bold tracking-[0.2em] uppercase ${isLight ? "text-gray-500" : "text-gray-400"}`}>
        {title}
      </div>
    </header>
  );
}