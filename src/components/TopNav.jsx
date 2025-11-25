function TopNav() {
    return (
      <header className="h-16 border-b border-slate-200 bg-white/70 backdrop-blur flex items-center justify-between px-4">
        <div className="font-semibold text-slate-800">
          Dashboard
        </div>
  
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search files, issues…"
            className="text-sm px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring focus:ring-indigo-500/40"
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
  