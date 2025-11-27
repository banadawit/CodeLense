import { useState } from "react";
import teamData from "../data/team.json";
import TeamMemberCard from "../components/TeamMemberCard";
import TeamFilters from "../components/TeamFilters";

export default function Teams() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  const filteredMembers = teamData.members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = role === "All" || member.role === role;
    return matchesSearch && matchesRole;
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Team Members</h1>

      <TeamFilters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">
          No team members found.
        </p>
      )}
    </div>
  );
}
