import React from 'react';
import { ChefHat, Home, Mail, Info} from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <ChefHat size={28} className="text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Tine
              </h1>
              <p className="text-sm text-gray-600 font-medium">My very own cook book </p>
            </div>
          </div>
          
          <nav className="flex items-center gap-2">
            <button 
              onClick={() => handleNavigation('home')}
              className={`group relative flex items-center gap-2 transition-all duration-300 px-4 py-2.5 rounded-xl font-medium ${
                currentPage === 'home' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30' 
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <Home size={20} className={currentPage === 'home' ? '' : 'group-hover:scale-110 transition-transform'} />
              <span className="hidden md:inline">Home</span>
              {currentPage === 'home' && (
                <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
              )}
            </button>
            
            <button 
              onClick={() => handleNavigation('about')}
              className={`group relative flex items-center gap-2 transition-all duration-300 px-4 py-2.5 rounded-xl font-medium ${
                currentPage === 'about' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30' 
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <Info size={20} className={currentPage === 'about' ? '' : 'group-hover:scale-110 transition-transform'} />
              <span className="hidden md:inline">About</span>
              {currentPage === 'about' && (
                <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
              )}
            </button>
            
            <button 
              onClick={() => handleNavigation('contact')}
              className={`group relative flex items-center gap-2 transition-all duration-300 px-4 py-2.5 rounded-xl font-medium ${
                currentPage === 'contact' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30' 
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <Mail size={20} className={currentPage === 'contact' ? '' : 'group-hover:scale-110 transition-transform'} />
              <span className="hidden md:inline">Contact</span>
              {currentPage === 'contact' && (
                <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;