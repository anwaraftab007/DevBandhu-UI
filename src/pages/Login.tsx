import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated login - replace with actual backend integration
    login('dummy-token');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#1a1b1e] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#2a2b2e] p-8 rounded-lg w-full max-w-md"
      >
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Code2 className="w-8 h-8 text-indigo-500" />
          <span className="text-2xl font-bold text-white">DevBandhu</span>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Welcome back!</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-[#1a1b1e] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-[#1a1b1e] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Log In
          </button>
        </form>
        
        <div className="mt-6 text-center text-gray-400">
          <p>Don't have an account? <Link to="/register" className="text-indigo-400 hover:text-indigo-300">Register</Link></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;