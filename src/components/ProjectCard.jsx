import React from 'react';
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  GitBranch,
  Users,
  Star,
  Eye,
  MoreVertical,
  Code2,
  Shield,
  GitMerge,
  BarChart3,
  Calendar,
  Target
} from 'lucide-react';

const ProjectCard = ({ project, variant = 'default' }) => {
  const statusColors = {
    "Active": "text-emerald-600 bg-emerald-100 border-emerald-200",
    "In Progress": "text-blue-600 bg-blue-100 border-blue-200",
    "On Hold": "text-amber-600 bg-amber-100 border-amber-200",
    "Completed": "text-purple-600 bg-purple-100 border-purple-200",
    "Archived": "text-slate-600 bg-slate-100 border-slate-200"
  };

  const priorityColors = {
    "High": "bg-red-100 text-red-700 border-red-200",
    "Medium": "bg-amber-100 text-amber-700 border-amber-200",
    "Low": "bg-blue-100 text-blue-700 border-blue-200"
  };

  const statusIcons = {
    "Active": <TrendingUp className="w-4 h-4" />,
    "In Progress": <Clock className="w-4 h-4" />,
    "On Hold": <AlertTriangle className="w-4 h-4" />,
    "Completed": <CheckCircle className="w-4 h-4" />,
    "Archived": <Code2 className="w-4 h-4" />
  };

  const getHealthColor = (score) => {
    if (score >= 90) return 'text-emerald-600 bg-emerald-100';
    if (score >= 70) return 'text-amber-600 bg-amber-100';
    return 'text-red-600 bg-red-100';
  };

  if (variant === 'minimal') {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${statusColors[project.status].split(' ')[1]}`}>
              <div className={statusColors[project.status].split(' ')[0]}>
                {statusIcons[project.status]}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{project.name}</h3>
              <p className="text-sm text-slate-500">{project.team}</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <MoreVertical size={18} />
          </button>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">Coverage</span>
          <span className={`font-semibold ${
            project.coverage >= 80 ? 'text-emerald-600' : 'text-amber-600'
          }`}>
            {project.coverage}%
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Card Header */}
      <div className="relative h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      <div className="p-6">
        {/* Title and Actions */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-950">
                {project.name}
              </h3>
              <button className="text-slate-400 hover:text-amber-500 transition-colors">
                <Star className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-600 line-clamp-2">{project.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
              <Eye size={18} />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Status and Priority */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${statusColors[project.status]}`}>
            {statusIcons[project.status]}
            {project.status}
          </span>
          
          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${priorityColors[project.priority]}`}>
            <Target className="w-3 h-3" />
            {project.priority} Priority
          </span>
          
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200">
            <Users className="w-3 h-3" />
            {project.team}
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-emerald-700">Coverage</span>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className={`text-2xl font-bold ${
              project.coverage >= 80 ? 'text-emerald-600' : 'text-amber-600'
            }`}>
              {project.coverage}%
            </div>
            <div className="h-1.5 bg-emerald-100 rounded-full overflow-hidden mt-2">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                style={{ width: `${project.coverage}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-red-700">Bugs</span>
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
            <div className={`text-2xl font-bold ${
              project.bugs < 10 ? 'text-emerald-600' : project.bugs < 20 ? 'text-amber-600' : 'text-red-600'
            }`}>
              {project.bugs}
            </div>
            <div className="text-xs text-red-600 mt-1">
              {project.criticalBugs || 0} critical
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-blue-700">Complexity</span>
              <GitBranch className="w-4 h-4 text-blue-500" />
            </div>
            <div className={`text-2xl font-bold ${
              project.complexity < 3 ? 'text-emerald-600' : project.complexity < 5 ? 'text-amber-600' : 'text-red-600'
            }`}>
              {project.complexity}
            </div>
            <div className="text-xs text-blue-600 mt-1">
              Cyclomatic avg
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-purple-700">Health</span>
              <TrendingUp className="w-4 h-4 text-purple-500" />
            </div>
            <div className={`text-2xl font-bold ${
              project.healthScore >= 90 ? 'text-emerald-600' : project.healthScore >= 70 ? 'text-amber-600' : 'text-red-600'
            }`}>
              {project.healthScore}%
            </div>
            <div className="text-xs text-purple-600 mt-1">
              Quality score
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">
                Updated {new Date(project.lastUpdated).toLocaleDateString()}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <GitMerge className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">
                {project.commits || '1.2k'} commits
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600">
              {project.vulnerabilities || 0} vulnerabilities
            </span>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
            <Eye className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;