import React, { createContext, useContext, useState, useEffect } from "react"

type Theme = "lime" | "blue" | "green" | "purple" | "red" | "rose" | "chocolate" | "ocean"
type DarkMode = boolean

interface ThemeContextType {
  theme: Theme
  darkMode: DarkMode
  setTheme: (theme: Theme) => void
  toggleDarkMode: () => void
  getThemeColors: () => {
    primary: string
    primaryLight: string
    primaryDark: string
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Load theme from localStorage or default to lime
    const saved = localStorage.getItem("component-lib-theme")
    return (saved as Theme) || "lime"
  })

  const [darkMode, setDarkMode] = useState<DarkMode>(() => {
    // Load dark mode preference from localStorage or system preference
    const saved = localStorage.getItem("component-lib-dark-mode")
    if (saved !== null) {
      return JSON.parse(saved)
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  // Initialize theme on first load
  useEffect(() => {
    // Ensure theme is set immediately on mount
    const initTheme = localStorage.getItem("component-lib-theme") || "lime"
    const initDarkMode = localStorage.getItem("component-lib-dark-mode") 
      ? JSON.parse(localStorage.getItem("component-lib-dark-mode")!)
      : window.matchMedia("(prefers-color-scheme: dark)").matches
    
    document.documentElement.setAttribute("data-theme", initTheme)
    if (initDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    console.log('ThemeContext: Applying theme:', theme, 'Dark mode:', darkMode)
    
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme)

    // Apply dark mode class more reliably
    const htmlElement = document.documentElement
    if (darkMode) {
      htmlElement.classList.add("dark")
      console.log('ThemeContext: Added dark class to html element')
    } else {
      htmlElement.classList.remove("dark")
      console.log('ThemeContext: Removed dark class from html element')
    }

    // Save preferences to localStorage
    localStorage.setItem("component-lib-theme", theme)
    localStorage.setItem("component-lib-dark-mode", JSON.stringify(darkMode))
    
    console.log('ThemeContext: Theme applied successfully. HTML classes:', htmlElement.className)
  }, [theme, darkMode])

  const toggleDarkMode = () => {
    console.log('ThemeContext: Toggling dark mode from', darkMode, 'to', !darkMode)
    setDarkMode(!darkMode)
  }

  const getThemeColors = () => {
    const colors = {
      lime: { primary: "#84cc16", primaryLight: "#a3e635", primaryDark: "#65a30d" },
      blue: { primary: "#2563eb", primaryLight: "#3b82f6", primaryDark: "#1d4ed8" },
      green: { primary: "#16a34a", primaryLight: "#22c55e", primaryDark: "#15803d" },
      purple: { primary: "#9333ea", primaryLight: "#a855f7", primaryDark: "#7c3aed" },
      red: { primary: "#dc2626", primaryLight: "#ef4444", primaryDark: "#b91c1c" },
      rose: { primary: "#e11d48", primaryLight: "#f43f5e", primaryDark: "#be123c" },
      chocolate: { primary: "#b07d62", primaryLight: "#c38e70", primaryDark: "#9d6b53" },
      ocean: { primary: "#002137", primaryLight: "#002945", primaryDark: "#001a2c" },
    }
    return colors[theme]
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        darkMode,
        setTheme,
        toggleDarkMode,
        getThemeColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}