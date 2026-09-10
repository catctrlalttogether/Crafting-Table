import React, { useState } from 'react';
import { getItemImageUrl, getFallbackImageUrl } from '../utils/assetUrl';

interface ItemSpriteProps {
  id: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
}

export const ItemSprite: React.FC<ItemSpriteProps> = ({
  id,
  name,
  size = 'md',
  className = '',
}) => {
  const [errorLevel, setErrorLevel] = useState<number>(0);

  const cleanId = id.replace(/^minecraft:/, '').toLowerCase();

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    hero: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const primaryUrl = getItemImageUrl(cleanId);
  const fallbackUrl = getFallbackImageUrl(cleanId);

  // If primary and fallback fails, render high-contrast Minecraft block badge with initials
  if (errorLevel >= 2) {
    const initials = cleanId
      .split('_')
      .map((w) => w[0]?.toUpperCase() || '')
      .slice(0, 2)
      .join('');

    return (
      <div
        className={`${sizeClasses[size]} rounded-xs flex items-center justify-center font-pixel text-xs text-[#55ff55] bg-[#1a2218] border border-[#3b4b37] select-none ${className}`}
        title={name || cleanId}
      >
        {initials || 'MC'}
      </div>
    );
  }

  return (
    <img
      src={errorLevel === 0 ? primaryUrl : fallbackUrl}
      alt={name || cleanId}
      title={name || cleanId}
      loading="lazy"
      onError={() => setErrorLevel((prev) => prev + 1)}
      className={`${sizeClasses[size]} object-contain pixelated drop-shadow-md select-none pointer-events-none transition-transform duration-150 ${className}`}
    />
  );
};
