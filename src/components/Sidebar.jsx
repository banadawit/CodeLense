import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/projects", label: "Projects" },
    { to: "/teams", label: "Teams" },
    { to: "/developers", label: "Developers" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 border-r border-slate-800 hidden md:flex flex-col">
      
      {/* LOGO */}
      <div className="h-16 flex items-center px-4 border-b border-slate-800">
        <span className="text-xl font-bold tracking-tight">
          CodeLense
        </span>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 py-4 space-y-2 text-sm">
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
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
