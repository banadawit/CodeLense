import { useState } from "react";
import { User, Bell, Palette, ShieldCheck } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* PROFILE SETTINGS */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <div className="flex items-center gap-3 mb-4">
          <User className="text-indigo-600" />
          <h2 className="text-xl font-semibold">Profile Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-1"
              defaultValue="John Doe"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg mt-1"
              defaultValue="john@example.com"
            />
          </div>

        </div>
      </div>

      {/* APPEARANCE */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Palette className="text-indigo-600" />
          <h2 className="text-xl font-semibold">Appearance</h2>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-700">Dark Mode</p>

          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer hidden"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-300 transition-all peer-checked:bg-indigo-600"></div>
            <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:translate-x-5"></span>
          </label>
        </div>
      </div>

      {/* NOTIFICATION SETTINGS */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-indigo-600" />
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>

        <div className="space-y-4">

          {/* Email */}
          <label className="flex items-center justify-between cursor-pointer">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() =>
                setNotifications({ ...notifications, email: !notifications.email })
              }
              className="w-5 h-5"
            />
          </label>

          {/* Push */}
          <label className="flex items-center justify-between cursor-pointer">
            <span>Push Alerts</span>
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={() =>
                setNotifications({ ...notifications, push: !notifications.push })
              }
              className="w-5 h-5"
            />
          </label>

          {/* Updates */}
          <label className="flex items-center justify-between cursor-pointer">
            <span>Product Updates</span>
            <input
              type="checkbox"
              checked={notifications.updates}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  updates: !notifications.updates,
                })
              }
              className="w-5 h-5"
            />
          </label>

        </div>
      </div>

      {/* SECURITY */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="text-indigo-600" />
          <h2 className="text-xl font-semibold">Security</h2>
        </div>

        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Change Password
        </button>
      </div>
    </div>
  );
}
