"use client"

import { ArrowRight } from "lucide-react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useTheme } from "../contexts/ThemeContext"

export default function ThemePage() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { name: "lime", color: "bg-lime-500", label: "Lime", description: "Fresh and vibrant" },
    { name: "blue", color: "bg-blue-500", label: "Blue", description: "Professional and trustworthy" },
    { name: "green", color: "bg-green-500", label: "Green", description: "Natural and growth-focused" },
    { name: "purple", color: "bg-purple-500", label: "Purple", description: "Creative and innovative" },
    { name: "red", color: "bg-red-500", label: "Red", description: "Bold and energetic" },
    { name: "rose", color: "bg-rose-500", label: "Rose", description: "Elegant and romantic" },
    { name: "chocolate", color: "bg-amber-700", label: "Chocolate", description: "Warm and earthy" },
    { name: "ocean", color: "bg-slate-800", label: "Ocean", description: "Deep and mysterious" },
  ] as const

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto h-[calc(100vh-4rem)]">
           <div className="flex justify-center mb-4">
              <span className="px-1.5 py-0.5 bg-gray-200 flex items-center text-zinc-950 rounded-xl font-medium text-sm">Theme Customization: Willow UI will come with theme customization<ArrowRight className="inline-block ml-1 h-4 w-4" /></span>
            </div>
          <div>
            <h1 className="text-3xl text-center font-bold text-gray-900 dark:text-white mb-6">Theme Customization</h1>

            <p className="text-gray-600 text-center dark:text-gray-400 mb-8">
              Willow UI theme customization is currently in development. Soon, you'll be able to choose from our
              professionally curated color palettes and create stunning interfaces.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    theme === t.name
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                  onClick={() => setTheme(t.name)}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`w-8 h-8 rounded-full ${t.color}`} />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{t.label}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.description}</p>
                    </div>
                  </div>

                  {/* Theme preview */}
                  <div className="space-y-2">
                    <div className={`h-2 ${t.color} rounded`} />
                    <div className="flex space-x-2">
                      <div className={`h-2 w-1/3 ${t.color} opacity-75 rounded`} />
                      <div className={`h-2 w-1/4 ${t.color} opacity-50 rounded`} />
                      <div className={`h-2 w-1/5 ${t.color} opacity-25 rounded`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Theme</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Want to create your own theme? You can customize CSS variables to match your brand colors.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                  <code>{`:root {
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;
}`}</code>
                </pre>
              </div> 
            </div>*/}
          </div>
        </main>
      </div>
    </div>
  )
}
