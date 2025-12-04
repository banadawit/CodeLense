import React, { useState } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  Filter,
  Search,
  Calendar,
  Tag,
  MoreVertical,
  X,
  CheckSquare,
  Square,
  ArrowUpDown,
  TrendingUp,
  TrendingDown,
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
  Grid,
  List,
  Maximize2,
  Minimize2,
  RefreshCw,
  Bell,
  Lock,
  Unlock,
  MessageSquare,
  Paperclip,
  Clock4,
  UserPlus,
  GitBranch
} from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { 
      id: '1', 
      title: "Fix Login Authentication Bug", 
      description: "User login fails on Safari browser due to cookie handling issue",
      status: "in-progress", 
      priority: "high",
      assignee: { id: '1', name: "Bana Dawit", avatar: "https://i.pravatar.cc/150?img=32" },
      dueDate: "2024-02-10",
      tags: ["bug", "authentication", "frontend"],
      estimatedTime: "4h",
      actualTime: "2h",
      createdAt: "2024-02-01",
      progress: 75,
      starred: true,
      comments: 5,
      attachments: 2
    },
    { 
      id: '2', 
      title: "Improve Dashboard UI Responsiveness", 
      description: "Optimize dashboard layout for mobile devices and tablets",
      status: "pending", 
      priority: "medium",
      assignee: { id: '2', name: "Miki Solomon", avatar: "https://i.pravatar.cc/150?img=11" },
      dueDate: "2024-02-15",
      tags: ["ui", "responsive", "design"],
      estimatedTime: "8h",
      actualTime: "0h",
      createdAt: "2024-02-02",
      progress: 0,
      starred: false,
      comments: 2,
      attachments: 0
    },
    { 
      id: '3', 
      title: "Add Unit Tests for Auth Module", 
      description: "Write comprehensive unit tests for authentication service",
      status: "completed", 
      priority: "low",
      assignee: { id: '3', name: "Team", avatar: null },
      dueDate: "2024-02-05",
      tags: ["testing", "backend", "security"],
      estimatedTime: "6h",
      actualTime: "5.5h",
      createdAt: "2024-01-28",
      progress: 100,
      starred: true,
      comments: 8,
      attachments: 3
    },
    { 
      id: '4', 
      title: "Implement API Rate Limiting", 
      description: "Add rate limiting to prevent API abuse and ensure stability",
      status: "pending", 
      priority: "high",
      assignee: { id: '1', name: "Bana Dawit", avatar: "https://i.pravatar.cc/150?img=32" },
      dueDate: "2024-02-12",
      tags: ["api", "security", "backend"],
      estimatedTime: "12h",
      actualTime: "3h",
      createdAt: "2024-02-03",
      progress: 25,
      starred: false,
      comments: 3,
      attachments: 1
    },
    { 
      id: '5', 
      title: "Update Documentation for New Features", 
      description: "Document recently added features and API changes",
      status: "in-progress", 
      priority: "medium",
      assignee: { id: '4', name: "Alex Chen", avatar: "https://i.pravatar.cc/150?img=45" },
      dueDate: "2024-02-08",
      tags: ["documentation", "docs"],
      estimatedTime: "3h",
      actualTime: "1h",
      createdAt: "2024-02-01",
      progress: 33,
      starred: false,
      comments: 1,
      attachments: 0
    },
    { 
      id: '6', 
      title: "Optimize Database Queries", 
      description: "Improve slow queries in the reporting module",
      status: "in-progress", 
      priority: "medium",
      assignee: { id: '5', name: "Sarah Miller", avatar: "https://i.pravatar.cc/150?img=28" },
      dueDate: "2024-02-20",
      tags: ["database", "performance", "optimization"],
      estimatedTime: "10h",
      actualTime: "4h",
      createdAt: "2024-01-30",
      progress: 40,
      starred: true,
      comments: 6,
      attachments: 4
    }
  ]);

  const [newTask, setNewTask] = useState({ 
    title: "", 
    description: "",
    status: "pending", 
    priority: "medium",
    assignee: "",
    dueDate: "",
    tags: [],
    estimatedTime: ""
  });

  const [editingTask, setEditingTask] = useState(null);
  const [viewMode, setViewMode] = useState("board"); // board, list, grid
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterAssignee, setFilterAssignee] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // Status configurations
  const statusConfig = {
    "pending": {
      label: "Pending",
      icon: <Clock className="w-4 h-4" />,
      color: "text-slate-600 bg-slate-100 border-slate-200",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200"
    },
    "in-progress": {
      label: "In Progress",
      icon: <Activity className="w-4 h-4" />,
      color: "text-blue-600 bg-blue-100 border-blue-200",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    "completed": {
      label: "Completed",
      icon: <CheckCircle className="w-4 h-4" />,
      color: "text-emerald-600 bg-emerald-100 border-emerald-200",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    }
  };

  // Priority configurations
  const priorityConfig = {
    "high": {
      label: "High",
      icon: <AlertCircle className="w-4 h-4" />,
      color: "text-red-600 bg-red-100 border-red-200"
    },
    "medium": {
      label: "Medium",
      icon: <Clock className="w-4 h-4" />,
      color: "text-amber-600 bg-amber-100 border-amber-200"
    },
    "low": {
      label: "Low",
      icon: <CheckCircle className="w-4 h-4" />,
      color: "text-blue-600 bg-blue-100 border-blue-200"
    }
  };

  // Get assignee list
  const assignees = Array.from(new Set(tasks.map(t => t.assignee.name).filter(Boolean)));

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filterStatus === "all" || task.status === filterStatus;
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority;
    const matchesAssignee = filterAssignee === "all" || task.assignee.name === filterAssignee;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCompleted = showCompleted ? true : task.status !== "completed";
    const matchesTab = activeTab === "all" || 
                      (activeTab === "my-tasks" && task.assignee.name === "Bana Dawit") ||
                      (activeTab === "starred" && task.starred) ||
                      (activeTab === "overdue" && new Date(task.dueDate) < new Date());

    return matchesStatus && matchesPriority && matchesAssignee && matchesSearch && matchesCompleted && matchesTab;
  });

  // Calculate stats
  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === "pending").length,
    inProgress: tasks.filter(t => t.status === "in-progress").length,
    completed: tasks.filter(t => t.status === "completed").length,
    highPriority: tasks.filter(t => t.priority === "high").length,
    overdue: tasks.filter(t => new Date(t.dueDate) < new Date() && t.status !== "completed").length,
    totalProgress: Math.round(tasks.reduce((acc, t) => acc + t.progress, 0) / tasks.length)
  };

  // Add task
  const addTask = () => {
    if (!newTask.title.trim()) return;

    const taskToAdd = {
      id: Date.now().toString(),
      ...newTask,
      assignee: { id: '1', name: newTask.assignee || "Unassigned", avatar: null },
      createdAt: new Date().toISOString().split('T')[0],
      progress: 0,
      starred: false,
      comments: 0,
      attachments: 0,
      actualTime: "0h"
    };

    setTasks([...tasks, taskToAdd]);
    setNewTask({ 
      title: "", 
      description: "",
      status: "pending", 
      priority: "medium",
      assignee: "",
      dueDate: "",
      tags: [],
      estimatedTime: ""
    });
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Toggle task starred
  const toggleStarred = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, starred: !task.starred } : task
    ));
  };

  // Save edited task
  const saveTask = () => {
    setTasks(tasks.map((task) =>
      task.id === editingTask.id ? editingTask : task
    ));
    setEditingTask(null);
  };

  // Handle drag and drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, movedTask);
    
    setTasks(updatedTasks);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isOverdue = (dueDate) => {
    return new Date(dueDate) < new Date();
  };

  return (
    <div className={`p-4 md:p-6 lg:p-8 space-y-8 ${isFullscreen ? 'fixed inset-0 bg-white z-50 overflow-auto' : ''}`}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Task Management
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Organize, track, and manage development tasks
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export Tasks</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
          <div className="text-sm text-slate-600">Total Tasks</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.inProgress}</div>
          <div className="text-sm text-blue-700 font-medium">In Progress</div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.pending}</div>
          <div className="text-sm text-slate-600">Pending</div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.completed}</div>
          <div className="text-sm text-emerald-700 font-medium">Completed</div>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.highPriority}</div>
          <div className="text-sm text-red-700 font-medium">High Priority</div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.overdue}</div>
          <div className="text-sm text-amber-700 font-medium">Overdue</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        {[
          { id: "all", label: "All Tasks", count: stats.total },
          { id: "my-tasks", label: "My Tasks", count: tasks.filter(t => t.assignee.name === "Bana Dawit").length },
          { id: "starred", label: "Starred", icon: <Star className="w-4 h-4" />, count: tasks.filter(t => t.starred).length },
          { id: "overdue", label: "Overdue", icon: <AlertCircle className="w-4 h-4" />, count: stats.overdue },
          { id: "high-priority", label: "High Priority", icon: <Zap className="w-4 h-4" />, count: stats.highPriority },
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
            placeholder="Search tasks by title, description, or tags..."
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
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
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
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Assignee Filter */}
          <div className="relative">
            <select
              value={filterAssignee}
              onChange={(e) => setFilterAssignee(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            >
              <option value="all">All Assignees</option>
              {assignees.map(assignee => (
                <option key={assignee} value={assignee}>{assignee}</option>
              ))}
            </select>
            <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* View Toggle */}
          <div className="flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setViewMode("board")}
              className={`p-3 ${viewMode === "board" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <div className="grid grid-cols-2 gap-1 w-6 h-6">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 ${viewMode === "list" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <div className="flex flex-col gap-1 w-6 h-6">
                <div className="bg-current rounded-sm h-1.5 w-full"></div>
                <div className="bg-current rounded-sm h-1.5 w-full"></div>
                <div className="bg-current rounded-sm h-1.5 w-full"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Completed Tasks Toggle */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-sm text-slate-700">Show completed tasks</span>
        </label>
        
        <div className="text-sm text-slate-500">
          Showing {filteredTasks.length} of {tasks.length} tasks
        </div>
      </div>

      {/* Add New Task Card */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Create New Task</h3>
              <p className="text-sm text-slate-600">Add a new task to your project</p>
            </div>
          </div>
          <Target className="w-5 h-5 text-indigo-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Task Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
            <select
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Assignee</label>
            <input
              type="text"
              placeholder="Assign to..."
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={newTask.assignee}
              onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Due Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={newTask.dueDate}
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
          <textarea
            placeholder="Describe the task details..."
            rows="3"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={addTask}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span className="font-medium">Add Task</span>
              </div>
            </button>
            
            <button className="px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
              Add More Details
            </button>
          </div>

          <div className="text-sm text-slate-500">
            Task will be added to your project backlog
          </div>
        </div>
      </div>

      {/* Task Board/List View */}
      {viewMode === "board" ? (
        /* Board View - Kanban Style */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(statusConfig).map(([statusKey, status]) => (
            <div key={statusKey} className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className={`p-4 border-b ${status.borderColor}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${status.color.split(' ')[1]}`}>
                      <div className={status.color.split(' ')[0]}>
                        {status.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{status.label}</h3>
                      <div className="text-sm text-slate-500">
                        {tasks.filter(t => t.status === statusKey).length} tasks
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    {tasks.filter(t => t.status === statusKey).length}
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
                {filteredTasks
                  .filter(task => task.status === statusKey)
                  .map((task) => (
                    <div key={task.id} className="group bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <button
                              onClick={() => toggleStarred(task.id)}
                              className="text-slate-400 hover:text-amber-500 transition-colors"
                            >
                              {task.starred ? <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> : <Star className="w-4 h-4" />}
                            </button>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityConfig[task.priority].color}`}>
                              {priorityConfig[task.priority].icon}
                              {priorityConfig[task.priority].label}
                            </span>
                            {isOverdue(task.dueDate) && task.status !== "completed" && (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200">
                                Overdue
                              </span>
                            )}
                          </div>
                          
                          <h4 className="font-semibold text-slate-900 mb-2">{task.title}</h4>
                          <p className="text-sm text-slate-600 mb-3 line-clamp-2">{task.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {task.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                {task.assignee.avatar ? (
                                  <img src={task.assignee.avatar} alt={task.assignee.name} className="w-6 h-6 rounded-full" />
                                ) : (
                                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs">
                                    {task.assignee.name.charAt(0)}
                                  </div>
                                )}
                                <span className="text-sm text-slate-600">{task.assignee.name}</span>
                              </div>
                              <div className="flex items-center gap-1 text-slate-500">
                                <Calendar className="w-3 h-3" />
                                <span className="text-xs">{formatDate(task.dueDate)}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setEditingTask(task)}
                                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => deleteTask(task.id)}
                                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>Progress</span>
                          <span>{task.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              task.status === "completed" ? 'bg-emerald-500' :
                              task.status === "in-progress" ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Task List</h3>
                <p className="text-sm text-slate-500">All tasks in a detailed view</p>
              </div>
              <div className="text-sm text-slate-500">
                Sorted by: <span className="font-medium text-slate-700">Priority</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Task</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Priority</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Assignee</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Due Date</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Progress</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <tr key={task.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleStarred(task.id)}
                          className="flex-shrink-0"
                        >
                          {task.starred ? <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> : <Star className="w-4 h-4 text-slate-400" />}
                        </button>
                        <div>
                          <div className="font-medium text-slate-900">{task.title}</div>
                          <div className="text-sm text-slate-500 line-clamp-1">{task.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusConfig[task.status].color}`}>
                        {statusConfig[task.status].icon}
                        {statusConfig[task.status].label}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${priorityConfig[task.priority].color}`}>
                        {priorityConfig[task.priority].icon}
                        {priorityConfig[task.priority].label}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {task.assignee.avatar ? (
                          <img src={task.assignee.avatar} alt={task.assignee.name} className="w-6 h-6 rounded-full" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs">
                            {task.assignee.name.charAt(0)}
                          </div>
                        )}
                        <span className="text-sm text-slate-700">{task.assignee.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className={`text-sm ${
                        isOverdue(task.dueDate) && task.status !== "completed" 
                          ? 'text-red-600 font-medium' 
                          : 'text-slate-600'
                      }`}>
                        {formatDate(task.dueDate)}
                        {isOverdue(task.dueDate) && task.status !== "completed" && (
                          <div className="text-xs text-red-500">Overdue</div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="w-32">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                          <span>Progress</span>
                          <span>{task.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              task.status === "completed" ? 'bg-emerald-500' :
                              task.status === "in-progress" ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingTask(task)}
                          className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
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

      {/* Edit Task Modal */}
      {editingTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">Edit Task</h3>
                <button
                  onClick={() => setEditingTask(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Task Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                  <select
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={editingTask.status}
                    onChange={(e) => setEditingTask({ ...editingTask, status: e.target.value })}
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
                  <select
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={editingTask.priority}
                    onChange={(e) => setEditingTask({ ...editingTask, priority: e.target.value })}
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Assignee</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={editingTask.assignee.name}
                    onChange={(e) => setEditingTask({ 
                      ...editingTask, 
                      assignee: { ...editingTask.assignee, name: e.target.value }
                    })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Due Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={editingTask.dueDate}
                    onChange={(e) => setEditingTask({ ...editingTask, dueDate: e.target.value })}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Progress</label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Progress</span>
                    <span>{editingTask.progress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="w-full"
                    value={editingTask.progress}
                    onChange={(e) => setEditingTask({ ...editingTask, progress: parseInt(e.target.value) })}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-slate-200">
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setEditingTask(null)}
                  className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveTask}
                  className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Last updated: {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <RefreshCw className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Sync Tasks</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <Bell className="w-4 h-4" />
            <span className="text-sm font-medium">Set Reminders</span>
          </button>
        </div>
      </div>
    </div>
  );
}