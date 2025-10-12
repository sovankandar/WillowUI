import React, { createContext, useContext, useState, useEffect } from "react"
import { cn } from "../../lib/utils"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

// Toast Types
export type ToastType = "success" | "error" | "warning" | "info" | "default"
export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"

export interface Toast {
  id: string
  title?: string
  message: string
  type: ToastType
  duration?: number
  closable?: boolean
  action?: {
    label: string
    onClick: () => void
  }
}

// Toast Context
interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => string
  removeToast: (id: string) => void
  clearToasts: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

// Toast Provider Props
interface ToastProviderProps {
  children: React.ReactNode
  position?: ToastPosition
  maxToasts?: number
}

// Toast Provider Component
export function ToastProvider({ 
  children, 
  position = "top-right", 
  maxToasts = 5 
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = {
      id,
      duration: 5000,
      closable: true,
      ...toast,
    }

    setToasts(prev => {
      const updated = [newToast, ...prev]
      return updated.slice(0, maxToasts)
    })

    // Auto remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }

    return id
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const clearToasts = () => {
    setToasts([])
  }

  const contextValue: ToastContextType = {
    toasts,
    addToast,
    removeToast,
    clearToasts,
  }

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {/* Toast Container */}
      <div
        className={cn(
          "fixed z-50 flex flex-col space-y-2 w-full max-w-sm pointer-events-none",
          positionClasses[position]
        )}
      >
        {toasts.map((toast) => (
          <ToastComponent key={toast.id} toast={toast} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

// Individual Toast Component
interface ToastComponentProps {
  toast: Toast
}

function ToastComponent({ toast }: ToastComponentProps) {
  const { removeToast } = useToast()
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 10)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsLeaving(true)
    setTimeout(() => {
      removeToast(toast.id)
    }, 300)
  }

  const typeConfig = {
    success: {
      icon: CheckCircle,
      className: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200"
    },
    error: {
      icon: AlertCircle,
      className: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200"
    },
    warning: {
      icon: AlertTriangle,
      className: "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200"
    },
    info: {
      icon: Info,
      className: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200"
    },
    default: {
      icon: Info,
      className: "bg-white border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
    }
  }

  const config = typeConfig[toast.type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full items-start space-x-3 rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out",
        config.className,
        isVisible && !isLeaving 
          ? "translate-x-0 opacity-100 scale-100" 
          : "translate-x-full opacity-0 scale-95",
        isLeaving && "translate-x-full opacity-0 scale-95"
      )}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {toast.title && (
          <h4 className="text-sm font-semibold mb-1">
            {toast.title}
          </h4>
        )}
        <p className="text-sm opacity-90">
          {toast.message}
        </p>
        
        {/* Action Button */}
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className="mt-2 text-xs font-medium underline opacity-75 hover:opacity-100 transition-opacity"
          >
            {toast.action.label}
          </button>
        )}
      </div>

      {/* Close Button */}
      {toast.closable && (
        <button
          onClick={handleClose}
          className="flex-shrink-0 ml-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

// Convenience hook for common toast types
export const useToastHelpers = () => {
  const { addToast } = useToast()

  return {
    success: (message: string, options?: Partial<Omit<Toast, "id" | "type" | "message">>) =>
      addToast({ message, type: "success", ...options }),
    
    error: (message: string, options?: Partial<Omit<Toast, "id" | "type" | "message">>) =>
      addToast({ message, type: "error", ...options }),
    
    warning: (message: string, options?: Partial<Omit<Toast, "id" | "type" | "message">>) =>
      addToast({ message, type: "warning", ...options }),
    
    info: (message: string, options?: Partial<Omit<Toast, "id" | "type" | "message">>) =>
      addToast({ message, type: "info", ...options }),
    
    default: (message: string, options?: Partial<Omit<Toast, "id" | "type" | "message">>) =>
      addToast({ message, type: "default", ...options }),
  }
}

// Notification Component (Alternative static approach)
export interface NotificationProps {
  type?: ToastType
  title?: string
  message: string
  closable?: boolean
  onClose?: () => void
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function Notification({
  type = "default",
  title,
  message,
  closable = true,
  onClose,
  action,
  className
}: NotificationProps) {
  const typeConfig = {
    success: {
      icon: CheckCircle,
      className: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200"
    },
    error: {
      icon: AlertCircle,
      className: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200"
    },
    warning: {
      icon: AlertTriangle,
      className: "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200"
    },
    info: {
      icon: Info,
      className: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200"
    },
    default: {
      icon: Info,
      className: "bg-white border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
    }
  }

  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "relative flex w-full items-start space-x-3 rounded-lg border p-4 shadow-sm",
        config.className,
        className
      )}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="text-sm font-semibold mb-1">
            {title}
          </h4>
        )}
        <p className="text-sm opacity-90">
          {message}
        </p>
        
        {/* Action Button */}
        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-xs font-medium underline opacity-75 hover:opacity-100 transition-opacity"
          >
            {action.label}
          </button>
        )}
      </div>

      {/* Close Button */}
      {closable && onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}