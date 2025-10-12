import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import ComponentPreview from "../components/ComponentPreview"
import { Table, SimpleTable, StatusBadge, ActionButton, type Column } from "../components/ui/Table"
import { MoreHorizontal, Edit, Trash2, Eye, Mail, Phone, MapPin } from "lucide-react"

export default function TablePage() {
  // Sample data for different table types
  interface User {
    id: number
    name: string
    email: string
    role: string
    status: 'active' | 'inactive' | 'pending'
    joinDate: string
    lastLogin: string
  }

  const userData: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "active",
      joinDate: "2023-01-15",
      lastLogin: "2024-01-10"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      status: "active",
      joinDate: "2023-03-22",
      lastLogin: "2024-01-09"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Viewer",
      status: "inactive",
      joinDate: "2023-06-10",
      lastLogin: "2023-12-20"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Editor",
      status: "pending",
      joinDate: "2024-01-05",
      lastLogin: "Never"
    },
    {
      id: 5,
      name: "Tom Brown",
      email: "tom@example.com",
      role: "Admin",
      status: "active",
      joinDate: "2022-11-30",
      lastLogin: "2024-01-08"
    }
  ]

  const userColumns: Column<User>[] = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary">
              {row.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="font-medium text-gray-900 dark:text-white">{value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{row.email}</div>
          </div>
        </div>
      )
    },
    {
      key: 'role',
      header: 'Role',
      sortable: true,
      render: (value) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          {value}
        </span>
      )
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (value) => (
        <StatusBadge 
          status={value} 
          variant={
            value === 'active' ? 'success' : 
            value === 'inactive' ? 'error' : 'warning'
          } 
        />
      )
    },
    {
      key: 'joinDate',
      header: 'Join Date',
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString()
    },
    {
      key: 'lastLogin',
      header: 'Last Login',
      sortable: true,
      render: (value) => value === 'Never' ? value : new Date(value).toLocaleDateString()
    },
    {
      key: 'id',
      header: 'Actions',
      width: '100px',
      render: (value, row) => (
        <div className="flex items-center space-x-1">
          <ActionButton onClick={() => console.log('View', row.id)} variant="ghost">
            <Eye className="w-4 h-4" />
          </ActionButton>
          <ActionButton onClick={() => console.log('Edit', row.id)} variant="primary">
            <Edit className="w-4 h-4" />
          </ActionButton>
          <ActionButton onClick={() => console.log('Delete', row.id)} variant="ghost">
            <Trash2 className="w-4 h-4" />
          </ActionButton>
        </div>
      )
    }
  ]

  // Simple table data
  const simpleHeaders = ["Product", "Price", "Stock", "Category"]
  const simpleRows = [
    ["MacBook Pro", "$2,499", "5", "Laptops"],
    ["iPhone 15", "$999", "12", "Phones"],
    ["AirPods Pro", "$249", "25", "Audio"],
    ["iPad Air", "$599", "8", "Tablets"],
    ["Apple Watch", "$399", "15", "Wearables"]
  ]

  // Code examples
  const basicTableCode = `import { Table, Column } from "./components/ui/Table"

interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
}

const columns: Column<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
  { key: 'status', header: 'Status', sortable: true }
]

export default function Example() {
  return (
    <Table
      data={userData}
      columns={columns}
      searchable={true}
      pagination={true}
      pageSize={10}
      striped={true}
      hoverable={true}
    />
  )
}`

  const customRenderCode = `import { Table, StatusBadge, ActionButton } from "./components/ui/Table"
import { Edit, Trash2 } from "lucide-react"

const columns = [
  {
    key: 'name',
    header: 'Name',
    render: (value, row) => (
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium text-primary">
            {row.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      </div>
    )
  },
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <StatusBadge 
        status={value} 
        variant={value === 'active' ? 'success' : 'error'} 
      />
    )
  },
  {
    key: 'id',
    header: 'Actions',
    render: (value, row) => (
      <div className="flex space-x-1">
        <ActionButton onClick={() => edit(row.id)}>
          <Edit className="w-4 h-4" />
        </ActionButton>
        <ActionButton onClick={() => delete(row.id)}>
          <Trash2 className="w-4 h-4" />
        </ActionButton>
      </div>
    )
  }
]`

  const simpleTableCode = `import { SimpleTable } from "./components/ui/Table"

const headers = ["Product", "Price", "Stock", "Category"]
const rows = [
  ["MacBook Pro", "$2,499", "5", "Laptops"],
  ["iPhone 15", "$999", "12", "Phones"],
  ["AirPods Pro", "$249", "25", "Audio"]
]

export default function Example() {
  return (
    <SimpleTable
      headers={headers}
      rows={rows}
      striped={true}
      hoverable={true}
    />
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
                Table Components
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Powerful and flexible table components with sorting, searching, pagination, 
                and custom rendering capabilities.
              </p>
            </div>

            {/* Feature Overview */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Sorting</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Multi-column sorting with visual indicators
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary text-2xl">🔍</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Search</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Global search across all columns
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary text-2xl">📄</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Pagination</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Built-in pagination with page controls
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Custom Render</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Custom cell rendering with components
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {/* Advanced Table */}
              <ComponentPreview
                title="Advanced Data Table"
                description="Full-featured table with sorting, searching, pagination, and custom rendering."
                code={basicTableCode}
              >
                <Table
                  data={userData}
                  columns={userColumns}
                  searchable={true}
                  pagination={true}
                  pageSize={3}
                  striped={true}
                  hoverable={true}
                />
              </ComponentPreview>

              {/* Simple Table */}
              <ComponentPreview
                title="Simple Table"
                description="Basic table for simple data display without advanced features."
                code={simpleTableCode}
              >
                <SimpleTable
                  headers={simpleHeaders}
                  rows={simpleRows}
                  striped={true}
                  hoverable={true}
                />
              </ComponentPreview>

              {/* Custom Rendering Example */}
              <ComponentPreview
                title="Custom Cell Rendering"
                description="Advanced table with custom cell rendering, status badges, and action buttons."
                code={customRenderCode}
              >
                <Table
                  data={userData.slice(0, 3)}
                  columns={userColumns}
                  hoverable={true}
                  bordered={true}
                />
              </ComponentPreview>

              {/* Compact Table */}
              <ComponentPreview
                title="Compact Table"
                description="Space-efficient table variant with reduced padding and smaller text."
                code={`<Table data={data} columns={columns} compact={true} />`}
              >
                <Table
                  data={userData.slice(0, 4)}
                  columns={[
                    { key: 'name', header: 'Name', sortable: true },
                    { key: 'email', header: 'Email', sortable: true },
                    { key: 'role', header: 'Role', sortable: true },
                    { 
                      key: 'status', 
                      header: 'Status', 
                      render: (value) => <StatusBadge status={value} variant={value === 'active' ? 'success' : 'error'} />
                    }
                  ]}
                  compact={true}
                  striped={true}
                />
              </ComponentPreview>

              {/* API Reference */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Reference</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Table Props</h3>
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
                            <td className="py-2 font-mono text-sm">data</td>
                            <td className="py-2">T[]</td>
                            <td className="py-2">required</td>
                            <td className="py-2">Array of data objects</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">columns</td>
                            <td className="py-2">Column&lt;T&gt;[]</td>
                            <td className="py-2">required</td>
                            <td className="py-2">Column configuration array</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">searchable</td>
                            <td className="py-2">boolean</td>
                            <td className="py-2">false</td>
                            <td className="py-2">Enable global search functionality</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">pagination</td>
                            <td className="py-2">boolean</td>
                            <td className="py-2">false</td>
                            <td className="py-2">Enable pagination controls</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">pageSize</td>
                            <td className="py-2">number</td>
                            <td className="py-2">10</td>
                            <td className="py-2">Number of rows per page</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">striped</td>
                            <td className="py-2">boolean</td>
                            <td className="py-2">false</td>
                            <td className="py-2">Alternate row background colors</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 font-mono text-sm">hoverable</td>
                            <td className="py-2">boolean</td>
                            <td className="py-2">true</td>
                            <td className="py-2">Enable row hover effects</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-mono text-sm">compact</td>
                            <td className="py-2">boolean</td>
                            <td className="py-2">false</td>
                            <td className="py-2">Reduce padding for compact layout</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Column Interface</h3>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                        <code>{`interface Column<T> {
  key: keyof T              // Data property key
  header: string            // Column header text
  sortable?: boolean        // Enable sorting
  filterable?: boolean      // Enable filtering (future feature)
  width?: string           // Column width (CSS value)
  render?: (value: any, row: T) => React.ReactNode
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Helper Components</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">StatusBadge</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Pre-styled status indicators with multiple variants
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">ActionButton</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Icon buttons for table actions with hover effects
                        </p>
                      </div>
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