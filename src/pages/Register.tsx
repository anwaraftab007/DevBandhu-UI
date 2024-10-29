import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Simulated registration - replace with actual backend integration
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
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create an account</h2>
        
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
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
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

          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full bg-[#1a1b1e] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Register
          </button>
        </form>
        
        <div className="mt-6 text-center text-gray-400">
          <p>Already have an account? <Link to="/login" className="text-indigo-400 hover:text-indigo-300">Login</Link></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;