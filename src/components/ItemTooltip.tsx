import React from 'react';
import { ItemRarity } from '../types';

interface ItemTooltipProps {
  name: string;
  id: string;
  rarity?: ItemRarity;
  stats?: string;
  description?: string;
  count?: number;
}

export const ItemTooltip: React.FC<ItemTooltipProps> = ({
  name,
  id,
  stats,
  description,
  count,
}) => {
  const cleanId = id.replace(/^minecraft:/, '').toLowerCase();

  return (
    <div className="pointer-events-none z-50 min-w-48 max-w-72 rounded-xs border-2 border-[#454545] bg-[#292929]/95 px-3 py-2 text-left shadow-[0_8px_20px_rgba(0,0,0,0.9)] backdrop-blur-xs">
      <div className="flex items-center justify-between gap-2 border-b border-[#454545] pb-1">
        <span className="font-pixel text-xs sm:text-sm font-bold text-[#FFFFFF]">
          {name}
        </span>
        {count && count > 1 && (
          <span className="font-pixel text-xs text-[#55C64B]">×{count}</span>
        )}
      </div>

      {stats && (
        <div className="mt-1 text-[11px] font-pixel text-[#55C64B]">
          {stats}
        </div>
      )}

      {description && (
        <div className="mt-1 text-[11px] leading-relaxed text-[#A8A8A8]">
          {description}
        </div>
      )}

      <div className="mt-2 text-[10px] font-mono tracking-tight text-[#A8A8A8]/70">
        minecraft:{cleanId}
      </div>
    </div>
  );
};
