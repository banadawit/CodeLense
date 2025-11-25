import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNav />

        {/* Routed Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
