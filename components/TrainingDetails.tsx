
import React from 'react';
import { TRAINING_INFO } from '../constants';

const TrainingDetails: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:grid md:grid-cols-2">
          <div className="p-8 sm:p-12 md:p-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Training <span className="text-green-700">Details</span></h2>
            <div className="space-y-8">
              {TRAINING_INFO.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-green-50 text-green-700 rounded-xl">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-500 italic">
                * Please note that attendance is required for the full duration to receive a certificate.
              </p>
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[400px]">
            <img
              src="https://picsum.photos/id/119/800/1000"
              alt="Kaduna Training Venue"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/10 hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-semibold text-lg">Central Learning Hub, Kaduna</p>
              <p className="text-white/80 text-sm">Main Campus Auditorium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetails;
