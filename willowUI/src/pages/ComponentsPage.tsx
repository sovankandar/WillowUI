import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom"
import { Package, ArrowRight } from "lucide-react"

export default function ComponentsPage() {
  const components = [
    {
      name: "Button",
      description: "Versatile button component with multiple variants and sizes",
      href: "/components/button",
      status: "Ready",
    },
    {
      name: "Charts",
      description: "Interactive charts with smooth animations and modern design",
      href: "/components/charts",
      status: "Ready",
    },
    {
      name: "Toast",
      description: "Beautiful toast notifications and inline notifications with animations",
      href: "/components/toast",
      status: "Ready",
    },
    {
      name: "Input",
      description: "Form input component with validation support",
      href: "/components/input",
      status: "Coming Soon",
    },
    {
      name: "Card",
      description: "Flexible container component for content",
      href: "/components/card",
      status: "Coming Soon",
    },
    {
      name: "Badge",
      description: "Small status indicators and labels",
      href: "/components/badge",
      status: "Coming Soon",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-full mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Components
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                A collection of reusable components built with React and Tailwind CSS.
                Copy the code and use them in your projects.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
                <div
                  key={component.name}
                  className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        component.status === "Ready"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {component.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {component.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {component.description}
                  </p>
                  
                  {component.status === "Ready" ? (
                    <Link
                      to={component.href}
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    >
                      View Component
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-gray-400 text-sm font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-400">Ready Components</div>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-gray-600 dark:text-gray-400">In Development</div>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-gray-600 dark:text-gray-400">Theme Colors</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
