"use client"
import React, { createContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function updateHtmlClass(theme: Theme) {
  const html = document.documentElement
  if (theme === "dark") {
    html.classList.add("dark")
  } else {
    html.classList.remove("dark")
  }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme | null
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme)
        updateHtmlClass(savedTheme)
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const defaultTheme = prefersDark ? "dark" : "light"
        setTheme(defaultTheme)
        updateHtmlClass(defaultTheme)
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    updateHtmlClass(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Solo exporta el contexto, no el hook acá.
export default ThemeContext