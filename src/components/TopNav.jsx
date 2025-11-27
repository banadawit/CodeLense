import { Menu } from "lucide-react";

function TopNav({ onOpenSidebar }) {
  return (
    <header className="h-auto border-b border-slate-200 bg-white/80 backdrop-blur px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 text-slate-800">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          aria-label="Open navigation menu"
        >
          <Menu size={18} />
        </button>
        <span className="font-semibold text-lg">Dashboard</span>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search files, issues…"
          className="flex-1 sm:flex-none text-sm px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring focus:ring-indigo-500/40"
        />
        <select className="text-sm px-3 py-2 rounded-lg border border-slate-200 bg-white">
          <option>All Projects</option>
          <option>Frontend App</option>
          <option>API Service</option>
        </select>
      </div>
    </header>
  );
}

export default TopNav;