import { ItemInfo } from '../types';

export const itemsMap: Record<string, ItemInfo> = {
  // Combat & Tools
  diamond_sword: {
    id: 'diamond_sword',
    name: 'Diamond Sword',
    category: 'combat',
    rarity: 'rare',
    stackSize: 1,
    description: 'A sharp, durable blade forged from cyan diamond gemstones and an oak stick.',
    giveCommand: '/give @p minecraft:diamond_sword 1',
    hexColors: ['#55ffff', '#2fc0b4', '#176b64', '#855932'],
    stats: '+7 Attack Damage · 1.6 Attack Speed · 1561 Durability'
  },
  diamond_pickaxe: {
    id: 'diamond_pickaxe',
    name: 'Diamond Pickaxe',
    category: 'tools',
    rarity: 'rare',
    stackSize: 1,
    description: 'Capable of mining Obsidian, Ancient Debris, and all standard ores at rapid speed.',
    giveCommand: '/give @p minecraft:diamond_pickaxe 1',
    hexColors: ['#55ffff', '#2fc0b4', '#176b64', '#855932'],
    stats: '+5 Attack Damage · 1.2 Attack Speed · 1561 Durability'
  },
  diamond_axe: {
    id: 'diamond_axe',
    name: 'Diamond Axe',
    category: 'tools',
    rarity: 'rare',
    stackSize: 1,
    description: 'Devastating heavy striking weapon and swift tree harvesting tool.',
    giveCommand: '/give @p minecraft:diamond_axe 1',
    hexColors: ['#55ffff', '#2fc0b4', '#176b64', '#855932'],
    stats: '+9 Attack Damage · 1.0 Attack Speed · 1561 Durability'
  },
  diamond_shovel: {
    id: 'diamond_shovel',
    name: 'Diamond Shovel',
    category: 'tools',
    rarity: 'rare',
    stackSize: 1,
    description: 'Rapidly excavates dirt, sand, gravel, and snow blocks.',
    giveCommand: '/give @p minecraft:diamond_shovel 1',
    hexColors: ['#55ffff', '#2fc0b4', '#855932'],
    stats: '+5.5 Attack Damage · 1.0 Attack Speed'
  },
  diamond_hoe: {
    id: 'diamond_hoe',
    name: 'Diamond Hoe',
    category: 'tools',
    rarity: 'rare',
    stackSize: 1,
    description: 'Tills soil into farmland and harvests leafy vegetation efficiently.',
    giveCommand: '/give @p minecraft:diamond_hoe 1',
    hexColors: ['#55ffff', '#2fc0b4', '#855932'],
    stats: '+1 Attack Damage · 4.0 Attack Speed'
  },
  iron_sword: {
    id: 'iron_sword',
    name: 'Iron Sword',
    category: 'combat',
    rarity: 'common',
    stackSize: 1,
    description: 'Standard reliable survival weapon fashioned from refined iron ingots.',
    giveCommand: '/give @p minecraft:iron_sword 1',
    hexColors: ['#d8d8d8', '#a0a0a0', '#855932'],
    stats: '+6 Attack Damage · 1.6 Attack Speed · 250 Durability'
  },
  iron_pickaxe: {
    id: 'iron_pickaxe',
    name: 'Iron Pickaxe',
    category: 'tools',
    rarity: 'common',
    stackSize: 1,
    description: 'Essential tier tool capable of harvesting Diamond, Gold, Redstone, and Emerald ores.',
    giveCommand: '/give @p minecraft:iron_pickaxe 1',
    hexColors: ['#d8d8d8', '#a0a0a0', '#855932'],
    stats: '+4 Attack Damage · 1.2 Attack Speed · 250 Durability'
  },
  golden_sword: {
    id: 'golden_sword',
    name: 'Golden Sword',
    category: 'combat',
    rarity: 'uncommon',
    stackSize: 1,
    description: 'Highly enchantable blade crafted with soft gold ingots.',
    giveCommand: '/give @p minecraft:golden_sword 1',
    hexColors: ['#eaee57', '#bda426', '#855932'],
    stats: '+4 Attack Damage · 1.6 Attack Speed'
  },
  bow: {
    id: 'bow',
    name: 'Bow',
    category: 'combat',
    rarity: 'common',
    stackSize: 1,
    description: 'Fires arrows at long range; requires arrows in inventory.',
    giveCommand: '/give @p minecraft:bow 1',
    hexColors: ['#8f6a42', '#ffffff', '#50381e'],
    stats: 'Ranged Weapon · Up to 9 Damage fully drawn'
  },
  crossbow: {
    id: 'crossbow',
    name: 'Crossbow',
    category: 'combat',
    rarity: 'common',
    stackSize: 1,
    description: 'Powerful ranged weapon capable of holding charged ammunition and fireworks.',
    giveCommand: '/give @p minecraft:crossbow 1',
    hexColors: ['#8f6a42', '#a0a0a0', '#4a4a4a'],
    stats: 'Ranged Weapon · Higher velocity than Bow'
  },
  shield: {
    id: 'shield',
    name: 'Shield',
    category: 'combat',
    rarity: 'common',
    stackSize: 1,
    description: 'Blocks frontal attacks, projectile arrows, and creeper explosions.',
    giveCommand: '/give @p minecraft:shield 1',
    hexColors: ['#8f6a42', '#a0a0a0', '#4a4a4a'],
    stats: 'Defensive Gear · 336 Durability'
  },
  // 1.21 Tricky Trials & Modern Items
  mace: {
    id: 'mace',
    name: 'Mace',
    category: 'trials',
    rarity: 'epic',
    stackSize: 1,
    description: 'Devastating smash-attack weapon introduced in Minecraft 1.21 Tricky Trials. Falling increases damage exponentially!',
    giveCommand: '/give @p minecraft:mace 1',
    hexColors: ['#694431', '#d4944d', '#3e363f', '#77cbe8'],
    stats: '+6 Attack Damage · Exponential Smash Fall Bonus · 500 Durability'
  },
  heavy_core: {
    id: 'heavy_core',
    name: 'Heavy Core',
    category: 'trials',
    rarity: 'epic',
    stackSize: 64,
    description: 'Dense mysterious relic found in ominous trial chambers vault, required to forge the Mace.',
    giveCommand: '/give @p minecraft:heavy_core 1',
    hexColors: ['#3e363f', '#5e5260', '#908392'],
    stats: '1.21 Ominous Vault Treasure'
  },
  breeze_rod: {
    id: 'breeze_rod',
    name: 'Breeze Rod',
    category: 'trials',
    rarity: 'rare',
    stackSize: 64,
    description: 'A swirling rod of condensed turbulent wind dropped by the trial chamber Breeze mob.',
    giveCommand: '/give @p minecraft:breeze_rod 1',
    hexColors: ['#77cbe8', '#b5e7f7', '#428ba3'],
    stats: 'Crafting Component · Forges Mace & Wind Charges'
  },
  wind_charge: {
    id: 'wind_charge',
    name: 'Wind Charge',
    category: 'trials',
    rarity: 'uncommon',
    stackSize: 64,
    description: 'Throwable orb that releases a burst of turbulent wind on impact, propelling players and mobs.',
    giveCommand: '/give @p minecraft:wind_charge 16',
    hexColors: ['#77cbe8', '#b5e7f7', '#ffffff'],
    stats: 'Burst Propulsion · 1.21 Utility'
  },
  crafter: {
    id: 'crafter',
    name: 'Crafter',
    category: 'redstone',
    rarity: 'uncommon',
    stackSize: 64,
    description: 'Automated redstone crafting block that crafts items when powered by a redstone pulse!',
    giveCommand: '/give @p minecraft:crafter 1',
    hexColors: ['#8f6a42', '#a0a0a0', '#e03030', '#4a4a4a'],
    stats: 'Automated Crafting · Redstone Triggered'
  },
  copper_bulb: {
    id: 'copper_bulb',
    name: 'Copper Bulb',
    category: 'redstone',
    rarity: 'common',
    stackSize: 64,
    description: 'Toggleable light-emitting redstone block that flips state with each pulse without continuous power.',
    giveCommand: '/give @p minecraft:copper_bulb 1',
    hexColors: ['#c15b3c', '#ffd447', '#5a2d1d'],
    stats: 'T-Flip-Flop Light Source · Light Level 15'
  },
  // Basic Ingredients & Minerals
  diamond: {
    id: 'diamond',
    name: 'Diamond',
    category: 'utility',
    rarity: 'rare',
    stackSize: 64,
    description: 'Precious cyan gemstone mined deep underground, used for top-tier equipment.',
    giveCommand: '/give @p minecraft:diamond 64',
    hexColors: ['#55ffff', '#2fc0b4', '#176b64'],
    stats: 'Primary Mineral Gem'
  },
  stick: {
    id: 'stick',
    name: 'Stick',
    category: 'utility',
    rarity: 'common',
    stackSize: 64,
    description: 'Wooden handle component crafted from two wooden planks.',
    giveCommand: '/give @p minecraft:stick 64',
    hexColors: ['#855932', '#59381c'],
    stats: 'Foundational Crafting Component'
  },
  iron_ingot: {
    id: 'iron_ingot',
    name: 'Iron Ingot',
    category: 'utility',
    rarity: 'common',
    stackSize: 64,
    description: 'Versatile metallic bar used for tools, armor, hoppers, rails, and buckets.',
    giveCommand: '/give @p minecraft:iron_ingot 64',
    hexColors: ['#d8d8d8', '#a0a0a0', '#707070'],
    stats: 'Essential Metal Ingot'
  },
  gold_ingot: {
    id: 'gold_ingot',
    name: 'Gold Ingot',
    category: 'utility',
    rarity: 'uncommon',
    stackSize: 64,
    description: 'Soft lustrous yellow metal used in powered rails, golden apples, and piglin bartering.',
    giveCommand: '/give @p minecraft:gold_ingot 64',
    hexColors: ['#f8e932', '#d4a41d', '#8a640b'],
    stats: 'Conductive Precious Metal'
  },
  copper_ingot: {
    id: 'copper_ingot',
    name: 'Copper Ingot',
    category: 'utility',
    rarity: 'common',
    stackSize: 64,
    description: 'Reddish metal ingot used for copper blocks, lightning rods, spyglasses, and bulbs.',
    giveCommand: '/give @p minecraft:copper_ingot 64',
    hexColors: ['#c15b3c', '#98432b'],
    stats: 'Oxidizing Metal'
  },
  redstone: {
    id: 'redstone',
    name: 'Redstone Dust',
    category: 'redstone',
    rarity: 'common',
    stackSize: 64,
    description: 'Conductive mineral dust used to transmit redstone power and build circuits.',
    giveCommand: '/give @p minecraft:redstone 64',
    hexColors: ['#e84141', '#a01515', '#600505'],
    stats: 'Signal Carrier'
  },
  oak_planks: {
    id: 'oak_planks',
    name: 'Oak Planks',
    category: 'building',
    rarity: 'common',
    stackSize: 64,
    description: 'Standard wooden building material crafted from oak logs.',
    giveCommand: '/give @p minecraft:oak_planks 64',
    hexColors: ['#9c6b3d', '#78522f'],
    stats: 'Building & Recipe Base'
  },
  oak_log: {
    id: 'oak_log',
    name: 'Oak Log',
    category: 'building',
    rarity: 'common',
    stackSize: 64,
    description: 'Natural tree trunk harvested from oak trees.',
    giveCommand: '/give @p minecraft:oak_log 64',
    hexColors: ['#6d5532', '#41321e'],
    stats: 'Wood Source'
  },
  crafting_table: {
    id: 'crafting_table',
    name: 'Crafting Table',
    category: 'utility',
    rarity: 'common',
    stackSize: 64,
    description: 'The fundamental workstation providing a 3×3 crafting grid to assemble complex items.',
    giveCommand: '/give @p minecraft:crafting_table 1',
    hexColors: ['#9c6b3d', '#48331d', '#bf8a57'],
    stats: 'Expands Crafting to 3×3'
  },
  furnace: {
    id: 'furnace',
    name: 'Furnace',
    category: 'utility',
    rarity: 'common',
    stackSize: 64,
    description: 'Stone workstation assembled from 8 cobblestone blocks, fueled to smelt ores and cook food.',
    giveCommand: '/give @p minecraft:furnace 1',
    hexColors: ['#616161', '#3a3a3a', '#7f7f7f'],
    stats: 'Smelting Workstation'
  },
  chest: {
    id: 'chest',
    name: 'Chest',
    category: 'utility',
    rarity: 'common',
    stackSize: 64,
    description: 'Wooden container providing 27 inventory storage slots; pair two to create a large chest.',
    giveCommand: '/give @p minecraft:chest 64',
    hexColors: ['#8f6a42', '#3a2712'],
    stats: '27 Slot Container'
  },
  tnt: {
    id: 'tnt',
    name: 'TNT',
    category: 'redstone',
    rarity: 'common',
    stackSize: 64,
    description: 'Explosive block primed by fire, redstone pulse, or impacts.',
    giveCommand: '/give @p minecraft:tnt 64',
    hexColors: ['#db2b2b', '#ffffff', '#222222'],
    stats: 'Blast Power 4.0'
  },
  golden_apple: {
    id: 'golden_apple',
    name: 'Golden Apple',
    category: 'food',
    rarity: 'rare',
    stackSize: 64,
    description: 'Enriched fruit coated with 8 gold ingots; grants Absorption II and Regeneration II.',
    giveCommand: '/give @p minecraft:golden_apple 1',
    hexColors: ['#f8e932', '#d4a41d', '#55ff55'],
    stats: 'Food: +4 Hunger · Absorption & Regen Buffs'
  },
  bread: {
    id: 'bread',
    name: 'Bread',
    category: 'food',
    rarity: 'common',
    stackSize: 64,
    description: 'Nutritious survival staple baked from three harvested wheat stalks.',
    giveCommand: '/give @p minecraft:bread 64',
    hexColors: ['#9c6b3d', '#6d4825'],
    stats: 'Food: +5 Hunger · 6.0 Saturation'
  },
  ender_chest: {
    id: 'ender_chest',
    name: 'Ender Chest',
    category: 'utility',
    rarity: 'rare',
    stackSize: 64,
    description: 'Dimensional chest crafted with 8 obsidian blocks and an Eye of Ender; shares storage globally.',
    giveCommand: '/give @p minecraft:ender_chest 1',
    hexColors: ['#172a29', '#244846', '#498884'],
    stats: 'Cross-Dimensional Private Storage'
  },
  beacon: {
    id: 'beacon',
    name: 'Beacon',
    category: 'utility',
    rarity: 'epic',
    stackSize: 64,
    description: 'Skyward beam generator crafted with Obsidian, Glass, and a Nether Star to grant area buffs.',
    giveCommand: '/give @p minecraft:beacon 1',
    hexColors: ['#a0e5f2', '#412d52', '#d5f7fa'],
    stats: 'Area Status Effects: Haste, Speed, Strength'
  }
};
