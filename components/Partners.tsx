
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
          Collaborating with Trusted Organizations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
          {PARTNERS.map((partner, index) => (
            <div key={index} className="px-4 text-center">
              <span className="text-xl sm:text-2xl font-black text-gray-800 tracking-tighter hover:text-green-700 transition-colors cursor-default whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-500 max-w-2xl mx-auto leading-relaxed">
          The KSMC Digital Training Program is made possible through the generous support and collaboration of our partners who share our vision for a digitally-empowered youth in Kaduna.
        </p>
      </div>
    </div>
  );
};

export default Partners;
