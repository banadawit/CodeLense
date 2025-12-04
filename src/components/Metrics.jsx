import React, { useState } from 'react';
import { 
  Filter, 
  Download, 
  Grid, 
  List, 
  TrendingUp,
  BarChart3,
  PieChart,
  RefreshCw,
  Eye,
  EyeOff,
  Settings,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  GitBranch
} from 'lucide-react';
import MetricCard from './MetricCard';

// Mock metrics data
const mockMetrics = {
  overview: [
    { id: 1, title: 'Code Quality Score', value: 'A+', change: 2, color: 'emerald', icon: <CheckCircle />, target: 'A' },
    { id: 2, title: 'Technical Debt', value: '18h', change: -25, color: 'amber', icon: <Clock />, target: '≤24h' },
    { id: 3, title: 'Team Velocity', value: '42', change: 8, color: 'blue', icon: <TrendingUp />, target: '40+' },
    { id: 4, title: 'Active Contributors', value: '12', change: 1, color: 'purple', icon: <Users />, target: '10+' },
  ],
  codeAnalysis: [
    { id: 5, title: 'Test Coverage', value: '87%', change: 3, color: 'emerald', icon: <CheckCircle />, target: '≥80%' },
    { id: 6, title: 'Code Duplication', value: '12%', change: -15, color: 'indigo', icon: <GitBranch />, target: '≤15%' },
    { id: 7, title: 'Cyclomatic Complexity', value: '2.4', change: -2, color: 'blue', icon: <BarChart3 />, target: '≤3.0' },
    { id: 8, title: 'Cognitive Complexity', value: '18.2', change: 5, color: 'amber', icon: <PieChart />, target: '≤20' },
  ],
  issues: [
    { id: 9, title: 'Total Issues', value: '1,234', change: -8, color: 'slate', icon: <AlertTriangle />, target: '↓10%' },
    { id: 10, title: 'Critical Bugs', value: '42', change: -12, color: 'red', icon: <XCircle />, target: '≤50' },
    { id: 11, title: 'Code Smells', value: '156', change: 8, color: 'amber', icon: <AlertTriangle />, target: '↓5%' },
    { id: 12, title: 'Vulnerabilities', value: '3', change: -5, color: 'purple', icon: <AlertTriangle />, target: '≤5' },
  ],
  performance: [
    { id: 13, title: 'Build Success Rate', value: '94%', change: 1, color: 'emerald', icon: <CheckCircle />, target: '≥90%' },
    { id: 14, title: 'Avg Build Time', value: '4.2m', change: -15, color: 'blue', icon: <Clock />, target: '≤5m' },
    { id: 15, title: 'Test Execution', value: '1.8s', change: -8, color: 'indigo', icon: <Clock />, target: '≤2s' },
    { id: 16, title: 'API Response', value: '2.3s', change: -12, color: 'purple', icon: <Clock />, target: '≤3s' },
  ]
};

const Metrics = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [hiddenMetrics, setHiddenMetrics] = useState([]);
  const [timeRange, setTimeRange] = useState('30d');
  const [sortBy, setSortBy] = useState('value');

  const toggleMetricVisibility = (id) => {
    setHiddenMetrics(prev => 
      prev.includes(id) 
        ? prev.filter(metricId => metricId !== id)
        : [...prev, id]
    );
  };

  const filteredMetrics = {
    overview: mockMetrics.overview.filter(m => !hiddenMetrics.includes(m.id)),
    codeAnalysis: mockMetrics.codeAnalysis.filter(m => !hiddenMetrics.includes(m.id)),
    issues: mockMetrics.issues.filter(m => !hiddenMetrics.includes(m.id)),
    performance: mockMetrics.performance.filter(m => !hiddenMetrics.includes(m.id)),
  };

  const totalMetrics = Object.values(filteredMetrics).flat().length;

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Metrics Dashboard</h1>
          <p className="text-slate-600 mt-2">
            Track and analyze all code quality metrics in one place
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
            <Filter size={16} className="text-slate-400" />
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none"
            >
              <option value="24h">Last 24h</option>
              <option value="7d">Last 7d</option>
              <option value="30d">Last 30d</option>
              <option value="90d">Last 90d</option>
            </select>
          </div>
          
          <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600'}`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600'}`}
            >
              <List size={18} />
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <Download size={16} />
            <span className="text-sm font-medium">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4">
          <div className="text-2xl font-bold text-slate-900">{totalMetrics}</div>
          <div className="text-sm text-slate-600">Total Metrics</div>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4">
          <div className="text-2xl font-bold text-slate-900">23</div>
          <div className="text-sm text-slate-600">Within Target</div>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4">
          <div className="text-2xl font-bold text-slate-900">5</div>
          <div className="text-sm text-slate-600">Needs Attention</div>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-100 rounded-xl p-4">
          <div className="text-2xl font-bold text-slate-900">87%</div>
          <div className="text-sm text-slate-600">Overall Health</div>
        </div>
      </div>

      {/* Metrics Grid */}
      {viewMode === 'grid' ? (
        <>
          {/* Overview Metrics */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <TrendingUp className="text-indigo-500" />
                Overview Metrics
              </h2>
              <span className="text-sm text-slate-500">{filteredMetrics.overview.length} metrics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredMetrics.overview.map(metric => (
                <MetricCard
                  key={metric.id}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  color={metric.color}
                  icon={metric.icon}
                  variant="elevated"
                  subtitle={`Target: ${metric.target}`}
                  onClick={() => console.log(`Clicked ${metric.title}`)}
                />
              ))}
            </div>
          </section>

          {/* Code Analysis Metrics */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <BarChart3 className="text-blue-500" />
                Code Analysis
              </h2>
              <span className="text-sm text-slate-500">{filteredMetrics.codeAnalysis.length} metrics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredMetrics.codeAnalysis.map(metric => (
                <MetricCard
                  key={metric.id}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  color={metric.color}
                  icon={metric.icon}
                  variant="gradient"
                  subtitle={`Target: ${metric.target}`}
                />
              ))}
            </div>
          </section>

          {/* Issues Metrics */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="text-amber-500" />
                Issues & Quality
              </h2>
              <span className="text-sm text-slate-500">{filteredMetrics.issues.length} metrics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredMetrics.issues.map(metric => (
                <MetricCard
                  key={metric.id}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  color={metric.color}
                  icon={metric.icon}
                  subtitle={`Target: ${metric.target}`}
                  trendData={[65, 59, 80, 81, 56, 55, 40]}
                />
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Clock className="text-purple-500" />
                Performance
              </h2>
              <span className="text-sm text-slate-500">{filteredMetrics.performance.length} metrics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredMetrics.performance.map(metric => (
                <MetricCard
                  key={metric.id}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  color={metric.color}
                  icon={metric.icon}
                  variant="elevated"
                  subtitle={`Target: ${metric.target}`}
                />
              ))}
            </div>
          </section>
        </>
      ) : (
        /* List View */
        <div className="space-y-4">
          {Object.entries(filteredMetrics).map(([category, metrics]) => (
            <div key={category} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {metrics.map(metric => (
                  <div key={metric.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleMetricVisibility(metric.id)}
                        className="text-slate-400 hover:text-slate-600"
                      >
                        {hiddenMetrics.includes(metric.id) ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                      <div className={`p-2 rounded-lg ${metric.color} bg-${metric.color}-50`}>
                        <div className={`text-${metric.color}-600`}>
                          {metric.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{metric.title}</div>
                        <div className="text-sm text-slate-500">Target: {metric.target}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                        <div className={`text-sm font-medium ${
                          metric.change > 0 ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {metric.change > 0 ? '+' : ''}{metric.change}%
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">
                        <Settings size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hidden Metrics Panel */}
      {hiddenMetrics.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <EyeOff className="text-amber-600" />
              <div>
                <h3 className="font-medium text-slate-900">{hiddenMetrics.length} metrics are hidden</h3>
                <p className="text-sm text-slate-600">They won't appear in your dashboard views</p>
              </div>
            </div>
            <button
              onClick={() => setHiddenMetrics([])}
              className="text-sm font-medium text-amber-700 hover:text-amber-800"
            >
              Show All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Metrics;