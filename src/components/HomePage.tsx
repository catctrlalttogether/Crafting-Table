import React from 'react';
import { ItemSprite } from './ItemSprite';
import { sound } from '../utils/audio';
import { ArrowRight, Star } from 'lucide-react';

interface HomePageProps {
  onNavigateToRecipes: () => void;
  onNavigateToFavorites: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToRecipes,
  onNavigateToFavorites,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 sm:py-28 md:py-36 px-4 flex flex-col items-center justify-center text-center animate-fadeIn select-none">
      {/* Iconic Pixelated Crafting Table Block */}
      <div className="mb-10 sm:mb-12">
        <div className="minecraft-slot w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-xs shadow-[0_8px_24px_rgba(0,0,0,0.85)] border-2 border-[#3d453f]">
          <ItemSprite
            id="crafting_table"
            name="Crafting Table"
            size="xl"
            className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>

      {/* Website Title Aligned in Centre — NO Subtext Below */}
      <h1 className="font-pixel font-bold text-3xl sm:text-5xl md:text-6xl tracking-widest text-[#FFFFFF] drop-shadow-[0_4px_16px_rgba(85,198,75,0.35)]">
        CRAFTING TABLE
      </h1>

      {/* Large Generous Blank Space Separation */}
      <div className="h-12 sm:h-16" />

      {/* Spacious Primary Navigation Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
        <button
          type="button"
          onClick={() => {
            sound.playWoodClick();
            onNavigateToRecipes();
          }}
          className="btn-3d w-full sm:w-auto px-8 py-4 rounded-xs font-pixel text-sm sm:text-base flex items-center justify-center gap-3 transition-transform"
        >
          <span>Open Crafting Table</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>

        <button
          type="button"
          onClick={() => {
            sound.playWoodClick();
            onNavigateToFavorites();
          }}
          className="btn-3d-secondary w-full sm:w-auto px-8 py-4 rounded-xs font-pixel text-sm sm:text-base flex items-center justify-center gap-2.5 transition-transform"
        >
          <Star className="w-4 h-4 text-[#55C64B] fill-current" />
          <span>Saved Favorites</span>
        </button>
      </div>

      {/* Bottom whitespace buffer */}
      <div className="h-16 sm:h-24" />
    </div>
  );
};
