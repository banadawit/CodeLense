import { Circle } from "lucide-react";

export default function TeamMemberCard({ member }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">

      <div className="flex items-center gap-4">
        
        <img
          src={member.avatar}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-600 text-sm">{member.role}</p>

          <div className="flex items-center gap-1 mt-1">
            <Circle
              size={10}
              className={
                member.status === "Active" ? "text-green-500" : "text-gray-400"
              }
              fill="currentColor"
            />
            <p
              className={`text-sm ${
                member.status === "Active" ? "text-green-600" : "text-gray-500"
              }`}
            >
              {member.status}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
