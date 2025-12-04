import { NavLink } from "react-router-dom";
import { 
  X, 
  LayoutDashboard, 
  FolderGit2, 
  Users, 
  UserCog, 
  Settings,
  CheckSquare,
  KanbanSquare,
  Sparkles,
  BarChart3,
  Code2,
  Shield,
  GitBranch,
  Activity,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function Sidebar({ isMobileOpen, onClose }) {
  const [expandedSection, setExpandedSection] = useState("analysis");

  const navigationSections = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      items: [
        { to: "/", label: "Overview", icon: <BarChart3 size={16} />, badge: null },
        { to: "/metrics", label: "Metrics", icon: <Activity size={16} />, badge: "New" },
        { to: "/trends", label: "Trends", icon: <Sparkles size={16} />, badge: null },
      ]
    },
    {
      id: "analysis",
      title: "Code Analysis",
      icon: <Code2 size={20} />,
      items: [
        { to: "/projects", label: "Projects", icon: <FolderGit2 size={16} />, badge: "12" },
        { to: "/teams", label: "Teams", icon: <Users size={16} />, badge: "4" },
        { to: "/developers", label: "Developers", icon: <UserCog size={16} />, badge: null },
        { to: "/complexity", label: "Complexity", icon: <GitBranch size={16} />, badge: null },
        { to: "/security", label: "Security Scan", icon: <Shield size={16} />, badge: "3" },
      ]
    },
    {
      id: "workflow",
      title: "Workflow",
      icon: <CheckSquare size={20} />,
      items: [
        { to: "/tasks", label: "Tasks", icon: <CheckSquare size={16} />, badge: "5" },
        { to: "/kanban", label: "Kanban", icon: <KanbanSquare size={16} />, badge: null },
        { to: "/backlog", label: "Backlog", icon: <FolderGit2 size={16} />, badge: null },
      ]
    },
    {
      id: "settings",
      title: "Settings",
      icon: <Settings size={20} />,
      items: [
        { to: "/settings", label: "General", icon: <Settings size={16} />, badge: null }
      ]
    }
  ];
  

  const handleNavClick = () => {
    if (onClose) onClose();
  };

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const renderSection = (section) => (
    <div key={section.id} className="mb-2">
      <button
        onClick={() => toggleSection(section.id)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-slate-400 hover:text-white group transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="group-hover:text-indigo-400 transition-colors">
            {section.icon}
          </span>
          <span className="font-medium text-sm tracking-wide">
            {section.title}
          </span>
        </div>
        <ChevronRight 
          size={16} 
          className={`transition-transform duration-300 ${expandedSection === section.id ? 'rotate-90' : ''}`}
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        expandedSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="ml-10 space-y-1 border-l border-slate-800 pl-4">
          {section.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/10 text-white border-l-2 border-indigo-500' 
                  : 'text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-l-2 hover:border-slate-700'
                }`
              }
              onClick={handleNavClick}
            >
              <div className="flex items-center gap-3">
                <span className={`transition-colors ${item.to === "/" ? 'text-indigo-400' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.badge === "New" 
                    ? 'bg-emerald-500/20 text-emerald-300' 
                    : item.badge === "3" || item.badge === "5"
                    ? 'bg-red-500/20 text-red-300'
                    : 'bg-indigo-500/20 text-indigo-300'
                }`}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 border-r border-slate-800/50 flex-col shadow-2xl shadow-black/30">
        {/* Logo Header */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800/50 bg-gradient-to-r from-slate-900 to-slate-950">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur opacity-70"></div>
              <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
                <Sparkles size={24} className="text-indigo-300" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                CodeLense
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">Static Analysis Dashboard</p>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="px-6 py-5 border-b border-slate-800/50 bg-gradient-to-r from-slate-900/50 to-transparent">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">John Developer</h3>
              <p className="text-xs text-slate-400">Senior Engineer</p>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1 custom-scrollbar">
          {navigationSections.map(renderSection)}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800/50">
          <div className="px-3 py-3 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-900/30 border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                <Sparkles size={14} className="text-indigo-300" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-white">Pro Features</p>
                <p className="text-xs text-slate-400">Upgrade for AI insights</p>
              </div>
              <button className="px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={onClose}
        />

        {/* Mobile Sidebar */}
        <aside
          className={`absolute inset-y-0 left-0 w-80 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 border-r border-slate-800 flex flex-col transform transition-all duration-300 ease-out ${
            isMobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  CodeLense
                </h1>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200"
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto px-4 py-6 custom-scrollbar">
            {navigationSections.map(renderSection)}
          </div>

          {/* Mobile Footer */}
          <div className="p-4 border-t border-slate-800">
            <div className="text-center">
              <p className="text-sm text-slate-400">v2.1.0 • Latest Scan: Today</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(99, 102, 241, 0.3) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(99, 102, 241, 0.3);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </>
  );
}