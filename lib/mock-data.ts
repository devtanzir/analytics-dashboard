
import { Revenue } from "./type"

export type DateRange = '7d' | '30d' | '12m'
export type UserType = 'all' | 'free' | 'premium' | 'enterprise'



export const filterData = (
  data:  Revenue[],
  range: DateRange
) => {
  const sliceMap = { '7d': 7, '30d': 30, '12m': 12 }
  const sliceAmount = sliceMap[range]
  const filtered = data.slice(Math.max(0, data.length - sliceAmount))
  return filtered
}

export const filterByUserType = (value: number, userType: UserType): number => {
  const multipliers = {
    all: 1,
    free: 0.4,
    premium: 0.35,
    enterprise: 0.25,
  }
  return Math.round(value * multipliers[userType])
}
