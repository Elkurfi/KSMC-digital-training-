
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-500 mb-6 tracking-tight">KSMC Digital Training Program</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              A community-driven initiative aimed at empowering Kaduna's youth with the digital tools and knowledge to excel in a global market.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#details" className="hover:text-green-500 transition-colors">Program Details</a></li>
              <li><a href="#registration" className="hover:text-green-500 transition-colors">Registration</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Program Office</h4>
            <p className="text-gray-400 leading-relaxed">
              Kaduna State Media Corporation (KSMC)<br />
              No. 11/12 Waff Road,<br />
              Kaduna State, Nigeria.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} KSMC Digital Training Program – Kaduna. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
