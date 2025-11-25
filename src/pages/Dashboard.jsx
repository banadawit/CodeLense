import { useEffect, useState } from "react";
import MetricCard from "../components/MetricCard";
import TasksBarChart from "../components/charts/TasksBarChart";
import BugsLineChart from "../components/charts/BugsLineChart";
import ActivityTimeline from "../components/ActivityTimeline";


function Dashboard() {
  const [metrics, setMetrics] = useState(null);

  // Load mock JSON
  useEffect(() => {
    fetch("/metrics.json")
      .then((res) => res.json())
      .then((data) => setMetrics(data));
  }, []);

  if (!metrics) {
    return <div className="p-4">Loading metrics...</div>;
  }

  return (
    <div className="p-4 space-y-6">
      {/* HEADER */}
      <section>
        <h2 className="text-lg font-semibold text-slate-800">
          Code Quality Overview
        </h2>
        <p className="text-sm text-slate-500">
          Summary of static analysis metrics from mock data.
        </p>
      </section>

      {/* KPI CARDS */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <MetricCard title="Bugs" value={metrics.bugs} color="text-red-600" />
        <MetricCard
          title="Vulnerabilities"
          value={metrics.vulnerabilities}
          color="text-orange-600"
        />
        <MetricCard
          title="Code Smells"
          value={metrics.codeSmells}
          color="text-yellow-600"
        />
        <MetricCard
          title="Test Coverage (%)"
          value={metrics.coverage + "%"}
          color="text-green-600"
        />
        <MetricCard
          title="Complexity"
          value={metrics.complexity}
          color="text-blue-600"
        />
        <MetricCard
          title="Duplications (%)"
          value={metrics.duplications + "%"}
          color="text-purple-600"
        />
      </section>

      {/* NEW: REAL CHARTS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TasksBarChart data={metrics.taskStats} />
        <BugsLineChart data={metrics.bugStats} />
      </section>

       {/* Activity Section */}
       <div className="lg:col-span-1">
        <ActivityTimeline />
      </div>

      {/* TABLE PLACEHOLDER */}
      <section>
        <div className="rounded-xl border border-slate-200 bg-white h-72" />
      </section>
    </div>
  );
}

export default Dashboard;
