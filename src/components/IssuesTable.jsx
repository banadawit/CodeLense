import { AlertTriangle, Shield, Code2, Circle, CheckCircle, XCircle } from "lucide-react";

export default function IssuesTable() {
  // Mock issues data
  const issues = [
    {
      id: 1,
      title: "Memory leak in user authentication",
      type: "Bug",
      severity: "Critical",
      status: "Open",
      assignee: "John Doe",
      date: "2 hours ago",
      file: "auth.js"
    },
    {
      id: 2,
      title: "SQL injection vulnerability",
      type: "Vulnerability",
      severity: "High",
      status: "In Progress",
      assignee: "Jane Smith",
      date: "5 hours ago",
      file: "database.js"
    },
    {
      id: 3,
      title: "Unused variable declaration",
      type: "Code Smell",
      severity: "Low",
      status: "Resolved",
      assignee: "Mike Johnson",
      date: "1 day ago",
      file: "utils.js"
    },
    {
      id: 4,
      title: "Null pointer exception",
      type: "Bug",
      severity: "High",
      status: "Open",
      assignee: "Sarah Williams",
      date: "2 days ago",
      file: "api.js"
    },
    {
      id: 5,
      title: "Hardcoded API key",
      type: "Vulnerability",
      severity: "Critical",
      status: "In Progress",
      assignee: "David Brown",
      date: "3 days ago",
      file: "config.js"
    },
    {
      id: 6,
      title: "Duplicate code block",
      type: "Code Smell",
      severity: "Medium",
      status: "Resolved",
      assignee: "Emily Davis",
      date: "4 days ago",
      file: "helpers.js"
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "Bug":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "Vulnerability":
        return <Shield className="w-4 h-4 text-orange-500" />;
      case "Code Smell":
        return <Code2 className="w-4 h-4 text-yellow-500" />;
      default:
        return <Circle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSeverityBadge = (severity) => {
    const colors = {
      Critical: "bg-red-100 text-red-700 border-red-200",
      High: "bg-orange-100 text-orange-700 border-orange-200",
      Medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Low: "bg-blue-100 text-blue-700 border-blue-200"
    };
    return (
      <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${colors[severity] || colors.Low}`}>
        {severity}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      Open: { icon: <Circle className="w-3 h-3" />, color: "bg-red-100 text-red-700" },
      "In Progress": { icon: <Circle className="w-3 h-3" />, color: "bg-blue-100 text-blue-700" },
      Resolved: { icon: <CheckCircle className="w-3 h-3" />, color: "bg-emerald-100 text-emerald-700" }
    };
    const config = statusConfig[status] || statusConfig.Open;
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1 w-fit ${config.color}`}>
        {config.icon}
        {status}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Issue
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Type
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Severity
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Status
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Assignee
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {issues.map((issue) => (
            <tr
              key={issue.id}
              className="hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <td className="py-4 px-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-900">{issue.title}</span>
                  <span className="text-xs text-slate-500 mt-1">{issue.file}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  {getTypeIcon(issue.type)}
                  <span className="text-sm text-slate-700">{issue.type}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                {getSeverityBadge(issue.severity)}
              </td>
              <td className="py-4 px-4">
                {getStatusBadge(issue.status)}
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-slate-700">{issue.assignee}</span>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-slate-500">{issue.date}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

