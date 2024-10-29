import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2, MessageSquare, Settings, LogOut, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 md:w-16 bg-[#1a1b1e] border-r border-gray-800 h-screen flex flex-col items-center py-4">
      {/* Mobile Close Button */}
      <div className="md:hidden w-full px-4 mb-4 flex justify-between items-center">
        <span className="text-white font-semibold">Menu</span>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <Link to="/dashboard" className="mb-8" onClick={onClose}>
        <Code2 className="w-8 h-8 text-indigo-500" />
      </Link>

      <div className="flex-1 space-y-4">
        <Link 
          to="/dashboard/messages" 
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#2a2b2e] text-gray-400 hover:text-white transition-colors"
          onClick={onClose}
        >
          <MessageSquare className="w-5 h-5" />
        </Link>

        <Link 
          to="/dashboard/settings" 
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#2a2b2e] text-gray-400 hover:text-white transition-colors"
          onClick={onClose}
        >
          <Settings className="w-5 h-5" />
        </Link>
      </div>

      <button
        onClick={() => {
          handleLogout();
          onClose?.();
        }}
        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#2a2b2e] text-gray-400 hover:text-white transition-colors"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Sidebar;