"use client";

import DashboardFilters from "@/components/dashboard/filters";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import useDashboard from "./_hooks/useDashboard";
import KpiSection from "@/components/dashboard/KPI/kpi-section";
import RevenueChart from "@/components/dashboard/charts/revenue-chart";
import { OrdersChart } from "@/components/dashboard/charts/order-chart";
import UserDistribution from "@/components/dashboard/charts/user-distribution-chart";
import PageLoader from "@/components/shared/page-loader";

export default function Home() {
  const { isCollapsed, setIsCollapsed, loading, error, filteredData } =
    useDashboard();
  if (error) {
    throw new Error("Failed to load dashboard data");
  }
  return (
    <>
      <Sidebar onCollapseChange={setIsCollapsed} />
      <div
        className={`transition-all duration-300 ${isCollapsed ? "lg:ml-16" : "lg:ml-64"}`}
      >
        <Header isCollapsed={isCollapsed} />
        <main className="min-h-[calc(100vh-4rem)] bg-background dark:bg-dark-background transition-colors duration-300">
          <div className="p-4 md:p-8 space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold text-foreground dark:text-dark-foreground">Dashboard</h1>
              <p className="text-muted-foreground dark:text-dark-muted-foreground mt-1">
                Welcome back! Here&apos;s your business performance overview.
              </p>
            </div>

            {/* Filters */}
            <DashboardFilters />
            {loading ? (
              <PageLoader />
            ) : (
              <>
                {filteredData && <KpiSection {...filteredData.kpis} />}

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <RevenueChart data={filteredData?.revenue || []} />
                  <OrdersChart data={filteredData?.orders || []} />
                  <UserDistribution data={filteredData?.users || []} />
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
