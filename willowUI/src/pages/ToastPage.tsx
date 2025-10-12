import React, { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import ComponentPreview from "../components/ComponentPreview"
import { Button } from "../components/ui/Button"
import { Notification, useToast, useToastHelpers } from "../components/ui/Toast"
import { Bell, Zap, Gift, AlertTriangle, CheckCircle } from "lucide-react"

export default function ToastPage() {
  const { addToast, clearToasts } = useToast()
  const { success, error, warning, info } = useToastHelpers()
  const [notificationVisible, setNotificationVisible] = useState({
    success: true,
    error: true,
    warning: true,
    info: true,
    default: true
  })

  // Toast examples
  const showBasicToast = () => {
    addToast({
      message: "This is a basic toast notification!",
      type: "default"
    })
  }

  const showSuccessToast = () => {
    success("Account created successfully!", {
      title: "Success",
      duration: 4000
    })
  }

  const showErrorToast = () => {
    error("Failed to save changes. Please try again.", {
      title: "Error",
      duration: 6000
    })
  }

  const showWarningToast = () => {
    warning("Your session will expire in 5 minutes.", {
      title: "Warning",
      action: {
        label: "Extend Session",
        onClick: () => console.log("Session extended")
      }
    })
  }

  const showInfoToast = () => {
    info("New features are now available in your dashboard.", {
      title: "Update Available",
      action: {
        label: "Learn More",
        onClick: () => console.log("Learn more clicked")
      }
    })
  }

  const showPersistentToast = () => {
    addToast({
      message: "This notification will stay until you close it.",
      type: "info",
      title: "Persistent Notification",
      duration: 0, // Won't auto-close
    })
  }

  const showMultipleToasts = () => {
    success("First notification")
    setTimeout(() => warning("Second notification"), 500)
    setTimeout(() => info("Third notification"), 1000)
    setTimeout(() => error("Fourth notification"), 1500)
  }

  // Code examples
  const basicUsageCode = `import { useToastHelpers } from "./components/ui/Toast"

export default function Example() {
  const { success, error, warning, info } = useToastHelpers()

  return (
    <div>
      <button onClick={() => success("Success message!")}>
        Show Success
      </button>
      <button onClick={() => error("Error message!")}>
        Show Error
      </button>
      <button onClick={() => warning("Warning message!")}>
        Show Warning
      </button>
      <button onClick={() => info("Info message!")}>
        Show Info
      </button>
    </div>
  )
}`

  const advancedUsageCode = `import { useToast } from "./components/ui/Toast"

export default function Example() {
  const { addToast } = useToast()

  const showAdvancedToast = () => {
    addToast({
      title: "Custom Title",
      message: "This is a custom notification",
      type: "success",
      duration: 5000,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo clicked")
      }
    })
  }

  return (
    <button onClick={showAdvancedToast}>
      Show Advanced Toast
    </button>
  )
}`

  const notificationCode = `import { Notification } from "./components/ui/Toast"

export default function Example() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <Notification
      type="success"
      title="Success"
      message="Your changes have been saved successfully."
      onClose={() => setVisible(false)}
      action={{
        label: "View Changes",
        onClick: () => console.log("View changes")
      }}
    />
  )
}`

  const providerSetupCode = `import { ToastProvider } from "./components/ui/Toast"

function App() {
  return (
    <ToastProvider position="top-right" maxToasts={5}>
      {/* Your app content */}
    </ToastProvider>
  )
}`

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Toast & Notifications
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Beautiful toast notifications and inline notifications with animations, 
                multiple types, and customizable behavior.
              </p>
            </div>

            {/* Feature Overview */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Toast System</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Global toast notifications with queue management
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Animations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Smooth enter/exit animations and transitions
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Multiple Types</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Success, error, warning, info, and custom variants
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Actions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Custom action buttons and interactive content
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {/* Basic Toast Examples */}
              <ComponentPreview
                title="Toast Notifications"
                description="Click the buttons to see different types of toast notifications."
                code={basicUsageCode}
              >
                <div className="flex flex-wrap gap-3">
                  <Button onClick={showBasicToast} variant="outline">
                    Basic Toast
                  </Button>
                  <Button onClick={showSuccessToast} variant="default">
                    Success Toast
                  </Button>
                  <Button onClick={showErrorToast} variant="destructive">
                    Error Toast
                  </Button>
                  <Button onClick={showWarningToast} variant="outline">
                    Warning Toast
                  </Button>
                  <Button onClick={showInfoToast} variant="secondary">
                    Info Toast
                  </Button>
                </div>
              </ComponentPreview>

              {/* Advanced Features */}
              <ComponentPreview
                title="Advanced Toast Features"
                description="Toast notifications with custom duration, actions, and persistence."
                code={advancedUsageCode}
              >
                <div className="flex flex-wrap gap-3">
                  <Button onClick={showPersistentToast} variant="outline">
                    Persistent Toast
                  </Button>
                  <Button onClick={showMultipleToasts} variant="default">
                    Multiple Toasts
                  </Button>
                  <Button onClick={clearToasts} variant="destructive">
                    Clear All Toasts
                  </Button>
                </div>
              </ComponentPreview>

              {/* Inline Notifications */}
              <ComponentPreview
                title="Inline Notifications"
                description="Static notification components for embedding in your UI."
                code={notificationCode}
              >
                <div className="space-y-4">
                  {notificationVisible.success && (
                    <Notification
                      type="success"
                      title="Success"
                      message="Your changes have been saved successfully."
                      onClose={() => setNotificationVisible(prev => ({ ...prev, success: false }))}
                      action={{
                        label: "View Changes",
                        onClick: () => console.log("View changes")
                      }}
                    />
                  )}
                  
                  {notificationVisible.error && (
                    <Notification
                      type="error"
                      title="Error"
                      message="Failed to process your request. Please try again."
                      onClose={() => setNotificationVisible(prev => ({ ...prev, error: false }))}
                      action={{
                        label: "Retry",
                        onClick: () => console.log("Retry action")
                      }}
                    />
                  )}
                  
                  {notificationVisible.warning && (
                    <Notification
                      type="warning"
                      title="Warning"
                      message="This action cannot be undone. Please proceed with caution."
                      onClose={() => setNotificationVisible(prev => ({ ...prev, warning: false }))}
                    />
                  )}
                  
                  {notificationVisible.info && (
                    <Notification
                      type="info"
                      message="New features are available in your dashboard."
                      onClose={() => setNotificationVisible(prev => ({ ...prev, info: false }))}
                    />
                  )}
                  
                  {notificationVisible.default && (
                    <Notification
                      type="default"
                      message="This is a default notification without special styling."
                      onClose={() => setNotificationVisible(prev => ({ ...prev, default: false }))}
                    />
                  )}
                </div>
              </ComponentPreview>

              {/* Setup Instructions */}
              <ComponentPreview
                title="Provider Setup"
                description="Wrap your app with ToastProvider to enable toast notifications."
                code={providerSetupCode}
              >
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 dark:text-amber-200">Setup Required</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                        Make sure to wrap your app with <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">ToastProvider</code> to enable toast notifications.
                      </p>
                    </div>
                  </div>
                </div>
              </ComponentPreview>

              {/* API Reference */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Reference</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">ToastProvider Props</h3>
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
                            <td className="py-2 font-mono text-sm">position</td>
                            <td className="py-2">ToastPosition</td>
                            <td className="py-2">top-right</td>
                            <td className="py-2">Position of toast container</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">maxToasts</td>
                            <td className="py-2">number</td>
                            <td className="py-2">5</td>
                            <td className="py-2">Maximum number of toasts to show</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Toast Interface</h3>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                        <code>{`interface Toast {
  id: string                    // Auto-generated unique ID
  title?: string               // Optional title
  message: string              // Toast message content
  type: ToastType             // success | error | warning | info | default
  duration?: number           // Auto-close duration (0 = persistent)
  closable?: boolean          // Show close button
  action?: {                  // Optional action button
    label: string
    onClick: () => void
  }
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Available Hooks</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">useToast()</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Core hook providing addToast, removeToast, clearToasts functions
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">useToastHelpers()</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Convenience hook with success(), error(), warning(), info() helpers
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Toast Positions</h3>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">top-left</code>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">top-center</code>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">top-right</code>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">bottom-left</code>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">bottom-center</code>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">bottom-right</code>
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