import { useParams } from "react-router-dom";
import projectData from "../data/projects.json";
import getTeamMembers from "../utils/getTeamMembers";
import ProjectMetric from "../components/ProjectMetric";
import ProjectActivity from "../components/ProjectActivity";
import TeamGroup from "../components/TeamGroup";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.projects.find((p) => p.id === Number(id));

  if (!project) return <h2 className="text-2xl">Project not found</h2>;

  const teamMembers = getTeamMembers(project.team);

  return (
    <div>
      {/* TITLE + STATUS */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{project.name}</h1>

        <span
          className={`text-sm px-4 py-2 rounded-full ${
            project.status === "Active"
              ? "bg-green-100 text-green-700"
              : project.status === "Completed"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mb-6">{project.description}</p>

      {/* PROGRESS BAR */}
      <div className="mb-6">
        <p className="text-gray-600">Progress</p>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <ProjectMetric label="Total Tasks" value={project.metrics.tasks} />
        <ProjectMetric label="Completed" value={project.metrics.completed} />
        <ProjectMetric label="Bugs" value={project.metrics.bugs} />
        <ProjectMetric label="Coverage" value={`${project.metrics.coverage}%`} />
      </div>

      {/* TEAM */}
      <div className="bg-white p-5 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-3">Team Members</h2>
        <TeamGroup members={teamMembers} />
      </div>

      {/* ACTIVITY */}
      <ProjectActivity activity={project.activity} />
    </div>
  );
}
