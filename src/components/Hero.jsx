import React from 'react';
import { Search } from 'lucide-react';

const Hero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white py-16 md:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Discover <span className="bg-white/20 px-4 py-1 rounded-2xl">Delicious</span> Recipes
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            Craving-worthy dishes with easy step-by-step tutorials from my lola pa 
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
              <div className="pl-6 pr-3 flex items-center">
                <Search className="text-emerald-500" size={24} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Search for recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-5 pr-6 text-gray-900 text-lg placeholder-gray-400 focus:outline-none bg-transparent font-medium"
              />
            </div>
            
            {/* Search Button for Desktop */}
            <button className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;