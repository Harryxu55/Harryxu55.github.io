import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section 
      id="about"
      className="py-16 px-4 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Ruida Business Consultancy</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ruida Business Consultancy is dedicated to providing cutting-edge ERP solutions that transform businesses by integrating production, supply chain, operations, and finance. Our AI-powered digital intelligence integration helps companies achieve greater efficiency and accelerate growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With years of expertise in Infor technologies, we ensure seamless implementation, integration, and optimization of ERP systems tailored to each client's unique needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {[
                  'Expert team with deep knowledge of Infor M3 ERP',
                  'Proven implementation methodology',
                  'Comprehensive support and training',
                  'Customized solutions for your specific business needs',
                  'Continuous improvement and optimization services'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;