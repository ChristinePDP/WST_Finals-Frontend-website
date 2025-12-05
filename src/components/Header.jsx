import { ChefHat, Home, Mail, Info } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-100 dark:border-slate-800/50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => handleNavigation('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-300">

                <ChefHat className="text-white w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent tracking-tight">
                Tine
              </h1>

              <p className="hidden sm:block text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide whitespace-nowrap">
                MGA LUTONG BAHAY
              </p>
            </div>
          </div>
          
          <nav className="flex items-center gap-1">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'about', icon: Info, label: 'About' },
              { id: 'contact', icon: Mail, label: 'Contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`group relative flex items-center justify-center gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
                  currentPage === item.id 
                    ? 'text-white shadow-lg shadow-emerald-500/25' 
                    : 'text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >

                {currentPage === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                )}
                
                <item.icon 
                  size={20} 
                  className={`relative z-10 transition-transform duration-300 ${currentPage === item.id ? 'scale-110' : 'group-hover:scale-110'}`} 
                />
                <span className={`relative z-10 hidden md:inline ${currentPage === item.id ? 'font-semibold' : ''}`}>
                  {item.label}
                </span>
              </button>
            ))}

            <div className="ml-1 pl-1 sm:ml-2 sm:pl-2 border-l border-gray-200 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;