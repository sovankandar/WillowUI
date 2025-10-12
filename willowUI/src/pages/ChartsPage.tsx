import React, { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import ComponentPreview from "../components/ComponentPreview"
import { 
  LineChart, 
  BarChart, 
  PieChart, 
  AreaChart, 
  RadialBarChart,
  RadarChart,
  ChartContainer 
} from "../components/ui/Charts"
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Activity, Target, Radar } from "lucide-react"

export default function ChartsPage() {
  const [activeTab, setActiveTab] = useState("line")

  // Sample data for charts
  const lineData = [
    { name: "Jan", sales: 400, revenue: 240 },
    { name: "Feb", sales: 300, revenue: 139 },
    { name: "Mar", sales: 600, revenue: 980 },
    { name: "Apr", sales: 800, revenue: 390 },
    { name: "May", sales: 500, revenue: 480 },
    { name: "Jun", sales: 900, revenue: 380 },
    { name: "Jul", sales: 700, revenue: 430 }
  ]

  const barData = [
    { name: "Mon", visits: 120, sales: 80 },
    { name: "Tue", visits: 200, sales: 130 },
    { name: "Wed", visits: 150, sales: 90 },
    { name: "Thu", visits: 300, sales: 200 },
    { name: "Fri", visits: 250, sales: 180 },
    { name: "Sat", visits: 400, sales: 290 },
    { name: "Sun", visits: 180, sales: 120 }
  ]

  const pieData = [
    { name: "Desktop", value: 45, color: "rgb(var(--primary))" },
    { name: "Mobile", value: 35, color: "hsl(210, 100%, 60%)" },
    { name: "Tablet", value: 15, color: "hsl(150, 100%, 50%)" },
    { name: "Other", value: 5, color: "hsl(30, 100%, 60%)" }
  ]

  const areaData = [
    { name: "Q1", revenue: 2400, profit: 1200 },
    { name: "Q2", revenue: 1398, profit: 800 },
    { name: "Q3", revenue: 9800, profit: 4500 },
    { name: "Q4", revenue: 3908, profit: 2100 },
    { name: "Q5", revenue: 4800, profit: 2800 },
    { name: "Q6", revenue: 3800, profit: 1900 }
  ]

  const radialData = [
    { name: "Sales", value: 85, fill: "rgb(var(--primary))" },
    { name: "Marketing", value: 65, fill: "hsl(210, 100%, 60%)" },
    { name: "Development", value: 75, fill: "hsl(150, 100%, 50%)" },
    { name: "Support", value: 55, fill: "hsl(30, 100%, 60%)" }
  ]

  const radarData = [
    { subject: "Math", A: 120, B: 110, fullMark: 150 },
    { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
    { subject: "English", A: 86, B: 130, fullMark: 150 },
    { subject: "Geography", A: 99, B: 100, fullMark: 150 },
    { subject: "Physics", A: 85, B: 90, fullMark: 150 },
    { subject: "History", A: 65, B: 85, fullMark: 150 },
  ]

  const chartTabs = [
    { id: "line", label: "Line Chart", icon: TrendingUp },
    { id: "area", label: "Area Chart", icon: Activity },
    { id: "bar", label: "Bar Chart", icon: BarChart3 },
    { id: "pie", label: "Pie Chart", icon: PieChartIcon },
    { id: "radial", label: "Radial Chart", icon: Target },
    { id: "radar", label: "Radar Chart", icon: Radar },
  ]

  const lineChartCode = `import { LineChart } from "./components/ui/Charts"

const data = [
  { name: "Jan", sales: 400, revenue: 240 },
  { name: "Feb", sales: 300, revenue: 139 },
  { name: "Mar", sales: 600, revenue: 980 },
  { name: "Apr", sales: 800, revenue: 390 },
  { name: "May", sales: 500, revenue: 480 },
  { name: "Jun", sales: 900, revenue: 380 }
]

export default function Example() {
  return (
    <LineChart 
      data={data}
      height={300}
      colors={["rgb(var(--primary))", "hsl(210, 100%, 60%)"]}
    />
  )
}`

  const barChartCode = `import { BarChart } from "./components/ui/Charts"

const data = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 200 },
  { name: "Wed", value: 150 },
  { name: "Thu", value: 300 },
  { name: "Fri", value: 250 },
  { name: "Sat", value: 400 },
  { name: "Sun", value: 180 }
]

export default function Example() {
  return (
    <BarChart 
      data={data}
      height={300}
      color="rgb(var(--primary))"
      animate={true}
      showGrid={true}
      showTooltip={true}
    />
  )
}`

  const pieChartCode = `import { PieChart } from "./components/ui/Charts"

const data = [
  { name: "Desktop", value: 45, color: "rgb(var(--primary))" },
  { name: "Mobile", value: 35, color: "hsl(210, 100%, 60%)" },
  { name: "Tablet", value: 15, color: "hsl(150, 100%, 50%)" },
  { name: "Other", value: 5, color: "hsl(30, 100%, 60%)" }
]

export default function Example() {
  return (
    <PieChart 
      data={data}
      size={300}
      animate={true}
      showTooltip={true}
    />
  )
}`

  const donutChartCode = `import { PieChart } from "./components/ui/Charts"

const data = [
  { name: "Desktop", value: 45, color: "rgb(var(--primary))" },
  { name: "Mobile", value: 35, color: "hsl(210, 100%, 60%)" },
  { name: "Tablet", value: 15, color: "hsl(150, 100%, 50%)" },
  { name: "Other", value: 5, color: "hsl(30, 100%, 60%)" }
]

export default function Example() {
  return (
    <PieChart 
      data={data}
      size={300}
      innerRadius={60}
      animate={true}
      showTooltip={true}
    />
  )
}`

  const areaChartCode = `import { AreaChart } from "./components/ui/Charts"

const data = [
  { name: "Q1", value: 2400 },
  { name: "Q2", value: 1398 },
  { name: "Q3", value: 9800 },
  { name: "Q4", value: 3908 },
  { name: "Q5", value: 4800 },
  { name: "Q6", value: 3800 }
]

export default function Example() {
  return (
    <AreaChart 
      data={data}
      height={300}
      color="rgb(var(--primary))"
      animate={true}
      showGrid={true}
      showTooltip={true}
      fillOpacity={0.3}
    />
  )
}`

  const multiLineCode = `import { LineChart } from "./components/ui/Charts"

const data = [
  { name: "Jan", sales: 400, revenue: 240 },
  { name: "Feb", sales: 300, revenue: 139 },
  { name: "Mar", sales: 600, revenue: 980 },
  { name: "Apr", sales: 800, revenue: 390 },
  { name: "May", sales: 500, revenue: 480 },
  { name: "Jun", sales: 900, revenue: 380 }
]

export default function Example() {
  return (
    <div className="relative">
      <LineChart 
        data={data}
        dataKey="sales"
        color="rgb(var(--primary))"
        height={300}
      />
      <LineChart 
        data={data}
        dataKey="revenue"
        color="hsl(210, 100%, 60%)"
        height={300}
        className="absolute inset-0"
      />
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
                Charts Components
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Beautiful, interactive charts with smooth animations and modern design. 
                Built for React with full customization and theme support.
              </p>
            </div>

            {/* Chart Types Overview */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Line Charts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Perfect for trends over time
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Bar Charts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Compare values across categories
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <PieChartIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Pie Charts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Show parts of a whole
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Area Charts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Emphasize data magnitude
                </p>
              </div>
            </div>

            {/* Chart Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex overflow-x-auto">
                  {chartTabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                          activeTab === tab.id
                            ? "bg-primary/10 text-primary border-b-2 border-primary"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Chart Content */}
              <div className="p-8">
                {activeTab === "line" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Line Chart
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Perfect for showing trends over time with multiple data series.
                      </p>
                    </div>
                    <LineChart 
                      data={lineData}
                      height={400}
                      colors={["rgb(var(--primary))", "hsl(210, 100%, 60%)"]}
                    />
                  </div>
                )}

                {activeTab === "area" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Area Chart
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Great for emphasizing data magnitude with beautiful gradient fills.
                      </p>
                    </div>
                    <AreaChart 
                      data={areaData}
                      height={400}
                      colors={["rgb(var(--primary))", "hsl(150, 100%, 50%)"]}
                    />
                  </div>
                )}

                {activeTab === "bar" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Bar Chart
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Ideal for comparing values across different categories.
                      </p>
                    </div>
                    <BarChart 
                      data={barData}
                      height={400}
                      colors={["rgb(var(--primary))", "hsl(210, 100%, 60%)"]}
                    />
                  </div>
                )}

                {activeTab === "pie" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Pie Chart
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Perfect for showing parts of a whole with interactive slices.
                      </p>
                    </div>
                    <PieChart 
                      data={pieData}
                      height={400}
                    />
                  </div>
                )}

                {activeTab === "radial" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Radial Bar Chart
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Modern circular progress bars for KPIs and performance metrics.
                      </p>
                    </div>
                    <RadialBarChart 
                      data={radialData}
                      height={400}
                    />
                  </div>
                )}

                {activeTab === "radar" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Radar Chart
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Excellent for comparing multiple variables across different subjects.
                      </p>
                    </div>
                    <RadarChart 
                      data={radarData}
                      height={400}
                      colors={["rgb(var(--primary))", "hsl(210, 100%, 60%)"]}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}