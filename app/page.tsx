import { Sidebar } from "@/components/layout/sidebar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen lg:ml-64 transition-all duration-300">
        <Sidebar/>
      </div>
    </>
  );
}
