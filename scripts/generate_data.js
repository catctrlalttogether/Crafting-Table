import fs from 'fs';
import path from 'path';
import https from 'https';

const fetchJson = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}, status: ${res.statusCode}`));
        return;
      }
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
};

function formatName(rawName) {
  return rawName
    .replace(/^minecraft:/, '')
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function determineCategory(itemId, displayName) {
  const id = itemId.toLowerCase();
  
  if (
    id.includes('mace') ||
    id.includes('breeze') ||
    id.includes('trial') ||
    id.includes('heavy_core') ||
    id.includes('crafter') ||
    id.includes('wind_charge') ||
    id.includes('vault') ||
    id.includes('scute')
  ) {
    return 'trials';
  }
  
  if (
    id.includes('sword') ||
    id.includes('bow') ||
    id.includes('shield') ||
    id.includes('helmet') ||
    id.includes('chestplate') ||
    id.includes('leggings') ||
    id.includes('boots') ||
    id.includes('arrow') ||
    id.includes('trident') ||
    id.includes('wolf_armor')
  ) {
    return 'combat';
  }

  if (
    id.includes('pickaxe') ||
    id.includes('axe') ||
    id.includes('shovel') ||
    id.includes('hoe') ||
    id.includes('shears') ||
    id.includes('fishing_rod') ||
    id.includes('brush') ||
    id.includes('flint_and_steel') ||
    id.includes('compass') ||
    id.includes('clock') ||
    id.includes('spyglass')
  ) {
    return 'tools';
  }

  if (
    id.includes('redstone') ||
    id.includes('piston') ||
    id.includes('observer') ||
    id.includes('repeater') ||
    id.includes('comparator') ||
    id.includes('dispenser') ||
    id.includes('dropper') ||
    id.includes('hopper') ||
    id.includes('target') ||
    id.includes('tnt') ||
    id.includes('detector') ||
    id.includes('lever') ||
    id.includes('button') ||
    id.includes('pressure_plate') ||
    id.includes('sensor') ||
    id.includes('lightning_rod')
  ) {
    return 'redstone';
  }

  if (
    id.includes('bread') ||
    id.includes('cake') ||
    id.includes('cookie') ||
    id.includes('pie') ||
    id.includes('stew') ||
    id.includes('soup') ||
    id.includes('apple') ||
    id.includes('golden') ||
    id.includes('carrot') ||
    id.includes('potato') ||
    id.includes('cooked')
  ) {
    return 'food';
  }

  if (
    id.includes('table') ||
    id.includes('furnace') ||
    id.includes('smoker') ||
    id.includes('anvil') ||
    id.includes('chest') ||
    id.includes('barrel') ||
    id.includes('shulker') ||
    id.includes('beacon') ||
    id.includes('conduit') ||
    id.includes('brewing') ||
    id.includes('cauldron') ||
    id.includes('stand') ||
    id.includes('campfire') ||
    id.includes('bed') ||
    id.includes('clock') ||
    id.includes('ladder')
  ) {
    return 'utility';
  }

  if (
    id.includes('banner') ||
    id.includes('painting') ||
    id.includes('flower') ||
    id.includes('pot') ||
    id.includes('carpet') ||
    id.includes('candle') ||
    id.includes('glass') ||
    id.includes('sign') ||
    id.includes('head') ||
    id.includes('skull')
  ) {
    return 'decoration';
  }

  if (
    id.includes('planks') ||
    id.includes('brick') ||
    id.includes('stone') ||
    id.includes('cobblestone') ||
    id.includes('copper') ||
    id.includes('tuff') ||
    id.includes('deepslate') ||
    id.includes('quartz') ||
    id.includes('slab') ||
    id.includes('stairs') ||
    id.includes('wall') ||
    id.includes('fence') ||
    id.includes('block') ||
    id.includes('log') ||
    id.includes('wood') ||
    id.includes('prismarine') ||
    id.includes('purpur') ||
    id.includes('terracotta') ||
    id.includes('concrete')
  ) {
    return 'building';
  }

  return 'utility';
}

function determineVersion(itemId) {
  const id = itemId.toLowerCase();
  if (
    id.includes('mace') ||
    id.includes('crafter') ||
    id.includes('breeze') ||
    id.includes('heavy_core') ||
    id.includes('trial') ||
    id.includes('scute') ||
    id.includes('wolf_armor') ||
    id.includes('tuff') ||
    id.includes('copper_door') ||
    id.includes('copper_grate') ||
    id.includes('chiseled_copper') ||
    id.includes('vault')
  ) {
    return '1.21 / 26.2';
  }
  if (
    id.includes('cherry') ||
    id.includes('bamboo') ||
    id.includes('chiseled_bookshelf') ||
    id.includes('camel') ||
    id.includes('sniffer') ||
    id.includes('pottery') ||
    id.includes('trim') ||
    id.includes('hanging_sign')
  ) {
    return '1.20';
  }
  return '1.20+ Vanilla';
}

function alignInShapeToGrid(inShape, itemById) {
  // 3x3 grid initialization with null
  const grid = [null, null, null, null, null, null, null, null, null];
  if (!inShape || !Array.isArray(inShape)) return grid;

  const numRows = Math.min(inShape.length, 3);
  for (let r = 0; r < numRows; r++) {
    const row = inShape[r];
    if (!Array.isArray(row)) continue;
    const numCols = Math.min(row.length, 3);
    for (let c = 0; c < numCols; c++) {
      const val = row[c];
      if (val !== null && val !== undefined) {
        const itemObj = itemById[val];
        if (itemObj) {
          grid[r * 3 + c] = itemObj.name;
        }
      }
    }
  }
  return grid;
}

function alignIngredientsToGrid(ingredients, itemById) {
  const grid = [null, null, null, null, null, null, null, null, null];
  if (!ingredients || !Array.isArray(ingredients)) return grid;

  for (let i = 0; i < Math.min(ingredients.length, 9); i++) {
    const val = ingredients[i];
    if (val !== null && val !== undefined) {
      const itemObj = itemById[val];
      if (itemObj) {
        grid[i] = itemObj.name;
      }
    }
  }
  return grid;
}

async function main() {
  console.log('Fetching official Minecraft 1.21.4 items & recipes data...');
  const [items, recipesMap] = await Promise.all([
    fetchJson('https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.21.4/items.json'),
    fetchJson('https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.21.4/recipes.json'),
  ]);

  const itemById = {};
  items.forEach((i) => (itemById[i.id] = i));

  const processedRecipes = [];
  const processedMaterials = {};

  // Build materials map for all items
  items.forEach((item) => {
    const name = formatName(item.name);
    const category = determineCategory(item.name, item.displayName);
    let rarity = 'common';
    if (item.name.includes('diamond') || item.name.includes('beacon') || item.name.includes('mace')) {
      rarity = 'rare';
    } else if (item.name.includes('netherite') || item.name.includes('heavy_core') || item.name.includes('star')) {
      rarity = 'epic';
    } else if (item.name.includes('gold') || item.name.includes('emerald') || item.name.includes('crafter')) {
      rarity = 'uncommon';
    }

    processedMaterials[item.name] = {
      id: item.name,
      name: item.displayName || name,
      category,
      rarity,
      stackSize: item.stackSize || 64,
      description: `Official Minecraft item: ${item.displayName || name}. Used in crafting and building.`,
      giveCommand: `/give @p minecraft:${item.name} 1`,
    };
  });

  // Process recipes
  let recipeCounter = 0;
  for (const [outputIdStr, recipeList] of Object.entries(recipesMap)) {
    const outputItem = itemById[outputIdStr];
    if (!outputItem) continue;

    recipeList.forEach((rawRecipe, idx) => {
      recipeCounter++;
      let grid = [null, null, null, null, null, null, null, null, null];
      let shapeless = false;

      if (rawRecipe.inShape) {
        grid = alignInShapeToGrid(rawRecipe.inShape, itemById);
        shapeless = false;
      } else if (rawRecipe.ingredients) {
        grid = alignIngredientsToGrid(rawRecipe.ingredients, itemById);
        shapeless = true;
      }

      // Check if grid has at least one ingredient
      const hasIngredient = grid.some((g) => g !== null);
      if (!hasIngredient) return;

      const outputCount = rawRecipe.result ? rawRecipe.result.count : 1;
      const category = determineCategory(outputItem.name, outputItem.displayName);
      const version = determineVersion(outputItem.name);
      const recipeId = idx === 0 ? outputItem.name : `${outputItem.name}_variant_${idx + 1}`;

      const ingredientsList = Array.from(new Set(grid.filter(Boolean))).map((ing) =>
        itemById[ing] ? itemById[ing].displayName || formatName(ing) : formatName(ing)
      );

      processedRecipes.push({
        id: recipeId,
        name: outputItem.displayName || formatName(outputItem.name),
        category,
        grid,
        output: {
          item: outputItem.name,
          count: outputCount,
        },
        shapeless,
        isCraftable: true,
        note: shapeless ? 'Shapeless Crafting (Arrangement does not matter)' : '3×3 Shaped Crafting Recipe',
        description: `Crafts ${outputCount}x ${outputItem.displayName || formatName(outputItem.name)} using ${ingredientsList.join(', ')}.`,
        version,
        tags: [category, version, shapeless ? 'shapeless' : 'shaped', outputItem.name],
        searchKeywords: [
          outputItem.name,
          outputItem.displayName ? outputItem.displayName.toLowerCase() : '',
          ...ingredientsList.map((i) => i.toLowerCase()),
          category,
        ].filter(Boolean),
        giveCommand: `/give @p minecraft:${outputItem.name} ${outputCount}`,
      });
    });
  }

  console.log(`Generated ${processedRecipes.length} recipes across ${Object.keys(processedMaterials).length} items.`);

  // Write materials.ts
  const materialsContent = `/**
 * Official Minecraft 1.20+ & 1.21.4 (26.2) Item Dataset
 * Auto-generated from official Minecraft game definitions.
 */

import { ItemInfo } from '../types';

export const itemsMap: Record<string, ItemInfo> = ${JSON.stringify(processedMaterials, null, 2)};
`;

  // Write recipes.ts
  const recipesContent = `/**
 * Official Minecraft 1.20+ & 1.21.4 (26.2) 3x3 Crafting Recipe Database
 * Contains ${processedRecipes.length} recipes.
 */

import { Recipe, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  { id: 'all', name: 'All Recipes', icon: 'crafting_table', description: 'Complete database of all Minecraft craftable items' },
  { id: 'trials', name: '1.20 / 1.21 / 26.2', icon: 'mace', description: 'Newest items from Tricky Trials (Mace, Crafter, Breeze, Tuff Bricks)' },
  { id: 'tools', name: 'Tools', icon: 'diamond_pickaxe', description: 'Mining tools, shovels, axes, fishing rods, and utility gear' },
  { id: 'combat', name: 'Combat & Armor', icon: 'diamond_sword', description: 'Swords, bows, shields, armor sets, and maces' },
  { id: 'redstone', name: 'Redstone & Tech', icon: 'redstone', description: 'Pistons, comparators, target blocks, TNT, and crafter' },
  { id: 'building', name: 'Building & Blocks', icon: 'oak_planks', description: 'Planks, stone bricks, copper blocks, and structural materials' },
  { id: 'food', name: 'Food & Farming', icon: 'golden_apple', description: 'Consumables, stew, bread, pie, and crops' },
  { id: 'utility', name: 'Utility & Stations', icon: 'furnace', description: 'Workstations, storage containers, anvils, and tables' },
  { id: 'decoration', name: 'Decoration', icon: 'painting', description: 'Banners, glass, carpets, candles, and aesthetic blocks' },
];

export const recipesData: Recipe[] = ${JSON.stringify(processedRecipes, null, 2)};
`;

  fs.writeFileSync(path.join(process.cwd(), 'src/data/materials.ts'), materialsContent, 'utf-8');
  fs.writeFileSync(path.join(process.cwd(), 'src/data/recipes.ts'), recipesContent, 'utf-8');

  console.log('Successfully written src/data/materials.ts and src/data/recipes.ts!');
}

main().catch((err) => {
  console.error('Error generating data:', err);
  process.exit(1);
});
