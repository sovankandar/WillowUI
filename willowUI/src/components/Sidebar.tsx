"use client"

import { Link, useLocation } from "react-router-dom"
import {
  BookOpen,
  Package,
  Palette,
  Paintbrush,
  ChevronRight,
  BitcoinIcon as ButtonIcon,
  Square,
  Type,
  ToggleLeft,
  Calendar,
  Search,
  Bell,
  User,
  Settings,
  BarChart3,
  Table,
  ImageIcon,
  FileText,
  Download,
  Upload,
  Loader,
} from "lucide-react"

export default function Sidebar() {
  const location = useLocation()

  const navigationItems = [
    { path: "/docs", label: "Docs", icon: BookOpen },
    { path: "/components", label: "Components", icon: Package },
    { path: "/theme", label: "Theme", icon: Palette },
    { path: "/colors", label: "Colors", icon: Paintbrush },
  ]

  const componentItems = [
    { name: "Button", icon: ButtonIcon, category: "Form" },
    { name: "Input", icon: Type, category: "Form" },
    { name: "Toggle", icon: ToggleLeft, category: "Form" },
    { name: "Card", icon: Square, category: "Layout" },
    { name: "Table", icon: Table, category: "Data" },
    { name: "Chart", icon: BarChart3, category: "Data" },
    { name: "Calendar", icon: Calendar, category: "Date" },
    { name: "Search", icon: Search, category: "Navigation" },
    { name: "Notification", icon: Bell, category: "Feedback" },
    { name: "Avatar", icon: User, category: "Display" },
    { name: "Image", icon: ImageIcon, category: "Media" },
    { name: "Document", icon: FileText, category: "Content" },
    { name: "Upload", icon: Upload, category: "File" },
    { name: "Download", icon: Download, category: "File" },
    { name: "Loader", icon: Loader, category: "Feedback" },
    { name: "Settings", icon: Settings, category: "Navigation" },
  ]

  const groupedComponents = componentItems.reduce(
    (acc, component) => {
      if (!acc[component.category]) {
        acc[component.category] = []
      }
      acc[component.category].push(component)
      return acc
    },
    {} as Record<string, typeof componentItems>,
  )

  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 h-[calc(100vh-4rem)] overflow-y-auto fixed left-0 top-16 border-r border-gray-200 dark:border-gray-700 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
      <div className="p-4">
        {/* Main Navigation */}
        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 dark:text-gray-300 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Separator */}
        <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

        {/* Components Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Components
          </h3>

          <div className="space-y-4">
            {Object.entries(groupedComponents).map(([category, components]) => (
              <div key={category}>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {category}
                </h4>

                <div className="ml-5 space-y-1">
                  {components.map((component) => {
                    const Icon = component.icon
                    return (
                      <button
                        key={component.name}
                        className="w-full flex items-center space-x-2 px-2 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
                        onClick={() => {
                          // Handle component selection
                          if (component.name === "Button") {
                            window.location.href = "/components/button"
                          } else if (component.name === "Chart") {
                            window.location.href = "/components/charts"
                          } else {
                            console.log(`Selected component: ${component.name}`)
                          }
                        }}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{component.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Quick Links
          </h3>

          <div className="space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
            >
              NPM Package
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Report Issues
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Changelog
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
