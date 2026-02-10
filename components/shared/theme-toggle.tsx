"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "h-9 w-9 rounded-lg flex items-center justify-center transition-colors relative",
        "hover:bg-gray-100 dark:hover:bg-gray-800"
      )}
      suppressHydrationWarning
      aria-label="Toggle theme"
    >
      {/* Sun icon */}
      <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer" />
      
      {/* Moon icon */}
      <Moon className="absolute h-5 w-5 text-gray-800 dark:text-gray-200 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer" />
      
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}