import { Clock } from "lucide-react";

export default function ProjectActivity({ activity }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Activity</h2>

      <div className="space-y-4">
        {activity.length > 0 ? (
          activity.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Clock className="mt-1 text-gray-400" size={18} />
              <div>
                <p className="text-gray-700">{item.text}</p>
                <p className="text-gray-400 text-sm">{item.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No activity yet.</p>
        )}
      </div>
    </div>
  );
}
