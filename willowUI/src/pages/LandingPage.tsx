"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { Palette, Moon, Sun, User, UserPlus, ArrowRight } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import AuthModal from "../components/AuthModal"
import ThemeSelector from "../components/ThemeSelector"

export default function LandingPage() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [showAuthModal, setShowAuthModal] = useState<"signin" | "signup" | null>(null)
  const [showThemeSelector, setShowThemeSelector] = useState(false)

  const handleAuthModalSwitch = (type: "signin" | "signup") => {
    setShowAuthModal(type)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WUI</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Willow UI</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link
                to="/docs"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium transition-colors hover:text-primary dark:hover:text-primary"
              >
                Docs
              </Link>
              <Link
                to="/components"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium transition-colors hover:text-primary dark:hover:text-primary"
              >
                Components
              </Link>
              <Link
                to="/theme"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium transition-colors hover:text-primary dark:hover:text-primary"
              >
                Theme
              </Link>
              <Link
                to="/colors"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium transition-colors hover:text-primary dark:hover:text-primary"
              >
                Colors
              </Link>
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

              {/* Auth buttons */}
              <button
                onClick={() => setShowAuthModal("signin")}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
           <div className="flex justify-center mb-4">
              <span className="px-2 py-0.5 bg-gray-200 flex items-center text-zinc-950 rounded-xl font-medium text-sm">Available Now: Willow UI now Available for use <ArrowRight className="inline-block ml-1 h-4 w-4" /></span>
            </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Build Beautiful Components
            <span className="block text-primary">Faster Than Ever</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-pretty">
            A comprehensive component library starter with TypeScript, Tailwind CSS, and modern tooling. Get started
            with pre-built components and customizable themes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/components"
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-base transition-colors"
            >
              Explore Components
            </Link>
            <Link
              to="/docs"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 rounded-lg font-semibold text-base transition-colors"
            >
              Read Documentation
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 dark:text-blue-400 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built with Vite for instant hot reload and optimized builds.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 dark:text-green-400 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fully Customizable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Multiple themes and color schemes with easy customization.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 dark:text-purple-400 text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Ready to Use</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pre-built components with TypeScript support out of the box.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal type={showAuthModal} onClose={() => setShowAuthModal(null)} onSwitchType={handleAuthModalSwitch} />
      )}
    </div>
  )
}
