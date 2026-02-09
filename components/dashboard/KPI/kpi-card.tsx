import { ArrowDown, ArrowUp } from "lucide-react";

interface KPICardProps {
  title: string;
  value: number | string;
  change: number;
  isPositive: boolean;
  icon: React.ReactNode;
  suffix?: string;
}

const KPICard = ({
  title,
  value,
  change,
  isPositive,
  icon,
  suffix,
}: KPICardProps) => {
  return (
    <div className="border border-border bg-card hover:bg-card/80 transition-colors rounded-lg p-6">
      <div className="flex flex-row items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="text-muted-foreground">{icon}</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground">
          {value}
          {suffix && <span className="text-lg">{suffix}</span>}
        </div>
        <div
          className={`flex items-center gap-1 text-sm mt-2 ${isPositive ? "text-green-400" : "text-red-400"}`}
        >
          {isPositive ? (
            <ArrowUp className="h-4 w-4" />
          ) : (
            <ArrowDown className="h-4 w-4" />
          )}
          <span>{Math.abs(change)}%</span>
          <span className="text-muted-foreground">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
