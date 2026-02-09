"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { ReactNode, useState } from "react";

export default function Home({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <Sidebar onCollapseChange={setIsCollapsed} />
      <div
        className={`transition-all duration-300 ${isCollapsed ? "lg:ml-16" : "lg:ml-64"}`}
      >
        <Header isCollapsed={isCollapsed} />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </>
  );
}
