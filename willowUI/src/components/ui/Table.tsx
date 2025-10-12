import React, { useState, useMemo } from "react"
import { cn } from "../../lib/utils"
import { ChevronUp, ChevronDown, Search, Filter, MoreHorizontal, ArrowUpDown } from "lucide-react"

// Base Table Components
export interface Column<T> {
  key: keyof T
  header: string
  sortable?: boolean
  filterable?: boolean
  width?: string
  render?: (value: any, row: T) => React.ReactNode
}

export interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  className?: string
  searchable?: boolean
  pagination?: boolean
  pageSize?: number
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  compact?: boolean
}

// Table Context for shared state
interface TableContextType {
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null
  setSortConfig: (config: { key: string; direction: 'asc' | 'desc' } | null) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
}

const TableContext = React.createContext<TableContextType | undefined>(undefined)

// Main Table Component
export function Table<T extends Record<string, any>>({
  data,
  columns,
  className,
  searchable = false,
  pagination = false,
  pageSize = 10,
  striped = false,
  hoverable = true,
  bordered = false,
  compact = false
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter and sort data
  const processedData = useMemo(() => {
    let filtered = data

    // Apply search filter
    if (searchTerm && searchable) {
      filtered = data.filter(row =>
        Object.values(row).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    // Apply sorting
    if (sortConfig) {
      filtered = [...filtered].sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]
        
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
        return 0
      })
    }

    return filtered
  }, [data, searchTerm, sortConfig, searchable])

  // Pagination
  const totalPages = Math.ceil(processedData.length / pageSize)
  const paginatedData = pagination 
    ? processedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : processedData

  const handleSort = (key: string) => {
    if (!columns.find(col => col.key === key)?.sortable) return
    
    setSortConfig(current => {
      if (current?.key === key) {
        if (current.direction === 'asc') return { key, direction: 'desc' }
        if (current.direction === 'desc') return null
      }
      return { key, direction: 'asc' }
    })
  }

  const contextValue: TableContextType = {
    sortConfig,
    setSortConfig,
    searchTerm,
    setSearchTerm
  }

  return (
    <TableContext.Provider value={contextValue}>
      <div className={cn("w-full", className)}>
        {/* Search Bar */}
        {searchable && (
          <div className="mb-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full">
            {/* Header */}
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className={cn(
                      "text-left font-medium text-gray-900 dark:text-white",
                      compact ? "px-3 py-2 text-sm" : "px-6 py-3",
                      column.sortable && "cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    )}
                    style={{ width: column.width }}
                    onClick={() => column.sortable && handleSort(String(column.key))}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{column.header}</span>
                      {column.sortable && (
                        <div className="flex flex-col">
                          {sortConfig?.key === column.key ? (
                            sortConfig.direction === 'asc' ? (
                              <ChevronUp className="w-4 h-4 text-primary" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-primary" />
                            )
                          ) : (
                            <ArrowUpDown className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className={cn(
                      "text-center text-gray-500 dark:text-gray-400",
                      compact ? "px-3 py-8" : "px-6 py-12"
                    )}
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, index) => (
                  <tr
                    key={index}
                    className={cn(
                      striped && index % 2 === 1 && "bg-gray-50 dark:bg-gray-800/50",
                      hoverable && "hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",
                      bordered && "border-b border-gray-200 dark:border-gray-700"
                    )}
                  >
                    {columns.map((column) => (
                      <td
                        key={String(column.key)}
                        className={cn(
                          "text-gray-900 dark:text-white",
                          compact ? "px-3 py-2 text-sm" : "px-6 py-4"
                        )}
                      >
                        {column.render
                          ? column.render(row[column.key], row)
                          : String(row[column.key] || '')
                        }
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination && totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} results
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(current => Math.max(1, current - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i
                if (pageNum > totalPages) return null
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={cn(
                      "px-3 py-1 text-sm border rounded transition-colors",
                      currentPage === pageNum
                        ? "bg-primary text-white border-primary"
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                  >
                    {pageNum}
                  </button>
                )
              })}
              
              <button
                onClick={() => setCurrentPage(current => Math.min(totalPages, current + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </TableContext.Provider>
  )
}

// Simple Table Component (for basic use cases)
export interface SimpleTableProps {
  headers: string[]
  rows: (string | number | React.ReactNode)[][]
  className?: string
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  compact?: boolean
}

export function SimpleTable({
  headers,
  rows,
  className,
  striped = false,
  hoverable = true,
  bordered = false,
  compact = false
}: SimpleTableProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={cn(
                    "text-left font-medium text-gray-900 dark:text-white",
                    compact ? "px-3 py-2 text-sm" : "px-6 py-3"
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  striped && rowIndex % 2 === 1 && "bg-gray-50 dark:bg-gray-800/50",
                  hoverable && "hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",
                  bordered && "border-b border-gray-200 dark:border-gray-700"
                )}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={cn(
                      "text-gray-900 dark:text-white",
                      compact ? "px-3 py-2 text-sm" : "px-6 py-4"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Table Cell Components for custom rendering
export function StatusBadge({ 
  status, 
  variant = "default" 
}: { 
  status: string
  variant?: "default" | "success" | "warning" | "error" | "info"
}) {
  const variants = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  }

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      variants[variant]
    )}>
      {status}
    </span>
  )
}

export function ActionButton({ 
  onClick, 
  children, 
  variant = "ghost" 
}: {
  onClick: () => void
  children: React.ReactNode
  variant?: "ghost" | "primary" | "secondary"
}) {
  const variants = {
    ghost: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
    primary: "text-primary hover:text-primary/80 hover:bg-primary/10",
    secondary: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center w-8 h-8 rounded transition-colors",
        variants[variant]
      )}
    >
      {children}
    </button>
  )
}