import React, { useEffect, useState, useRef } from 'react';
import { AppTab } from '../types';
import { ItemSprite } from './ItemSprite';
import { sound } from '../utils/audio';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HotbarProps {
  activeTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
  favoritesCount: number;
}

export interface HotbarSlotDef {
  slotNum: number;
  id: AppTab;
  itemId: string;
  name: string;
  categoryTitle: string;
  subtext: string;
}

export const HOTBAR_SLOTS: HotbarSlotDef[] = [
  {
    slotNum: 1,
    id: 'home',
    itemId: 'compass',
    name: 'Compass',
    categoryTitle: 'Home',
    subtext: 'Crafting Table',
  },
  {
    slotNum: 2,
    id: 'recipes',
    itemId: 'crafting_table',
    name: 'Crafting Table',
    categoryTitle: 'Recipes',
    subtext: '3×3 Recipes',
  },
  {
    slotNum: 3,
    id: 'favorites',
    itemId: 'nether_star',
    name: 'Nether Star',
    categoryTitle: 'Favorites',
    subtext: 'Saved Recipes',
  },
];

export const Hotbar: React.FC<HotbarProps> = ({
  activeTab,
  onSelectTab,
  favoritesCount,
}) => {
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);
  const [floatingTitle, setFloatingTitle] = useState<string>('Home Codex');
  const [floatingSubtitle, setFloatingSubtitle] = useState<string>('Overview & Updates');
  const [showFloatingHUD, setShowFloatingHUD] = useState<boolean>(true);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeSlotIndex = HOTBAR_SLOTS.findIndex((s) => s.id === activeTab);
  const currentSlot = activeSlotIndex !== -1 ? HOTBAR_SLOTS[activeSlotIndex] : HOTBAR_SLOTS[0];

  // Trigger floating title animation on page change
  const triggerHUD = (title: string, sub: string) => {
    setFloatingTitle(title);
    setFloatingSubtitle(sub);
    setShowFloatingHUD(true);

    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setShowFloatingHUD(false);
    }, 2800);
  };

  useEffect(() => {
    if (currentSlot) {
      triggerHUD(currentSlot.categoryTitle, currentSlot.subtext);
    }
  }, [activeTab]);

  const switchPageBySlot = (slot: HotbarSlotDef) => {
    sound.playHotbarSwitch(slot.slotNum);
    triggerHUD(slot.categoryTitle, slot.subtext);
    onSelectTab(slot.id);
  };

  const handlePrevSlot = () => {
    const nextIdx = (activeSlotIndex - 1 + HOTBAR_SLOTS.length) % HOTBAR_SLOTS.length;
    switchPageBySlot(HOTBAR_SLOTS[nextIdx]);
  };

  const handleNextSlot = () => {
    const nextIdx = (activeSlotIndex + 1) % HOTBAR_SLOTS.length;
    switchPageBySlot(HOTBAR_SLOTS[nextIdx]);
  };

  // Keyboard hotkeys: 1 through 9, plus Q and E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      // Check numeric 1-9
      const keyNum = parseInt(e.key, 10);
      if (!isNaN(keyNum) && keyNum >= 1 && keyNum <= 9) {
        e.preventDefault();
        const targetSlot = HOTBAR_SLOTS[keyNum - 1];
        if (targetSlot) {
          switchPageBySlot(targetSlot);
        }
        return;
      }

      // Hotbar cycle keys [Q] and [E]
      if (e.key === 'q' || e.key === 'Q') {
        e.preventDefault();
        handlePrevSlot();
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        handleNextSlot();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlotIndex, onSelectTab]);

  return (
    <aside
      aria-label="Minecraft Hotbar Page Navigation"
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none select-none"
    >
      {/* 3D Floating In-Game Page Title Banner */}
      <div
        className={`mb-2.5 px-4 py-1.5 bg-[#292929]/95 border-2 border-[#454545] rounded-xs shadow-[0_6px_0_#181818,0_12px_24px_rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col items-center text-center transition-all duration-200 pointer-events-auto ${
          showFloatingHUD ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="font-pixel text-[10px] text-[#55C64B] bg-[#1a2318] px-1.5 py-0.2 rounded-xs border border-[#454545]">
            SLOT [{currentSlot.slotNum}]
          </span>
          <span className="font-pixel font-bold text-xs sm:text-sm text-[#FFFFFF] drop-shadow-[2px_2px_0px_#000000]">
            {floatingTitle}
          </span>
        </div>
        <span className="text-[10px] text-[#A8A8A8] font-heading mt-0.5">
          {floatingSubtitle} · Keys [1-3] or [Q]/[E]
        </span>
      </div>

      {/* Main 9-Slot 3D Hotbar Shell with Previous/Next Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
        {/* Previous Slot Button */}
        <button
          type="button"
          onClick={handlePrevSlot}
          title="Previous Page [Q]"
          className="hidden md:flex btn-3d-secondary w-9 h-9 items-center justify-center rounded-xs"
        >
          <ChevronLeft className="w-5 h-5 text-[#FFFFFF]" />
        </button>

        {/* 3D Hotbar Tray */}
        <nav
          aria-label="Hotbar Slots"
          className="minecraft-hotbar-shell flex items-center p-1 sm:p-1.5 rounded-xs scale-[0.82] xs:scale-[0.88] sm:scale-100 origin-bottom"
        >
          {HOTBAR_SLOTS.map((slot) => {
            const isSelected = activeTab === slot.id;
            const isHovered = hoveredSlot === slot.slotNum;

            return (
              <button
                key={slot.slotNum}
                type="button"
                onClick={() => switchPageBySlot(slot)}
                onMouseEnter={() => setHoveredSlot(slot.slotNum)}
                onMouseLeave={() => setHoveredSlot(null)}
                title={`[${slot.slotNum}] Switch to ${slot.categoryTitle} — ${slot.subtext}`}
                className={`relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer ${
                  isSelected
                    ? 'minecraft-hotbar-selected'
                    : 'minecraft-hotbar-slot'
                }`}
              >
                {/* 3D Item Sprite */}
                <ItemSprite
                  id={slot.itemId}
                  name={slot.name}
                  size="md"
                  className={`transition-transform duration-150 ${
                    isSelected
                      ? 'scale-115 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] animate-float-3d'
                      : 'group-hover:scale-105'
                  }`}
                />

                {/* Slot Number Badge */}
                <span className="absolute top-0.5 left-1 font-pixel text-[9px] text-[#FFFFFF] drop-shadow-[1px_1px_0px_#000000] opacity-80">
                  {slot.slotNum}
                </span>

                {/* Starred Favorites Counter Badge */}
                {slot.id === 'favorites' && favoritesCount > 0 && (
                  <span className="absolute bottom-0.5 right-1 font-pixel text-[10px] font-bold text-[#55C64B] drop-shadow-[2px_2px_0px_#000000]">
                    {favoritesCount}
                  </span>
                )}

                {/* Hover Tooltip Popup above hotbar */}
                {isHovered && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#292929] border-2 border-[#454545] px-2.5 py-1 rounded-xs text-[11px] font-pixel text-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.8)] pointer-events-none z-50">
                    <span className="text-[#55C64B]">[{slot.slotNum}]</span> {slot.categoryTitle}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Next Slot Button */}
        <button
          type="button"
          onClick={handleNextSlot}
          title="Next Page [E]"
          className="hidden md:flex btn-3d-secondary w-9 h-9 items-center justify-center rounded-xs"
        >
          <ChevronRight className="w-5 h-5 text-[#FFFFFF]" />
        </button>
      </div>
    </aside>
  );
};
