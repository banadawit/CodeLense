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
  Calendar,
  Users,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function TopNav({ onOpenSidebar }) {
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);
  const calendarRef = useRef(null);
  const helpRef = useRef(null);

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


  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setShowHelp(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle ESC key for fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

     const handleEscapeKey = (e) => {
       if (e.key === 'Escape') {
         setShowNotifications(false);
         setShowUserMenu(false);
         setShowCalendar(false);
         setShowHelp(false);
       }
     };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // Mark all notifications as read
  const markAllAsRead = () => {
    // In a real app, you would update the backend here
    console.log('Mark all notifications as read');
    setShowNotifications(false);
  };

  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/50 bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        
        {/* Left Section - Menu & Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onOpenSidebar}
            className="md:hidden p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white rounded-xl transition-all duration-200 border border-slate-700/50"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          {/* Logo - Hidden on mobile, shows only icon */}
          <div className="flex items-center gap-3">
            {/* Mobile Logo Icon Only */}
            <div className="md:hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur opacity-70"></div>
              <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
                <span className="text-indigo-300 font-bold text-sm">CD</span>
              </div>
            </div>

            {/* Desktop Logo Full */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur opacity-70"></div>
                <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
                  <span className="text-indigo-300 font-bold text-sm">CD</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-2xl mx-4 sm:mx-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search files, issues, or metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-9 sm:pr-10 py-2 sm:py-2.5 text-sm rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white p-1"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white rounded-xl transition-all duration-200 border border-slate-700/50 hidden sm:block"
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>

        

            {/* Calendar */}
            <div className="relative" ref={calendarRef}>
              <button 
                onClick={() => setShowCalendar(!showCalendar)}
                className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white rounded-xl transition-all duration-200 border border-slate-700/50 hidden lg:block"
                aria-label="Open calendar"
              >
                <Calendar size={18} />
              </button>
              
              {showCalendar && (
                <div className="absolute right-0 mt-2 w-80 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-2xl shadow-black/50 border border-slate-800 z-40">
                  <div className="p-4 border-b border-slate-800/50">
                    <h3 className="font-semibold text-white">Calendar</h3>
                  </div>
                  <div className="p-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-white">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                      <div className="text-sm text-slate-400 mt-1">{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="font-semibold text-slate-400 py-2">{day}</div>
                      ))}
                    </div>
                    <div className="text-sm text-slate-400 text-center py-4 border-t border-slate-800/50 mt-4">
                      Calendar view coming soon...
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Help */}
            <div className="relative" ref={helpRef}>
              <button 
                onClick={() => setShowHelp(!showHelp)}
                className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white rounded-xl transition-all duration-200 border border-slate-700/50"
                aria-label="Get help"
              >
                <HelpCircle size={18} />
              </button>
              
              {showHelp && (
                <div className="absolute right-0 mt-2 w-80 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-2xl shadow-black/50 border border-slate-800 z-40">
                  <div className="p-4 border-b border-slate-800/50">
                    <h3 className="font-semibold text-white">Help & Support</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <a href="/docs" className="block p-3 hover:bg-slate-800/50 rounded-lg border border-slate-800/50 transition-colors">
                      <div className="font-medium text-white">Documentation</div>
                      <div className="text-sm text-slate-400 mt-1">View user guides and tutorials</div>
                    </a>
                    <a href="/faq" className="block p-3 hover:bg-slate-800/50 rounded-lg border border-slate-800/50 transition-colors">
                      <div className="font-medium text-white">FAQ</div>
                      <div className="text-sm text-slate-400 mt-1">Frequently asked questions</div>
                    </a>
                    <a href="/contact" className="block p-3 hover:bg-slate-800/50 rounded-lg border border-slate-800/50 transition-colors">
                      <div className="font-medium text-white">Contact Support</div>
                      <div className="text-sm text-slate-400 mt-1">Get help from our team</div>
                    </a>
                    <div className="pt-3 border-t border-slate-800/50">
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 font-medium transition-all">
                        Open Support Ticket
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Settings */}
            <button 
              onClick={() => {
                navigate('/settings');
                setShowCalendar(false);
                setShowHelp(false);
              }}
              className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white rounded-xl transition-all duration-200 border border-slate-700/50 hidden sm:block"
              aria-label="Open settings"
            >
              <Settings size={18} />
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white rounded-xl transition-all duration-200 border border-slate-700/50 relative"
                aria-label={`Notifications ${unreadNotifications > 0 ? `(${unreadNotifications} unread)` : ''}`}
              >
                <Bell size={18} />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-br from-red-500 to-pink-600 text-white text-xs rounded-full flex items-center justify-center border-2 border-slate-900">
                    {unreadNotifications}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-2xl shadow-black/50 border border-slate-800 z-40">
                  <div className="p-4 border-b border-slate-800/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">Notifications</h3>
                      <button
                        onClick={markAllAsRead}
                        className="text-sm text-indigo-400 hover:text-indigo-300 cursor-pointer"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-slate-800/30 hover:bg-slate-800/30 cursor-pointer ${
                            !notification.read ? 'bg-indigo-500/5' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${
                              notification.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' :
                              notification.type === 'warning' ? 'bg-amber-500/10 text-amber-400' :
                              'bg-blue-500/10 text-blue-400'
                            }`}>
                              {notification.type === 'success' && '✓'}
                              {notification.type === 'warning' && '⚠'}
                              {notification.type === 'info' && 'i'}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white">{notification.title}</div>
                              <div className="text-sm text-slate-400 mt-1">{notification.message}</div>
                              <div className="text-xs text-slate-500 mt-2">{notification.time}</div>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <div className="text-slate-400 mb-2">No notifications</div>
                        <div className="text-sm text-slate-500">You're all caught up!</div>
                      </div>
                    )}
                  </div>
                  <div className="p-3 border-t border-slate-800/50 text-center">
                    <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* User Profile */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 hover:bg-slate-800/50 rounded-xl transition-all duration-200 group ml-1 sm:ml-2"
              aria-label="User menu"
              aria-expanded={showUserMenu}
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  BD
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
              </div>
              <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform group-hover:text-white ${
                showUserMenu ? 'rotate-180' : ''
              }`} />
            </button>

            {/* User Menu Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-2xl shadow-black/50 border border-slate-800 z-40 overflow-hidden">
                {/* User Info */}
                <div className="p-4 border-b border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        BD
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Bana Dawit</div>
                      <div className="text-sm text-slate-400">bana@example.com</div>
                      <div className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full inline-block mt-1">
                        Senior Developer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <a 
                    href="/profile" 
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile Settings</span>
                  </a>
                  <a 
                    href="/account" 
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <Settings className="w-4 h-4" />
                    <span>Account Settings</span>
                  </a>
                  <a 
                    href="/team" 
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <Users className="w-4 h-4" />
                    <span>Team Management</span>
                  </a>
                </div>

                <div className="border-t border-slate-800/50 py-2">
                  <button 
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-300 hover:text-red-400 hover:bg-slate-800/50 transition-colors w-full"
                    onClick={() => {
                      console.log('Sign out');
                      setShowUserMenu(false);
                    }}
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNav;