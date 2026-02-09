export interface ChartData {
  month: string
  [key: string]: string | number
}

export interface PieData {
  name: string
  value: number
  color?: string
}

export interface RevenueChartProps {
  data: ChartData[]
}

export interface OrdersChartProps {
  data: ChartData[]
}

export interface UserDistributionProps {
  data: PieData[]
}