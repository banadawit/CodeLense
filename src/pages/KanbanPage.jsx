import React, { useState } from "react";
import {
  Plus,
  MoreVertical,
  Users,
  Calendar,
  Tag,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Filter,
  Search,
  Download,
  RefreshCw,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Activity,
  ChevronDown,
  GitBranch,
  FileText,
  Paperclip,
  MessageSquare,
  Star,
  Trash2,
  Edit,
  Copy,
  Archive,
  Lock,
  Unlock,
  Shield,
  Bell,
  UserPlus,
  Settings,
  Grid,
  List,
  LayoutDashboard,
  X
} from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function KanbanPage() {
  const [columns, setColumns] = useState({
    backlog: {
      id: "backlog",
      name: "Backlog",
      color: "bg-slate-100 border-slate-200",
      textColor: "text-slate-700",
      count: 4,
      items: [
        { 
          id: "1", 
          title: "Design Login Page", 
          description: "Create modern login interface with dark/light mode",
          priority: "high",
          assignee: { id: "1", name: "Bana Dawit", avatar: "https://i.pravatar.cc/150?img=32" },
          dueDate: "2024-02-12",
          tags: ["design", "ui", "auth"],
          comments: 3,
          attachments: 2,
          progress: 0,
          starred: true,
          estimatedTime: "8h",
          color: "bg-gradient-to-br from-indigo-500 to-purple-600"
        },
        { 
          id: "2", 
          title: "Fix Navbar Styles", 
          description: "Responsive navbar issues on mobile devices",
          priority: "medium",
          assignee: { id: "2", name: "Miki Solomon", avatar: "https://i.pravatar.cc/150?img=11" },
          dueDate: "2024-02-10",
          tags: ["css", "responsive", "bug"],
          comments: 2,
          attachments: 1,
          progress: 0,
          starred: false,
          estimatedTime: "3h",
          color: "bg-gradient-to-br from-blue-500 to-cyan-600"
        },
        { 
          id: "3", 
          title: "Setup CI/CD Pipeline", 
          description: "Configure automated testing and deployment",
          priority: "high",
          assignee: { id: "3", name: "Alex Chen", avatar: "https://i.pravatar.cc/150?img=45" },
          dueDate: "2024-02-15",
          tags: ["devops", "ci-cd", "automation"],
          comments: 5,
          attachments: 4,
          progress: 0,
          starred: true,
          estimatedTime: "12h",
          color: "bg-gradient-to-br from-emerald-500 to-green-600"
        },
        { 
          id: "4", 
          title: "Document API Endpoints", 
          description: "Create comprehensive API documentation",
          priority: "low",
          assignee: { id: "4", name: "Sarah Miller", avatar: "https://i.pravatar.cc/150?img=28" },
          dueDate: "2024-02-20",
          tags: ["documentation", "api", "backend"],
          comments: 1,
          attachments: 0,
          progress: 0,
          starred: false,
          estimatedTime: "6h",
          color: "bg-gradient-to-br from-amber-500 to-orange-600"
        },
      ],
    },
    todo: {
      id: "todo",
      name: "To Do",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
      count: 3,
      items: [
        { 
          id: "5", 
          title: "Build Dashboard Widgets", 
          description: "Create interactive dashboard components",
          priority: "high",
          assignee: { id: "1", name: "Bana Dawit", avatar: "https://i.pravatar.cc/150?img=32" },
          dueDate: "2024-02-08",
          tags: ["react", "charts", "dashboard"],
          comments: 4,
          attachments: 3,
          progress: 20,
          starred: true,
          estimatedTime: "10h",
          color: "bg-gradient-to-br from-purple-500 to-pink-600"
        },
        { 
          id: "6", 
          title: "Optimize Database Queries", 
          description: "Improve slow queries in reporting module",
          priority: "medium",
          assignee: { id: "5", name: "David Kim", avatar: "https://i.pravatar.cc/150?img=15" },
          dueDate: "2024-02-14",
          tags: ["database", "performance", "sql"],
          comments: 2,
          attachments: 2,
          progress: 10,
          starred: false,
          estimatedTime: "8h",
          color: "bg-gradient-to-br from-red-500 to-pink-600"
        },
        { 
          id: "7", 
          title: "Implement Error Tracking", 
          description: "Setup Sentry for error monitoring",
          priority: "medium",
          assignee: { id: "2", name: "Miki Solomon", avatar: "https://i.pravatar.cc/150?img=11" },
          dueDate: "2024-02-11",
          tags: ["monitoring", "errors", "devops"],
          comments: 3,
          attachments: 1,
          progress: 0,
          starred: false,
          estimatedTime: "5h",
          color: "bg-gradient-to-br from-indigo-500 to-blue-600"
        },
      ],
    },
    progress: {
      id: "progress",
      name: "In Progress",
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700",
      count: 2,
      items: [
        { 
          id: "8", 
          title: "Develop Authentication System", 
          description: "Implement JWT-based authentication flow",
          priority: "high",
          assignee: { id: "1", name: "Bana Dawit", avatar: "https://i.pravatar.cc/150?img=32" },
          dueDate: "2024-02-06",
          tags: ["auth", "security", "backend"],
          comments: 8,
          attachments: 5,
          progress: 65,
          starred: true,
          estimatedTime: "15h",
          color: "bg-gradient-to-br from-emerald-500 to-teal-600"
        },
        { 
          id: "9", 
          title: "Create Mobile Responsive Layout", 
          description: "Make all pages responsive on mobile devices",
          priority: "medium",
          assignee: { id: "4", name: "Sarah Miller", avatar: "https://i.pravatar.cc/150?img=28" },
          dueDate: "2024-02-09",
          tags: ["responsive", "mobile", "css"],
          comments: 5,
          attachments: 2,
          progress: 45,
          starred: false,
          estimatedTime: "12h",
          color: "bg-gradient-to-br from-blue-500 to-indigo-600"
        },
      ],
    },
    review: {
      id: "review",
      name: "In Review",
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700",
      count: 2,
      items: [
        { 
          id: "10", 
          title: "Write Unit Tests", 
          description: "Coverage for core modules",
          priority: "medium",
          assignee: { id: "3", name: "Alex Chen", avatar: "https://i.pravatar.cc/150?img=45" },
          dueDate: "2024-02-05",
          tags: ["testing", "quality", "backend"],
          comments: 6,
          attachments: 3,
          progress: 90,
          starred: true,
          estimatedTime: "10h",
          color: "bg-gradient-to-br from-amber-500 to-orange-600"
        },
      ],
    },
    done: {
      id: "done",
      name: "Completed",
      color: "bg-emerald-50 border-emerald-200",
      textColor: "text-emerald-700",
      count: 2,
      items: [
        { 
          id: "11", 
          title: "Setup Project Structure", 
          description: "Initialize project with best practices",
          priority: "low",
          assignee: { id: "5", name: "David Kim", avatar: "https://i.pravatar.cc/150?img=15" },
          dueDate: "2024-02-01",
          tags: ["setup", "structure", "foundation"],
          comments: 4,
          attachments: 2,
          progress: 100,
          starred: false,
          estimatedTime: "6h",
          color: "bg-gradient-to-br from-slate-500 to-gray-600"
        },
        { 
          id: "12", 
          title: "Design System Components", 
          description: "Create reusable component library",
          priority: "medium",
          assignee: { id: "4", name: "Sarah Miller", avatar: "https://i.pravatar.cc/150?img=28" },
          dueDate: "2024-02-03",
          tags: ["design-system", "components", "ui"],
          comments: 7,
          attachments: 4,
          progress: 100,
          starred: true,
          estimatedTime: "14h",
          color: "bg-gradient-to-br from-pink-500 to-rose-600"
        },
      ],
    },
  });

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    assignee: "",
    columnId: "backlog",
    dueDate: "",
    tags: []
  });

  const [editingTask, setEditingTask] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAssignee, setFilterAssignee] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [showDetails, setShowDetails] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

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

  // Drag and drop handler
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Same column movement
    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
    // Moving task to a different column
    else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      // Update progress based on column
      const updatedTask = {
        ...removed,
        progress: destination.droppableId === "done" ? 100 : 
                 destination.droppableId === "progress" ? 50 :
                 destination.droppableId === "review" ? 90 :
                 destination.droppableId === "todo" ? 20 : 0
      };

      destItems[destination.index] = updatedTask;

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  // Add new task
  const addTask = () => {
    if (!newTask.title.trim()) return;

    const taskToAdd = {
      id: Date.now().toString(),
      ...newTask,
      assignee: { 
        id: Date.now().toString(), 
        name: newTask.assignee || "Unassigned", 
        avatar: null 
      },
      comments: 0,
      attachments: 0,
      progress: 0,
      starred: false,
      estimatedTime: "4h",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      tags: newTask.tags.length > 0 ? newTask.tags : ["task"]
    };

    const targetColumn = columns[newTask.columnId];
    
    setColumns({
      ...columns,
      [newTask.columnId]: {
        ...targetColumn,
        items: [...targetColumn.items, taskToAdd],
        count: targetColumn.items.length + 1
      }
    });

    // Reset form
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      assignee: "",
      columnId: "backlog",
      dueDate: "",
      tags: []
    });
  };

  // Delete task
  const deleteTask = (columnId, taskId) => {
    const column = columns[columnId];
    const updatedItems = column.items.filter(item => item.id !== taskId);
    
    setColumns({
      ...columns,
      [columnId]: {
        ...column,
        items: updatedItems,
        count: updatedItems.length
      }
    });
  };

  // Toggle task starred
  const toggleStarred = (columnId, taskId) => {
    const column = columns[columnId];
    const updatedItems = column.items.map(item => 
      item.id === taskId ? { ...item, starred: !item.starred } : item
    );
    
    setColumns({
      ...columns,
      [columnId]: {
        ...column,
        items: updatedItems
      }
    });
  };

  // Get assignee list
  const assignees = Array.from(
    new Set(
      Object.values(columns)
        .flatMap(col => col.items.map(item => item.assignee.name))
        .filter(Boolean)
    )
  );

  // Filter tasks based on search and filters
  const filteredColumns = Object.entries(columns).reduce((acc, [columnId, column]) => {
    const filteredItems = column.items.filter(item => {
      const matchesSearch = searchQuery === "" || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesAssignee = filterAssignee === "all" || item.assignee.name === filterAssignee;
      const matchesPriority = filterPriority === "all" || item.priority === filterPriority;
      
      return matchesSearch && matchesAssignee && matchesPriority;
    });
    
    acc[columnId] = { ...column, items: filteredItems, count: filteredItems.length };
    return acc;
  }, {});

  // Calculate statistics
  const stats = {
    totalTasks: Object.values(columns).reduce((acc, col) => acc + col.items.length, 0),
    inProgress: columns.progress.items.length + columns.review.items.length,
    completed: columns.done.items.length,
    highPriority: Object.values(columns).reduce((acc, col) => 
      acc + col.items.filter(item => item.priority === "high").length, 0
    ),
    totalProgress: Math.round(
      Object.values(columns).flatMap(col => col.items).reduce((acc, item) => acc + item.progress, 0) /
      Object.values(columns).flatMap(col => col.items).length
    ) || 0
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className={`p-4 md:p-6 lg:p-8 space-y-8 ${isFullscreen ? 'fixed inset-0 bg-gradient-to-br from-slate-50 to-slate-100 z-50 overflow-auto' : ''}`}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Kanban Board
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Visualize and manage your workflow with drag-and-drop
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

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
          >
            {showDetails ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export Board</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.totalTasks}</div>
          <div className="text-sm text-slate-600">Total Tasks</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.inProgress}</div>
          <div className="text-sm text-blue-700 font-medium">In Progress</div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.completed}</div>
          <div className="text-sm text-emerald-700 font-medium">Completed</div>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.highPriority}</div>
          <div className="text-sm text-red-700 font-medium">High Priority</div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{stats.totalProgress}%</div>
          <div className="text-sm text-indigo-700 font-medium">Avg Progress</div>
        </div>
      </div>

      {/* Filters and Search */}
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
          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All", count: stats.totalTasks },
              { id: "high", label: "High Priority", count: stats.highPriority },
              { id: "my-tasks", label: "My Tasks", count: Object.values(columns).reduce((acc, col) => 
                acc + col.items.filter(item => item.assignee.name === "Bana Dawit").length, 0
              )},
              { id: "overdue", label: "Overdue", count: Object.values(columns).reduce((acc, col) => 
                acc + col.items.filter(item => new Date(item.dueDate) < new Date() && item.progress < 100).length, 0
              )}
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {filter.label}
                {filter.count > 0 && (
                  <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                    activeFilter === filter.id
                      ? "bg-white/20"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    {filter.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={filterAssignee}
                onChange={(e) => setFilterAssignee(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              >
                <option value="all">All Assignees</option>
                {assignees.map(assignee => (
                  <option key={assignee} value={assignee}>{assignee}</option>
                ))}
              </select>
              <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              >
                <option value="all">All Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
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
              <h3 className="text-lg font-semibold text-slate-900">Add New Task</h3>
              <p className="text-sm text-slate-600">Quickly add a task to your workflow</p>
            </div>
          </div>
          <Zap className="w-5 h-5 text-indigo-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Task title..."
            className="px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />

          <select
            className="px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>

          <input
            type="text"
            placeholder="Assignee name"
            className="px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={newTask.assignee}
            onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
          />

          <input
            type="date"
            className="px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          />

          <select
            className="px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={newTask.columnId}
            onChange={(e) => setNewTask({ ...newTask, columnId: e.target.value })}
          >
            {Object.values(columns).map(column => (
              <option key={column.id} value={column.id}>{column.name}</option>
            ))}
          </select>
        </div>

        <button
          onClick={addTask}
          className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span className="font-medium">Add Task to Board</span>
        </button>
      </div>

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {Object.values(filteredColumns).map((column) => (
            <div key={column.id} className="flex flex-col min-w-[280px]">
              {/* Column Header */}
              <div className={`p-4 rounded-t-xl border ${column.color} flex items-center justify-between mb-4`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${column.color.split(' ')[1]}`}>
                    <span className={column.textColor}>
                      {column.name === "Backlog" && <Clock className="w-5 h-5" />}
                      {column.name === "To Do" && <FileText className="w-5 h-5" />}
                      {column.name === "In Progress" && <Activity className="w-5 h-5" />}
                      {column.name === "In Review" && <Eye className="w-5 h-5" />}
                      {column.name === "Completed" && <CheckCircle className="w-5 h-5" />}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{column.name}</h3>
                    <div className="text-sm text-slate-500">{column.count} tasks</div>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white/50 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Column Tasks */}
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`flex-1 p-4 rounded-b-xl border ${column.color} ${
                      snapshot.isDraggingOver ? 'bg-opacity-50' : ''
                    } min-h-[400px] max-h-[calc(100vh-400px)] overflow-y-auto`}
                  >
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-4 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all ${
                              snapshot.isDragging ? 'shadow-xl rotate-2' : ''
                            }`}
                          >
                            {/* Task Header */}
                            <div className="p-4">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <button
                                      onClick={() => toggleStarred(column.id, item.id)}
                                      className="text-slate-400 hover:text-amber-500 transition-colors"
                                    >
                                      {item.starred ? <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> : <Star className="w-4 h-4" />}
                                    </button>
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${priorityConfig[item.priority].color}`}>
                                      {priorityConfig[item.priority].icon}
                                      {priorityConfig[item.priority].label}
                                    </span>
                                  </div>
                                  
                                  <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                                  {showDetails && (
                                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">{item.description}</p>
                                  )}
                                  
                                  {/* Tags */}
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag, idx) => (
                                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              {item.progress > 0 && (
                                <div className="mb-4">
                                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                                    <span>Progress</span>
                                    <span>{item.progress}%</span>
                                  </div>
                                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div 
                                      className={`h-full rounded-full ${
                                        item.progress === 100 ? 'bg-emerald-500' :
                                        item.progress >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                                      }`}
                                      style={{ width: `${item.progress}%` }}
                                    />
                                  </div>
                                </div>
                              )}

                              {/* Task Footer */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-2">
                                    {item.assignee.avatar ? (
                                      <img src={item.assignee.avatar} alt={item.assignee.name} className="w-6 h-6 rounded-full" />
                                    ) : (
                                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${item.color}`}>
                                        {item.assignee.name.charAt(0)}
                                      </div>
                                    )}
                                    <span className="text-sm text-slate-600">{item.assignee.name}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-slate-500">
                                    <Calendar className="w-3 h-3" />
                                    <span className="text-xs">{formatDate(item.dueDate)}</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-2 text-xs text-slate-500">
                                    {item.comments > 0 && (
                                      <span className="flex items-center gap-1">
                                        <MessageSquare className="w-3 h-3" />
                                        {item.comments}
                                      </span>
                                    )}
                                    {item.attachments > 0 && (
                                      <span className="flex items-center gap-1">
                                        <Paperclip className="w-3 h-3" />
                                        {item.attachments}
                                      </span>
                                    )}
                                  </div>
                                  <button
                                    onClick={() => deleteTask(column.id, item.id)}
                                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* Task Status Bar */}
                            <div className={`h-1 ${item.color}`} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    
                    {/* Empty State */}
                    {column.items.length === 0 && (
                      <div className="text-center py-8">
                        <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                          <Plus className="w-6 h-6 text-slate-400" />
                        </div>
                        <p className="text-slate-500 text-sm">No tasks in this column</p>
                        <button
                          onClick={() => setNewTask({...newTask, columnId: column.id})}
                          className="mt-2 text-sm text-indigo-600 hover:text-indigo-700"
                        >
                          Add a task
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>

      {/* Board Insights */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Board Insights</h2>
            <p className="text-slate-300 mt-2">Performance metrics and workflow analysis</p>
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
                <div className="font-semibold text-white">Workflow Efficiency</div>
                <div className="text-sm text-slate-300">85% completion rate</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Clock className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <div className="font-semibold text-white">Avg. Cycle Time</div>
                <div className="text-sm text-slate-300">3.2 days per task</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <Target className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="font-semibold text-white">On-Time Delivery</div>
                <div className="text-sm text-slate-300">92% of tasks on schedule</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Users className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <div className="font-semibold text-white">Team Load</div>
                <div className="text-sm text-slate-300">Balanced workload</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Last updated: {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <RefreshCw className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Refresh Board</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Board Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}