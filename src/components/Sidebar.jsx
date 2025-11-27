import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

export default function Sidebar({ isMobileOpen, onClose }) {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/projects", label: "Projects" },
    { to: "/teams", label: "Teams" },
    { to: "/developers", label: "Developers" },
    { to: "/settings", label: "Settings" },
    { to: "/tasks", label: "Tasks" },
    { to: "/kanban", label: "Kanban" },
  ];

  const handleNavClick = () => {
    if (onClose) onClose();
  };

  const renderNavigation = () => (
    <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2 text-sm">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `w-full block px-3 py-2 rounded-lg transition-all duration-200
             ${
               isActive
                 ? "bg-slate-800 text-white font-medium"
                 : "text-slate-300 hover:bg-slate-800 hover:text-white"
             }`
          }
          onClick={handleNavClick}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 bg-slate-900 text-slate-100 border-r border-slate-800 flex-col">
        <div className="h-16 flex items-center px-4 border-b border-slate-800">
          <span className="text-xl font-bold tracking-tight">CodeLense</span>
        </div>
        {renderNavigation()}
      </aside>

      <div
        className={`md:hidden fixed inset-0 z-40 transition duration-200 ${
          isMobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isMobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={onClose}
        />

        <aside
          className={`absolute inset-y-0 left-0 w-64 bg-slate-900 text-slate-100 border-r border-slate-800 flex flex-col transform transition-transform duration-200 ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
            <span className="text-xl font-bold tracking-tight">CodeLense</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close navigation menu"
            >
              <X size={18} />
            </button>
          </div>
          {renderNavigation()}
        </aside>
      </div>
    </>
  );
}
