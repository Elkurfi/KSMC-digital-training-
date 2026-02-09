
import React from 'react';
import { CONTACT_NUMBERS } from '../constants';
import { MessageSquare, PhoneCall } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Join the 2026 Cohort</h2>
          <p className="text-xl text-gray-600">
            Registration is currently <span className="font-bold text-green-700">ONGOING</span>. 
            Claim your spot by contacting our team via Phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTACT_NUMBERS.map((contact, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-green-50 transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Representative {index + 1}</span>
                <PhoneCall className="w-5 h-5 text-gray-400 group-hover:text-green-700 transition-colors" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-6">{contact.display}</p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${contact.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${contact.wa}`}
                  className="flex items-center justify-center w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:border-green-700 hover:text-green-700 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-orange-50 rounded-2xl border border-orange-100 text-center">
          <h3 className="text-lg font-bold text-orange-800 mb-2">Instructions for Registration:</h3>
          <p className="text-orange-700">
            Send a message to any of the numbers above with your <span className="font-bold">Full Name, Age, and Location</span>. 
            Our team will guide you through the next steps within 24 hours.
          </p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-50 rounded-full opacity-50"></div>
    </div>
  );
};

export default Registration;
