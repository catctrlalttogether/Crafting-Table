import React from 'react';
import { Recipe } from '../types';
import { ItemSprite } from './ItemSprite';
import { sound } from '../utils/audio';
import { Star } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onSelect: (recipe: Recipe) => void;
  onToggleFavorite: (recipeId: string) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isFavorite,
  onSelect,
  onToggleFavorite,
}) => {
  return (
    <div
      onClick={() => {
        sound.playWoodClick();
        onSelect(recipe);
      }}
      className="minecraft-clean-card group relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-xs cursor-pointer select-none"
    >
      {/* Favorite Star Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          sound.playPop();
          onToggleFavorite(recipe.id);
        }}
        title={isFavorite ? 'Remove Favorite' : 'Save to Starred Favorites'}
        className={`absolute top-2 right-2 p-1.5 rounded-xs transition-all z-10 ${
          isFavorite
            ? 'text-black bg-[#55C64B] border border-[#7eed72]'
            : 'text-[#A8A8A8] hover:text-[#55C64B] bg-[#151916] border border-[#353e37] hover:border-[#55C64B]'
        }`}
      >
        <Star className="w-3.5 h-3.5 fill-current" />
      </button>

      {/* Center Sprite */}
      <div className="flex flex-col items-center pt-2 pb-2 w-full">
        <div className="minecraft-slot relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xs mb-3 group-hover:scale-105 transition-transform duration-100">
          <ItemSprite
            id={recipe.output.item}
            name={recipe.name}
            size="lg"
            className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
          />
          {recipe.output.count > 1 && (
            <span className="absolute bottom-1 right-1.5 font-pixel text-xs font-bold text-[#FFFFFF] drop-shadow-[2px_2px_0px_#000000]">
              {recipe.output.count}
            </span>
          )}
        </div>

        <h3 className="font-pixel font-bold text-xs sm:text-sm text-[#FFFFFF] group-hover:text-[#6FE35D] transition-colors text-center line-clamp-1 w-full px-1">
          {recipe.name}
        </h3>
      </div>
    </div>
  );
};
