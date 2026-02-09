
import React from 'react';
import { FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base font-semibold text-orange-500 uppercase tracking-wide">About the Program</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Empowering Through Innovation
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The KSMC Digital Training Program is a flagship initiative dedicated to equipping young Nigerians with the digital tools they need to succeed in the modern economy.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 p-3 bg-green-50 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-green-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Digital Training?</h3>
              <p className="text-green-50 text-lg leading-relaxed mb-6">
                In today's world, digital literacy is no longer an option—it's a necessity. We focus on practical skills that translate directly into job opportunities and entrepreneurial ventures for youths aged 18 to 35.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-400">●</span> High-demand technical skills
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-400">●</span> Networking with industry mentors
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-400">●</span> Certificate of completion
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
               <span className="text-6xl font-bold text-white/20">KSMC</span>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
