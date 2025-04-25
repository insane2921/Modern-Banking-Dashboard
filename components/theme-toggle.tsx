"use client"

import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  theme: "light" | "dark"
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary dark:bg-teal-400 text-white dark:text-slate-900 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-5 w-5 absolute transition-all ${theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
      />
      <Moon
        className={`h-5 w-5 absolute transition-all ${theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
      />
    </button>
  )
}
