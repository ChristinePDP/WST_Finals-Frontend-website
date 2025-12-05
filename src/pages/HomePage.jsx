import { useState, useEffect } from 'react';
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
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <Categories 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main id="recipes" className="w-full px-4 sm:px-6 lg:px-8 py-5">
        
        <div className="mb-10">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
             {selectedCategory === 'all' ? 'Latest Recipes' : categories.find(c => c.id === selectedCategory)?.name}
           </h2>
           <p className="text-gray-500 dark:text-slate-400 mt-2">
             Found {filteredRecipes.length} delicious dishes for you.
           </p>
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe, index) => (
              <div key={recipe.id} className="animate-slideUp" style={{ animationDelay: `${index * 0.05}s` }}>
                <RecipeCard 
                  recipe={recipe} 
                  onClick={() => setSelectedRecipe(recipe)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-slate-900 rounded-3xl border border-dashed border-gray-300 dark:border-slate-700">
            <p className="text-gray-500 dark:text-slate-400 text-lg">No recipes found matching your search.</p>
          </div>
        )}
      </main>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 bg-slate-900 dark:bg-emerald-600 text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } hover:scale-110`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default HomePage;