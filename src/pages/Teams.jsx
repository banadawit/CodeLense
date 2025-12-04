import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Download,
  TrendingUp,
  Users,
  UserCog,
  Code2,
  Shield,
  BarChart3,
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Target,
  Sparkles,
  GitBranch,
  Activity,
  ChevronDown,
  Eye,
  MoreVertical,
  Crown,
  Zap,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import teamData from "../data/team.json";
import TeamMemberCard from "../components/TeamMemberCard";

export default function Teams() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("name");
  const [activeTeam, setActiveTeam] = useState("All");
  const [availability, setAvailability] = useState("All");

  // Enhanced team data with additional metrics (memoized to avoid recalculating random values)
  const enhancedMembers = useMemo(() => teamData.members.map(member => ({
    ...member,
    productivity: Math.floor(Math.random() * 30) + 70, // 70-100%
    completedTasks: Math.floor(Math.random() * 50) + 20,
    codeQuality: Math.floor(Math.random() * 30) + 70,
    activeDays: Math.floor(Math.random() * 7) + 1,
    contributionScore: Math.floor(Math.random() * 100),
    expertise: ['React', 'TypeScript', 'Node.js', 'Python', 'Go', 'Rust'].slice(0, Math.floor(Math.random() * 4) + 2)
  })), []);

  // Filter members
  const filteredMembers = enhancedMembers.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(search.toLowerCase()) ||
                         member.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = role === "All" || member.role === role;
    const matchesTeam = activeTeam === "All" || member.team === activeTeam;
    const matchesAvailability = availability === "All" || 
                               (availability === "available" && member.availability === "Available") ||
                               (availability === "busy" && member.availability === "Busy");

    return matchesSearch && matchesRole && matchesTeam && matchesAvailability;
  });

  // Sort members
  const sortedMembers = [...filteredMembers].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "productivity":
        return b.productivity - a.productivity;
      case "experience":
        return b.experience - a.experience;
      case "tasks":
        return b.completedTasks - a.completedTasks;
      case "quality":
        return b.codeQuality - a.codeQuality;
      default:
        return 0;
    }
  });

  // Calculate team statistics
  const stats = {
    total: enhancedMembers.length,
    available: enhancedMembers.filter(m => m.availability === "Available").length,
    senior: enhancedMembers.filter(m => m.role === "Senior Developer").length,
    averageProductivity: Math.round(
      enhancedMembers.reduce((acc, m) => acc + m.productivity, 0) / enhancedMembers.length
    ),
    totalTasks: enhancedMembers.reduce((acc, m) => acc + m.completedTasks, 0),
    averageExperience: Math.round(
      enhancedMembers.reduce((acc, m) => acc + m.experience, 0) / enhancedMembers.length
    ),
  };

  // Get unique roles and teams
  const roles = [...new Set(enhancedMembers.map(m => m.role))];
  const teams = [...new Set(enhancedMembers.map(m => m.team))];

  // Role colors and icons
  const roleConfig = {
    "Senior Developer": {
      color: "bg-purple-100 text-purple-700 border-purple-200",
      icon: <Crown className="w-4 h-4" />
    },
    "Frontend Developer": {
      color: "bg-blue-100 text-blue-700 border-blue-200",
      icon: <Code2 className="w-4 h-4" />
    },
    "Backend Developer": {
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
      icon: <GitBranch className="w-4 h-4" />
    },
    "Full Stack Developer": {
      color: "bg-amber-100 text-amber-700 border-amber-200",
      icon: <UserCog className="w-4 h-4" />
    },
    "DevOps Engineer": {
      color: "bg-red-100 text-red-700 border-red-200",
      icon: <Shield className="w-4 h-4" />
    },
    "QA Engineer": {
      color: "bg-indigo-100 text-indigo-700 border-indigo-200",
      icon: <CheckCircle className="w-4 h-4" />
    },
    "Team Lead": {
      color: "bg-pink-100 text-pink-700 border-pink-200",
      icon: <Target className="w-4 h-4" />
    }
  };

  // Availability colors
  const availabilityColors = {
    "Available": "text-emerald-600 bg-emerald-100 border-emerald-200",
    "Busy": "text-amber-600 bg-amber-100 border-amber-200",
    "On Leave": "text-slate-600 bg-slate-100 border-slate-200"
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Team Dashboard
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Manage and collaborate with your development team
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Export Roster</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Invite Member</span>
          </button>
        </div>
      </div>

      {/* Team Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
          <div className="text-sm text-slate-600">Total Members</div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.available}</div>
          <div className="text-sm text-emerald-700 font-medium">Available</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.senior}</div>
          <div className="text-sm text-purple-700 font-medium">Senior Devs</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.averageProductivity}%</div>
          <div className="text-sm text-blue-700 font-medium">Avg Productivity</div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.totalTasks}</div>
          <div className="text-sm text-amber-700 font-medium">Tasks Completed</div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.averageExperience}y</div>
          <div className="text-sm text-indigo-700 font-medium">Avg Experience</div>
        </div>
      </div>

      {/* Team Performance Overview */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Team Performance</h2>
            <p className="text-slate-300 mt-1">Overall team metrics and productivity</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
              Excellent
            </div>
            <BarChart3 className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-white">87%</div>
            <div className="text-sm text-slate-300">Code Quality</div>
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '87%' }}></div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-white">94%</div>
            <div className="text-sm text-slate-300">On-Time Delivery</div>
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-white">12</div>
            <div className="text-sm text-slate-300">Active Projects</div>
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-sm text-slate-300">Satisfaction</div>
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-pink-500 rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        {[
          { id: "all", label: "All Members", count: stats.total },
          { id: "senior", label: "Senior", count: stats.senior },
          { id: "frontend", label: "Frontend", count: enhancedMembers.filter(m => m.role.includes("Frontend")).length },
          { id: "backend", label: "Backend", count: enhancedMembers.filter(m => m.role.includes("Backend")).length },
          { id: "top", label: "Top Performers", icon: <Star className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              if (tab.id === "frontend") setRole("Frontend Developer");
              else if (tab.id === "backend") setRole("Backend Developer");
              else if (tab.id === "senior") setRole("Senior Developer");
              else setRole("All");
              setActiveTeam("All");
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
              role === (tab.id === "frontend" ? "Frontend Developer" : 
                      tab.id === "backend" ? "Backend Developer" : 
                      tab.id === "senior" ? "Senior Developer" : role) &&
              activeTeam === "All"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            {tab.icon || null}
            <span className="font-medium">{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                role === (tab.id === "frontend" ? "Frontend Developer" : 
                        tab.id === "backend" ? "Backend Developer" : 
                        tab.id === "senior" ? "Senior Developer" : role) &&
                activeTeam === "All"
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
            placeholder="Search team members by name, email, or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Role Filter */}
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="All">All Roles</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <UserCog className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Team Filter */}
          <div className="relative">
            <select
              value={activeTeam}
              onChange={(e) => setActiveTeam(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="All">All Teams</option>
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
            <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Availability Filter */}
          <div className="relative">
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="All">All Status</option>
              <option value="available">Available</option>
              <option value="busy">Busy</option>
              <option value="leave">On Leave</option>
            </select>
            <Activity className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Sort By */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="productivity">Sort by Productivity</option>
              <option value="experience">Sort by Experience</option>
              <option value="tasks">Sort by Tasks</option>
              <option value="quality">Sort by Quality</option>
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

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Showing {sortedMembers.length} of {enhancedMembers.length} team members
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-700 font-medium">Sort by:</span>
          <span className="text-sm text-indigo-600 font-semibold">
            {sortBy === "name" ? "Name" : 
             sortBy === "productivity" ? "Productivity" :
             sortBy === "experience" ? "Experience" :
             sortBy === "tasks" ? "Tasks Completed" : "Code Quality"}
          </span>
        </div>
      </div>

      {/* Team Members Grid/List */}
      {sortedMembers.length > 0 ? (
        viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedMembers.map((member) => (
              <TeamMemberCard 
                key={member.id} 
                member={member}
                roleConfig={roleConfig}
                availabilityColors={availabilityColors}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between">
                  {/* Left: Avatar and Basic Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                        member.availability === "Available" ? "bg-emerald-500" :
                        member.availability === "Busy" ? "bg-amber-500" : "bg-slate-500"
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${
                          roleConfig[member.role]?.color || "bg-slate-100 text-slate-700 border-slate-200"
                        }`}>
                          {roleConfig[member.role]?.icon}
                          {member.role}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                        <span className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {member.email}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {member.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          {member.experience} years
                        </span>
                      </div>
                      
                      {/* Expertise */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Metrics */}
                  <div className="grid grid-cols-4 gap-6 ml-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{member.productivity}%</div>
                      <div className="text-xs text-slate-500">Productivity</div>
                      <div className="mt-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            member.productivity >= 90 ? 'bg-emerald-500' :
                            member.productivity >= 70 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${member.productivity}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{member.completedTasks}</div>
                      <div className="text-xs text-slate-500">Tasks</div>
                      <div className="text-xs text-emerald-600 font-medium">+12%</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{member.codeQuality}%</div>
                      <div className="text-xs text-slate-500">Quality</div>
                      <div className="text-xs text-blue-600 font-medium">Excellent</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{member.contributionScore}</div>
                      <div className="text-xs text-slate-500">Score</div>
                      <Star className="w-4 h-4 text-amber-500 mx-auto mt-1" />
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-start gap-2 ml-6">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg">
                      <MessageSquare size={18} />
                    </button>
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
            <Users className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No team members found</h3>
          <p className="text-slate-600 max-w-md mx-auto">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setRole("All");
              setActiveTeam("All");
              setAvailability("All");
            }}
            className="mt-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Team Management Actions */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Team Management</h3>
            <p className="text-slate-600 mt-1">Invite new members or schedule team meetings</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Calendar className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Schedule Meeting</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Performance Review</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Last sync: Today at 4:30 PM • Next team meeting: Tomorrow 10:00 AM
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {["bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-amber-500"].map((color, idx) => (
                <div 
                  key={idx}
                  className={`w-8 h-8 rounded-full border-2 border-white -ml-2 ${color} flex items-center justify-center text-white text-xs font-bold`}
                  style={{ zIndex: 4 - idx }}
                >
                  {idx === 3 ? "+3" : ""}
                </div>
              ))}
            </div>
            <span className="text-sm text-slate-700">Active now</span>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Generate Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}