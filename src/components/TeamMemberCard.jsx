import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Star,
  TrendingUp,
  Code2,
  GitBranch,
  Users,
  Calendar,
  Award,
  MessageSquare,
  Eye,
  MoreVertical,
  Zap,
  Target,
  CheckCircle,
  Clock
} from 'lucide-react';

const TeamMemberCard = ({ member, roleConfig, availabilityColors }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getProductivityColor = (score) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 70) return 'text-amber-600';
    return 'text-red-600';
  };

  const getProductivityBg = (score) => {
    if (score >= 90) return 'bg-emerald-100';
    if (score >= 70) return 'bg-amber-100';
    return 'bg-red-100';
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Top Gradient Bar */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      <div className="p-6">
        {/* Header with Avatar and Actions */}
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
              {getInitials(member.name)}
            </div>
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
              member.availability === "Available" ? "bg-emerald-500" :
              member.availability === "Busy" ? "bg-amber-500" : "bg-slate-500"
            }`} />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-amber-500 transition-colors">
              <Star className="w-4 h-4" />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${
              roleConfig[member.role]?.color || "bg-slate-100 text-slate-700 border-slate-200"
            }`}>
              {roleConfig[member.role]?.icon}
              {member.role}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${availabilityColors[member.availability]}`}>
              {member.availability}
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Mail className="w-4 h-4" />
            <span className="truncate">{member.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <MapPin className="w-4 h-4" />
            <span>{member.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Award className="w-4 h-4" />
            <span>{member.experience} years experience</span>
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {member.expertise.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">
              {skill}
            </span>
          ))}
          {member.expertise.length > 3 && (
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm">
              +{member.expertise.length - 3} more
            </span>
          )}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className={`rounded-xl p-3 ${getProductivityBg(member.productivity)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-700">Productivity</span>
              <TrendingUp className={`w-4 h-4 ${getProductivityColor(member.productivity)}`} />
            </div>
            <div className={`text-2xl font-bold ${getProductivityColor(member.productivity)}`}>
              {member.productivity}%
            </div>
            <div className="h-1.5 bg-white rounded-full overflow-hidden mt-2">
              <div 
                className={`h-full rounded-full ${
                  member.productivity >= 90 ? 'bg-emerald-500' :
                  member.productivity >= 70 ? 'bg-amber-500' : 'bg-red-500'
                }`}
                style={{ width: `${member.productivity}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-700">Tasks</span>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold text-slate-900">
              {member.completedTasks}
            </div>
            <div className="text-xs text-emerald-600 font-medium mt-1">
              +12% this week
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
            <MessageSquare className="w-4 h-4" />
            Message
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
            View Profile
          </button>
        </div>

        {/* Hover Effect */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
            <Zap className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;