import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';

const mockProjects = [
  { id: 1, name: 'React Dashboard', unread: 3 },
  { id: 2, name: 'API Gateway', unread: 0 },
  { id: 3, name: 'Mobile App', unread: 1 },
];

const ProjectList = () => {
  return (
    <div className="w-64 bg-[#2a2b2e] flex flex-col h-screen">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full bg-[#1a1b1e] text-white pl-9 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {mockProjects.map((project) => (
          <Link
            key={project.id}
            to={`/dashboard/project/${project.id}`}
            className="flex items-center justify-between px-4 py-2 hover:bg-[#1a1b1e] text-gray-300 hover:text-white"
          >
            <span>{project.name}</span>
            {project.unread > 0 && (
              <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                {project.unread}
              </span>
            )}
          </Link>
        ))}
      </div>

      <button className="m-4 flex items-center justify-center space-x-2 bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors">
        <Plus className="w-4 h-4" />
        <span>New Project</span>
      </button>
    </div>
  );
};

export default ProjectList;