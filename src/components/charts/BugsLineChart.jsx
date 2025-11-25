import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BugsLineChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Bugs Reported</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="bugs"
            stroke="#e11d48"
            strokeWidth={3}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
