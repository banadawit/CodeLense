import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function SeverityDistribution({ data }) {
  // Default data if not provided
  const chartData = data || [
    { name: "Critical", value: 3, color: "#ef4444" },
    { name: "High", value: 12, color: "#f97316" },
    { name: "Medium", value: 25, color: "#eab308" },
    { name: "Low", value: 40, color: "#3b82f6" }
  ];

  const COLORS = chartData.map(item => item.color || "#3b82f6");

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null; // Don't show label for very small slices

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-xs font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "8px 12px"
          }}
          formatter={(value, name) => [value, name]}
        />
        <Legend
          wrapperStyle={{ fontSize: "12px" }}
          iconType="circle"
          formatter={(value) => (
            <span className="text-slate-300 text-xs">{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

