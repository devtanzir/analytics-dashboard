import { create } from "zustand";

import { DashboardData } from "./interface/interface";
import { getKPIs } from "@/services/kpis";
import { getOrders } from "@/services/orders";
import { getRevenue } from "@/services/revenue";
import { getUsers } from "@/services/users";
import { filterByUserType, filterData } from "@/lib/mock-data";

// Types
export type DateRange = "7d" | "30d" | "12m";
export type UserType = "all" | "free" | "premium" | "enterprise";

interface DashboardStore {
  // Filter states
  dateRange: DateRange;
  userType: UserType;

  // Data states
  data: DashboardData | null;
  loading: boolean;
  error: string | null;

  // Actions
  setDateRange: (range: DateRange) => void;
  setUserType: (type: UserType) => void;
  fetchData: () => Promise<void>;
  getFilteredData: () => DashboardData | null;
  refetch: () => Promise<void>;
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  // Initial filter states
  dateRange: "30d",
  userType: "all",

  // Initial data states
  data: null,
  loading: false,
  error: null,

  // Filter setters
  setDateRange: (range) => set({ dateRange: range }),
  setUserType: (type) => set({ userType: type }),

  // Fetch all dashboard data
  fetchData: async () => {
    set({ loading: true, error: null });

    try {
      const [kpis, revenue, orders, users] = await Promise.all([
        getKPIs(),
        getRevenue(),
        getOrders(),
        getUsers(),
      ]);

      set({
        data: { kpis, revenue, orders, users },
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch dashboard data",
        loading: false,
      });
      console.error("Dashboard fetch error:", error);
    }
  },

  // Computed/filtered data getter
  getFilteredData: () => {
    const { data, dateRange, userType } = get();
    if (!data) return null;

    return {
      revenue: filterData(data.revenue, dateRange),
      orders: filterData(data.orders, dateRange),
      users: data.users,
      kpis: {
        revenue: {
          ...data.kpis.revenue,
          value: filterByUserType(data.kpis.revenue.value, userType),
        },
        users: {
          ...data.kpis.users,
          value: filterByUserType(data.kpis.users.value, userType),
        },
        orders: {
          ...data.kpis.orders,
          value: filterByUserType(data.kpis.orders.value, userType),
        },
        conversionRate: data.kpis.conversionRate,
      },
    };
  },
  // Refetch (useful for manual refresh)
  refetch: async () => {
    await get().fetchData();
  },
}));
