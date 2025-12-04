import React from 'react';
import { Clock, Users } from 'lucide-react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Servings Badge - Animates on Hover */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-md transform translate-y-[-60px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
            <Users size={12} className="text-emerald-500" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-base mb-3 text-gray-900 line-clamp-2 leading-snug group-hover:text-emerald-600 transition-colors duration-200">
          {recipe.name}
        </h3>
        
        {/* Bottom Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full">
            <Clock size={14} className="text-emerald-600" />
            <span className="text-xs font-semibold text-gray-700">{recipe.cook_time}</span>
          </div>
          
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;