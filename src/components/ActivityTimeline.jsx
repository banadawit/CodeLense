import { Clock } from "lucide-react";
import activity from "../data/activity.json";

export default function ActivityTimeline() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

      <div className="space-y-6">
        {activity.activities.map((item) => (
          <div key={item.id} className="flex gap-4 items-start">
            
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <Clock className="text-indigo-600 w-4 h-4" />
            </div>

            <div>
              <p className="text-gray-800 font-medium">{item.text}</p>
              <p className="text-gray-500 text-sm">{item.time}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
