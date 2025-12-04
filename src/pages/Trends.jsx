import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  AlertCircle,
  ChevronDown,
  Eye,
  EyeOff,
  Grid,
  List,
  Maximize2,
  Minimize2,
  Sparkles,
  Zap,
  Clock,
  Target,
  GitBranch,
  Code2,
  Shield,
  CheckCircle
} from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

const Trends = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [viewMode, setViewMode] = useState('charts');
  const [activeMetric, setActiveMetric] = useState('all');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState('all');
  const [hiddenCharts, setHiddenCharts] = useState([]);

  // Mock data for trends
  const mockTrendData = {
    bugTrends: [
      { date: 'Jan 1', bugs: 42, resolved: 12, critical: 3 },
      { date: 'Jan 8', bugs: 38, resolved: 18, critical: 2 },
      { date: 'Jan 15', bugs: 45, resolved: 15, critical: 4 },
      { date: 'Jan 22', bugs: 32, resolved: 22, critical: 1 },
      { date: 'Jan 29', bugs: 28, resolved: 25, critical: 0 },
      { date: 'Feb 5', bugs: 24, resolved: 28, critical: 0 },
    ],
    coverageTrends: [
      { date: 'Jan 1', coverage: 78, target: 80 },
      { date: 'Jan 8', coverage: 79, target: 80 },
      { date: 'Jan 15', coverage: 81, target: 80 },
      { date: 'Jan 22', coverage: 83, target: 80 },
      { date: 'Jan 29', coverage: 85, target: 80 },
      { date: 'Feb 5', coverage: 87, target: 80 },
    ],
    complexityTrends: [
      { date: 'Jan 1', complexity: 3.2, teamAverage: 2.8 },
      { date: 'Jan 8', complexity: 3.1, teamAverage: 2.8 },
      { date: 'Jan 15', complexity: 2.9, teamAverage: 2.7 },
      { date: 'Jan 22', complexity: 2.7, teamAverage: 2.6 },
      { date: 'Jan 29', complexity: 2.5, teamAverage: 2.5 },
      { date: 'Feb 5', complexity: 2.4, teamAverage: 2.4 },
    ],
    performanceData: [
      { metric: 'Build Success', current: 94, previous: 92, change: 2 },
      { metric: 'Test Speed', current: 1.8, previous: 2.1, change: -14 },
      { metric: 'Response Time', current: 2.3, previous: 2.8, change: -18 },
      { metric: 'Uptime', current: 99.8, previous: 99.5, change: 0.3 },
      { metric: 'Error Rate', current: 0.2, previous: 0.5, change: -60 },
    ],
    radarData: [
      { subject: 'Coverage', A: 87, fullMark: 100 },
      { subject: 'Complexity', A: 75, fullMark: 100 },
      { subject: 'Duplication', A: 88, fullMark: 100 },
      { subject: 'Security', A: 92, fullMark: 100 },
      { subject: 'Maintain', A: 79, fullMark: 100 },
      { subject: 'Reliability', A: 85, fullMark: 100 },
    ],
    heatmapData: [
      { day: 'Mon', week1: 12, week2: 8, week3: 15, week4: 10 },
      { day: 'Tue', week1: 8, week2: 10, week3: 12, week4: 9 },
      { day: 'Wed', week1: 15, week2: 12, week3: 8, week4: 11 },
      { day: 'Thu', week1: 10, week2: 15, week3: 10, week4: 14 },
      { day: 'Fri', week1: 5, week2: 8, week3: 12, week4: 7 },
      { day: 'Sat', week1: 2, week2: 3, week3: 5, week4: 4 },
      { day: 'Sun', week1: 1, week2: 2, week3: 3, week4: 2 },
    ],
  };

  const metrics = [
    { id: 'bugs', label: 'Bugs', icon: <AlertCircle size={16} />, color: '#ef4444' },
    { id: 'coverage', label: 'Coverage', icon: <CheckCircle size={16} />, color: '#10b981' },
    { id: 'complexity', label: 'Complexity', icon: <GitBranch size={16} />, color: '#3b82f6' },
    { id: 'security', label: 'Security', icon: <Shield size={16} />, color: '#8b5cf6' },
    { id: 'performance', label: 'Performance', icon: <Zap size={16} />, color: '#f59e0b' },
    { id: 'maintain', label: 'Maintainability', icon: <Code2 size={16} />, color: '#ec4899' },
  ];

  const projects = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Application' },
    { id: 'mobile-app', label: 'Mobile App' },
    { id: 'api-service', label: 'API Service' },
    { id: 'dashboard', label: 'Admin Dashboard' },
  ];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const toggleChartVisibility = (chartId) => {
    setHiddenCharts(prev =>
      prev.includes(chartId)
        ? prev.filter(id => id !== chartId)
        : [...prev, chartId]
    );
  };

  const getColorForValue = (value) => {
    if (value > 15) return '#ef4444';
    if (value > 10) return '#f59e0b';
    if (value > 5) return '#3b82f6';
    return '#10b981';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-xl border border-slate-200">
          <p className="font-semibold text-slate-900">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`p-4 md:p-6 lg:p-8 space-y-8 ${isFullscreen ? 'fixed inset-0 bg-white z-50 overflow-auto' : ''}`}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Trends & Analytics
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Activity className="w-4 h-4 text-indigo-400" />
                Track code quality metrics over time
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last quarter</option>
              <option value="1y">Last year</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none"
            >
              {projects.map(project => (
                <option key={project.id} value={project.id}>{project.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          <button
            onClick={handleRefresh}
            className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 text-slate-600 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Metric Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {metrics.map(metric => (
            <button
              key={metric.id}
              onClick={() => setActiveMetric(metric.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                activeMetric === metric.id || activeMetric === 'all'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 text-indigo-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
              style={activeMetric === metric.id ? { borderLeftColor: metric.color, borderLeftWidth: '3px' } : {}}
            >
              <span style={{ color: metric.color }}>{metric.icon}</span>
              <span className="text-sm font-medium">{metric.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('charts')}
            className={`p-2 rounded-lg ${viewMode === 'charts' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Grid size={18} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-900">↓12%</div>
              <div className="text-sm text-slate-600">Bug Reduction</div>
            </div>
            <TrendingDown className="w-8 h-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-900">↑3%</div>
              <div className="text-sm text-slate-600">Coverage Gain</div>
            </div>
            <TrendingUp className="w-8 h-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-900">↓15%</div>
              <div className="text-sm text-slate-600">Complexity Drop</div>
            </div>
            <TrendingDown className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-900">↑18%</div>
              <div className="text-sm text-slate-600">Velocity Increase</div>
            </div>
            <Zap className="w-8 h-8 text-amber-500" />
          </div>
        </div>
      </div>

      {/* Main Charts Grid */}
      {viewMode === 'charts' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bug Trends Line Chart */}
          {!hiddenCharts.includes('bugs') && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-100">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Bug Trends</h3>
                    <p className="text-sm text-slate-500">Open vs Resolved bugs over time</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleChartVisibility('bugs')}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <EyeOff size={18} />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockTrendData.bugTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bugs"
                      stroke="#ef4444"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Open Bugs"
                    />
                    <Line
                      type="monotone"
                      dataKey="resolved"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      name="Resolved"
                    />
                    <Line
                      type="monotone"
                      dataKey="critical"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Critical"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Coverage Area Chart */}
          {!hiddenCharts.includes('coverage') && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Coverage Progress</h3>
                    <p className="text-sm text-slate-500">Test coverage vs target</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleChartVisibility('coverage')}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <EyeOff size={18} />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockTrendData.coverageTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="coverage"
                      stroke="#10b981"
                      fill="url(#colorCoverage)"
                      strokeWidth={2}
                      name="Coverage %"
                    />
                    <Area
                      type="monotone"
                      dataKey="target"
                      stroke="#94a3b8"
                      fill="transparent"
                      strokeWidth={1}
                      strokeDasharray="5 5"
                      name="Target"
                    />
                    <defs>
                      <linearGradient id="colorCoverage" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Complexity Bar Chart */}
          {!hiddenCharts.includes('complexity') && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <GitBranch className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Complexity Analysis</h3>
                    <p className="text-sm text-slate-500">Project vs team average</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleChartVisibility('complexity')}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <EyeOff size={18} />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockTrendData.complexityTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar
                      dataKey="complexity"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                      name="Project"
                    />
                    <Bar
                      dataKey="teamAverage"
                      fill="#94a3b8"
                      radius={[4, 4, 0, 0]}
                      name="Team Average"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Radar Chart */}
          {!hiddenCharts.includes('radar') && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/20">
                    <Target className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Quality Radar</h3>
                    <p className="text-sm text-slate-300">Multi-dimensional analysis</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleChartVisibility('radar')}
                  className="text-slate-300 hover:text-white"
                >
                  <EyeOff size={18} />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={mockTrendData.radarData}>
                    <PolarGrid stroke="#475569" />
                    <PolarAngleAxis dataKey="subject" stroke="#cbd5e1" />
                    <PolarRadiusAxis stroke="#475569" />
                    <Radar
                      name="Quality Score"
                      dataKey="A"
                      stroke="#6366f1"
                      fill="#6366f1"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Performance Scatter Plot */}
          {!hiddenCharts.includes('performance') && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Performance Metrics</h3>
                    <p className="text-sm text-slate-500">Current vs Previous period comparison</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleChartVisibility('performance')}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <EyeOff size={18} />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      type="number"
                      dataKey="previous"
                      name="Previous"
                      stroke="#64748b"
                      domain={[0, 100]}
                    />
                    <YAxis
                      type="number"
                      dataKey="current"
                      name="Current"
                      stroke="#64748b"
                      domain={[0, 100]}
                    />
                    <ZAxis range={[100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Scatter
                      name="Metrics"
                      data={mockTrendData.performanceData}
                      fill="#8b5cf6"
                      shape="circle"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                {mockTrendData.performanceData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-lg p-3 border border-slate-200"
                  >
                    <div className="text-sm font-medium text-slate-700">{item.metric}</div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <div className="text-xl font-bold text-slate-900">{item.current}</div>
                      <div className={`text-sm font-semibold ${
                        item.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {item.change >= 0 ? '↑' : '↓'}{Math.abs(item.change)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Heatmap */}
          {!hiddenCharts.includes('heatmap') && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-100">
                    <Activity className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Activity Heatmap</h3>
                    <p className="text-sm text-slate-500">Bug discovery by day and week</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleChartVisibility('heatmap')}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <EyeOff size={18} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-medium text-slate-500 pb-4">Day</th>
                      {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, index) => (
                        <th key={index} className="text-center text-sm font-medium text-slate-500 pb-4">
                          {week}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockTrendData.heatmapData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="text-sm font-medium text-slate-700 py-3">{row.day}</td>
                        {['week1', 'week2', 'week3', 'week4'].map((week, colIndex) => (
                          <td key={colIndex} className="text-center py-3">
                            <div
                              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-semibold text-white"
                              style={{
                                backgroundColor: getColorForValue(row[week]),
                              }}
                            >
                              {row[week]}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {metrics.map(metric => (
            <div key={metric.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${metric.color}20` }}>
                    <div style={{ color: metric.color }}>
                      {metric.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{metric.label} Trends</h3>
                    <p className="text-sm text-slate-500">Historical data and projections</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                  <Download size={16} className="text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">Export</span>
                </button>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockTrendData.bugTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="bugs"
                      stroke={metric.color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hidden Charts Panel */}
      {hiddenCharts.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <EyeOff className="text-amber-600" />
              <div>
                <h3 className="font-medium text-slate-900">{hiddenCharts.length} charts are hidden</h3>
                <p className="text-sm text-slate-600">Click show to restore hidden charts</p>
              </div>
            </div>
            <button
              onClick={() => setHiddenCharts([])}
              className="text-sm font-medium text-amber-700 hover:text-amber-800"
            >
              Show All
            </button>
          </div>
        </div>
      )}

      {/* Insights Panel */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-slate-900">Trend Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm font-medium text-slate-700">Positive Trend</div>
            <div className="text-2xl font-bold text-emerald-600 mt-2">↑12%</div>
            <div className="text-sm text-slate-500 mt-1">Bug resolution rate increased</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm font-medium text-slate-700">Attention Needed</div>
            <div className="text-2xl font-bold text-amber-600 mt-2">Code Smells</div>
            <div className="text-sm text-slate-500 mt-1">Increased by 8% this period</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm font-medium text-slate-700">Recommendation</div>
            <div className="text-lg font-bold text-blue-600 mt-2">Focus on Testing</div>
            <div className="text-sm text-slate-500 mt-1">Coverage below target in 2 projects</div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Data updated: Today, 3:45 PM • Next refresh in 15 minutes
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Download size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Download Report</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <Share2 size={16} />
            <span className="text-sm font-medium">Share Dashboard</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Toggle Info */}
      {isFullscreen && (
        <div className="fixed bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm text-slate-600">Press ESC or click the button to exit fullscreen</p>
        </div>
      )}
    </div>
  );
};

// Missing icon component
const Share2 = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export default Trends;