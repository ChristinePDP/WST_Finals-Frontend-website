import React, { useState } from 'react';
import { Clock, Users, X } from 'lucide-react';

const RecipeDetail = ({ recipe, onClose }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const toggleIngredient = (index) => {
    if (checkedIngredients.includes(index)) {
      setCheckedIngredients(checkedIngredients.filter(i => i !== index));
    } else {
      setCheckedIngredients([...checkedIngredients, index]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto animate-fadeIn" onClick={onClose}>
      <div className="min-h-screen px-4 py-4 sm:py-8 flex items-center justify-center">
        <div className="max-w-5xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform animate-slideUp" onClick={(e) => e.stopPropagation()}>
          
          {/* Header with Image */}
          <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-full p-2 sm:p-2.5 shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <X size={20} className="sm:w-[22px] sm:h-[22px] text-gray-800 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Recipe Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl line-clamp-2">{recipe.name}</h1>
              <div className="flex gap-3 sm:gap-4 md:gap-6">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-white/25 backdrop-blur-md px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full border border-white/30 text-xs sm:text-sm md:text-base">
                  <Clock size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" strokeWidth={2.5} />
                  <span className="font-semibold">{recipe.cook_time}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-white/25 backdrop-blur-md px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full border border-white/30 text-xs sm:text-sm md:text-base">
                  <Users size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" strokeWidth={2.5} />
                  <span className="font-semibold">{recipe.servings} servings</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            
            {/* Ingredients - 2 columns on desktop */}
            <div className="lg:col-span-2 p-5 sm:p-6 md:p-8 lg:p-10">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">Ingredients</h2>
                <div className="w-12 sm:w-14 md:w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-3 group">
                    <button
                      onClick={() => toggleIngredient(index)}
                      className={`flex-shrink-0 w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300 cursor-pointer border-2 ${
                        checkedIngredients.includes(index)
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'bg-emerald-50 border-emerald-200 group-hover:border-emerald-400'
                      }`}
                    >
                      {checkedIngredients.includes(index) ? (
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <div className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500"></div>
                      )}
                    </button>
                    <span className={`leading-relaxed text-xs sm:text-sm md:text-base transition-all duration-300 ${
                      checkedIngredients.includes(index)
                        ? 'text-gray-400 line-through'
                        : 'text-gray-700'
                    }`}>
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Progress indicator */}
              {checkedIngredients.length > 0 && (
                <div className="mt-6 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-emerald-700">
                      {checkedIngredients.length} of {recipe.ingredients.length} checked
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-600">
                      {Math.round((checkedIngredients.length / recipe.ingredients.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500 rounded-full"
                      style={{ width: `${(checkedIngredients.length / recipe.ingredients.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions - 3 columns on desktop */}
            <div className="lg:col-span-3 p-5 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">Instructions</h2>
                <div className="w-12 sm:w-14 md:w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
              </div>
              <ol className="space-y-3 sm:space-y-4 md:space-y-5">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-2.5 sm:gap-3 md:gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm md:text-base shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3 transition-all duration-300">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-0.5 sm:pt-1 md:pt-1.5 leading-relaxed text-xs sm:text-sm md:text-base">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default RecipeDetail;