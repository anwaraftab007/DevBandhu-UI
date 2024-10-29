import React from 'react';
import { User, Bell, Shield, Monitor } from 'lucide-react';

const Settings = () => {
  return (
    <div className="flex-1 bg-[#1a1b1e] p-8">
      <h2 className="text-2xl font-bold text-white mb-8">Settings</h2>

      <div className="space-y-6">
        <div className="bg-[#2a2b2e] rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-semibold text-white">Profile Settings</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Display Name
              </label>
              <input
  type="text"
  className="w-full bg-[#1a1b1e] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  defaultValue="John Doe"
/>

            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-[#1a1b1e] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                defaultValue="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Bio
              </label>
              <textarea
                className="w-full bg-[#1a1b1e] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
                defaultValue="Full-stack developer passionate about creating amazing web applications."
              />
            </div>
          </div>
        </div>

        <div className="bg-[#2a2b2e] rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-semibold text-white">Notifications</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Desktop Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-[#2a2b2e] rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-semibold text-white">Security</h3>
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors">
              Change Password
            </button>
            
            <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors">
              Enable Two-Factor Authentication
            </button>
          </div>
        </div>

        <div className="bg-[#2a2b2e] rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Monitor className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-semibold text-white">Appearance</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;