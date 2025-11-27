export default function TeamGroup({ members }) {
    return (
      <div className="flex -space-x-3">
        {members.map((m) => (
          <img
            key={m.id}
            src={m.avatar}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        ))}
      </div>
    );
  }
  