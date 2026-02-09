import { api } from "@/lib/api"

export async function getKPIs() {
  try {
    const { data } = await api.get('/kpis')
    return data
  } catch (error) {
    throw new Error(`Failed to fetch KPIs data: ${error}`)
  }
}