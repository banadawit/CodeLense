import { useState } from "react";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredProjects = projectsData.projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All" || project.status === status;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>

      <ProjectFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">
          No projects match your filters.
        </p>
      )}
    </div>
  );
}
