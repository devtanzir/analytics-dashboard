"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import useToggler from "@/hooks/useToggler";
import { navigation } from "@/constants/navItem";
import MobileMenuButton from "../mobile/mobile-menu-button";

export function Sidebar() {
  const { isToggled, close, toggle } = useToggler();
  const { isToggled: isCollapsed, toggle: toggleCollapsed } = useToggler();
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <MobileMenuButton isToggled={isToggled} toggle={toggle} />

      {/* Mobile Overlay */}
      {isToggled && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen bg-card border-r border-border transition-all duration-300",
          "flex flex-col",
          // Mobile styles
          "lg:translate-x-0",
          isToggled ? "translate-x-0" : "-translate-x-full",
          // Desktop styles
          isCollapsed ? "lg:w-16" : "lg:w-64",
          // Mobile width
          "w-64",
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          {!isCollapsed && (
            <span className="font-semibold text-foreground text-xl">
              Analytics
            </span>
          )}

          {/* Collapse Button - Desktop Only */}
          <button
            onClick={toggleCollapsed}
            className={cn(
              "hidden lg:flex h-8 w-8 rounded-lg items-center justify-center hover:bg-accent transition-colors",
              isCollapsed && "mx-auto",
            )}
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform text-foreground cursor-pointer",
                isCollapsed && "rotate-180",
              )}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={close}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-muted-foreground",
                  isCollapsed && "lg:justify-center lg:px-2",
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div
            className={cn(
              "flex items-center gap-3",
              isCollapsed && "lg:justify-center",
            )}
          >
            {!isCollapsed && (
              <div className="flex-1">
                <button className="w-full flex items-center justify-start gap-2 px-4 py-2 rounded-lg text-foreground hover:bg-accent transition-colors cursor-pointer">
          <LogOut className="h-5 w-5" />
          <span className="hidden sm:inline">Logout</span>
        </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div
        className={cn(
          "transition-all duration-300",
          isCollapsed ? "lg:ml-16" : "lg:ml-64",
        )}
      />
    </>
  );
}
