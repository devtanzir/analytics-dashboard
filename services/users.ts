import { api } from "@/lib/api"

export async function getUsers() {
  try {
    const { data } = await api.get('/users')
    return data
  } catch (error) {
    throw new Error(`Failed to fetch users data: ${error}`)
  }
}