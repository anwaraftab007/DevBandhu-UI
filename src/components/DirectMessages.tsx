import React, { useState } from 'react';
import { Search, Send, Paperclip, Smile } from 'lucide-react';

const mockUsers = [
  { id: 1, name: 'Alice Johnson', status: 'online' },
  { id: 2, name: 'Bob Smith', status: 'offline' },
  { id: 3, name: 'Charlie Brown', status: 'online' },
];

const DirectMessages = () => {
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-[#2a2b2e] border-r border-gray-800">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full bg-[#1a1b1e] text-white pl-9 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-88px)]">
          {mockUsers.map((user) => (
            <button
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-[#1a1b1e] ${
                selectedUser.id === user.id ? 'bg-[#1a1b1e]' : ''
              }`}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                <div
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#2a2b2e] ${
                    user.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                ></div>
              </div>
              <div className="flex-1 text-left">
                <div className="text-white text-sm">{user.name}</div>
                <div className="text-gray-400 text-xs">{user.status}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-[#1a1b1e]">
        <div className="border-b border-gray-800 p-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1a1b1e] ${
                  selectedUser.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                }`}
              ></div>
            </div>
            <div>
              <div className="text-white font-semibold">{selectedUser.name}</div>
              <div className="text-gray-400 text-sm">{selectedUser.status}</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Chat messages would go here */}
        </div>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-[#2a2b2e] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            
            <button 
              className="p-2 text-gray-400 hover:text-white transition-colors"
              disabled={!message.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectMessages;