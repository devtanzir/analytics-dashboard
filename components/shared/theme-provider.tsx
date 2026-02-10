"use client"

import { Theme, ThemeProviderState } from "@/lib/type"
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react"

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const initializedRef = useRef(false)

  // when component mounts, check localStorage for saved theme and apply it
  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    const savedTheme = localStorage.getItem(storageKey) as Theme | null
    
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      queueMicrotask(() => setTheme(savedTheme))
    }
  }, [storageKey])

  // when theme changes, update the root element's class to apply the theme
  useEffect(() => {
    if (!initializedRef.current) return

    const root = window.document.documentElement
    
    // remove old theme classes
    root.classList.remove("light", "dark")
    
    // add new theme class
    root.classList.add(theme)
  }, [theme])

  const value: ThemeProviderState = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}