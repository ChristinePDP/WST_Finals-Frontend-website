import { useState } from 'react';
import { Clock, Users, X, Check } from 'lucide-react';

const RecipeDetail = ({ recipe, onClose }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const toggleIngredient = (index) => {
    if (checkedIngredients.includes(index)) {
      setCheckedIngredients(checkedIngredients.filter(i => i !== index));
    } else {
      setCheckedIngredients([...checkedIngredients, index]);
    }
  };

  const progressPercentage = Math.round((checkedIngredients.length / recipe.ingredients.length) * 100);

  return (
    <div className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm z-50 overflow-y-auto animate-fadeIn" onClick={onClose}>
      <div className="min-h-screen px-0 sm:px-4 py-0 sm:py-8 flex items-center justify-center">
        <div className="max-w-5xl w-full bg-white dark:bg-slate-900 sm:rounded-[2rem] shadow-2xl overflow-hidden transform animate-slideUp border-x sm:border border-gray-200 dark:border-slate-800 min-h-screen sm:min-h-0" onClick={(e) => e.stopPropagation()}>
          
          <div className="relative h-60 sm:h-96">
            <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            
            <button onClick={onClose} className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-slate-900 rounded-full p-2 transition-all duration-300">
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg leading-tight">
                {recipe.name}
              </h1>
              <div className="flex gap-3 sm:gap-4">
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold border border-white/20 flex items-center gap-1.5 sm:gap-2">
                  <Clock size={14} className="sm:w-4 sm:h-4" /> {recipe.cook_time}
                </div>
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold border border-white/20 flex items-center gap-1.5 sm:gap-2">
                  <Users size={14} className="sm:w-4 sm:h-4" /> {recipe.servings} servings
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-slate-800">
            
            <div className="lg:col-span-2 p-5 sm:p-8 bg-white dark:bg-slate-900">
              <div className="mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                  Ingredients 
                </h2>
                <p className="text-gray-500 dark:text-slate-400 text-xs sm:text-sm">
                  Mark items as you shop or cook.
                </p>
              </div>

              {checkedIngredients.length > 0 && (
                <div className="mb-5 p-3 sm:p-4 bg-emerald-50 dark:bg-slate-800/50 rounded-xl border border-emerald-100 dark:border-slate-700 animate-fadeIn">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      {checkedIngredients.length} of {recipe.ingredients.length} checked
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-emerald-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <ul className="space-y-2 sm:space-y-3">
                {recipe.ingredients.map((ingredient, index) => {
                  const isChecked = checkedIngredients.includes(index);
                  return (
                    <li key={index} 
                      onClick={() => toggleIngredient(index)}
                      className={`flex items-start gap-3 cursor-pointer group p-2 rounded-lg transition-colors duration-200 ${
                        isChecked ? 'bg-gray-50 dark:bg-slate-800/30' : 'hover:bg-gray-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 mt-0.5 ${
                        isChecked 
                          ? 'bg-emerald-500 border-emerald-500' 
                          : 'border-gray-300 dark:border-slate-600 group-hover:border-emerald-400 bg-white dark:bg-slate-800'
                      }`}>
                        {isChecked && <Check size={12} className="sm:w-3.5 sm:h-3.5 text-white" strokeWidth={3} />}
                      </div>
                      
                      <span className={`flex-1 text-base sm:text-lg leading-snug transition-all duration-300 ${
                        isChecked 
                          ? 'text-gray-400 dark:text-slate-600 line-through decoration-emerald-500/30 decoration-2' 
                          : 'text-gray-700 dark:text-slate-200'
                      }`}>
                        {ingredient}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lg:col-span-3 p-5 sm:p-8 bg-gray-50 dark:bg-slate-950/50">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-6">Instructions</h2>
              <div className="space-y-5 sm:space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center font-bold text-sm sm:text-base text-emerald-600 dark:text-emerald-400 shadow-sm border border-gray-100 dark:border-slate-700 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;