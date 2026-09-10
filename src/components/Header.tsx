import React, { useState } from 'react';
import { AppTab } from '../types';
import { ItemSprite } from './ItemSprite';
import { sound } from '../utils/audio';
import {
  Volume2,
  VolumeX,
  Menu,
  X,
} from 'lucide-react';

interface HeaderProps {
  activeTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  favoritesCount,
}) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playPop();
    }
  };

  const navPages: { id: AppTab; label: string; itemId: string }[] = [
    { id: 'home', label: 'Home', itemId: 'compass' },
    { id: 'recipes', label: 'Recipes', itemId: 'crafting_table' },
    { id: 'favorites', label: 'Favorites', itemId: 'nether_star' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#141414]/95 backdrop-blur-md border-b-2 border-[#3d3d3d] px-4 sm:px-8 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Navigation Pages */}
        <nav
          aria-label="Main Page Navigation"
          className="hidden md:flex items-center gap-2"
        >
          {navPages.map((page) => {
            const isActive = activeTab === page.id;
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => {
                  sound.playWoodClick();
                  onSelectTab(page.id);
                }}
                className={`px-3.5 py-1.5 rounded-xs font-pixel text-xs transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'btn-3d text-black font-bold'
                    : 'btn-3d-secondary text-[#A8A8A8] hover:text-[#FFFFFF]'
                }`}
              >
                <ItemSprite id={page.itemId} size="sm" />
                <span>{page.label}</span>
                {page.id === 'favorites' && favoritesCount > 0 && (
                  <span
                    className={`text-[10px] px-1 py-0.2 rounded-xs font-pixel ${
                      isActive ? 'bg-black text-[#55C64B]' : 'bg-[#55C64B] text-black font-bold'
                    }`}
                  >
                    {favoritesCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger icon placeholder on left */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="btn-3d-secondary p-2 rounded-xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Center: Website Name Aligned in Centre (NO sub text below) */}
        <div
          onClick={() => {
            sound.playWoodClick();
            onSelectTab('home');
          }}
          className="flex-1 text-center cursor-pointer select-none group"
        >
          <h1 className="font-pixel font-bold text-lg sm:text-2xl md:text-3xl tracking-widest text-[#FFFFFF] drop-shadow-[0_2px_8px_rgba(85,198,75,0.4)] group-hover:text-[#6FE35D] transition-colors inline-block">
            CRAFTING TABLE
          </h1>
        </div>

        {/* Right: Sound Control */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleSound}
            title={isMuted ? 'Unmute Minecraft Sounds' : 'Mute Sounds'}
            className="btn-3d-secondary px-3 py-1.5 sm:py-2 rounded-xs font-pixel text-xs flex items-center gap-1.5"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#ff5555]" />
                <span className="hidden sm:inline text-[#ff5555]">Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#55C64B]" />
                <span className="hidden sm:inline text-[#55C64B]">Sound ON</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation for Pages */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[#3d3d3d] flex flex-col gap-2 animate-fadeIn bg-[#1e1e1e] p-3 rounded-xs">
          {navPages.map((page) => {
            const isActive = activeTab === page.id;
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => {
                  sound.playWoodClick();
                  onSelectTab(page.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-2.5 rounded-xs font-pixel text-xs text-left transition-all ${
                  isActive
                    ? 'btn-3d text-black font-bold'
                    : 'bg-[#181818] text-[#A8A8A8] hover:text-[#FFFFFF] border border-[#3d3d3d]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ItemSprite id={page.itemId} size="sm" />
                  <span>{page.label} Page</span>
                </div>
                {page.id === 'favorites' && favoritesCount > 0 && (
                  <span className="bg-[#55C64B] text-black font-bold text-[10px] px-1.5 py-0.5 rounded-xs">
                    {favoritesCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
