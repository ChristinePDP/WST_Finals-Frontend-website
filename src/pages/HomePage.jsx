import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import RecipeCard from '../components/RecipeCard';

const HomePage = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  filteredRecipes,
  setSelectedRecipe,
  categories
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <Categories 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main id="recipes" className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Recipes' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold text-emerald-600">{filteredRecipes.length}</span> recipe{filteredRecipes.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto">
                <span className="text-5xl">🔍</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No recipes found</h3>
            <p className="text-gray-500 text-lg mb-6">Try a different search term or browse other categories</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Recipes
            </button>
          </div>
        )}
      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 group bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-14 h-14 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 flex items-center justify-center transition-all duration-300 ${
          showBackToTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </>
  );
};

export default HomePage;