/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "../shared/theme-toggle"

interface HeaderProps {
  isCollapsed?: boolean
}

export function Header({ isCollapsed = false }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border bg-background">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        <div className="block lg:hidden"></div>

        {/* Search or Title - Desktop */}
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Notification Button */}
          <button
            className={cn(
              "relative h-9 w-9 rounded-lg flex items-center justify-center transition-colors",
              "hover:bg-accent hover:text-accent-foreground cursor-pointer"
            )}
          >
            <Bell className="h-5 w-5 text-foreground" />
            {/* Red Dot */}
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-red-500" />
          </button>
          {/* Theme toggle button */}
          <ThemeToggle />

          {/* User Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                isDropdownOpen && "bg-accent"
              )}
            >
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-medium text-sm">A</span>
              </div>
              <div className="hidden sm:block text-left cursor-pointer">
                <p className="text-sm font-medium text-foreground">Admin</p>
                <p className="text-xs text-muted-foreground">admin@linkup.com</p>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform hidden sm:block cursor-pointer",
                  isDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-card shadow-lg">
                <div className="p-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">Admin</p>
                  <p className="text-xs text-muted-foreground">admin@linkup.com</p>
                </div>
                
                <div className="p-1">
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                      "hover:bg-accent hover:text-accent-foreground text-left cursor-pointer"
                    )}
                  >
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className=" text-muted-foreground">Profile</span>
                  </button>
                  
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                      "hover:bg-accent hover:text-accent-foreground text-left cursor-pointer"
                    )}
                  >
                    <Settings className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Settings</span>
                  </button>
                  
                  <div className="my-1 border-t border-border" />
                  
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                      "hover:bg-red-500/10 hover:text-red-500 text-left cursor-pointer"
                    )}
                  >
                    <LogOut className="h-4 w-4 text-red-500" />
                    <span className="text-red-500">Log out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}