export default function ProjectFilters({ search, setSearch, status, setStatus }) {
    return (
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
  
        {/* Search */}
        <input
          type="text"
          placeholder="Search project..."
          className="w-full md:w-1/3 p-2 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
        {/* Status Filter */}
        <select
          className="p-2 border rounded-xl"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
  
      </div>
    );
  }
  