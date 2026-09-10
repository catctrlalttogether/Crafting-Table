export type AppTab =
  | 'home'
  | 'recipes'
  | 'favorites';

export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic';

export interface ItemInfo {
  id: string; // e.g. "diamond_sword"
  name: string; // e.g. "Diamond Sword"
  category: string; // e.g. "combat"
  rarity: ItemRarity;
  stackSize?: number;
  description: string;
  giveCommand?: string;
  hexColors?: string[];
  stats?: string;
}

export interface RecipeOutput {
  item: string; // matches item id
  count: number;
}

export interface Recipe {
  id: string;
  name: string;
  category: 'building' | 'tools' | 'combat' | 'armor' | 'redstone' | 'food' | 'utility' | 'transport' | 'decoration' | 'trials';
  grid: (string | null)[]; // 9 slots, row-major
  output: RecipeOutput;
  shapeless: boolean;
  isCraftable?: boolean; // false for reference-only items like Elytra
  note?: string;
  description: string;
  version: string;
  tags: string[];
  searchKeywords: string[];
  stats?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string; // item id used as category icon
  description: string;
  count?: number;
}
