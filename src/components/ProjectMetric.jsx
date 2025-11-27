export default function ProjectMetric({ label, value }) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow w-full">
        <p className="text-gray-500 text-sm">{label}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
    );
  }
  