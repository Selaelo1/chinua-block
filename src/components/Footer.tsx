import React from 'react';
import { Globe2, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Globe2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">ChanuaBlock</span>
            </div>
            <p className="mt-4 text-blue-300 max-w-md">
              Democratizing global investment access for Africa through blockchain technology.
              Join us in building a more inclusive financial future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-blue-300 hover:text-white">Features</a></li>
              <li><a href="#invest" className="text-blue-300 hover:text-white">Invest</a></li>
              <li><a href="#how-it-works" className="text-blue-300 hover:text-white">How it Works</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:info@chanuablock.com" className="text-blue-300 hover:text-white">
                  info@chanuablock.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-blue-300">+254 700 000000</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800">
          <p className="text-center text-blue-400">
            © {new Date().getFullYear()} ChanuaBlock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;