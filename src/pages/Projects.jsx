import { useState } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Download,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  GitBranch,
  Users,
  Star,
  Eye,
  MoreVertical,
  Sparkles,
  BarChart3,
  Zap,
  FolderGit2,
  Calendar,
  Target,
  ChevronDown
} from "lucide-react";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("name");
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [showArchived, setShowArchived] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const statusColors = {
    "Active": "text-emerald-600 bg-emerald-100",
    "In Progress": "text-blue-600 bg-blue-100",
    "On Hold": "text-amber-600 bg-amber-100",
    "Completed": "text-purple-600 bg-purple-100",
    "Archived": "text-slate-600 bg-slate-100"
  };

  const statusIcons = {
    "Active": <TrendingUp className="w-4 h-4" />,
    "In Progress": <Clock className="w-4 h-4" />,
    "On Hold": <AlertTriangle className="w-4 h-4" />,
    "Completed": <CheckCircle className="w-4 h-4" />,
    "Archived": <FolderGit2 className="w-4 h-4" />
  };

  const filteredProjects = projectsData.projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) ||
                         project.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All" || project.status === status;
    const matchesTeam = selectedTeam === "All" || project.team === selectedTeam;
    const matchesArchived = showArchived ? true : project.status !== "Archived";
    const matchesTab = activeTab === "all" || 
                      (activeTab === "active" && project.status === "Active") ||
                      (activeTab === "progress" && project.status === "In Progress") ||
                      (activeTab === "completed" && project.status === "Completed");

    return matchesSearch && matchesStatus && matchesTeam && matchesArchived && matchesTab;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "recent":
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      case "health":
        return b.healthScore - a.healthScore;
      case "size":
        return b.linesOfCode - a.linesOfCode;
      case "bugs":
        return b.bugs - a.bugs;
      default:
        return 0;
    }
  });

  // Calculate stats
  const stats = {
    total: projectsData.projects.length,
    active: projectsData.projects.filter(p => p.status === "Active").length,
    inProgress: projectsData.projects.filter(p => p.status === "In Progress").length,
    completed: projectsData.projects.filter(p => p.status === "Completed").length,
    highPriority: projectsData.projects.filter(p => p.priority === "High").length,
    totalCoverage: Math.round(
      projectsData.projects.reduce((acc, p) => acc + p.coverage, 0) / projectsData.projects.length
    ),
    totalBugs: projectsData.projects.reduce((acc, p) => acc + p.bugs, 0),
  };

  // Get unique teams
  const teams = [...new Set(projectsData.projects.map(p => p.team))];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <FolderGit2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Projects Dashboard
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Manage and monitor all development projects
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Export</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New Project</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
          <div className="text-sm text-slate-600">Total Projects</div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.active}</div>
          <div className="text-sm text-emerald-700 font-medium">Active</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.inProgress}</div>
          <div className="text-sm text-blue-700 font-medium">In Progress</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.completed}</div>
          <div className="text-sm text-purple-700 font-medium">Completed</div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.highPriority}</div>
          <div className="text-sm text-amber-700 font-medium">High Priority</div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.totalCoverage}%</div>
          <div className="text-sm text-indigo-700 font-medium">Avg Coverage</div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Project Health Overview</h2>
            <p className="text-slate-300 mt-1">Overall system status and metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
              87% Healthy
            </div>
            <BarChart3 className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-white">{stats.totalBugs}</div>
            <div className="text-sm text-slate-300">Total Bugs</div>
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-white">94%</div>
            <div className="text-sm text-slate-300">Build Success</div>
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-white">2.4</div>
            <div className="text-sm text-slate-300">Avg Complexity</div>
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-white">12%</div>
            <div className="text-sm text-slate-300">Code Duplication</div>
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '12%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        {[
          { id: "all", label: "All Projects", count: stats.total },
          { id: "active", label: "Active", count: stats.active },
          { id: "progress", label: "In Progress", count: stats.inProgress },
          { id: "completed", label: "Completed", count: stats.completed },
          { id: "favorites", label: "Favorites", icon: <Star className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            {tab.icon || null}
            <span className="font-medium">{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                activeTab === tab.id
                  ? "bg-white/20"
                  : "bg-slate-100 text-slate-600"
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects by name, description, or team..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Status Filter */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="In Progress">In Progress</option>
              <option value="On Hold">On Hold</option>
              <option value="Completed">Completed</option>
              <option value="Archived">Archived</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Team Filter */}
          <div className="relative">
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="All">All Teams</option>
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
            <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Sort By */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="recent">Sort by Recent</option>
              <option value="health">Sort by Health</option>
              <option value="size">Sort by Size</option>
              <option value="bugs">Sort by Bugs</option>
            </select>
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* View Toggle */}
          <div className="flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 ${viewMode === "grid" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 ${viewMode === "list" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Archived Toggle */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showArchived}
            onChange={(e) => setShowArchived(e.target.checked)}
            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-sm text-slate-700">Show archived projects</span>
        </label>
        
        <div className="text-sm text-slate-500">
          Showing {sortedProjects.length} of {projectsData.projects.length} projects
        </div>
      </div>

      {/* Projects Grid/List */}
      {sortedProjects.length > 0 ? (
        viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                variant="detailed"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${statusColors[project.status].split(' ')[1]}`}>
                        <div className={statusColors[project.status].split(' ')[0]}>
                          {statusIcons[project.status]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                        <p className="text-sm text-slate-500 mt-1">{project.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mt-4">
                      <div>
                        <div className="text-sm text-slate-500">Coverage</div>
                        <div className={`text-lg font-bold ${
                          project.coverage >= 80 ? 'text-emerald-600' : 'text-amber-600'
                        }`}>
                          {project.coverage}%
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-slate-500">Bugs</div>
                        <div className={`text-lg font-bold ${
                          project.bugs < 10 ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {project.bugs}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-slate-500">Complexity</div>
                        <div className={`text-lg font-bold ${
                          project.complexity < 3 ? 'text-emerald-600' : 'text-amber-600'
                        }`}>
                          {project.complexity}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-slate-500">Team</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span className="font-medium">{project.team}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4">
            <FolderGit2 className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
          <p className="text-slate-600 max-w-md mx-auto">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setStatus("All");
              setSelectedTeam("All");
            }}
            className="mt-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Quick Actions Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Zap className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Quick Scan</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Run Analysis</span>
          </button>
        </div>
      </div>
    </div>
  );
}