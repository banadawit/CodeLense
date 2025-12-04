import React, { useState } from "react";
import {
  User,
  Bell,
  Palette,
  ShieldCheck,
  Mail,
  Lock,
  Globe,
  Database,
  Zap,
  Cpu,
  Moon,
  Sun,
  Keyboard,
  Volume2,
  Eye,
  EyeOff,
  Trash2,
  Download,
  Upload,
  Key,
  CreditCard,
  Users,
  GitBranch,
  Code2,
  Server,
  Cloud,
  Wifi,
  WifiOff,
  CheckCircle,
  XCircle,
  AlertCircle,
  Settings as SettingsIcon,
  Save,
  RefreshCw,
  ChevronRight,
  Sparkles,
  Target,
  BarChart3,
  Activity,
  Shield,
  ShieldOff,
  BellOff,
  BellRing,
  Palette as PaletteIcon,
  UserCog,
  Network,
  Terminal,
  FileCode,
  GitPullRequest,
  Clock,
  Calendar,
  TrendingUp,
  TrendingDown,
  Plus,
  Minus,
  Maximize2,
  Minimize2,
  Grid,
  Columns,
  Layout,
  Monitor,
  Smartphone,
  Tablet
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    updates: true,
    securityAlerts: true,
    weeklyReports: false,
    mentions: true,
    deadlineReminders: true,
  });
  const [privacySettings, setPrivacySettings] = useState({
    profileVisible: true,
    activityPublic: false,
    emailVisible: false,
    showOnlineStatus: true,
    dataCollection: true,
    analytics: true,
  });
  const [performanceSettings, setPerformanceSettings] = useState({
    realTimeUpdates: true,
    cacheEnabled: true,
    compression: true,
    lazyLoading: true,
    hardwareAcceleration: true,
    backgroundSync: true,
  });
  const [developerSettings, setDeveloperSettings] = useState({
    debugMode: false,
    apiLogging: false,
    experimentalFeatures: false,
    hotReload: true,
    sourceMaps: true,
    performanceMonitoring: true,
  });
  const [integrations, setIntegrations] = useState({
    github: true,
    slack: false,
    jira: false,
    figma: true,
    sentry: true,
    datadog: false,
  });

  const tabs = [
    { id: "general", label: "General", icon: <SettingsIcon className="w-5 h-5" /> },
    { id: "appearance", label: "Appearance", icon: <PaletteIcon className="w-5 h-5" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="w-5 h-5" /> },
    { id: "security", label: "Security", icon: <ShieldCheck className="w-5 h-5" /> },
    { id: "performance", label: "Performance", icon: <Zap className="w-5 h-5" /> },
    { id: "privacy", label: "Privacy", icon: <Eye className="w-5 h-5" /> },
    { id: "developer", label: "Developer", icon: <Code2 className="w-5 h-5" /> },
    { id: "integrations", label: "Integrations", icon: <GitBranch className="w-5 h-5" /> },
  ];

  const [profile, setProfile] = useState({
    name: "Bana Dawit",
    email: "bana@example.com",
    role: "Senior Full-Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=32",
    location: "Addis Ababa, Ethiopia",
    timezone: "GMT+3",
    language: "English",
    bio: "Passionate about building beautiful, scalable applications.",
  });

  const [theme, setTheme] = useState({
    primaryColor: "indigo",
    accentColor: "purple",
    density: "comfortable",
    fontSize: "medium",
    borderRadius: "medium",
    animations: true,
    shadows: true,
  });

  const themes = [
    { id: "light", name: "Light", icon: <Sun className="w-5 h-5" /> },
    { id: "dark", name: "Dark", icon: <Moon className="w-5 h-5" /> },
    { id: "auto", name: "Auto", icon: <Monitor className="w-5 h-5" /> },
  ];

  const colorOptions = [
    { id: "indigo", name: "Indigo", color: "bg-indigo-600" },
    { id: "emerald", name: "Emerald", color: "bg-emerald-600" },
    { id: "rose", name: "Rose", color: "bg-rose-600" },
    { id: "amber", name: "Amber", color: "bg-amber-600" },
    { id: "cyan", name: "Cyan", color: "bg-cyan-600" },
    { id: "purple", name: "Purple", color: "bg-purple-600" },
  ];

  const densityOptions = [
    { id: "compact", name: "Compact", description: "More content, less spacing" },
    { id: "comfortable", name: "Comfortable", description: "Balanced spacing" },
    { id: "spacious", name: "Spacious", description: "More whitespace" },
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-8">
      {/* Profile Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
            <UserCog className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Profile Settings</h3>
            <p className="text-slate-600">Manage your account information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <h4 className="text-lg font-bold text-slate-900">{profile.name}</h4>
              <p className="text-slate-600">{profile.role}</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Bio</label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                value={profile.bio}
                onChange={(e) => setProfile({...profile, bio: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={profile.location}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Timezone</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option>GMT+3 (East Africa Time)</option>
                  <option>GMT+0 (UTC)</option>
                  <option>GMT-5 (Eastern Time)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option>English</option>
                  <option>Amharic</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Settings */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600">
            <SettingsIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Application Settings</h3>
            <p className="text-slate-600">General application preferences</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <div className="font-medium text-slate-900">Auto Save</div>
              <div className="text-sm text-slate-600">Automatically save changes</div>
            </div>
            <ToggleSwitch checked={autoSave} onChange={() => setAutoSave(!autoSave)} />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <div className="font-medium text-slate-900">Real-time Updates</div>
              <div className="text-sm text-slate-600">Live updates from other team members</div>
            </div>
            <ToggleSwitch checked={performanceSettings.realTimeUpdates} onChange={() => setPerformanceSettings({...performanceSettings, realTimeUpdates: !performanceSettings.realTimeUpdates})} />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <div className="font-medium text-slate-900">Offline Mode</div>
              <div className="text-sm text-slate-600">Work without internet connection</div>
            </div>
            <ToggleSwitch checked={true} onChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-8">
      {/* Theme Selection */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
            <PaletteIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Theme</h3>
            <p className="text-slate-600">Choose your interface theme</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {themes.map((themeOption) => (
            <button
              key={themeOption.id}
              onClick={() => setDarkMode(themeOption.id === "dark")}
              className={`p-4 rounded-xl border-2 transition-all ${
                (themeOption.id === "dark" && darkMode) || 
                (themeOption.id === "light" && !darkMode) ||
                themeOption.id === "auto"
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-slate-100">
                  {themeOption.icon}
                </div>
                <div className="text-left">
                  <div className="font-medium text-slate-900">{themeOption.name}</div>
                </div>
              </div>
              <div className={`h-20 rounded-lg ${
                themeOption.id === "dark" ? "bg-slate-900" :
                themeOption.id === "light" ? "bg-white border border-slate-200" :
                "bg-gradient-to-r from-slate-900 to-white"
              }`} />
            </button>
          ))}
        </div>

        {/* Color Customization */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Color Scheme</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {colorOptions.map((color) => (
              <button
                key={color.id}
                onClick={() => setTheme({...theme, primaryColor: color.id})}
                className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                  theme.primaryColor === color.id
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className={`w-10 h-10 ${color.color} rounded-full mb-2`} />
                <div className="text-sm font-medium text-slate-900">{color.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Density Settings */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Layout Density</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {densityOptions.map((density) => (
              <button
                key={density.id}
                onClick={() => setTheme({...theme, density: density.id})}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  theme.density === density.id
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="font-medium text-slate-900 mb-1">{density.name}</div>
                <div className="text-sm text-slate-600">{density.description}</div>
                <div className="mt-3 space-y-1">
                  <div className={`h-1 rounded-full ${
                    density.id === "compact" ? "w-full bg-slate-400" :
                    density.id === "comfortable" ? "w-3/4 bg-slate-400" :
                    "w-1/2 bg-slate-400"
                  }`} />
                  <div className={`h-1 rounded-full ${
                    density.id === "compact" ? "w-full bg-slate-300" :
                    density.id === "comfortable" ? "w-3/4 bg-slate-300" :
                    "w-1/2 bg-slate-300"
                  }`} />
                  <div className={`h-1 rounded-full ${
                    density.id === "compact" ? "w-full bg-slate-200" :
                    density.id === "comfortable" ? "w-3/4 bg-slate-200" :
                    "w-1/2 bg-slate-200"
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Appearance */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Advanced Appearance</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <div className="font-medium text-slate-900">Animations</div>
              <div className="text-sm text-slate-600">Enable interface animations</div>
            </div>
            <ToggleSwitch checked={theme.animations} onChange={() => setTheme({...theme, animations: !theme.animations})} />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <div className="font-medium text-slate-900">Shadows & Depth</div>
              <div className="text-sm text-slate-600">Enable shadow effects</div>
            </div>
            <ToggleSwitch checked={theme.shadows} onChange={() => setTheme({...theme, shadows: !theme.shadows})} />
          </div>

          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="font-medium text-slate-900 mb-2">Font Size</div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-600 hover:text-slate-900">
                <Minus className="w-5 h-5" />
              </button>
              <div className="flex-1">
                <input
                  type="range"
                  min="12"
                  max="20"
                  value="16"
                  className="w-full"
                />
              </div>
              <button className="p-2 text-slate-600 hover:text-slate-900">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Notification Preferences</h3>
            <p className="text-slate-600">Choose what notifications you receive</p>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <div className="font-medium text-slate-900 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </div>
                <div className="text-sm text-slate-600">
                  {key === "email" && "Receive notifications via email"}
                  {key === "push" && "Browser and mobile push notifications"}
                  {key === "updates" && "Product updates and new features"}
                  {key === "securityAlerts" && "Security and access alerts"}
                  {key === "weeklyReports" && "Weekly activity reports"}
                  {key === "mentions" && "When someone mentions you"}
                  {key === "deadlineReminders" && "Project deadline reminders"}
                </div>
              </div>
              <ToggleSwitch
                checked={value}
                onChange={() => setNotifications({...notifications, [key]: !value})}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Notification Channels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-slate-600" />
              <div className="font-medium text-slate-900">Email</div>
            </div>
            <div className="text-sm text-slate-600 mb-4">Configure email notification settings</div>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              Configure Email Settings →
            </button>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <BellRing className="w-5 h-5 text-slate-600" />
              <div className="font-medium text-slate-900">Push Notifications</div>
            </div>
            <div className="text-sm text-slate-600 mb-4">Browser and mobile push settings</div>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              Configure Push Settings →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-600">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Security & Access</h3>
            <p className="text-slate-600">Manage your account security</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium text-slate-900">Password</div>
                <div className="text-sm text-slate-600">Last changed 30 days ago</div>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
                Change Password
              </button>
            </div>
            <div className="text-sm text-slate-500">Use a strong, unique password</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium text-slate-900">Two-Factor Authentication</div>
                <div className="text-sm text-slate-600">Add an extra layer of security</div>
              </div>
              <ToggleSwitch checked={true} onChange={() => {}} />
            </div>
            <div className="text-sm text-slate-500">Currently enabled via authenticator app</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium text-slate-900">Active Sessions</div>
                <div className="text-sm text-slate-600">3 devices currently active</div>
              </div>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                View All Sessions →
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-white rounded-lg">
                <Monitor className="w-4 h-4 text-slate-400" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-900">Chrome on Windows</div>
                  <div className="text-xs text-slate-500">Current session • Addis Ababa</div>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex items-center gap-3 p-2 bg-white rounded-lg">
                <Smartphone className="w-4 h-4 text-slate-400" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-900">Safari on iPhone</div>
                  <div className="text-xs text-slate-500">Active 2 hours ago • Addis Ababa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Data & Privacy</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <div className="font-medium text-slate-900">Data Export</div>
              <div className="text-sm text-slate-600">Download all your data</div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Export Data</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <div className="font-medium text-slate-900">Account Deletion</div>
              <div className="text-sm text-slate-600">Permanently delete your account</div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
              <Trash2 className="w-4 h-4" />
              <span className="text-sm font-medium">Delete Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ToggleSwitch = ({ checked, onChange }) => (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={onChange}
      />
      <div className="peer h-7 w-14 rounded-full bg-slate-300 transition-all duration-300 peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-600"></div>
      <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-lg transition-all duration-300 peer-checked:translate-x-7"></span>
    </label>
  );

  // Missing Edit icon component
  const Edit = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <SettingsIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Settings
              </h1>
              <p className="text-sm md:text-base text-slate-500 flex items-center gap-2 mt-1">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Customize your CodeLense experience
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="mb-8">
          {activeTab === "general" && renderGeneralSettings()}
          {activeTab === "appearance" && renderAppearanceSettings()}
          {activeTab === "notifications" && renderNotificationSettings()}
          {activeTab === "security" && renderSecuritySettings()}
          {activeTab === "performance" && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Performance Settings</h3>
              <p className="text-slate-600">Advanced performance optimization options</p>
            </div>
          )}
          {activeTab === "privacy" && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Privacy Settings</h3>
              <p className="text-slate-600">Data privacy and sharing preferences</p>
            </div>
          )}
          {activeTab === "developer" && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4">
                <Code2 className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Developer Settings</h3>
              <p className="text-slate-600">Advanced settings for developers</p>
            </div>
          )}
          {activeTab === "integrations" && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4">
                <GitBranch className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Integrations</h3>
              <p className="text-slate-600">Connect with other tools and services</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
          <div className="text-sm text-slate-500">
            Your settings are automatically saved
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <RefreshCw className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Reset to Defaults</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
              <Save className="w-4 h-4" />
              <span className="text-sm font-medium">Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}