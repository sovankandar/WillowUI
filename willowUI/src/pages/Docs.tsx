import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-full mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Documentation
            </h1>

            <div className="space-y-12">
              {/* Installation Section */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Installation
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Get started with WillowUI by installing the package using your preferred package manager:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex justify-between items-center">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      npm install willowui
                    </code>
                    <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      Copy
                    </button>
                  </div>
                </div>
              </section>

              {/* Framework Support */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Framework Support
                </h2>
                <div className="grid gap-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L1.5 22h21L12 2zm0 4.5l7.5 13.5h-15L12 6.5z"/>
                      </svg>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        React
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Currently optimized for React applications with full TypeScript support.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        {`import { Button } from 'willowui/react'
                        
const App = () => (
  <Button variant="primary">
    Click me
  </Button>
)`}
                      </code>
                    </div>
                  </div>
                </div>
              </section>

              {/* Styling Framework */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Styling Framework
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                    </svg>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Tailwind CSS
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built with Tailwind CSS for maximum flexibility and customization. Just install Tailwind CSS in your project:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      npm install -D tailwindcss postcss autoprefixer
                    </code>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
