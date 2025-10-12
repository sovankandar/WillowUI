import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import ComponentPreview from "../components/ComponentPreview"
import { Button } from "../components/ui/Button"
import { Download, Mail, ChevronRight, Heart, Star, Plus } from "lucide-react"

export default function ButtonPage() {
  const defaultButtonCode = `import { Button } from "./components/ui/Button"

export default function Example() {
  return (
    <Button>Default Button</Button>
  )
}`

  const variantButtonsCode = `import { Button } from "./components/ui/Button"

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`

  const sizeButtonsCode = `import { Button } from "./components/ui/Button"

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`

  const iconButtonsCode = `import { Button } from "./components/ui/Button"
import { Download, Mail, ChevronRight } from "lucide-react"

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
      <Button variant="outline">
        <Mail className="w-4 h-4 mr-2" />
        Email
      </Button>
      <Button variant="ghost">
        Continue
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
      <Button size="icon" variant="outline">
        <Heart className="w-4 h-4" />
      </Button>
    </div>
  )
}`

  const loadingButtonCode = `import { Button } from "./components/ui/Button"
import { Loader2 } from "lucide-react"

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button disabled>
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
    </div>
  )
}`

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-full mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Button Component
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                A versatile button component with multiple variants, sizes, and states. 
                Built with accessibility and customization in mind.
              </p>
            </div>

            <div className="space-y-8">
              {/* Default Button */}
              <ComponentPreview
                title="Default Button"
                description="The basic button component with default styling."
                code={defaultButtonCode}
              >
                <Button>Default Button</Button>
              </ComponentPreview>

              {/* Button Variants */}
              <ComponentPreview
                title="Button Variants"
                description="Different visual styles for various use cases."
                code={variantButtonsCode}
              >
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </ComponentPreview>

              {/* Button Sizes */}
              <ComponentPreview
                title="Button Sizes"
                description="Different sizes to fit your design needs."
                code={sizeButtonsCode}
              >
                <div className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </ComponentPreview>

              {/* Buttons with Icons */}
              <ComponentPreview
                title="Buttons with Icons"
                description="Enhanced buttons with icon support."
                code={iconButtonsCode}
              >
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button variant="ghost">
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </ComponentPreview>

              {/* Loading and Disabled States */}
              <ComponentPreview
                title="Loading & Disabled States"
                description="Button states for different interactions."
                code={loadingButtonCode}
              >
                <div className="flex gap-4">
                  <Button disabled>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading...
                  </Button>
                  <Button variant="outline" disabled>
                    Disabled
                  </Button>
                </div>
              </ComponentPreview>

              {/* API Reference */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Reference</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Props</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Prop</th>
                            <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Type</th>
                            <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Default</th>
                            <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Description</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 dark:text-gray-400">
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">variant</td>
                            <td className="py-2">"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"</td>
                            <td className="py-2">"default"</td>
                            <td className="py-2">The visual style variant</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">size</td>
                            <td className="py-2">"default" | "sm" | "lg" | "icon"</td>
                            <td className="py-2">"default"</td>
                            <td className="py-2">The size of the button</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">disabled</td>
                            <td className="py-2">boolean</td>
                            <td className="py-2">false</td>
                            <td className="py-2">Whether the button is disabled</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-mono text-sm">className</td>
                            <td className="py-2">string</td>
                            <td className="py-2">-</td>
                            <td className="py-2">Additional CSS classes</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Installation</h3>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        npm install class-variance-authority clsx tailwind-merge
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}