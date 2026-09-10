import React from 'react';
import { AppTab } from '../types';
import { sound } from '../utils/audio';

interface FooterProps {
  onSelectTab: (tab: AppTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="mt-24 pb-28 bg-[#121613] border-t-2 border-[#353e37] text-[#A8A8A8] py-12 px-4 sm:px-8 select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 text-center">
        {/* Centered Website Name — NO Subtext Below */}
        <h2 className="font-pixel font-bold text-xl sm:text-2xl text-[#FFFFFF] tracking-widest">
          CRAFTING TABLE
        </h2>

        {/* Clean Page Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-pixel">
          <button
            type="button"
            onClick={() => {
              sound.playWoodClick();
              onSelectTab('home');
            }}
            className="text-[#A8A8A8] hover:text-[#55C64B] transition-colors"
          >
            [1] Home
          </button>
          <button
            type="button"
            onClick={() => {
              sound.playWoodClick();
              onSelectTab('recipes');
            }}
            className="text-[#A8A8A8] hover:text-[#55C64B] transition-colors"
          >
            [2] Recipes
          </button>
          <button
            type="button"
            onClick={() => {
              sound.playWoodClick();
              onSelectTab('favorites');
            }}
            className="text-[#A8A8A8] hover:text-[#55C64B] transition-colors"
          >
            [3] Favorites
          </button>
        </div>

        {/* Minimalist note */}
        <p className="text-[11px] text-[#6b756e]">
          Minecraft is a trademark of Mojang Synergies AB.
        </p>
      </div>
    </footer>
  );
};
