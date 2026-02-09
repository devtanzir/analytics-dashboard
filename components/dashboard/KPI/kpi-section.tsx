import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import KPICard from "./kpi-card";

interface KPISection {
  revenue: { value: number; change: number; isPositive: boolean };
  users: { value: number; change: number; isPositive: boolean };
  orders: { value: number; change: number; isPositive: boolean };
  conversionRate: { value: number; change: number; isPositive: boolean };
}

const KpiSection = ({ revenue, users, orders, conversionRate }: KPISection) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Revenue"
          value={`$${revenue.value.toLocaleString()}`}
          change={revenue.change}
          isPositive={revenue.isPositive}
          icon={<DollarSign className="h-5 w-5" />}
        />
        <KPICard
          title="Total Users"
          value={users.value.toLocaleString()}
          change={users.change}
          isPositive={users.isPositive}
          icon={<Users className="h-5 w-5" />}
        />
        <KPICard
          title="Orders"
          value={orders.value.toLocaleString()}
          change={orders.change}
          isPositive={orders.isPositive}
          icon={<ShoppingCart className="h-5 w-5" />}
        />
        <KPICard
          title="Conversion Rate"
          value={conversionRate.value}
          change={conversionRate.change}
          isPositive={conversionRate.isPositive}
          icon={<TrendingUp className="h-5 w-5" />}
          suffix="%"
        />
      </div>
    </>
  );
};

export default KpiSection;
