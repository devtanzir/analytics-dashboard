import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { UserDistributionProps } from "./interface/charts"
import { useTheme } from "@/components/shared/theme-provider"

const UserDistribution = ({ data }: UserDistributionProps) => {
  const { theme } = useTheme()
    const isDark = theme === 'dark'
  return (
    <div className="border border-border dark:border-dark-border bg-card dark:bg-dark-card rounded-lg p-6 col-span-1">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground dark:text-dark-foreground">User Distribution</h2>
        <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">By user type</p>
      </div>
      <div className="flex justify-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "hsl(214.3 31.8% 91.4%)" : "hsl(0 0% 100%)",
                border: `1px solid ${isDark ? "hsl(217.2 32.6% 17.5%)" : "hsl(214.3 31.8% 91.4%)"}`,
                borderRadius: '0.5rem',
              }}
              labelStyle={{ color: isDark ? "hsl(210 40% 98%)" : "hsl(222.2 84% 4.9%)" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default UserDistribution