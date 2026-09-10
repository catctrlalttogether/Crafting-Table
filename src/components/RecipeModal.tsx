import React, { useEffect, useState } from 'react';
import { Recipe } from '../types';
import { CraftingGrid } from './CraftingGrid';
import { ItemSprite } from './ItemSprite';
import { itemsMap } from '../data/materials';
import { sound } from '../utils/audio';
import { showToast } from './ToastSystem';
import {
  X,
  Star,
  Share2,
  Check,
  ShieldAlert,
} from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  onSelectIngredient: (ingredientId: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  onSelectIngredient,
  isFavorite,
  onToggleFavorite,
}) => {
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!recipe) return null;

  // Compute total items used
  const rawIngredientsMap: Record<string, number> = {};
  recipe.grid.forEach((mat) => {
    if (mat) {
      rawIngredientsMap[mat] = (rawIngredientsMap[mat] || 0) + 1;
    }
  });

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#recipe/${recipe.id}`;
    navigator.clipboard.writeText(url);
    sound.playPop();
    setCopiedShare(true);
    showToast({
      title: 'Link Copied',
      description: `Share link for ${recipe.name} copied!`,
      itemId: recipe.output.item,
      type: 'info',
    });
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleToggleFav = () => {
    sound.playPop();
    onToggleFavorite(recipe.id);
    showToast({
      title: isFavorite ? 'Removed from Favorites' : 'Saved to Favorites',
      description: isFavorite
        ? `Unpinned ${recipe.name}`
        : `Pinned ${recipe.name}`,
      itemId: recipe.output.item,
      type: isFavorite ? 'info' : 'advancement',
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="minecraft-panel relative w-full max-w-2xl bg-[#1c211e] rounded-xs border-2 border-[#38423b] shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#151916] border-b-2 border-[#353e37]">
          <div className="flex items-center gap-3">
            <div className="minecraft-slot w-12 h-12 flex items-center justify-center rounded-xs shrink-0">
              <ItemSprite id={recipe.output.item} name={recipe.name} size="md" />
            </div>
            <div>
              <h2 className="font-pixel font-bold text-lg sm:text-xl text-[#FFFFFF]">
                {recipe.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleFav}
              title={isFavorite ? 'Remove Favorite' : 'Save to Favorites'}
              className={`p-2 rounded-xs border transition-colors ${
                isFavorite
                  ? 'bg-[#55C64B] border-[#7fed72] text-black shadow-[0_2px_0_#286622]'
                  : 'btn-3d-secondary text-[#A8A8A8]'
              }`}
            >
              <Star className="w-4 h-4 fill-current" />
            </button>

            <button
              type="button"
              onClick={handleShare}
              title="Copy share link"
              className="btn-3d-secondary p-2 rounded-xs text-[#A8A8A8] hover:text-[#FFFFFF]"
            >
              {copiedShare ? (
                <Check className="w-4 h-4 text-[#55C64B]" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playWoodClick();
                onClose();
              }}
              title="Close"
              className="btn-3d-secondary p-2 rounded-xs text-[#A8A8A8] hover:text-[#FFFFFF]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body with Spacious Layout */}
        <div className="p-6 sm:p-8 space-y-8 bg-[#1c211e]">
          {/* Uncraftable Warning if applicable */}
          {recipe.isCraftable === false && (
            <div className="flex items-center gap-3 p-3 bg-[#151916] border border-[#38423b] rounded-xs text-[#A8A8A8]">
              <ShieldAlert className="w-5 h-5 text-[#D83C3C] shrink-0" />
              <span className="font-pixel text-xs text-[#FFFFFF]">
                Not craftable at workbench (Reference item)
              </span>
            </div>
          )}

          {/* 3×3 Crafting Grid */}
          <div className="flex flex-col items-center justify-center">
            {recipe.isCraftable !== false ? (
              <CraftingGrid
                recipe={recipe}
                onSelectIngredient={onSelectIngredient}
              />
            ) : (
              <div className="p-8 bg-[#151916] rounded-xs border border-[#38423b] text-center space-y-2">
                <ItemSprite id={recipe.output.item} size="xl" className="mx-auto" />
                <p className="text-sm text-[#FFFFFF]">{recipe.name}</p>
              </div>
            )}
          </div>

          {/* ONLY TOTAL ITEMS USED & WHAT THE PRODUCT BECAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#151916] p-5 rounded-xs border border-[#353e37]">
            {/* Total Items Used */}
            <div className="space-y-2">
              <span className="font-pixel text-xs text-[#55C64B] uppercase tracking-wider block">
                Total Items Used
              </span>
              {Object.keys(rawIngredientsMap).length > 0 ? (
                <div className="flex flex-col gap-1.5">
                  {Object.entries(rawIngredientsMap).map(([matId, count]) => {
                    const info = itemsMap[matId] || { name: matId.replace(/_/g, ' ') };
                    return (
                      <div
                        key={matId}
                        onClick={() => {
                          sound.playPop();
                          onSelectIngredient(matId);
                        }}
                        className="flex items-center justify-between p-1.5 bg-[#1e2420] border border-[#38423b] hover:border-[#55C64B] rounded-xs cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <ItemSprite id={matId} size="sm" />
                          <span className="text-xs text-[#FFFFFF] font-medium">
                            {info.name}
                          </span>
                        </div>
                        <span className="font-pixel text-xs text-[#55C64B] font-bold">
                          ×{count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <span className="text-xs text-[#A8A8A8]">None</span>
              )}
            </div>

            {/* What the Product Became */}
            <div className="space-y-2">
              <span className="font-pixel text-xs text-[#55C64B] uppercase tracking-wider block">
                Product Created
              </span>
              <div className="flex items-center justify-between p-2.5 bg-[#1e2420] border border-[#38423b] rounded-xs">
                <div className="flex items-center gap-2.5">
                  <div className="minecraft-slot w-10 h-10 flex items-center justify-center rounded-xs shrink-0">
                    <ItemSprite id={recipe.output.item} size="sm" />
                  </div>
                  <div>
                    <span className="font-pixel font-bold text-xs text-[#FFFFFF] block">
                      {recipe.name}
                    </span>
                    <span className="text-[11px] text-[#A8A8A8]">
                      Result
                    </span>
                  </div>
                </div>
                <span className="font-pixel text-sm text-[#55C64B] font-bold">
                  ×{recipe.output.count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
