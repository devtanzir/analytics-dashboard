import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { UserDistributionProps } from "./interface/charts"

const UserDistribution = ({ data }: UserDistributionProps) => {
  return (
    <div className="border border-border bg-card rounded-lg p-6 col-span-1">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">User Distribution</h2>
        <p className="text-sm text-muted-foreground">By user type</p>
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
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default UserDistribution