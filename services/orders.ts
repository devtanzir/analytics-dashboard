import { api } from "@/lib/api";

export async function getOrders() {
  try {
    const { data } = await api.get("/orders");
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch orders data: ${error}`);
  }
}
