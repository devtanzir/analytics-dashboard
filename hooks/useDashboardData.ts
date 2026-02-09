"use client"

import { getKPIs } from '@/services/kpis'
import { getOrders } from '@/services/orders'
import { getRevenue } from '@/services/revenue'
import { getUsers } from '@/services/users'
import { useEffect, useState } from 'react'

interface DashboardData {
  kpis: Awaited<ReturnType<typeof getKPIs>>
  revenue: Awaited<ReturnType<typeof getRevenue>>
  orders: Awaited<ReturnType<typeof getOrders>>
  users: Awaited<ReturnType<typeof getUsers>>
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAll() {
      try {
        setLoading(true)
        const [kpis, revenue, orders, users] = await Promise.all([
          getKPIs(),
          getRevenue(),
          getOrders(),
          getUsers(),
        ])
        
        setData({ kpis, revenue, orders, users })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [])

  return { data, loading, error }
}