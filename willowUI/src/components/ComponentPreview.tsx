import React, { useState } from "react"
import { Eye, Code, Copy, Check } from "lucide-react"

interface ComponentPreviewProps {
  title: string
  description?: string
  children: React.ReactNode
  code: string
  className?: string
}

export default function ComponentPreview({
  title,
  description,
  children,
  code,
  className = "",
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
          )}
        </div>
        
        {/* Tabs */}
        <div className="flex border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "preview"
                ? "bg-white dark:bg-gray-900 text-primary border-b-2 border-primary"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "code"
                ? "bg-white dark:bg-gray-900 text-primary border-b-2 border-primary"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Code</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-900">
        {activeTab === "preview" ? (
          <div className="p-6">
            <div className="flex items-center justify-center min-h-[200px] bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
              {children}
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-6 text-sm overflow-x-auto bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}