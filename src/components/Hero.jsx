import React from 'react';
import { Search } from 'lucide-react';

const Hero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background - Elegant Dark Mode Handling */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"></div>
      
      {/* Animated Blobs (Dark Mode Optimized) */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-400/30 rounded-full mix-blend-overlay blur-3xl animate-slow-spin"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-400/30 rounded-full mix-blend-overlay blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-10 animate-slideUp">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
            Discover <span className="relative inline-block px-4">
              <span className="absolute inset-0 bg-white/10 skew-x-[-6deg] rounded-lg backdrop-blur-sm"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-100 dark:from-emerald-400 dark:to-teal-200">Delicious</span>
            </span> Recipes
          </h2>
          <p className="text-lg md:text-xl text-emerald-50 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Craving-worthy dishes with easy step-by-step tutorials from my lola's kitchen to yours.
          </p>
        </div>
        
        {/* Search Bar - Glassmorphism */}
        <div className="max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-400/30 dark:bg-emerald-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative flex items-center bg-white dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 rounded-full shadow-2xl p-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/50">
              <div className="pl-4 pr-3 text-emerald-500 dark:text-emerald-400">
                <Search size={24} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Search for adobong manok..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-3 px-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 bg-transparent font-medium focus:outline-none text-lg"
              />
              <button className="hidden md:block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;