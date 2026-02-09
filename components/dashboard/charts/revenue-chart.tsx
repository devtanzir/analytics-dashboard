import { useTheme } from "@/components/shared/theme-provider"
import { RevenueChartProps } from "./interface/charts"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const RevenueChart = ({ data }: RevenueChartProps) => {
const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className="border border-border bg-card rounded-lg p-6 col-span-1 lg:col-span-2">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">Revenue Over Time</h2>
        <p className="text-sm text-muted-foreground">Monthly revenue data</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart className='cursor-pointer' data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "hsl(217.2 32.6% 17.5%)" : "hsl(214.3 31.8% 91.4%)"} />
          <XAxis stroke={isDark ? "hsl(215 20.2% 65.1%)" : "hsl(215.4 16.3% 46.9%)" } />
          <YAxis stroke={isDark ? "hsl(215 20.2% 65.1%)" : "hsl(215.4 16.3% 46.9%)" } />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "hsl(222.2 84% 4.9%)" : "hsl(0 0% 100%)",
              border: `1px solid ${isDark ? "hsl(217.2 32.6% 17.5%)" : "hsl(214.3 31.8% 91.4%)"}`,
              borderRadius: '0.5rem',
            }}
            labelStyle={{ color: isDark ? "hsl(210 40% 98%)" : "hsl(222.2 84% 4.9%)" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={isDark ? "hsl(239 84% 67%)" : "hsl(239 84% 67%)"}
            strokeWidth={2}
            dot={{ fill: isDark ? "hsl(239 84% 67%)" : "hsl(239 84% 67%)", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart