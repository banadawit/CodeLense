import { useEffect, useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Shield, 
  Code2,
  GitMerge,
  CheckCircle,
  BarChart3,
  Sparkles,
  Activity,
  Clock,
  Download,
  Filter,
  RefreshCw,
  Eye,
  AlertCircle
} from "lucide-react";
import MetricCard from "../components/MetricCard";
import TasksBarChart from "../components/charts/TasksBarChart";
import BugsLineChart from "../components/charts/BugsLineChart";
import ActivityTimeline from "../components/ActivityTimeline";
import IssuesTable from "../components/IssuesTable";
import RecentProjects from "../components/RecentProjects";
import SeverityDistribution from "../components/charts/SeverityDistribution";

function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("7d");

  // Load mock JSON
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      fetch("/metrics.json")
        .then((res) => res.json())
        .then((data) => {
          setMetrics(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 800);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <span className="text-lg font-semibold text-slate-700">
              Loading dashboard...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-slate-700">Failed to load data</h3>
        <p className="text-slate-500">Please check your connection and try again.</p>
      </div>
    );
  }

  const metricCards = [
    {
      title: "Bugs",
      value: metrics.bugs,
      change: -12,
      icon: <AlertTriangle className="w-5 h-5" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      description: "Active issues"
    },
    {
      title: "Vulnerabilities",
      value: metrics.vulnerabilities,
      change: -5,
      icon: <Shield className="w-5 h-5" />,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10",
      description: "Security risks"
    },
    {
      title: "Code Smells",
      value: metrics.codeSmells,
      change: +8,
      icon: <Code2 className="w-5 h-5" />,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
      description: "Maintainability"
    },
    {
      title: "Test Coverage",
      value: `${metrics.coverage}%`,
      change: +3,
      icon: <CheckCircle className="w-5 h-5" />,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
      description: "Quality score"
    },
    {
      title: "Complexity",
      value: metrics.complexity,
      change: -2,
      icon: <GitMerge className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      description: "Average per method"
    },
    {
      title: "Duplications",
      value: `${metrics.duplications}%`,
      change: -15,
      icon: <BarChart3 className="w-5 h-5" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/10",
      description: "Code clones"
    }
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 bg-gradient-to-br from-slate-50 to-slate-100/50 min-h-screen">
      {/* HEADER SECTION */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Code Quality Dashboard
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Activity className="w-4 h-4 text-indigo-400" />
                Real-time static analysis metrics and insights
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-2 shadow-sm">
            <Clock className="w-4 h-4 text-slate-400" />
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none"
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last quarter</option>
            </select>
          </div>
          
          <button 
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
          >
            <RefreshCw className={`w-4 h-4 text-slate-600 ${loading ? 'animate-spin' : ''}`} />
            <span className="text-sm font-medium text-slate-700">Refresh</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export Report</span>
          </button>
        </div>
      </header>

      {/* KPI CARDS GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {metricCards.map((card, index) => (
          <div 
            key={index}
            className="group bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${card.bgColor}`}>
                <div className={`text-white bg-gradient-to-br ${card.color} p-1.5 rounded-md`}>
                  {card.icon}
                </div>
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                card.change >= 0 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {card.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {Math.abs(card.change)}%
              </div>
            </div>
            
            <div className="mb-1">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <h3 className="text-2xl font-bold text-slate-900">{card.value}</h3>
            </div>
            
            <p className="text-xs text-slate-400">{card.description}</p>
            
            {/* Progress bar */}
            <div className="mt-3">
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${card.color}`}
                  style={{ width: `${Math.min(100, (card.value / 100) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* MAIN CHARTS SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bugs Trend Chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Bug Trends Over Time
              </h3>
              <p className="text-sm text-slate-500">Track bug discovery and resolution rates</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
              <Eye className="w-4 h-4" />
              View Details
            </button>
          </div>
          <div className="h-64">
            <BugsLineChart data={metrics.bugStats} />
          </div>
        </div>

        {/* Task Distribution */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <GitMerge className="w-5 h-5 text-blue-500" />
                Task Distribution
              </h3>
              <p className="text-sm text-slate-500">Development tasks by type and priority</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                <Filter className="w-4 h-4 text-slate-600" />
              </button>
              <select className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
              </select>
            </div>
          </div>
          <div className="h-64">
            <TasksBarChart data={metrics.taskStats} />
          </div>
        </div>
      </section>

      {/* LOWER SECTION - 3 COLUMNS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Timeline */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-500" />
                Recent Activity
              </h3>
              <p className="text-sm text-slate-500">Latest code analysis events and updates</p>
            </div>
            <span className="text-xs font-medium px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
              24 events
            </span>
          </div>
          <div className="max-h-96 overflow-y-auto custom-scrollbar">
            <ActivityTimeline />
          </div>
        </div>

        {/* Severity Distribution */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              Severity Distribution
            </h3>
            <p className="text-sm text-slate-300">Issue breakdown by criticality</p>
          </div>
          <div className="h-64">
            <SeverityDistribution data={metrics.severityStats} />
          </div>
          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{metrics.criticalIssues || 3}</div>
                <div className="text-xs text-slate-400">Critical</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{metrics.highIssues || 12}</div>
                <div className="text-xs text-slate-400">High Priority</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA TABLES SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Issues Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Recent Issues</h3>
                <p className="text-sm text-slate-500">Requires immediate attention</p>
              </div>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                View All →
              </button>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            <IssuesTable />
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Project Health</h3>
                <p className="text-sm text-slate-500">Code quality across projects</p>
              </div>
              <span className="text-xs font-medium px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                All Systems Go
              </span>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            <RecentProjects />
          </div>
        </div>
      </section>

      {/* FOOTER SUMMARY */}
      <footer className="pt-6 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Systems Operational
            </span>
            <span>Last scan: Today, 2:30 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{metrics.projects || 12} Projects</span>
            <span>{metrics.developers || 45} Developers</span>
            <span className="text-emerald-600 font-medium">
              {metrics.coverage}% Overall Coverage
            </span>
          </div>
        </div>
      </footer>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(99, 102, 241, 0.3) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(99, 102, 241, 0.3);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </div>
  );
}

export default Dashboard;