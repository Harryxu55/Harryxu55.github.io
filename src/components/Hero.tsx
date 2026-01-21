import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="pt-20 pb-16 px-4 bg-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        {/* 美化后的Banner图片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full w-full h-[400px] md:h-[450px] shadow-2xl mb-12"
        >
          {/* 美化处理：添加图片 */}
          <img 
            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/261337133314/attachment/Banner of Rdinfor_20250921162658.jpg" 
            alt="Ruida Digital Intelligence Integration" 
            className="w-full h-full object-cover"
          />
          {/* 美化处理：添加渐变叠加层增强文字可读性 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"></div>
          
          {/* 标题文字 */}
          <div className="absolute inset-0 flex items-center px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                AI-powered Digital Intelligence Integration: Full Integration of Production, Supply Chain, Operations, and Finance – ERP Drives Efficiency and Accelerates Growth!
              </h1>
            </motion.div>
          </div>
        </motion.div>
        
        {/* 核心价值主张 */}
        <motion.div
          className="mt-6 p-8 bg-white rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2 className="text-xl font-bold text-blue-800 mb-3">Production Integration</h2>
              <p className="text-gray-700">Seamlessly connect all manufacturing processes for optimized productivity and reduced downtime.</p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2 className="text-xl font-bold text-blue-800 mb-3">Supply Chain Management</h2>
              <p className="text-gray-700">Gain full visibility and control over your supply chain from procurement to delivery.</p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2 className="text-xl font-bold text-blue-800 mb-3">Financial Intelligence</h2>
              <p className="text-gray-700">Leverage real-time financial data for better decision making and business growth.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;