import { Clock, Users } from 'lucide-react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-black/50 hover:shadow-emerald-500/20 dark:hover:shadow-emerald-900/30 transition-all duration-300 cursor-pointer border border-gray-100 dark:border-slate-800"
    >

      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-700 "
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg transform -translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-200">
            <Users size={12} className="text-emerald-500" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg mb-3 text-slate-800 dark:text-gray-100 line-clamp-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
          {recipe.name}
        </h3>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-slate-800 rounded-full border border-gray-100 dark:border-slate-700">
            <Clock size={14} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{recipe.cook_time}</span>
          </div>

          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;