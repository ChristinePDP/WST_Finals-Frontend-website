import { ChefHat, Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className=" relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-16 overflow-hidden">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-lg">
                <ChefHat size={32} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Christine P. De Padua</h3>
                <p className="text-sm text-emerald-400 font-medium">My Cook Book</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate destination for delicious Filipino recipes and cooking inspiration.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/christine.purilan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/chrixtinnnne/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-br hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:col-span-2 gap-8 lg:gap-16">

            <div>
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></div>
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
                <li>
                  <button 
                    onClick={() => handleNavigation('home')}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('about')}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('contact')}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></div>
                Connect
              </h4>
              <div className="space-y-4 text-gray-400 text-sm lg:text-base">
                <a href="mailto:tinadepadua19@gmail.com" className="flex items-start gap-3 hover:text-emerald-400 transition-colors group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors flex-shrink-0">
                    <Mail size={16} className="text-emerald-500" />
                  </div>
                  <span className="text-xs lg:text-sm break-all leading-relaxed">tinadepadua19@gmail.com</span>
                </a>
                <a href="tel:+639066728010" className="flex items-center gap-3 hover:text-emerald-400 transition-colors group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors flex-shrink-0">
                    <Phone size={16} className="text-emerald-500" />
                  </div>
                  <span className="text-xs lg:text-sm">+63 906 672 8010</span>
                </a>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0">
                    <MapPin size={16} className="text-emerald-500" />
                  </div>
                  <span className="text-xs lg:text-sm leading-relaxed">Navotas Balayan<br/>Batangas, Philippines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              &copy; 2025 Luto ni Tine. Made with <Heart size={16} className="text-red-500 fill-current" />
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Kung makakalimutin ka sa ingredients, eto ang tignan mo! 🍳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;