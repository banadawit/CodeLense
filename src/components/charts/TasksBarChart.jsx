import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function TasksBarChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Tasks Completed</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" fill="#4f46e5" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
