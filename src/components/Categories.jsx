import { categories } from '../data/recipes';

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="py-6 bg-white dark:bg-slate-950 transition-colors duration-500 border-b border-gray-100 dark:border-slate-900">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-4 pt-2 scrollbar-hide scroll-smooth">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 border ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/25 scale-100'
                  : 'bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-slate-400 border-gray-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              <span className="text-md md:text-xl filter drop-shadow-sm">{category.icon}</span>
              <span className="text-sm tracking-wide">{category.name}</span>
              
              {selectedCategory === category.id && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="animate-shine absolute inset-0 w-full h-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;