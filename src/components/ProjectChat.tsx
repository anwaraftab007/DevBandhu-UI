import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Paperclip, Smile } from 'lucide-react';

const mockMessages = [
  { id: 1, user: 'Alice', content: 'Hey team, hows the progress on the new feature?', time: '10:30 AM' },
  { id: 2, user: 'Bob', content: 'Working on it! Should be done by EOD.', time: '10:32 AM' },
  { id: 3, user: 'Charlie', content: 'I can help review the PR once its ready.', time: '10:35 AM' },
];

const ProjectChat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1b1e]">
      <div className="border-b border-gray-800 p-4">
        <h2 className="text-xl font-semibold text-white">Project #{id}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mockMessages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <div className="flex items-baseline space-x-2">
              <span className="font-semibold text-white">{msg.user}</span>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </div>
            <p className="text-gray-300 mt-1">{msg.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-[#2a2b2e] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <Smile className="w-5 h-5" />
          </button>
          
          <button
            type="submit"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            disabled={!message.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectChat;