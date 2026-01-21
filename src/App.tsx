import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      {/* 动态背景层 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        {/* 动态气泡效果 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-30 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      
      <div className="min-h-screen bg-transparent flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={
              <div className="min-h-screen py-8">
                <div className="container mx-auto max-w-6xl">
                  <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h1>
                  <Services />
                </div>
              </div>
            } />
            <Route path="/about" element={
              <div className="min-h-screen py-8">
                <div className="container mx-auto max-w-6xl">
                  <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">About Us</h1>
                  <About />
                </div>
              </div>
            } />
            <Route path="/contact" element={
              <div className="min-h-screen py-8">
                <div className="container mx-auto max-w-6xl">
                  <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact Us</h1>
                  <Contact />
                </div>
              </div>
            } />
            <Route path="/other" element={<div className="text-center text-xl py-12">Other Page - Coming Soon</div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}
