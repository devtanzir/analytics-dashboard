import { useDashboardStore } from "@/store/dashboard.store";
import { useEffect, useState } from "react";

const useDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Get data from store
  const { data, loading, error, fetchData, getFilteredData } =
    useDashboardStore();
  const filteredData = getFilteredData();

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return {
    isCollapsed,
    setIsCollapsed,
    data,
    loading,
    error,
    filteredData,
  };
};

export default useDashboard;
