import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  // 将IDM、Infor ION & MEC技术与其他核心模块放在同一级别
  const coreModules = [
    'IDM (Infor Document Management)',
    'Infor ION and MEC Technology',
    'Sales',
    'Procurement',
    'Supply Chain Management',
    'Warehouse Management',
    'Manufacturing Management',
    'Finance Management',
    'StreamServe (MOM output)',
    'Finance Golden Tax',
    'Infor Factory Track'
  ];

  return (
    <section 
      id="services"
      className="py-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Business Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Implement the Infor M3 ERP project utilizing an efficient ERP implementation methodology, 
            encompassing the following core modules:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {coreModules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-lg p-4 flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 font-medium">
                  {index + 1}
                </div>
                <span className="font-medium text-gray-800">{module}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold mb-2">Why Choose Our ERP Solutions?</h3>
            <p>
              Our expertise in Infor technologies ensures seamless implementation, integration, and optimization of your ERP system,
              driving operational efficiency and business growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;