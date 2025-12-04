import { 
  Menu, 
  Search, 
  Bell, 
  HelpCircle, 
  Settings,
  ChevronDown,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
  User,
  LogOut,
  Calendar
} from "lucide-react";
import { useState, useEffect } from "react";

function TopNav({ onOpenSidebar }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock notifications
  const notifications = [
    { id: 1, type: 'success', title: 'Build Successful', message: 'Production build completed', time: '2 min ago', read: false },
    { id: 2, type: 'warning', title: 'High Complexity', message: 'File has high complexity', time: '1 hour ago', read: false },
    { id: 3, type: 'info', title: 'New Team Member', message: 'Sarah joined the Backend team', time: '2 hours ago', read: true },
  ];

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Handle ESC key for fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center justify-between">
        
        {/* Left Section - Menu & Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onOpenSidebar}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          {/* <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-gray-900 text-lg">CodeLense</h1>
              <p className="text-xs text-gray-500">Code Analysis Dashboard</p>
            </div>
          </div> */}
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search files, issues, or metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center gap-2">
          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden sm:block"
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>

            {/* Theme */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden sm:block"
              title={darkMode ? 'Light mode' : 'Dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Calendar */}
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden lg:block">
              <Calendar size={20} />
            </button>

            {/* Help */}
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <HelpCircle size={20} />
            </button>

            {/* Settings */}
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden sm:block">
              <Settings size={20} />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative"
              >
                <Bell size={20} />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadNotifications}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-40">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b hover:bg-gray-50 ${
                            !notification.read ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                              notification.type === 'success' ? 'bg-green-100 text-green-600' :
                              notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {notification.type === 'success' ? '✓' : '!'}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{notification.title}</div>
                              <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                              <div className="text-xs text-gray-400 mt-2">{notification.time}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        View all
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 p-1 hover:bg-gray-100 rounded-lg ml-2"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-medium">
                BD
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                showUserMenu ? 'rotate-180' : ''
              }`} />
            </button>

            {/* User Menu Dropdown */}
            {showUserMenu && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setShowUserMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-40">
                  {/* User Info */}
                  <div className="p-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-medium">
                        BD
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Bana Dawit</div>
                        <div className="text-sm text-gray-500">Admin</div>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <a href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50">
                      <User size={18} />
                      <span>Profile</span>
                    </a>
                    <a href="/settings" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50">
                      <Settings size={18} />
                      <span>Settings</span>
                    </a>
                  </div>

                  <div className="border-t py-2">
                    <button className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 w-full">
                      <LogOut size={18} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNav;