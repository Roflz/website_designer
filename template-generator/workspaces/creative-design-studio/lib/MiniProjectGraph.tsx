'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

interface ProjectProgressData {
  month: string
  count: number
}

interface MiniProjectGraphProps {
  expanded: boolean
  data?: ProjectProgressData[]
  title?: string
  strokeColor?: string
  iconColor?: string
}

const defaultData = [
  { month: 'Jan', count: 0 },
  { month: 'Feb', count: 0 },
  { month: 'Mar', count: 1 },
  { month: 'Apr', count: 2 },
  { month: 'May', count: 2 },
  { month: 'Jun', count: 3 },
]

export function MiniProjectGraph({ 
  expanded, 
  data = defaultData, 
  title = 'Projects Over Time',
  strokeColor = '#38bdf8',
  iconColor = '#22c55e'
}: MiniProjectGraphProps) {
  // Mini SVG graph: use Lucide TrendingUp icon for a clean, impactful look
  const miniGraph = (
    <motion.div
      initial={false}
      animate={expanded ? { scale: 1.18, filter: `drop-shadow(0 0 16px ${iconColor}aa)` } : { scale: 1, filter: `drop-shadow(0 2px 8px ${iconColor}55)` }}
      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
      className="relative w-[48px] h-[48px] aspect-square flex items-center justify-center cursor-pointer group border-2 border-primary-400 dark:border-primary-500 rounded-xl ring-2 ring-primary-200/40 dark:ring-primary-400/30 shadow-lg hover:ring-4 hover:ring-primary-300/60 hover:shadow-primary-400/30 transition-all duration-200 mt-[5px]"
    >
      <TrendingUp size={32} strokeWidth={3} color={iconColor} />
    </motion.div>
  )

  return (
    <div className="relative flex flex-col items-center w-full">
      <div
        className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer"
        style={{ zIndex: 1 }}
      >
        {miniGraph}
      </div>
      {/* Expanded graph, absolutely positioned below */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-background-alt rounded-xl shadow-xl border border-primary/10 transition-all duration-300 overflow-hidden ${expanded ? 'h-32 w-56 opacity-100 pointer-events-auto' : 'h-0 w-56 opacity-0 pointer-events-none'}`}
        style={{ zIndex: 10 }}
      >
        {expanded && (
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={data} margin={{ top: 16, right: 16, left: 16, bottom: 16 }}>
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis domain={[0, 'dataMax+1']} tick={{ fontSize: 10 }} />
              <Tooltip wrapperClassName="!text-xs" contentStyle={{ fontSize: 12 }} cursor={false} />
              <Line
                type="monotone"
                dataKey="count"
                stroke={strokeColor}
                strokeWidth={2}
                dot={true}
                isAnimationActive={true}
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
        <span className="block text-[10px] text-gray-400 text-center mt-1">{title}</span>
      </div>
    </div>
  )
} 