export interface DashboardData {
  revenue: { month: string; value: number }[];
  orders: { month: string; value: number }[];
  kpis: {
    revenue: { value: number; change: number; isPositive: boolean };
    users: { value: number; change: number; isPositive: boolean };
    orders: { value: number; change: number; isPositive: boolean };
    conversionRate: { value: number; change: number; isPositive: boolean };
  };
  users: { name: string; value: number }[];
}