import teamData from "../data/team.json";

export default function getTeamMembers(ids) {
  return teamData.members.filter((m) => ids.includes(m.id));
}
