import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProjectList from '../components/ProjectList';
import ProjectChat from '../components/ProjectChat';
import DirectMessages from '../components/DirectMessages';
import Settings from '../components/Settings';
import { Menu } from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (window.innerWidth < 768) {
      setIsProjectListOpen(false);
    }
  };

  const toggleProjectList = () => {
    setIsProjectListOpen(!isProjectListOpen);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#1a1b1e] relative">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#2a2b2e] border-b border-gray-800 flex items-center justify-between px-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-400 hover:text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
        <button
          onClick={toggleProjectList}
          className="text-sm text-gray-400 hover:text-white"
        >
          Projects
        </button>
      </div>

      {/* Overlay for mobile */}
      {(isSidebarOpen || isProjectListOpen) && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setIsSidebarOpen(false);
            setIsProjectListOpen(false);
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-50 transition-transform duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Project List */}
      <div
        className={`fixed md:relative z-50 transition-transform duration-300 transform ${
          isProjectListOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:translate-x-0 h-full`}
        style={{ top: '3.5rem', height: 'calc(100% - 3.5rem)' }}
      >
        <ProjectList />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-0 mt-14 md:mt-0">
        <Routes>
          <Route path="project/:id" element={<ProjectChat />} />
          <Route path="messages" element={<DirectMessages />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;