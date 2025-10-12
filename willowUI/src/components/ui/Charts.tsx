import React, { useState, useEffect, useRef } from "react"
import {
  LineChart as RechartsLineChart,
  Line,
  AreaChart as RechartsAreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  RadialBarChart as RechartsRadialBarChart,
  RadialBar,
  RadarChart as RechartsRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { cn } from "../../lib/utils"

// Chart Container Component
export interface ChartContainerProps {
  children: React.ReactNode
  className?: string
}

export function ChartContainer({
  children,
  className,
  ...props
}: ChartContainerProps) {
  return (
    <div
      className={cn("flex aspect-video justify-center text-xs", className)}
      {...props}
    >
      <div className="w-full">{children}</div>
    </div>
  )
}

// Custom Tooltip Component
function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Line Chart Component
export interface LineChartProps {
  data: Array<Record<string, any>>
  height?: number
  className?: string
  colors?: string[]
}

export function LineChart({
  data,
  height = 300,
  className,
  colors = ["rgb(var(--primary))", "hsl(210, 100%, 60%)", "hsl(150, 100%, 50%)"]
}: LineChartProps) {
  const dataKeys = data.length > 0 ? Object.keys(data[0]).filter(key => key !== "name") : []

  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            className="stroke-gray-200 dark:stroke-gray-700" 
            opacity={0.3}
          />
          <XAxis 
            dataKey="name" 
            axisLine={{ stroke: 'rgb(156 163 175)', strokeWidth: 1 }}
            tickLine={{ stroke: 'rgb(156 163 175)', strokeWidth: 1 }}
            tick={{ fontSize: 12, fill: 'rgb(107 114 128)' }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          {dataKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              strokeWidth={3}
              dot={{ fill: colors[index % colors.length], r: 4 }}
              activeDot={{ r: 6, className: "drop-shadow-lg" }}
              className="drop-shadow-sm"
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

// Area Chart Component
export interface AreaChartProps {
  data: Array<Record<string, any>>
  height?: number
  className?: string
  colors?: string[]
}

export function AreaChart({
  data,
  height = 300,
  className,
  colors = ["rgb(var(--primary))", "hsl(210, 100%, 60%)", "hsl(150, 100%, 50%)"]
}: AreaChartProps) {
  const dataKeys = data.length > 0 ? Object.keys(data[0]).filter(key => key !== "name") : []

  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            {dataKeys.map((key, index) => (
              <linearGradient key={key} id={`colorGradient${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[index % colors.length]} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={colors[index % colors.length]} stopOpacity={0.05}/>
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            className="stroke-gray-200 dark:stroke-gray-700" 
            opacity={0.3}
          />
          <XAxis 
            dataKey="name" 
            axisLine={{ stroke: 'rgb(156 163 175)', strokeWidth: 1 }}
            tickLine={{ stroke: 'rgb(156 163 175)', strokeWidth: 1 }}
            tick={{ fontSize: 12, fill: 'rgb(107 114 128)' }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          {dataKeys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#colorGradient${index})`}
              dot={{ fill: colors[index % colors.length], r: 4 }}
              activeDot={{ r: 6, className: "drop-shadow-lg" }}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

// Bar Chart Component
export interface BarChartProps {
  data: Array<Record<string, any>>
  height?: number
  className?: string
  colors?: string[]
}

export function BarChart({
  data,
  height = 300,
  className,
  colors = ["rgb(var(--primary))", "hsl(210, 100%, 60%)", "hsl(150, 100%, 50%)"]
}: BarChartProps) {
  const dataKeys = data.length > 0 ? Object.keys(data[0]).filter(key => key !== "name") : []

  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            className="stroke-gray-200 dark:stroke-gray-700" 
            opacity={0.3}
          />
          <XAxis 
            dataKey="name" 
            axisLine={{ stroke: 'rgb(156 163 175)', strokeWidth: 1 }}
            tickLine={{ stroke: 'rgb(156 163 175)', strokeWidth: 1 }}
            tick={{ fontSize: 12, fill: 'rgb(107 114 128)' }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[index % colors.length]}
              radius={[4, 4, 0, 0]}
              className="drop-shadow-sm"
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Pie Chart Component
export interface PieChartProps {
  data: Array<{ name: string; value: number; color?: string }>
  height?: number
  className?: string
  colors?: string[]
  innerRadius?: number
}

export function PieChart({
  data,
  height = 300,
  className,
  colors = [
    "rgb(var(--primary))",
    "hsl(210, 100%, 60%)",
    "hsl(150, 100%, 50%)",
    "hsl(30, 100%, 60%)",
    "hsl(300, 100%, 60%)",
    "hsl(0, 100%, 60%)"
  ],
  innerRadius = 0
}: PieChartProps) {
  const total = data.reduce((sum, entry) => sum + entry.value, 0)
  
  return (
    <div className={cn("w-full flex items-center justify-center relative", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={Math.min(height * 0.4, 120)}
            paddingAngle={2}
            dataKey="value"
            className="drop-shadow-sm"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color || colors[index % colors.length]}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </Pie>
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                const percentage = ((data.value / total) * 100).toFixed(1)
                return (
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {data.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {data.value} ({percentage}%)
                    </p>
                  </div>
                )
              }
              return null
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
      
      {/* Center label for donut charts */}
      {innerRadius > 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Radial Bar Chart Component
export interface RadialBarChartProps {
  data: Array<{ name: string; value: number; fill?: string }>
  height?: number
  className?: string
  colors?: string[]
}

export function RadialBarChart({
  data,
  height = 300,
  className,
  colors = [
    "rgb(var(--primary))",
    "hsl(210, 100%, 60%)",
    "hsl(150, 100%, 50%)",
    "hsl(30, 100%, 60%)"
  ]
}: RadialBarChartProps) {
  const processedData = data.map((item, index) => ({
    ...item,
    fill: item.fill || colors[index % colors.length]
  }))

  return (
    <div className={cn("w-full flex items-center justify-center", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="20%" 
          outerRadius="80%" 
          data={processedData}
        >
          <RadialBar 
            dataKey="value" 
            cornerRadius={4}
            className="drop-shadow-sm"
          />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {data.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {data.value}
                    </p>
                  </div>
                )
              }
              return null
            }}
          />
        </RechartsRadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Radar Chart Component
export interface RadarChartProps {
  data: Array<Record<string, any>>
  height?: number
  className?: string
  colors?: string[]
}

export function RadarChart({
  data,
  height = 300,
  className,
  colors = ["rgb(var(--primary))", "hsl(210, 100%, 60%)", "hsl(150, 100%, 50%)"]
}: RadarChartProps) {
  const dataKeys = data.length > 0 ? Object.keys(data[0]).filter(key => key !== "subject") : []

  return (
    <div className={cn("w-full flex items-center justify-center", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid className="stroke-gray-200 dark:stroke-gray-700" opacity={0.3} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fontSize: 12, fill: 'rgb(107 114 128)' }}
          />
          <PolarRadiusAxis 
            tick={{ fontSize: 10, fill: 'rgb(107 114 128)' }}
            tickCount={4}
          />
          {dataKeys.map((key, index) => (
            <Radar
              key={key}
              name={key}
              dataKey={key}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.2}
              strokeWidth={2}
            />
          ))}
          <Tooltip content={<CustomTooltip />} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}
