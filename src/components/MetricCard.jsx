function MetricCard({ title, value, color }) {
    return (
      <div className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3
          className={`text-3xl font-bold mt-2 ${color}`}
        >
          {value}
        </h3>
      </div>
    );
  }
  
  export default MetricCard;
  