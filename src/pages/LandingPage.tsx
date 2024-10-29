import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Users, MessageSquare, Rocket } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1e] text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-indigo-500" />
            <span className="text-2xl font-bold">DevBandhu</span>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
            <Link 
              to="/register" 
              className="bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Where Developers Unite
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            DevBandhu is your collaborative haven for coding projects. Connect, create, and code together in real-time.
          </p>
          <Link 
            to="/register" 
            className="bg-indigo-500 px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-600 transition-colors inline-block"
          >
            Join the Community
          </Link>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="bg-[#2a2b2e] py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#1a1b1e] p-6 rounded-lg"
            >
              <Users className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-400">Work together seamlessly with real-time collaboration tools.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#1a1b1e] p-6 rounded-lg"
            >
              <MessageSquare className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Chat</h3>
              <p className="text-gray-400">Communicate instantly with team members through integrated chat.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#1a1b1e] p-6 rounded-lg"
            >
              <Rocket className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-gray-400">Organize and track your projects with powerful management tools.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1b1e] py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 DevBandhu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;