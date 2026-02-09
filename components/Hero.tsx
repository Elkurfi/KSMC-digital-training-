
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-90"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-700/5 clip-path-slant hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-40 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center text-center lg:text-left">
          <div className="sm:max-w-2xl sm:mx-auto lg:col-span-7 lg:mx-0">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-orange-100 text-orange-600 mb-6">
              February 2026 Cohort
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              KSMC Digital <span className="text-green-700">Training Program</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              Empowering Kaduna’s Youth to Create, Earn, and Inspire. Join our free, skills-based program designed to turn passion into professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#registration"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg text-white bg-green-700 hover:bg-green-800 transition-all transform hover:-translate-y-0.5"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-700 text-base font-bold rounded-full text-green-700 hover:bg-green-50 transition-all"
              >
                Contact Us
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
              <span className="flex items-center">✓ Free Enrollment</span>
              <span className="flex items-center">✓ Youth Focused</span>
              <span className="flex items-center">✓ Practical Skills</span>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-green-200 rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
              <img
                src="https://picsum.photos/id/0/800/800"
                alt="Youth learning digital skills"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
