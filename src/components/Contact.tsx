import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact"
      className="py-16 px-4 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Ready to transform your business with our ERP solutions? Contact us today to discuss how we can help you achieve your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                <a 
                  href="mailto:harry.xu@rdinfor.com" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer"
                  target="_self"
                >
                  harry.xu@rdinfor.com
                </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+8618665732630" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                      +86 18665732630
                    </a>
                  </div>
                </div>
              </div>
              
                 <motion.a
                    href="mailto:harry.xu@rdinfor.com"
                    className="inline-flex items-center mt-8 px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    target="_self"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.a>
            </div>
            
            {/* Map/Decorative section */}
            <div className="hidden md:block relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                  <p className="mb-6">Our experts are here to help you every step of the way.</p>
                  <motion.div 
                    className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-white bg-opacity-40 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;