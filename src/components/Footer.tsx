import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <div className="flex items-center">
                <img
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/261337133314/attachment/Ruida Logo_20250921093250.jpg"
                  alt="Ruida Consultancy Logo"
                  className="h-10 w-auto rounded-md shadow-md border-2 border-white"
                />
              </div>
           </div>
           
           <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Contact us: <a href="mailto:harry.xu@rdinfor.com" className="text-blue-400 hover:text-blue-300 cursor-pointer" target="_self">harry.xu@rdinfor.com</a></p>
             <p>Phone: <a href="tel:+8618665732630" className="text-blue-400 hover:text-blue-300">+86 18665732630</a></p>
             <p className="mt-1">© 2019 Guangzhou Ruida Business Consultancy Co., Ltd.</p>
             <p>Website developed in June 2019</p>
           </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            All rights reserved.
          </div>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;