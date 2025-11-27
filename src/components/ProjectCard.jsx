import { Link } from "react-router-dom";
import { Users } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition block focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

      <span
        className={`text-sm px-3 py-1 rounded-full ${
          project.status === "Active"
            ? "bg-green-100 text-green-700"
            : project.status === "Completed"
            ? "bg-blue-100 text-blue-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {project.status}
      </span>

      <div className="mt-4">
        <p className="text-gray-600 mb-1">Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-gray-700">
        <Users size={18} />
        <p className="text-sm">
          Team: <span className="font-medium">{project.team.join(", ")}</span>
        </p>
      </div>
    </Link>
  );
}
