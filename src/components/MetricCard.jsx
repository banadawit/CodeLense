import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  AlertCircle,
  Info,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const MetricCard = ({ 
  title, 
  value, 
  subtitle,
  change,
  icon,
  color = 'indigo',
  variant = 'default',
  loading = false,
  onClick,
  size = 'default',
  trendData = [],
  description
}) => {
  
  // Color configurations
  const colorSchemes = {
    indigo: {
      bg: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      border: 'border-indigo-100',
      gradient: 'from-indigo-500 to-purple-600',
      lightGradient: 'from-indigo-50 to-purple-50'
    },
    red: {
      bg: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      border: 'border-red-100',
      gradient: 'from-red-500 to-pink-600',
      lightGradient: 'from-red-50 to-pink-50'
    },
    emerald: {
      bg: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      border: 'border-emerald-100',
      gradient: 'from-emerald-500 to-green-600',
      lightGradient: 'from-emerald-50 to-green-50'
    },
    amber: {
      bg: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      border: 'border-amber-100',
      gradient: 'from-amber-500 to-orange-600',
      lightGradient: 'from-amber-50 to-orange-50'
    },
    blue: {
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      border: 'border-blue-100',
      gradient: 'from-blue-500 to-cyan-600',
      lightGradient: 'from-blue-50 to-cyan-50'
    },
    purple: {
      bg: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      border: 'border-purple-100',
      gradient: 'from-purple-500 to-violet-600',
      lightGradient: 'from-purple-50 to-violet-50'
    },
    slate: {
      bg: 'bg-slate-50',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600',
      border: 'border-slate-100',
      gradient: 'from-slate-600 to-slate-800',
      lightGradient: 'from-slate-50 to-slate-100'
    }
  };

  const colors = colorSchemes[color] || colorSchemes.indigo;
  
  // Size configurations
  const sizeClasses = {
    small: 'p-4',
    default: 'p-6',
    large: 'p-8'
  };

  // Variant configurations
  const variants = {
    default: `bg-white border ${colors.border} rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200`,
    gradient: `bg-gradient-to-br ${colors.lightGradient} border ${colors.border} rounded-xl shadow-sm`,
    minimal: `bg-transparent border-l-4 ${colors.border} pl-4`,
    elevated: `bg-white border ${colors.border} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`,
    glass: `glass-card backdrop-blur-sm bg-white/50 border border-white/20 rounded-xl shadow-lg`
  };

  // Render loading state
  if (loading) {
    return (
      <div className={`${sizeClasses[size]} ${variants[variant]} animate-pulse`}>
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-slate-200 rounded w-1/3"></div>
          <div className="h-10 w-10 bg-slate-200 rounded-lg"></div>
        </div>
        <div className="h-8 bg-slate-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
      </div>
    );
  }

  // Render minimal variant
  if (variant === 'minimal') {
    return (
      <div className={variants.minimal}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">{title}</span>
          {icon && <div className={`p-2 rounded-lg ${colors.iconBg}`}>{icon}</div>}
        </div>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        {subtitle && <div className="text-sm text-slate-500 mt-1">{subtitle}</div>}
      </div>
    );
  }

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${variants[variant]} group cursor-pointer transition-all duration-200 ${
        onClick ? 'hover:border-indigo-300' : ''
      }`}
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Icon Container */}
          <div className={`relative ${variant === 'gradient' ? 'p-2.5' : 'p-2'} rounded-xl ${colors.iconBg}`}>
            <div className={`relative z-10 ${colors.iconColor}`}>
              {icon || <Sparkles size={variant === 'gradient' ? 20 : 18} />}
            </div>
            {variant === 'gradient' && (
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-xl`}></div>
            )}
          </div>
          
          {/* Title */}
          <div>
            <h3 className="font-semibold text-slate-700 group-hover:text-slate-900">{title}</h3>
            {subtitle && (
              <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
        
        {/* Clickable indicator */}
        {onClick && (
          <ChevronRight 
            size={18} 
            className="text-slate-400 group-hover:text-indigo-500 transition-colors" 
          />
        )}
      </div>

      {/* Main Value */}
      <div className="mb-3">
        <div className="text-3xl font-bold text-slate-900 group-hover:text-slate-950">
          {value}
        </div>
        {description && (
          <p className="text-sm text-slate-500 mt-2">{description}</p>
        )}
      </div>

      {/* Trend and Change */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {change !== undefined && (
            <>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                change > 0 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : change < 0 
                  ? 'bg-red-100 text-red-700'
                  : 'bg-slate-100 text-slate-700'
              }`}>
                {change > 0 ? (
                  <TrendingUp size={12} />
                ) : change < 0 ? (
                  <TrendingDown size={12} />
                ) : (
                  <Minus size={12} />
                )}
                {Math.abs(change)}%
              </div>
              <span className="text-xs text-slate-500">
                {change > 0 ? 'Increase' : change < 0 ? 'Decrease' : 'No change'} from last period
              </span>
            </>
          )}
        </div>
        
        {/* Info/Alert indicator */}
        {change !== undefined && Math.abs(change) > 20 && (
          <AlertCircle 
            size={14} 
            className={change > 20 ? 'text-amber-500' : 'text-emerald-500'} 
          />
        )}
      </div>

      {/* Progress Bar (for percentage values) */}
      {typeof value === 'string' && value.includes('%') && (
        <div className="mt-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Progress</span>
            <span>{value}</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full bg-gradient-to-r ${colors.gradient}`}
              style={{ 
                width: value.replace('%', '') + '%',
                maxWidth: '100%'
              }}
            />
          </div>
        </div>
      )}

      {/* Mini Sparkles on hover */}
      {variant === 'elevated' && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles size={14} className="text-indigo-300" />
        </div>
      )}

      {/* Trend visualization mini chart */}
      {trendData.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-end justify-between h-10">
            {trendData.map((point, index) => (
              <div
                key={index}
                className="flex-1 mx-0.5"
                title={`Value: ${point}`}
              >
                <div
                  className={`rounded-t-sm ${
                    point > 70 
                      ? 'bg-emerald-500' 
                      : point > 30 
                      ? 'bg-amber-500'
                      : 'bg-red-500'
                  }`}
                  style={{ height: `${point}%` }}
                />
              </div>
            ))}
          </div>
          <div className="text-xs text-slate-400 text-center mt-2">
            Last {trendData.length} periods
          </div>
        </div>
      )}

      {/* Additional info tooltip */}
      {Math.abs(change || 0) > 25 && (
        <div className="absolute bottom-2 right-2 group-hover:opacity-100 opacity-0 transition-opacity">
          <Info size={12} className="text-slate-400" />
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {change > 25 
              ? 'Significant increase detected. Consider reviewing recent changes.' 
              : 'Significant decrease detected. Great progress!'}
          </div>
        </div>
      )}
    </div>
  );
};

// Example usage component showing different variations
export const MetricCardExamples = () => {
  const sampleData = {
    bugs: { value: 42, change: -12, color: 'red' },
    coverage: { value: '87%', change: 3, color: 'emerald' },
    complexity: { value: 2.4, change: -2, color: 'blue' },
    smells: { value: 156, change: 8, color: 'amber' },
    vulnerabilities: { value: 3, change: -5, color: 'purple' },
    duplications: { value: '12%', change: -15, color: 'indigo' }
  };

  const trendData = [65, 59, 80, 81, 56, 55, 40];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Metric Card Variations</h2>
      
      {/* Default Cards */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Default Style</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            title="Code Coverage"
            value="87%"
            change={3}
            color="emerald"
            subtitle="Test success rate"
            description="Above target of 80%"
          />
          <MetricCard
            title="Critical Bugs"
            value={42}
            change={-12}
            color="red"
            subtitle="Active issues"
            description="12 resolved this week"
          />
          <MetricCard
            title="Code Smells"
            value={156}
            change={8}
            color="amber"
            subtitle="Maintainability"
            description="Needs attention"
          />
        </div>
      </div>

      {/* Gradient Cards */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Gradient Style</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            title="Complexity"
            value={2.4}
            change={-2}
            color="blue"
            variant="gradient"
            subtitle="Average per method"
            trendData={trendData}
          />
          <MetricCard
            title="Duplications"
            value="12%"
            change={-15}
            color="indigo"
            variant="gradient"
            subtitle="Code clones"
          />
          <MetricCard
            title="Vulnerabilities"
            value={3}
            change={-5}
            color="purple"
            variant="gradient"
            subtitle="Security risks"
          />
        </div>
      </div>

      {/* Elevated Cards */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Elevated Style</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            title="Build Success"
            value="94%"
            change={1}
            color="emerald"
            variant="elevated"
            subtitle="Last 30 days"
          />
          <MetricCard
            title="Tech Debt"
            value="18h"
            change={-25}
            color="amber"
            variant="elevated"
            subtitle="Estimated fix time"
          />
          <MetricCard
            title="Response Time"
            value="2.3s"
            change={-8}
            color="blue"
            variant="elevated"
            subtitle="API average"
          />
        </div>
      </div>

      {/* Minimal Cards */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Minimal Style</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard
            title="Tests"
            value="1,234"
            variant="minimal"
            color="emerald"
          />
          <MetricCard
            title="Methods"
            value="8,432"
            variant="minimal"
            color="blue"
          />
          <MetricCard
            title="Files"
            value="542"
            variant="minimal"
            color="indigo"
          />
          <MetricCard
            title="LOC"
            value="48,231"
            variant="minimal"
            color="purple"
          />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;