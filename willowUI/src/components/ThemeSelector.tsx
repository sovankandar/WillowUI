"use client"

import { useTheme } from "../contexts/ThemeContext"
import { Check } from "lucide-react"

interface ThemeSelectorProps {
  onClose: () => void
}

export default function ThemeSelector({ onClose }: ThemeSelectorProps) {
  const { theme, setTheme } = useTheme()

  const themes = [
    {
      name: "lime",
      color: "bg-lime-500",
      label: "Lime",
      description: "Fresh and vibrant",
      gradient: "from-lime-400 to-lime-600",
    },
    {
      name: "blue",
      color: "bg-blue-500",
      label: "Blue",
      description: "Professional and trustworthy",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "green",
      color: "bg-green-500",
      label: "Green",
      description: "Natural and growth-focused",
      gradient: "from-green-400 to-green-600",
    },
    {
      name: "purple",
      color: "bg-purple-500",
      label: "Purple",
      description: "Creative and innovative",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      name: "red",
      color: "bg-red-500",
      label: "Red",
      description: "Bold and energetic",
      gradient: "from-red-400 to-red-600",
    },
    {
      name: "rose",
      color: "bg-rose-500",
      label: "Rose",
      description: "Elegant and romantic",
      gradient: "from-rose-400 to-rose-600",
    },
    {
      name: "chocolate",
      color: "bg-amber-700",
      label: "Chocolate",
      description: "Warm and earthy",
      gradient: "from-amber-600 to-amber-800",
    },
    {
      name: "ocean",
      color: "bg-slate-800",
      label: "Ocean",
      description: "Deep and mysterious",
      gradient: "from-slate-700 to-slate-900",
    },
  ] as const

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Theme selector dropdown */}
      <div className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Choose Theme Color</h3>

          <div className="space-y-2">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name)
                  onClose()
                }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  theme === t.name ? "bg-gray-50 dark:bg-gray-700 ring-2 ring-primary" : ""
                }`}
              >
                {/* Color preview */}
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.gradient} shadow-sm`} />
                  {theme === t.name && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Theme info */}
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900 dark:text-white">{t.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.description}</div>
                </div>
              </button>
            ))}
          </div>
{/* 
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Theme changes are saved automatically and persist across sessions.
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}
