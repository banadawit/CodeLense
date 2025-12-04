import { CheckCircle, AlertTriangle, TrendingUp, Code2 } from "lucide-react";
import projectsData from "../data/projects.json";

export default function RecentProjects() {
  const projects = projectsData.projects.slice(0, 4); // Get first 4 projects

  const getHealthStatus = (project) => {
    const { bugs, coverage } = project.metrics;
    if (bugs === 0 && coverage >= 80) {
      return { color: "text-emerald-600", bg: "bg-emerald-100", icon: <CheckCircle className="w-4 h-4" />, text: "Excellent" };
    } else if (bugs <= 3 && coverage >= 60) {
      return { color: "text-blue-600", bg: "bg-blue-100", icon: <TrendingUp className="w-4 h-4" />, text: "Good" };
    } else if (bugs <= 5) {
      return { color: "text-yellow-600", bg: "bg-yellow-100", icon: <AlertTriangle className="w-4 h-4" />, text: "Fair" };
    } else {
      return { color: "text-red-600", bg: "bg-red-100", icon: <AlertTriangle className="w-4 h-4" />, text: "Needs Attention" };
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-4">
      {projects.map((project) => {
        const health = getHealthStatus(project);
        return (
          <div
            key={project.id}
            className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">{project.name}</h4>
                <p className="text-xs text-slate-500 line-clamp-1">{project.description}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-md ${health.bg}`}>
                  <div className={health.color}>{health.icon}</div>
                </div>
                <span className={`text-xs font-medium ${health.color}`}>{health.text}</span>
              </div>
              <div className="text-xs text-slate-500">
                {project.metrics.coverage}% coverage
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-slate-500 mb-1">Bugs</div>
                <div className="font-semibold text-slate-900 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-red-500" />
                  {project.metrics.bugs}
                </div>
              </div>
              <div>
                <div className="text-slate-500 mb-1">Tasks</div>
                <div className="font-semibold text-slate-900 flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-blue-500" />
                  {project.metrics.completed}/{project.metrics.tasks}
                </div>
              </div>
              <div>
                <div className="text-slate-500 mb-1">Progress</div>
                <div className="font-semibold text-slate-900">{project.progress}%</div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

