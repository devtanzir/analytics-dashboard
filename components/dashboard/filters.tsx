"use client"

import { dateRanges, userTypes } from '@/constants/filters'
import { useDashboardStore } from '@/store/dashboard.store'
import { Calendar, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const DashboardFilters = () => {
  const { dateRange, userType, setDateRange, setUserType } = useDashboardStore()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      {/* Date Range Buttons */}
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        <div className="flex gap-2 flex-wrap">
          {dateRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setDateRange(range.value)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                dateRange === range.value
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-foreground hover:bg-border/50'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* User Type Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full sm:w-48 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-border/50 transition-colors flex items-center justify-between cursor-pointer"
        >
          <span>{userTypes.find(t => t.value === userType)?.label}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {dropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setDropdownOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-20">
              {userTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => {
                    setUserType(type.value)
                    setDropdownOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-left transition-colors cursor-pointer ${
                    userType === type.value
                      ? 'bg-primary/20 text-primary font-medium'
                      : 'text-foreground hover:bg-primary/10'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default DashboardFilters