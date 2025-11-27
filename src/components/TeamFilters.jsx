export default function TeamFilters({ search, setSearch, role, setRole }) {
    return (
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
  
        {/* Search */}
        <input
          type="text"
          placeholder="Search members..."
          className="w-full md:w-1/3 p-2 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
        {/* Role Filter */}
        <select
          className="p-2 border rounded-xl"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="All">All Roles</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Team Lead">Team Lead</option>
          <option value="QA Engineer">QA Engineer</option>
        </select>
  
      </div>
    );
  }
  