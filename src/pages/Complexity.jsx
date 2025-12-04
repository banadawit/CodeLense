import React, { useState } from 'react';
import {
  BarChart3,
  GitBranch,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Target,
  Filter,
  Download,
  RefreshCw,
  Eye,
  EyeOff,
  ChevronDown,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Brain,
  Scale,
  BarChart,
  PieChart,
  Activity,
  Users,
  Star,
  Maximize2,
  Minimize2,
  Info,
  ExternalLink,
  GitMerge,
  GitPullRequest,
  FileCode,
  FolderGit
} from 'lucide-react';
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Treemap,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

const Complexity = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('cyclomatic');
  const [selectedProject, setSelectedProject] = useState('all');
  const [viewMode, setViewMode] = useState('overview');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  // Mock complexity data
  const complexityData = {
    overview: {
      averageComplexity: 2.4,
      targetComplexity: 3.0,
      improvement: -15,
      highComplexityFiles: 12,
      totalFiles: 542,
      maintainabilityIndex: 85,
      cognitiveComplexity: 18.2,
      cyclomaticComplexity: 2.4,
      halsteadDifficulty: 8.3,
      halsteadEffort: 1200,
    },
    projects: [
      { name: 'Web App', complexity: 3.2, files: 124, highComplex: 8, color: '#6366f1' },
      { name: 'Mobile App', complexity: 2.1, files: 86, highComplex: 3, color: '#10b981' },
      { name: 'API Service', complexity: 2.8, files: 45, highComplex: 5, color: '#3b82f6' },
      { name: 'Admin Dashboard', complexity: 1.9, files: 32, highComplex: 1, color: '#8b5cf6' },
      { name: 'Analytics Engine', complexity: 3.5, files: 28, highComplex: 6, color: '#f59e0b' },
      { name: 'CLI Tool', complexity: 2.3, files: 18, highComplex: 2, color: '#ec4899' },
    ],
    trend: [
      { date: 'Jan 1', cyclomatic: 3.2, cognitive: 20, halstead: 10.2 },
      { date: 'Jan 8', cyclomatic: 3.1, cognitive: 19, halstead: 9.8 },
      { date: 'Jan 15', cyclomatic: 2.9, cognitive: 18, halstead: 9.2 },
      { date: 'Jan 22', cyclomatic: 2.7, cognitive: 17, halstead: 8.8 },
      { date: 'Jan 29', cyclomatic: 2.5, cognitive: 16, halstead: 8.4 },
      { date: 'Feb 5', cyclomatic: 2.4, cognitive: 15, halstead: 8.3 },
    ],
    fileAnalysis: [
      { name: 'api-service.js', complexity: 12, type: 'Critical', size: 2450, contributors: 3 },
      { name: 'auth-middleware.ts', complexity: 8, type: 'High', size: 1200, contributors: 2 },
      { name: 'data-processor.py', complexity: 6, type: 'Medium', size: 850, contributors: 1 },
      { name: 'utils.js', complexity: 4, type: 'Low', size: 450, contributors: 4 },
      { name: 'config.js', complexity: 2, type: 'Low', size: 200, contributors: 1 },
      { name: 'index.js', complexity: 1, type: 'Low', size: 50, contributors: 1 },
    ],
    metrics: [
      { name: 'Cyclomatic', value: 2.4, target: 3.0, status: 'good', description: 'Number of linearly independent paths' },
      { name: 'Cognitive', value: 18.2, target: 20, status: 'good', description: 'Measure of code understandability' },
      { name: 'Halstead Difficulty', value: 8.3, target: 10, status: 'warning', description: 'Software science difficulty metric' },
      { name: 'Maintainability', value: 85, target: 80, status: 'excellent', description: 'Ease of code maintenance' },
      { name: 'Code Duplication', value: 12, target: 15, status: 'good', description: 'Percentage of duplicated code' },
      { name: 'Dependencies', value: 45, target: 50, status: 'good', description: 'Number of external dependencies' },
    ],
    teamComparison: [
      { team: 'Frontend', complexity: 2.1, velocity: 85, quality: 92 },
      { team: 'Backend', complexity: 2.8, velocity: 78, quality: 88 },
      { team: 'DevOps', complexity: 1.9, velocity: 92, quality: 95 },
      { team: 'Mobile', complexity: 2.3, velocity: 80, quality: 90 },
    ],
    recommendations: [
      { id: 1, title: 'Refactor auth-service.js', impact: 'High', effort: 'Medium', files: ['auth-service.js', 'auth-middleware.ts'] },
      { id: 2, title: 'Extract complex logic from data-processor', impact: 'Medium', effort: 'Low', files: ['data-processor.py'] },
      { id: 3, title: 'Add documentation for API endpoints', impact: 'Medium', effort: 'Low', files: ['api-service.js'] },
      { id: 4, title: 'Simplify nested conditionals in utils.js', impact: 'Low', effort: 'Low', files: ['utils.js'] },
    ]
  };

  const metrics = [
    { id: 'cyclomatic', label: 'Cyclomatic', icon: <GitBranch size={16} />, color: '#6366f1' },
    { id: 'cognitive', label: 'Cognitive', icon: <Brain size={16} />, color: '#10b981' },
    { id: 'halstead', label: 'Halstead', icon: <Scale size={16} />, color: '#f59e0b' },
    { id: 'maintainability', label: 'Maintainability', icon: <Layers size={16} />, color: '#8b5cf6' },
  ];

  const projects = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Application' },
    { id: 'mobile-app', label: 'Mobile App' },
    { id: 'api-service', label: 'API Service' },
    { id: 'dashboard', label: 'Admin Dashboard' },
  ];

  const getStatusColor = (value, target, type = 'complexity') => {
    if (type === 'complexity') {
      if (value <= target * 0.7) return 'text-emerald-600 bg-emerald-100 border-emerald-200';
      if (value <= target) return 'text-amber-600 bg-amber-100 border-amber-200';
      return 'text-red-600 bg-red-100 border-red-200';
    } else {
      if (value >= target * 1.1) return 'text-emerald-600 bg-emerald-100 border-emerald-200';
      if (value >= target) return 'text-amber-600 bg-amber-100 border-amber-200';
      return 'text-red-600 bg-red-100 border-red-200';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-xl border border-slate-200">
          <p className="font-semibold text-slate-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-sm font-medium">{entry.name}:</span>
              <span className="text-sm" style={{ color: entry.color }}>
                {entry.value}
              </span>
            </div>
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
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Complexity Analysis
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Measure and optimize code complexity across your projects
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
            <Clock className="w-4 h-4 text-slate-400" />
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

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {showDetails ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export Report</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-900">
                {complexityData.overview.averageComplexity}
              </div>
              <div className="text-sm text-slate-600">Avg Complexity</div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
              complexityData.overview.averageComplexity, 
              complexityData.overview.targetComplexity
            )}`}>
              {complexityData.overview.averageComplexity <= complexityData.overview.targetComplexity ? 'Good' : 'High'}
            </div>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mt-3">
            <div 
              className={`h-full rounded-full ${
                complexityData.overview.averageComplexity <= 2 ? 'bg-emerald-500' :
                complexityData.overview.averageComplexity <= 3 ? 'bg-amber-500' : 'bg-red-500'
              }`}
              style={{ width: `${(complexityData.overview.averageComplexity / 5) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-900">
                {complexityData.overview.improvement}%
              </div>
              <div className="text-sm text-emerald-700 font-medium">Improvement</div>
            </div>
            <TrendingDown className="w-8 h-8 text-emerald-500" />
          </div>
          <div className="text-xs text-emerald-600 mt-2">Since last month</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">
            {complexityData.overview.highComplexityFiles}
          </div>
          <div className="text-sm text-slate-600">High Complexity Files</div>
          <div className="text-xs text-red-600 font-medium mt-2">
            {((complexityData.overview.highComplexityFiles / complexityData.overview.totalFiles) * 100).toFixed(1)}% of total
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">
            {complexityData.overview.maintainabilityIndex}
          </div>
          <div className="text-sm text-blue-700 font-medium">Maintainability Index</div>
          <div className={`text-xs font-medium mt-2 ${
            complexityData.overview.maintainabilityIndex >= 85 ? 'text-emerald-600' :
            complexityData.overview.maintainabilityIndex >= 70 ? 'text-amber-600' : 'text-red-600'
          }`}>
            {complexityData.overview.maintainabilityIndex >= 85 ? 'Excellent' :
             complexityData.overview.maintainabilityIndex >= 70 ? 'Good' : 'Needs Attention'}
          </div>
        </div>
      </div>

      {/* Metric Tabs */}
      <div className="flex flex-wrap gap-2">
        {metrics.map((metric) => (
          <button
            key={metric.id}
            onClick={() => setSelectedMetric(metric.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
              selectedMetric === metric.id
                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 text-indigo-700'
                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
            }`}
            style={selectedMetric === metric.id ? { borderLeftColor: metric.color, borderLeftWidth: '3px' } : {}}
          >
            <span style={{ color: metric.color }}>{metric.icon}</span>
            <span className="text-sm font-medium">{metric.label} Complexity</span>
          </button>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Complexity Trend Chart */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-100">
                  <TrendingDown className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Complexity Trend</h3>
                  <p className="text-sm text-slate-500">Evolution over time across metrics</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <select className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none">
                  <option>All Projects</option>
                  <option>Web App</option>
                  <option>Mobile App</option>
                </select>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={complexityData.trend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="date" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="cyclomatic"
                    stroke="#6366f1"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Cyclomatic"
                  />
                  <Line
                    type="monotone"
                    dataKey="cognitive"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Cognitive"
                  />
                  <Line
                    type="monotone"
                    dataKey="halstead"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Halstead"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Project Comparison */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-100">
                  <BarChart className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Project Comparison</h3>
                  <p className="text-sm text-slate-500">Complexity distribution across projects</p>
                </div>
              </div>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                View Details →
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={complexityData.projects}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="complexity"
                    fill="#6366f1"
                    radius={[4, 4, 0, 0]}
                    name="Complexity Score"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column - Metrics & Recommendations */}
        <div className="space-y-6">
          {/* Complexity Metrics */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-100">
                  <Activity className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Complexity Metrics</h3>
              </div>
              <Info className="w-5 h-5 text-slate-400" />
            </div>
            <div className="space-y-4">
              {complexityData.metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-700">{metric.name}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(
                        metric.value, 
                        metric.target, 
                        metric.name === 'Maintainability' ? 'maintainability' : 'complexity'
                      )}`}>
                        {metric.status === 'excellent' ? 'Excellent' : 
                         metric.status === 'good' ? 'Good' : 'Needs Attention'}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {metric.value}
                      <span className="text-slate-500 text-xs ml-1">
                        / {metric.target}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        metric.status === 'excellent' ? 'bg-emerald-500' :
                        metric.status === 'good' ? 'bg-blue-500' : 'bg-amber-500'
                      }`}
                      style={{ 
                        width: `${(metric.value / metric.target) * 100}%`,
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                  <p className="text-xs text-slate-500">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Comparison */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Team Comparison</h3>
                <p className="text-sm text-slate-300 mt-1">Complexity vs Velocity</p>
              </div>
              <Users className="w-5 h-5 text-slate-300" />
            </div>
            <div className="space-y-4">
              {complexityData.teamComparison.map((team, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{team.team}</span>
                    <span className={`text-sm font-medium ${
                      team.complexity <= 2 ? 'text-emerald-400' :
                      team.complexity <= 2.5 ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {team.complexity} complexity
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-400">Velocity</div>
                      <div className="text-white font-medium">{team.velocity}%</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Quality</div>
                      <div className="text-white font-medium">{team.quality}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analysis */}
      {showDetails && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* File Analysis */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">High Complexity Files</h3>
                  <p className="text-sm text-slate-500">Files requiring attention</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                {complexityData.overview.highComplexityFiles} files
              </span>
            </div>
            <div className="space-y-3">
              {complexityData.fileAnalysis.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      file.type === 'Critical' ? 'bg-red-100' :
                      file.type === 'High' ? 'bg-amber-100' : 'bg-blue-100'
                    }`}>
                      <FileCode className={`w-4 h-4 ${
                        file.type === 'Critical' ? 'text-red-600' :
                        file.type === 'High' ? 'text-amber-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{file.name}</div>
                      <div className="text-sm text-slate-500">
                        {file.size} LOC • {file.contributors} contributors
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${
                      file.complexity > 10 ? 'text-red-600' :
                      file.complexity > 5 ? 'text-amber-600' : 'text-emerald-600'
                    }`}>
                      {file.complexity}
                    </div>
                    <div className="text-xs text-slate-500">Complexity</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Optimization Recommendations</h3>
                  <p className="text-sm text-slate-600">Actionable improvements</p>
                </div>
              </div>
              <Target className="w-5 h-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {complexityData.recommendations.map((rec) => (
                <div key={rec.id} className="bg-white rounded-lg border border-slate-200 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-medium text-slate-900">{rec.title}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rec.impact === 'High' ? 'bg-red-100 text-red-700' :
                      rec.impact === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {rec.impact} Impact
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {rec.effort} Effort
                    </span>
                    <span className="flex items-center gap-1">
                      <FolderGit className="w-3 h-3" />
                      {rec.files.length} files
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {rec.files.map((file, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {file}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Complexity Types Explanation */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Understanding Complexity Metrics</h2>
            <p className="text-slate-300 mt-2">Key metrics and their implications</p>
          </div>
          <Sparkles className="w-6 h-6 text-indigo-300" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-indigo-500/20">
                <GitBranch className="w-5 h-5 text-indigo-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Cyclomatic Complexity</h3>
                <p className="text-sm text-slate-300">Measures number of independent paths</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>1-10: Simple, easy to test</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <span>11-20: Moderate, manageable</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <span>21+: Complex, consider refactoring</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <Brain className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Cognitive Complexity</h3>
                <p className="text-sm text-slate-300">Measures code understandability</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>0-15: Easy to understand</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <span>16-30: Moderate understanding needed</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <span>31+: Difficult, needs refactoring</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <Scale className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Halstead Metrics</h3>
                <p className="text-sm text-slate-300">Software science difficulty metrics</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>Volume: Size of implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <span>Difficulty: Hard to implement</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span>Effort: Time to implement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Last analysis: Today, 2:30 PM • Next automated scan in 2 hours
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <RefreshCw className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Run Analysis</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <GitPullRequest className="w-4 h-4" />
            <span className="text-sm font-medium">Generate Refactor Plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Complexity;