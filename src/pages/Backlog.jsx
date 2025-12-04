import React, { useState } from 'react';
import {
  Plus,
  Filter,
  Search,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  CheckCircle,
  Users,
  Calendar,
  Tag,
  MoreVertical,
  Eye,
  EyeOff,
  Download,
  Upload,
  Copy,
  Star,
  Zap,
  Sparkles,
  Target,
  BarChart3,
  Activity,
  ChevronDown,
  GitBranch,
  FileText,
  Paperclip,
  MessageSquare,
  Trash2,
  Edit,
  Archive,
  Lock,
  Unlock,
  Shield,
  Bell,
  UserPlus,
  Settings,
  Grid,
  List,
  Maximize2,
  Minimize2,
  RefreshCw,
  ArrowUpDown,
  X,
  Layers,
  GitPullRequest,
  Code2,
  Cpu,
  Brain,
  Scale,
  ExternalLink,
  Link,
  Unlink,
  AlertCircle,
  Target as TargetIcon,
  CheckSquare,
  Square
} from "lucide-react";

const Backlog = () => {
  const [backlogItems, setBacklogItems] = useState([
    {
      id: '1',
      title: "Implement Dark Mode Theme",
      description: "Add dark mode support across all application pages and components",
      priority: "high",
      category: "feature",
      estimatedEffort: "Medium",
      businessValue: "High",
      assignee: { id: '1', name: "Bana Dawit", avatar: "https://i.pravatar.cc/150?img=32" },
      dueDate: "2024-03-15",
      tags: ["ui", "theme", "accessibility", "design"],
      dependencies: ["UI Kit Update", "Design System"],
      risk: "Low",
      status: "new",
      votes: 12,
      comments: 8,
      attachments: 3,
      starred: true,
      createdAt: "2024-02-01",
      lastUpdated: "2024-02-05",
      epic: "UI Improvements",
      sprint: "Sprint 3",
      storyPoints: 5,
      complexity: "Medium",
      valueScore: 85,
      effortScore: 65,
      roi: 1.31
    },
    {
      id: '2',
      title: "Add Real-time Notifications",
      description: "Implement WebSocket-based real-time notifications for user activities",
      priority: "high",
      category: "feature",
      estimatedEffort: "High",
      businessValue: "High",
      assignee: { id: '2', name: "Miki Solomon", avatar: "https://i.pravatar.cc/150?img=11" },
      dueDate: "2024-03-10",
      tags: ["websocket", "real-time", "backend", "performance"],
      dependencies: ["Message Queue Setup"],
      risk: "Medium",
      status: "planned",
      votes: 18,
      comments: 12,
      attachments: 5,
      starred: true,
      createdAt: "2024-01-28",
      lastUpdated: "2024-02-03",
      epic: "User Engagement",
      sprint: "Sprint 2",
      storyPoints: 8,
      complexity: "High",
      valueScore: 92,
      effortScore: 78,
      roi: 1.18
    },
    {
      id: '3',
      title: "Optimize Database Indexing",
      description: "Review and optimize database indexes for better query performance",
      priority: "medium",
      category: "technical-debt",
      estimatedEffort: "Medium",
      businessValue: "Medium",
      assignee: { id: '3', name: "Alex Chen", avatar: "https://i.pravatar.cc/150?img=45" },
      dueDate: "2024-02-28",
      tags: ["database", "performance", "optimization", "backend"],
      dependencies: [],
      risk: "Low",
      status: "refined",
      votes: 6,
      comments: 4,
      attachments: 2,
      starred: false,
      createdAt: "2024-01-25",
      lastUpdated: "2024-02-01",
      epic: "Performance",
      sprint: "Sprint 1",
      storyPoints: 3,
      complexity: "Medium",
      valueScore: 75,
      effortScore: 70,
      roi: 1.07
    },
    {
      id: '4',
      title: "Update Documentation for API v2",
      description: "Complete API documentation with examples and migration guide",
      priority: "low",
      category: "documentation",
      estimatedEffort: "Low",
      businessValue: "Medium",
      assignee: { id: '4', name: "Sarah Miller", avatar: "https://i.pravatar.cc/150?img=28" },
      dueDate: "2024-02-20",
      tags: ["documentation", "api", "developer-experience"],
      dependencies: ["API v2 Release"],
      risk: "Low",
      status: "new",
      votes: 3,
      comments: 2,
      attachments: 1,
      starred: false,
      createdAt: "2024-02-03",
      lastUpdated: "2024-02-04",
      epic: "Developer Experience",
      sprint: "Backlog",
      storyPoints: 2,
      complexity: "Low",
      valueScore: 68,
      effortScore: 45,
      roi: 1.51
    },
    {
      id: '5',
      title: "Implement Advanced Search Filters",
      description: "Add advanced filtering and search capabilities to the dashboard",
      priority: "medium",
      category: "feature",
      estimatedEffort: "Medium",
      businessValue: "High",
      assignee: null,
      dueDate: "2024-03-05",
      tags: ["search", "filters", "ui", "dashboard"],
      dependencies: ["Search Service"],
      risk: "Low",
      status: "refined",
      votes: 9,
      comments: 6,
      attachments: 2,
      starred: true,
      createdAt: "2024-01-30",
      lastUpdated: "2024-02-02",
      epic: "Dashboard Improvements",
      sprint: "Sprint 2",
      storyPoints: 5,
      complexity: "Medium",
      valueScore: 88,
      effortScore: 72,
      roi: 1.22
    },
    {
      id: '6',
      title: "Security Audit and Hardening",
      description: "Complete security audit and implement additional security measures",
      priority: "critical",
      category: "security",
      estimatedEffort: "High",
      businessValue: "Critical",
      assignee: { id: '5', name: "David Kim", avatar: "https://i.pravatar.cc/150?img=15" },
      dueDate: "2024-02-15",
      tags: ["security", "audit", "compliance", "backend"],
      dependencies: ["Penetration Testing"],
      risk: "High",
      status: "planned",
      votes: 15,
      comments: 10,
      attachments: 8,
      starred: true,
      createdAt: "2024-01-20",
      lastUpdated: "2024-02-01",
      epic: "Security",
      sprint: "Sprint 1",
      storyPoints: 13,
      complexity: "High",
      valueScore: 95,
      effortScore: 85,
      roi: 1.12
    },
    {
      id: '7',
      title: "Mobile App Performance Optimization",
      description: "Optimize mobile app performance and reduce bundle size",
      priority: "medium",
      category: "performance",
      estimatedEffort: "Medium",
      businessValue: "Medium",
      assignee: { id: '2', name: "Miki Solomon", avatar: "https://i.pravatar.cc/150?img=11" },
      dueDate: "2024-03-01",
      tags: ["mobile", "performance", "optimization", "frontend"],
      dependencies: ["Analytics Integration"],
      risk: "Medium",
      status: "new",
      votes: 7,
      comments: 5,
      attachments: 3,
      starred: false,
      createdAt: "2024-02-02",
      lastUpdated: "2024-02-05",
      epic: "Mobile Experience",
      sprint: "Backlog",
      storyPoints: 5,
      complexity: "Medium",
      valueScore: 72,
      effortScore: 65,
      roi: 1.11
    },
    {
      id: '8',
      title: "Automated Testing Coverage",
      description: "Increase test coverage to 90% for critical modules",
      priority: "high",
      category: "quality",
      estimatedEffort: "High",
      businessValue: "High",
      assignee: { id: '3', name: "Alex Chen", avatar: "https://i.pravatar.cc/150?img=45" },
      dueDate: "2024-03-20",
      tags: ["testing", "quality", "automation", "ci-cd"],
      dependencies: ["Testing Infrastructure"],
      risk: "Low",
      status: "planned",
      votes: 11,
      comments: 9,
      attachments: 4,
      starred: false,
      createdAt: "2024-01-22",
      lastUpdated: "2024-02-03",
      epic: "Quality Assurance",
      sprint: "Sprint 3",
      storyPoints: 8,
      complexity: "High",
      valueScore: 90,
      effortScore: 80,
      roi: 1.13
    }
  ]);

  const [viewMode, setViewMode] = useState("grid"); // grid, list, kanban
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("priority");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDetails, setShowDetails] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  // Priority configurations
  const priorityConfig = {
    "critical": {
      label: "Critical",
      icon: <AlertTriangle className="w-4 h-4" />,
      color: "text-red-600 bg-red-100 border-red-200",
      gradient: "from-red-500 to-pink-600"
    },
    "high": {
      label: "High",
      icon: <TrendingUp className="w-4 h-4" />,
      color: "text-orange-600 bg-orange-100 border-orange-200",
      gradient: "from-orange-500 to-amber-600"
    },
    "medium": {
      label: "Medium",
      icon: <TargetIcon className="w-4 h-4" />,
      color: "text-amber-600 bg-amber-100 border-amber-200",
      gradient: "from-amber-500 to-yellow-600"
    },
    "low": {
      label: "Low",
      icon: <TrendingDown className="w-4 h-4" />,
      color: "text-blue-600 bg-blue-100 border-blue-200",
      gradient: "from-blue-500 to-cyan-600"
    }
  };

  // Status configurations
  const statusConfig = {
    "new": {
      label: "New",
      icon: <Plus className="w-4 h-4" />,
      color: "text-slate-600 bg-slate-100 border-slate-200"
    },
    "refined": {
      label: "Refined",
      icon: <CheckCircle className="w-4 h-4" />,
      color: "text-blue-600 bg-blue-100 border-blue-200"
    },
    "planned": {
      label: "Planned",
      icon: <Calendar className="w-4 h-4" />,
      color: "text-emerald-600 bg-emerald-100 border-emerald-200"
    }
  };

  // Category configurations
  const categoryConfig = {
    "feature": {
      label: "Feature",
      icon: <Sparkles className="w-4 h-4" />,
      color: "text-indigo-600 bg-indigo-100 border-indigo-200"
    },
    "technical-debt": {
      label: "Technical Debt",
      icon: <Code2 className="w-4 h-4" />,
      color: "text-amber-600 bg-amber-100 border-amber-200"
    },
    "security": {
      label: "Security",
      icon: <Shield className="w-4 h-4" />,
      color: "text-red-600 bg-red-100 border-red-200"
    },
    "performance": {
      label: "Performance",
      icon: <Zap className="w-4 h-4" />,
      color: "text-emerald-600 bg-emerald-100 border-emerald-200"
    },
    "quality": {
      label: "Quality",
      icon: <CheckCircle className="w-4 h-4" />,
      color: "text-blue-600 bg-blue-100 border-blue-200"
    },
    "documentation": {
      label: "Documentation",
      icon: <FileText className="w-4 h-4" />,
      color: "text-purple-600 bg-purple-100 border-purple-200"
    }
  };

  // Filter and sort backlog items
  const filteredItems = backlogItems.filter(item => {
    const matchesStatus = filterStatus === "all" || item.status === filterStatus;
    const matchesPriority = filterPriority === "all" || item.priority === filterPriority;
    const matchesCategory = filterCategory === "all" || item.category === filterCategory;
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.epic?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || 
      (activeTab === "starred" && item.starred) ||
      (activeTab === "my-items" && item.assignee?.name === "Bana Dawit") ||
      (activeTab === "high-value" && item.valueScore >= 80) ||
      (activeTab === "unassigned" && !item.assignee);

    return matchesStatus && matchesPriority && matchesCategory && matchesSearch && matchesTab;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case "priority":
        const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        comparison = priorityOrder[b.priority] - priorityOrder[a.priority];
        break;
      case "value":
        comparison = b.valueScore - a.valueScore;
        break;
      case "roi":
        comparison = b.roi - a.roi;
        break;
      case "effort":
        const effortOrder = { "High": 3, "Medium": 2, "Low": 1 };
        comparison = effortOrder[a.estimatedEffort] - effortOrder[b.estimatedEffort];
        break;
      case "votes":
        comparison = b.votes - a.votes;
        break;
      case "dueDate":
        comparison = new Date(a.dueDate) - new Date(b.dueDate);
        break;
      default:
        comparison = 0;
    }
    
    return sortOrder === "desc" ? comparison : -comparison;
  });

  // Calculate statistics
  const stats = {
    total: backlogItems.length,
    critical: backlogItems.filter(item => item.priority === "critical").length,
    highPriority: backlogItems.filter(item => item.priority === "high").length,
    unassigned: backlogItems.filter(item => !item.assignee).length,
    totalValue: Math.round(backlogItems.reduce((acc, item) => acc + item.valueScore, 0) / backlogItems.length),
    totalStoryPoints: backlogItems.reduce((acc, item) => acc + item.storyPoints, 0),
    avgRoi: (backlogItems.reduce((acc, item) => acc + item.roi, 0) / backlogItems.length).toFixed(2)
  };

  // Toggle item selection
  const toggleSelection = (id) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  // Toggle all selection
  const toggleAllSelection = () => {
    if (selectedItems.length === sortedItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(sortedItems.map(item => item.id));
    }
  };

  // Toggle starred
  const toggleStarred = (id) => {
    setBacklogItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, starred: !item.starred } : item
      )
    );
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Get status for due date
  const getDueDateStatus = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { label: "Overdue", color: "text-red-600 bg-red-100" };
    if (diffDays <= 7) return { label: "Due soon", color: "text-amber-600 bg-amber-100" };
    return { label: "On track", color: "text-emerald-600 bg-emerald-100" };
  };

  return (
    <div className={`p-4 md:p-6 lg:p-8 space-y-8 ${isFullscreen ? 'fixed inset-0 bg-gradient-to-br from-slate-50 to-slate-100 z-50 overflow-auto' : ''}`}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Product Backlog
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Prioritized list of features, enhancements, and fixes
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export Backlog</span>
          </button>
        </div>
      </div>

      {/* Backlog Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
          <div className="text-sm text-slate-600">Total Items</div>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.critical}</div>
          <div className="text-sm text-red-700 font-medium">Critical</div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.highPriority}</div>
          <div className="text-sm text-orange-700 font-medium">High Priority</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.unassigned}</div>
          <div className="text-sm text-blue-700 font-medium">Unassigned</div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.totalValue}%</div>
          <div className="text-sm text-emerald-700 font-medium">Avg. Value</div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.avgRoi}</div>
          <div className="text-sm text-indigo-700 font-medium">Avg. ROI</div>
        </div>
      </div>

      {/* Backlog Insights */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Backlog Insights</h2>
            <p className="text-slate-300 mt-2">Strategic analysis and recommendations</p>
          </div>
          <BarChart3 className="w-6 h-6 text-indigo-300" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <TrendingUp className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <div className="font-semibold text-white">High ROI Items</div>
                <div className="text-sm text-slate-300">{backlogItems.filter(i => i.roi > 1.2).length} items</div>
              </div>
            </div>
            <div className="text-xs text-slate-400">Prioritize for next sprint</div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <AlertCircle className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="font-semibold text-white">Risk Items</div>
                <div className="text-sm text-slate-300">{backlogItems.filter(i => i.risk === "High").length} high risk</div>
              </div>
            </div>
            <div className="text-xs text-slate-400">Require careful planning</div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Clock className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <div className="font-semibold text-white">Upcoming Deadlines</div>
                <div className="text-sm text-slate-300">{backlogItems.filter(i => getDueDateStatus(i.dueDate).label === "Due soon").length} due soon</div>
              </div>
            </div>
            <div className="text-xs text-slate-400">Review timeline</div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <GitPullRequest className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <div className="font-semibold text-white">Dependencies</div>
                <div className="text-sm text-slate-300">{backlogItems.filter(i => i.dependencies.length > 0).length} items</div>
              </div>
            </div>
            <div className="text-xs text-slate-400">Blocked items</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        {[
          { id: "all", label: "All Items", count: stats.total },
          { id: "starred", label: "Starred", icon: <Star className="w-4 h-4" />, count: backlogItems.filter(i => i.starred).length },
          { id: "my-items", label: "My Items", icon: <Users className="w-4 h-4" />, count: backlogItems.filter(i => i.assignee?.name === "Bana Dawit").length },
          { id: "high-value", label: "High Value", icon: <TrendingUp className="w-4 h-4" />, count: backlogItems.filter(i => i.valueScore >= 80).length },
          { id: "unassigned", label: "Unassigned", icon: <UserPlus className="w-4 h-4" />, count: stats.unassigned },
          { id: "technical-debt", label: "Tech Debt", icon: <Code2 className="w-4 h-4" />, count: backlogItems.filter(i => i.category === "technical-debt").length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            {tab.icon || null}
            <span className="font-medium">{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                activeTab === tab.id
                  ? "bg-white/20"
                  : "bg-slate-100 text-slate-600"
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search backlog items by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Status Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="refined">Refined</option>
              <option value="planned">Planned</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Priority Filter */}
          <div className="relative">
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="all">All Priority</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <AlertTriangle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="all">All Categories</option>
              <option value="feature">Feature</option>
              <option value="technical-debt">Technical Debt</option>
              <option value="security">Security</option>
              <option value="performance">Performance</option>
              <option value="quality">Quality</option>
              <option value="documentation">Documentation</option>
            </select>
            <Tag className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Sort By */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="priority">Sort by Priority</option>
              <option value="value">Sort by Value</option>
              <option value="roi">Sort by ROI</option>
              <option value="effort">Sort by Effort</option>
              <option value="votes">Sort by Votes</option>
              <option value="dueDate">Sort by Due Date</option>
            </select>
            <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Sort Order */}
          <button
            onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
            className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
          >
            {sortOrder === "desc" ? <TrendingDown className="w-4 h-4 text-slate-600" /> : <TrendingUp className="w-4 h-4 text-slate-600" />}
          </button>

          {/* View Toggle */}
          <div className="flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 ${viewMode === "grid" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 ${viewMode === "list" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedItems.length > 0 && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-slate-900">
                {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white rounded-lg transition-colors">
                <div className="flex items-center gap-2">
                  <Archive className="w-4 h-4" />
                  Archive
                </div>
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white rounded-lg transition-colors">
                <div className="flex items-center gap-2">
                  <GitPullRequest className="w-4 h-4" />
                  Move to Sprint
                </div>
              </button>
              <button className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Assign
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Showing {sortedItems.length} of {backlogItems.length} backlog items
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {showDetails ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          <button
            onClick={toggleAllSelection}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {selectedItems.length === sortedItems.length ? <CheckSquare size={18} /> : <Square size={18} />}
          </button>
        </div>
      </div>

      {/* Backlog Items */}
      {viewMode === "grid" ? (
        /* Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Priority Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${priorityConfig[item.priority].gradient}`} />
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <button
                        onClick={() => toggleSelection(item.id)}
                        className="text-slate-400 hover:text-indigo-600"
                      >
                        {selectedItems.includes(item.id) ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => toggleStarred(item.id)}
                        className="text-slate-400 hover:text-amber-500 transition-colors"
                      >
                        {item.starred ? <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> : <Star className="w-4 h-4" />}
                      </button>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${priorityConfig[item.priority].color}`}>
                        {priorityConfig[item.priority].icon}
                        {priorityConfig[item.priority].label}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${categoryConfig[item.category].color}`}>
                        {categoryConfig[item.category].icon}
                        {categoryConfig[item.category].label}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    {showDetails && (
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{item.description}</p>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{item.valueScore}</div>
                    <div className="text-xs text-slate-500">Value Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{item.roi}</div>
                    <div className="text-xs text-slate-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{item.storyPoints}</div>
                    <div className="text-xs text-slate-500">Story Points</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-xs">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    {item.assignee ? (
                      <div className="flex items-center gap-2">
                        {item.assignee.avatar ? (
                          <img src={item.assignee.avatar} alt={item.assignee.name} className="w-6 h-6 rounded-full" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs">
                            {item.assignee.name.charAt(0)}
                          </div>
                        )}
                        <span className="text-sm text-slate-600">{item.assignee.name}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-slate-400">Unassigned</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getDueDateStatus(item.dueDate).color}`}>
                      {formatDate(item.dueDate)}
                    </div>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 text-sm font-medium text-slate-700">
                    <button onClick={toggleAllSelection} className="flex items-center gap-2">
                      {selectedItems.length === sortedItems.length ? <CheckSquare size={16} /> : <Square size={16} />}
                      <span>Title</span>
                    </button>
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Priority</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Category</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Value</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Effort</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Assignee</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Due Date</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedItems.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleSelection(item.id)}
                          className="flex-shrink-0 mt-0.5"
                        >
                          {selectedItems.includes(item.id) ? <CheckSquare className="w-4 h-4 text-indigo-600" /> : <Square className="w-4 h-4 text-slate-400" />}
                        </button>
                        <button
                          onClick={() => toggleStarred(item.id)}
                          className="flex-shrink-0 mt-0.5"
                        >
                          {item.starred ? <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> : <Star className="w-4 h-4 text-slate-400" />}
                        </button>
                        <div>
                          <div className="font-medium text-slate-900 mb-1">{item.title}</div>
                          {showDetails && (
                            <div className="text-sm text-slate-500 line-clamp-1">{item.description}</div>
                          )}
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.slice(0, 2).map((tag, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                            {item.tags.length > 2 && (
                              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">
                                +{item.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${priorityConfig[item.priority].color}`}>
                        {priorityConfig[item.priority].icon}
                        {priorityConfig[item.priority].label}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${categoryConfig[item.category].color}`}>
                        {categoryConfig[item.category].icon}
                        {categoryConfig[item.category].label}
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="font-bold text-slate-900">{item.valueScore}</div>
                        <div className="text-xs text-slate-500">ROI: {item.roi}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="font-bold text-slate-900">{item.storyPoints} pts</div>
                        <div className="text-xs text-slate-500">{item.estimatedEffort}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      {item.assignee ? (
                        <div className="flex items-center gap-2">
                          {item.assignee.avatar ? (
                            <img src={item.assignee.avatar} alt={item.assignee.name} className="w-6 h-6 rounded-full" />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs">
                              {item.assignee.name.charAt(0)}
                            </div>
                          )}
                          <span className="text-sm text-slate-700">{item.assignee.name}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-slate-400">Unassigned</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className={`text-sm font-medium ${getDueDateStatus(item.dueDate).color.split(' ')[0]}`}>
                        {formatDate(item.dueDate)}
                      </div>
                      <div className="text-xs text-slate-500">{getDueDateStatus(item.dueDate).label}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {sortedItems.length === 0 && (
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4">
            <Layers className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No backlog items found</h3>
          <p className="text-slate-600 max-w-md mx-auto">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setFilterStatus("all");
              setFilterPriority("all");
              setFilterCategory("all");
              setActiveTab("all");
            }}
            className="mt-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <RefreshCw className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Refresh Backlog</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <GitPullRequest className="w-4 h-4" />
            <span className="text-sm font-medium">Plan Sprint</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backlog;