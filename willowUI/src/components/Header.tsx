"use client"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { Palette, Moon, Sun, User, UserPlus, Menu, X } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import AuthModal from "./AuthModal"
import ThemeSelector from "./ThemeSelector"

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [showAuthModal, setShowAuthModal] = useState<"signin" | "signup" | null>(null)
  const [showThemeSelector, setShowThemeSelector] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/docs", label: "Docs" },
    { path: "/components", label: "Components" },
    { path: "/theme", label: "Theme" },
    { path: "/colors", label: "Colors" },
  ]

  const handleAuthModalSwitch = (type: "signin" | "signup") => {
    setShowAuthModal(type)
  }

  return (
    <>
      <header className="dark:border-gray-700 dark:bg-gray-900/80 bg-gray-50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WUI</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Willow UI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:bg-gray-200 px-4 py-2 rounded-lg ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              {/* Theme selector */}
              <div className="relative">
                <button
                  onClick={() => setShowThemeSelector(!showThemeSelector)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  title="Change theme"
                >
                  <Palette className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                {showThemeSelector && <ThemeSelector onClose={() => setShowThemeSelector(false)} />}
              </div>

              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Auth buttons - hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-3">
                <button
                  onClick={() => setShowAuthModal("signin")}
                  className="flex items-center rounded-lg space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-zinc-200 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
                <button
                  onClick={() => setShowAuthModal("signup")}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile auth buttons */}
              <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setShowAuthModal("signin")
                    setMobileMenuOpen(false)
                  }}
                  className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
                <button
                  onClick={() => {
                    setShowAuthModal("signup")
                    setMobileMenuOpen(false)
                  }}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal type={showAuthModal} onClose={() => setShowAuthModal(null)} onSwitchType={handleAuthModalSwitch} />
      )}
    </>
  )
}
