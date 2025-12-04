import React, { useState } from 'react';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Filter,
  Download,
  RefreshCw,
  Eye,
  EyeOff,
  Lock,
  Key,
  Globe,
  Database,
  Server,
  Code2,
  Users,
  Zap,
  Sparkles,
  Target,
  BarChart3,
  Activity,
  ChevronDown,
  ExternalLink,
  AlertCircle,
  ShieldCheck,
  ShieldAlert,
  ShieldOff,
  Search,
  FileWarning,
  Network,
  Cpu,
  Bell,
  Maximize2,
  Minimize2,
  Info,
  AlertOctagon,
  FileCode,
  GitBranch,
  Terminal,
  Wifi,
  WifiOff
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
  Treemap
} from 'recharts';

const SecurityScan = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [selectedScan, setSelectedScan] = useState('latest');
  const [viewMode, setViewMode] = useState('overview');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoScan, setAutoScan] = useState(true);

  // Mock security data
  const securityData = {
    overview: {
      securityScore: 87,
      previousScore: 82,
      improvement: 5,
      totalVulnerabilities: 24,
      critical: 3,
      high: 8,
      medium: 10,
      low: 3,
      scansThisWeek: 42,
      avgResponseTime: '2.3h',
      protectionCoverage: 94,
      complianceScore: 92,
      lastScan: '2024-02-05T14:30:00Z',
      nextScan: '2024-02-05T16:30:00Z'
    },
    vulnerabilities: [
      {
        id: 1,
        name: 'SQL Injection',
        severity: 'critical',
        category: 'Injection',
        description: 'Potential SQL injection vulnerability in user input validation',
        cve: 'CVE-2024-12345',
        cvss: 9.8,
        detected: '2 hours ago',
        status: 'open',
        affected: ['api-service.js', 'auth-middleware.ts'],
        impact: 'Critical',
        exploitability: 'High',
        recommendation: 'Use parameterized queries and input validation'
      },
      {
        id: 2,
        name: 'XSS Vulnerability',
        severity: 'high',
        category: 'Cross-Site Scripting',
        description: 'Unsanitized user input in contact form',
        cve: 'CVE-2024-12346',
        cvss: 7.5,
        detected: '1 day ago',
        status: 'in-progress',
        affected: ['contact-form.js'],
        impact: 'High',
        exploitability: 'Medium',
        recommendation: 'Implement proper input sanitization'
      },
      {
        id: 3,
        name: 'Hardcoded Credentials',
        severity: 'medium',
        category: 'Sensitive Data Exposure',
        description: 'API keys exposed in configuration file',
        cve: null,
        cvss: 5.3,
        detected: '3 days ago',
        status: 'resolved',
        affected: ['config.js'],
        impact: 'Medium',
        exploitability: 'Low',
        recommendation: 'Move secrets to environment variables'
      },
      {
        id: 4,
        name: 'Insecure Dependencies',
        severity: 'high',
        category: 'Using Components with Known Vulnerabilities',
        description: 'Outdated lodash version with known vulnerabilities',
        cve: 'CVE-2023-xxxxx',
        cvss: 8.1,
        detected: '5 days ago',
        status: 'open',
        affected: ['package.json'],
        impact: 'High',
        exploitability: 'High',
        recommendation: 'Update to lodash@4.17.21 or later'
      },
      {
        id: 5,
        name: 'Missing CORS Headers',
        severity: 'medium',
        category: 'Security Misconfiguration',
        description: 'API endpoints missing proper CORS configuration',
        cve: null,
        cvss: 4.2,
        detected: '1 week ago',
        status: 'open',
        affected: ['api-service.js', 'server.js'],
        impact: 'Medium',
        exploitability: 'Medium',
        recommendation: 'Implement proper CORS headers'
      },
      {
        id: 6,
        name: 'Weak Password Policy',
        severity: 'low',
        category: 'Broken Authentication',
        description: 'No password complexity requirements',
        cve: null,
        cvss: 3.1,
        detected: '2 weeks ago',
        status: 'in-progress',
        affected: ['auth-service.js'],
        impact: 'Low',
        exploitability: 'Low',
        recommendation: 'Enforce strong password policy'
      },
    ],
    trend: [
      { date: 'Jan 1', vulnerabilities: 42, critical: 5, high: 12 },
      { date: 'Jan 8', vulnerabilities: 38, critical: 4, high: 10 },
      { date: 'Jan 15', vulnerabilities: 35, critical: 3, high: 9 },
      { date: 'Jan 22', vulnerabilities: 28, critical: 2, high: 8 },
      { date: 'Jan 29', vulnerabilities: 25, critical: 1, high: 7 },
      { date: 'Feb 5', vulnerabilities: 24, critical: 0, high: 6 },
    ],
    categories: [
      { name: 'Injection', count: 8, percentage: 33 },
      { name: 'Broken Auth', count: 5, percentage: 21 },
      { name: 'Sensitive Data', count: 4, percentage: 17 },
      { name: 'Security Misconfig', count: 4, percentage: 17 },
      { name: 'Known Vulnerabilities', count: 3, percentage: 12 },
    ],
    compliance: [
      { standard: 'OWASP Top 10', compliance: 92, status: 'compliant' },
      { standard: 'GDPR', compliance: 88, status: 'compliant' },
      { standard: 'PCI DSS', compliance: 85, status: 'partial' },
      { standard: 'HIPAA', compliance: 78, status: 'needs-work' },
      { standard: 'ISO 27001', compliance: 82, status: 'compliant' },
    ],
    scans: [
      { id: 'latest', name: 'Latest Scan', time: '2:30 PM', status: 'completed', findings: 24 },
      { id: 'daily', name: 'Daily Scan', time: 'Yesterday', status: 'completed', findings: 26 },
      { id: 'weekly', name: 'Weekly Deep Scan', time: '1 week ago', status: 'completed', findings: 42 },
      { id: 'scheduled', name: 'Scheduled Scan', time: 'Starting in 2h', status: 'scheduled', findings: null },
    ],
    topRisks: [
      { name: 'SQL Injection', risk: 9.8, likelihood: 'High', impact: 'Critical' },
      { name: 'XSS Attacks', risk: 7.5, likelihood: 'Medium', impact: 'High' },
      { name: 'Insecure Dependencies', risk: 8.1, likelihood: 'High', impact: 'High' },
      { name: 'Weak Authentication', risk: 6.2, likelihood: 'Medium', impact: 'Medium' },
      { name: 'Data Exposure', risk: 5.3, likelihood: 'Low', impact: 'Medium' },
    ],
    recommendations: [
      { id: 1, title: 'Update Dependencies', priority: 'critical', effort: 'low', impact: 'high' },
      { id: 2, title: 'Implement Web Application Firewall', priority: 'high', effort: 'medium', impact: 'high' },
      { id: 3, title: 'Enable 2FA for Admin Accounts', priority: 'high', effort: 'low', impact: 'medium' },
      { id: 4, title: 'Regular Security Training', priority: 'medium', effort: 'medium', impact: 'medium' },
    ]
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'medium': return 'text-amber-600 bg-amber-100 border-amber-200';
      case 'low': return 'text-blue-600 bg-blue-100 border-blue-200';
      default: return 'text-slate-600 bg-slate-100 border-slate-200';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'critical': return <AlertOctagon className="w-4 h-4" />;
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <AlertCircle className="w-4 h-4" />;
      case 'low': return <Info className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved': return 'text-emerald-600 bg-emerald-100 border-emerald-200';
      case 'in-progress': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'open': return 'text-amber-600 bg-amber-100 border-amber-200';
      default: return 'text-slate-600 bg-slate-100 border-slate-200';
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

  const filteredVulnerabilities = securityData.vulnerabilities.filter(vuln => 
    severityFilter === 'all' || vuln.severity === severityFilter
  );

  return (
    <div className={`p-4 md:p-6 lg:p-8 space-y-8 ${isFullscreen ? 'fixed inset-0 bg-white z-50 overflow-auto' : ''}`}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Security Scan Dashboard
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                Real-time vulnerability detection and threat analysis
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
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last quarter</option>
            </select>
          </div>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Security Report</span>
          </button>
        </div>
      </div>

      {/* Security Score & Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-slate-300">Security Score</div>
              <div className="text-4xl font-bold text-white mt-2">{securityData.overview.securityScore}</div>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm">
                  +{securityData.overview.improvement} points since last scan
                </span>
              </div>
            </div>
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-slate-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-emerald-500"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                  strokeDasharray={`${securityData.overview.securityScore * 2.64} 264`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{securityData.overview.securityScore}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-900">{securityData.overview.totalVulnerabilities}</div>
              <div className="text-sm text-slate-600">Total Vulnerabilities</div>
            </div>
            <AlertTriangle className="w-8 h-8 text-amber-500" />
          </div>
          <div className="text-xs text-slate-500 mt-2">↓12% from last week</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{securityData.overview.protectionCoverage}%</div>
          <div className="text-sm text-slate-600">Protection Coverage</div>
          <div className="text-xs text-emerald-600 font-medium mt-2">Above industry average</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{securityData.overview.complianceScore}%</div>
          <div className="text-sm text-slate-600">Compliance Score</div>
          <div className="text-xs text-emerald-600 font-medium mt-2">92% compliant</div>
        </div>
      </div>

      {/* Severity Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-red-700">{securityData.overview.critical}</div>
              <div className="text-sm text-red-600 font-medium">Critical</div>
            </div>
            <AlertOctagon className="w-8 h-8 text-red-600" />
          </div>
          <div className="h-1.5 bg-red-100 rounded-full overflow-hidden mt-2">
            <div 
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${(securityData.overview.critical / securityData.overview.totalVulnerabilities) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-orange-700">{securityData.overview.high}</div>
              <div className="text-sm text-orange-600 font-medium">High</div>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-600" />
          </div>
          <div className="h-1.5 bg-orange-100 rounded-full overflow-hidden mt-2">
            <div 
              className="h-full bg-orange-500 rounded-full"
              style={{ width: `${(securityData.overview.high / securityData.overview.totalVulnerabilities) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-amber-700">{securityData.overview.medium}</div>
              <div className="text-sm text-amber-600 font-medium">Medium</div>
            </div>
            <AlertCircle className="w-8 h-8 text-amber-600" />
          </div>
          <div className="h-1.5 bg-amber-100 rounded-full overflow-hidden mt-2">
            <div 
              className="h-full bg-amber-500 rounded-full"
              style={{ width: `${(securityData.overview.medium / securityData.overview.totalVulnerabilities) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-700">{securityData.overview.low}</div>
              <div className="text-sm text-blue-600 font-medium">Low</div>
            </div>
            <Info className="w-8 h-8 text-blue-600" />
          </div>
          <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden mt-2">
            <div 
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${(securityData.overview.low / securityData.overview.totalVulnerabilities) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Vulnerabilities */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vulnerability Trend */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-100">
                  <Activity className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Vulnerability Trend</h3>
                  <p className="text-sm text-slate-500">Security findings over time</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <select className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none">
                  <option>All Severities</option>
                  <option>Critical Only</option>
                  <option>High & Critical</option>
                </select>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={securityData.trend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="date" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="vulnerabilities"
                    stroke="#6366f1"
                    fill="url(#colorVulnerabilities)"
                    strokeWidth={2}
                    name="Total Vulnerabilities"
                  />
                  <Area
                    type="monotone"
                    dataKey="critical"
                    stroke="#ef4444"
                    fill="url(#colorCritical)"
                    strokeWidth={2}
                    name="Critical"
                  />
                  <defs>
                    <linearGradient id="colorVulnerabilities" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Active Vulnerabilities */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100">
                  <ShieldAlert className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Active Vulnerabilities</h3>
                  <p className="text-sm text-slate-500">Requiring immediate attention</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={severityFilter}
                  onChange={(e) => setSeverityFilter(e.target.value)}
                  className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {filteredVulnerabilities.map((vuln) => (
                <div key={vuln.id} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(vuln.severity)}`}>
                        {getSeverityIcon(vuln.severity)}
                        {vuln.severity.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(vuln.status)}`}>
                        {vuln.status.replace('-', ' ')}
                      </span>
                      {vuln.cve && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-mono">
                          {vuln.cve}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-slate-900">CVSS {vuln.cvss}</div>
                      <div className="text-xs text-slate-500">Severity Score</div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-slate-900 mb-2">{vuln.name}</h4>
                  <p className="text-sm text-slate-600 mb-3">{vuln.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-600">{vuln.affected.length} files</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-600">{vuln.detected}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors">
                        View Details
                      </button>
                      <button className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
                        Fix Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Security Metrics */}
        <div className="space-y-6">
          {/* Vulnerability Categories */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-100">
                  <BarChart3 className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Vulnerability Categories</h3>
              </div>
              <Info className="w-5 h-5 text-slate-400" />
            </div>
            <div className="space-y-4">
              {securityData.categories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">{category.name}</span>
                    <span className="text-sm font-bold text-slate-900">{category.count}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 text-right">{category.percentage}% of total</div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Status */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Compliance Status</h3>
                <p className="text-sm text-slate-300 mt-1">Regulatory compliance overview</p>
              </div>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-4">
              {securityData.compliance.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{item.standard}</span>
                    <span className={`text-sm font-bold ${
                      item.compliance >= 90 ? 'text-emerald-400' :
                      item.compliance >= 80 ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {item.compliance}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        item.compliance >= 90 ? 'bg-emerald-500' :
                        item.compliance >= 80 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${item.compliance}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-400">
                    Status: <span className={
                      item.status === 'compliant' ? 'text-emerald-400' :
                      item.status === 'partial' ? 'text-amber-400' : 'text-red-400'
                    }>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Security Risks */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100">
                  <Zap className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Top Security Risks</h3>
              </div>
              <Target className="w-5 h-5 text-slate-400" />
            </div>
            <div className="space-y-3">
              {securityData.topRisks.map((risk, index) => (
                <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">{risk.name}</span>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      risk.risk >= 9 ? 'bg-red-100 text-red-700' :
                      risk.risk >= 7 ? 'bg-orange-100 text-orange-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      Risk: {risk.risk}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-slate-500">Likelihood</div>
                      <div className={`font-medium ${
                        risk.likelihood === 'High' ? 'text-red-600' :
                        risk.likelihood === 'Medium' ? 'text-amber-600' : 'text-blue-600'
                      }`}>
                        {risk.likelihood}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500">Impact</div>
                      <div className={`font-medium ${
                        risk.impact === 'Critical' ? 'text-red-600' :
                        risk.impact === 'High' ? 'text-orange-600' : 'text-amber-600'
                      }`}>
                        {risk.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scan History & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scan History */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Scan History</h3>
                <p className="text-sm text-slate-500">Recent security scans</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoScan}
                  onChange={(e) => setAutoScan(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-slate-700">Auto Scan</span>
              </label>
            </div>
          </div>
          <div className="space-y-3">
            {securityData.scans.map((scan) => (
              <div
                key={scan.id}
                onClick={() => setSelectedScan(scan.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedScan === scan.id
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      scan.status === 'completed' ? 'bg-emerald-100' :
                      scan.status === 'scheduled' ? 'bg-blue-100' : 'bg-amber-100'
                    }`}>
                      <div className={
                        scan.status === 'completed' ? 'text-emerald-600' :
                        scan.status === 'scheduled' ? 'text-blue-600' : 'text-amber-600'
                      }>
                        {scan.status === 'completed' ? <CheckCircle className="w-4 h-4" /> :
                         scan.status === 'scheduled' ? <Clock className="w-4 h-4" /> :
                         <RefreshCw className="w-4 h-4" />}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{scan.name}</div>
                      <div className="text-sm text-slate-500">{scan.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    {scan.findings !== null && (
                      <>
                        <div className="text-xl font-bold text-slate-900">{scan.findings}</div>
                        <div className="text-xs text-slate-500">Findings</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Recommendations */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Security Recommendations</h3>
                <p className="text-sm text-slate-600">Actionable improvements</p>
              </div>
            </div>
            <Target className="w-5 h-5 text-indigo-500" />
          </div>
          <div className="space-y-4">
            {securityData.recommendations.map((rec) => (
              <div key={rec.id} className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-medium text-slate-900">{rec.title}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    rec.priority === 'critical' ? 'bg-red-100 text-red-700' :
                    rec.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {rec.priority} Priority
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {rec.impact} Impact
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {rec.effort} Effort
                  </span>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Implement Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Insights */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Security Insights</h2>
            <p className="text-slate-300 mt-2">Key findings and proactive measures</p>
          </div>
          <Shield className="w-6 h-6 text-indigo-300" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <TrendingDown className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <div className="font-semibold text-white">12% Reduction</div>
                <div className="text-sm text-slate-300">In critical vulnerabilities</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Clock className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <div className="font-semibold text-white">2.3h Avg Response</div>
                <div className="text-sm text-slate-300">To critical threats</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <Database className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="font-semibold text-white">94% Protected</div>
                <div className="text-sm text-slate-300">Data encryption coverage</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Users className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <div className="font-semibold text-white">24/7 Monitoring</div>
                <div className="text-sm text-slate-300">Active threat detection</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Last scan: {new Date(securityData.overview.lastScan).toLocaleString()} • 
          Next scan: {new Date(securityData.overview.nextScan).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <RefreshCw className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Run Scan Now</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <Bell className="w-4 h-4" />
            <span className="text-sm font-medium">Enable Alerts</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityScan;