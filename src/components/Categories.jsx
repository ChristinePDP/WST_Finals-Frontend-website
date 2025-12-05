import React from 'react';
import { categories } from '../data/recipes';

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-hide scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/30'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 hover:scale-105 shadow-sm hover:shadow-md border border-gray-200'
              }`}
            >
              <span className={`text-lg sm:text-xl transition-transform duration-300 ${
                selectedCategory === category.id ? '' : 'group-hover:scale-110'
              }`}>
                {category.icon}
              </span>
              <span className="text-xs sm:text-sm font-semibold">{category.name}</span>
              
              {selectedCategory === category.id && (
                <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;