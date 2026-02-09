
import React from 'react';
import { HOSTS } from '../constants';

const Hosts: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-green-700 uppercase tracking-wide">Meet the Team</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Program Leadership
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Dedicated professionals working behind the scenes to ensure the success of Kaduna’s youth.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {HOSTS.map((host) => (
            <div key={host.id} className="flex flex-col group">
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] sm:aspect-[4/3] mb-6 shadow-lg border border-gray-100">
                <img
                  src={host.imageUrl}
                  alt={host.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>
              <div className="px-2">
                <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">{host.title}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{host.name}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {host.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hosts;
