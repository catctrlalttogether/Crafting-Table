import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { ItemSprite } from './ItemSprite';
import { itemsMap } from '../data/materials';
import { sound } from '../utils/audio';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface CraftingGridProps {
  recipe: Recipe;
  onSelectIngredient?: (materialId: string) => void;
}

export const CraftingGrid: React.FC<CraftingGridProps> = ({
  recipe,
  onSelectIngredient,
}) => {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setActiveStep(-1);
    setIsSimulating(false);
  }, [recipe.id]);

  const handleSimulateCraft = () => {
    if (isSimulating || recipe.isCraftable === false) return;
    setIsSimulating(true);
    setActiveStep(-1);

    const filledIndices = recipe.grid
      .map((item, idx) => (item ? idx : -1))
      .filter((idx) => idx !== -1);

    filledIndices.forEach((slotIdx, step) => {
      setTimeout(() => {
        setActiveStep(slotIdx);
        sound.playWoodClick();
      }, (step + 1) * 220);
    });

    setTimeout(() => {
      setActiveStep(99);
      sound.playCraftSuccess();
      setTimeout(() => {
        setIsSimulating(false);
        setActiveStep(-1);
      }, 1200);
    }, (filledIndices.length + 1) * 220 + 200);
  };

  const ingredientCounts: Record<string, number> = {};
  recipe.grid.forEach((item) => {
    if (item) {
      ingredientCounts[item] = (ingredientCounts[item] || 0) + 1;
    }
  });

  const outputItem = itemsMap[recipe.output.item] || {
    id: recipe.output.item,
    name: recipe.name,
    rarity: 'common',
    description: recipe.description,
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* 3x3 Grid & Output Workspace in 3D */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 bg-[#202020] p-5 sm:p-7 rounded-xs border-2 border-[#454545] shadow-[0_6px_0_#141414,0_12px_24px_rgba(0,0,0,0.8)] w-full max-w-lg">
        {/* 3x3 Grid Matrix */}
        <div className="grid grid-cols-3 gap-1.5 p-2.5 bg-[#171717] rounded-xs border-2 border-[#383838] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.9)]">
          {recipe.grid.map((materialId, idx) => {
            const isVisible =
              !isSimulating ||
              activeStep === 99 ||
              (activeStep >= 0 && recipe.grid.slice(0, activeStep + 1).includes(materialId));
            const isHighlighted = isSimulating && activeStep === idx;
            const matInfo = materialId ? itemsMap[materialId] : null;
            const displayName = matInfo ? matInfo.name : (materialId || '').replace(/_/g, ' ');

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (materialId && onSelectIngredient) {
                    sound.playPop();
                    onSelectIngredient(materialId);
                  }
                }}
                className={`minecraft-slot relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all ${
                  isHighlighted ? 'minecraft-slot-active scale-105' : ''
                } ${
                  materialId && onSelectIngredient
                    ? 'cursor-pointer hover:border-[#55C64B] hover:bg-[#2a2a2a]'
                    : ''
                }`}
              >
                {materialId && isVisible ? (
                  <ItemSprite
                    id={materialId}
                    name={displayName}
                    size="md"
                    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                  />
                ) : (
                  <span className="font-pixel text-[10px] text-[#454545] select-none">
                    {idx + 1}
                  </span>
                )}

                {/* Slot hover badge */}
                {hoveredIndex === idx && materialId && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#181818] border border-[#454545] px-2 py-0.5 rounded-xs text-[10px] font-pixel text-[#FFFFFF] shadow-lg pointer-events-none z-30">
                    {displayName}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3D Arrow Indicator */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-9 h-9 rounded-full bg-[#292929] border border-[#454545] flex items-center justify-center text-[#55C64B] shadow-[0_2px_0_#141414]">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-pixel text-[9px] text-[#A8A8A8] mt-1 uppercase">
            Output
          </span>
        </div>

        {/* 3D Output Slot */}
        <div className="flex flex-col items-center">
          <div
            className={`minecraft-slot-output relative w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center rounded-xs transition-transform ${
              activeStep === 99
                ? 'scale-110 shadow-[0_0_20px_rgba(111,227,93,0.6)] border-[#6FE35D]'
                : ''
            }`}
          >
            <ItemSprite
              id={recipe.output.item}
              name={recipe.name}
              size="lg"
              className={`drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] ${
                activeStep === 99 ? 'animate-bounce' : ''
              }`}
            />
            {recipe.output.count > 1 && (
              <span className="absolute bottom-1 right-1.5 font-pixel text-sm font-bold text-[#FFFFFF] drop-shadow-[2px_2px_0px_#000000]">
                {recipe.output.count}
              </span>
            )}
          </div>
          <span className="font-pixel text-[11px] text-[#FFFFFF] mt-2 text-center max-w-[110px] truncate">
            {recipe.name}
          </span>
        </div>
      </div>

      {/* Simulation Controls & Ingredients List */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-lg">
        {recipe.isCraftable !== false && (
          <button
            type="button"
            onClick={handleSimulateCraft}
            disabled={isSimulating}
            className={`btn-3d px-4 py-2 rounded-xs font-pixel text-xs flex items-center gap-2 ${
              isSimulating ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSimulating ? (
              <>
                <CheckCircle2 className="w-4 h-4 animate-spin text-black" />
                <span>Crafting in 3D...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Simulate Craft</span>
              </>
            )}
          </button>
        )}

        <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] font-mono">
          <span>Ingredients:</span>
          {Object.entries(ingredientCounts).map(([matId, count]) => {
            const mat = itemsMap[matId];
            return (
              <span
                key={matId}
                onClick={() => onSelectIngredient && onSelectIngredient(matId)}
                className="bg-[#292929] border border-[#454545] px-1.5 py-0.5 rounded-xs text-[#FFFFFF] hover:text-[#6FE35D] cursor-pointer"
              >
                {count}× {mat?.name || matId}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
