import { api } from "@/lib/api";

export async function getRevenue() {
  try {
    const { data } = await api.get("/revenue");
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch revenue data: ${error}`);
  }
}
