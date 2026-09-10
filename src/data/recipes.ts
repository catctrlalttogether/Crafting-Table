import { Recipe, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  { id: 'all', name: 'All Recipes', icon: 'crafting_table', description: 'Complete database of authentic 3×3 & 2×2 Minecraft recipes.' },
  { id: 'trials', name: '1.21 Tricky Trials', icon: 'mace', description: 'The newest 1.21 recipes including Mace, Crafter, Wind Charges, and Bulbs.' },
  { id: 'combat', name: 'Weapons & Combat', icon: 'diamond_sword', description: 'Swords, bows, crossbows, and shields for survival warfare.' },
  { id: 'tools', name: 'Tools & Mining', icon: 'diamond_pickaxe', description: 'Essential pickaxes, axes, shovels, and utility gear across all material tiers.' },
  { id: 'armor', name: 'Armor & Defense', icon: 'diamond_chestplate', description: 'Full protective sets of leather, iron, gold, and diamond.' },
  { id: 'redstone', name: 'Redstone & Automation', icon: 'redstone', description: 'Pistons, repeaters, observers, crafters, and mechanical logic components.' },
  { id: 'utility', name: 'Utility & Workstations', icon: 'furnace', description: 'Anvils, brewing stands, beacons, ender chests, and survival essentials.' },
  { id: 'building', name: 'Building & Wood', icon: 'oak_planks', description: 'Planks, doors, trapdoors, stairs, bricks, and structural components.' },
  { id: 'food', name: 'Food & Nutrition', icon: 'golden_apple', description: 'Bread, stews, pies, and golden enchanted delicacies.' },
  { id: 'transport', name: 'Transportation', icon: 'minecart', description: 'Minecarts, rails, and boats for rapid travel.' },
];

export const recipesData: Recipe[] = [
  // 1.21 Tricky Trials
  {
    id: 'mace',
    name: 'Mace',
    category: 'trials',
    grid: [
      null, 'heavy_core', null,
      null, 'breeze_rod', null,
      null, null, null
    ],
    output: { item: 'mace', count: 1 },
    shapeless: false,
    description: 'Forged in Minecraft 1.21 Tricky Trials from a Heavy Core atop a Breeze Rod. Smashes foes with fall damage multiplier!',
    version: '1.21+',
    tags: ['mace', 'heavy core', 'breeze rod', 'trials', 'weapon'],
    searchKeywords: ['mace', 'heavy core', 'breeze rod', 'tricky trials', 'smash', 'weapon', '1.21'],
    stats: '+6 Base Attack Damage · Scales with fall distance'
  },
  {
    id: 'crafter',
    name: 'Crafter',
    category: 'trials',
    grid: [
      'iron_ingot', 'iron_ingot', 'iron_ingot',
      'iron_ingot', 'crafting_table', 'iron_ingot',
      'redstone', 'dropper', 'redstone'
    ],
    output: { item: 'crafter', count: 1 },
    shapeless: false,
    description: 'Autonomous crafting block powered by redstone pulses to auto-craft items in automated factories.',
    version: '1.21+',
    tags: ['crafter', 'automation', 'redstone', 'table', 'trials'],
    searchKeywords: ['crafter', 'autocrafter', 'auto craft', 'factory', 'redstone'],
    stats: 'Redstone Autonomous Crafter'
  },
  {
    id: 'wind_charge',
    name: 'Wind Charge',
    category: 'trials',
    grid: [
      'breeze_rod', null, null,
      null, null, null,
      null, null, null
    ],
    output: { item: 'wind_charge', count: 4 },
    shapeless: true,
    description: 'Crushed directly from a single Breeze Rod into 4 throwable bursts of turbulent propulsion.',
    version: '1.21+',
    tags: ['wind charge', 'breeze rod', 'trials', 'propulsion'],
    searchKeywords: ['wind charge', 'breeze', 'rocket jump', 'trials'],
    stats: 'Explosive Knockback Propulsion'
  },
  {
    id: 'copper_bulb',
    name: 'Copper Bulb',
    category: 'trials',
    grid: [
      'copper_block', 'copper_block', 'copper_block',
      'copper_block', 'blaze_rod', 'copper_block',
      'copper_block', 'redstone', 'copper_block'
    ],
    output: { item: 'copper_bulb', count: 4 },
    shapeless: false,
    description: 'Bistable toggle lamp that switches on or off when hit with a redstone pulse without continuous signal.',
    version: '1.21+',
    tags: ['copper bulb', 'light', 'lamp', 'toggle', 'redstone'],
    searchKeywords: ['copper bulb', 'lamp', 't-flip-flop', 'light'],
    stats: 'Toggle Light Source'
  },

  // Combat & Weapons
  {
    id: 'diamond_sword',
    name: 'Diamond Sword',
    category: 'combat',
    grid: [
      null, 'diamond', null,
      null, 'diamond', null,
      null, 'stick', null
    ],
    output: { item: 'diamond_sword', count: 1 },
    shapeless: false,
    description: 'The iconic Minecraft weapon crafted with two vertical diamonds over a wooden stick.',
    version: '1.0+',
    tags: ['diamond', 'sword', 'weapon', 'melee', 'blade'],
    searchKeywords: ['diamond sword', 'sword', 'diamond', 'blade', 'pvp', 'weapon'],
    stats: '+7 Attack Damage · 1.6 Attack Speed · 1561 Durability'
  },
  {
    id: 'iron_sword',
    name: 'Iron Sword',
    category: 'combat',
    grid: [
      null, 'iron_ingot', null,
      null, 'iron_ingot', null,
      null, 'stick', null
    ],
    output: { item: 'iron_sword', count: 1 },
    shapeless: false,
    description: 'Standard early-game combat blade constructed from two iron ingots and a stick.',
    version: '1.0+',
    tags: ['iron', 'sword', 'weapon'],
    searchKeywords: ['iron sword', 'sword', 'blade', 'iron'],
    stats: '+6 Attack Damage · 1.6 Attack Speed · 250 Durability'
  },
  {
    id: 'golden_sword',
    name: 'Golden Sword',
    category: 'combat',
    grid: [
      null, 'gold_ingot', null,
      null, 'gold_ingot', null,
      null, 'stick', null
    ],
    output: { item: 'golden_sword', count: 1 },
    shapeless: false,
    description: 'A decorative golden blade with low durability but exceptional enchantment affinity.',
    version: '1.0+',
    tags: ['gold', 'sword', 'weapon'],
    searchKeywords: ['golden sword', 'gold sword', 'blade'],
    stats: '+4 Attack Damage · 1.6 Attack Speed'
  },
  {
    id: 'bow',
    name: 'Bow',
    category: 'combat',
    grid: [
      null, 'stick', 'string',
      'stick', null, 'string',
      null, 'stick', 'string'
    ],
    output: { item: 'bow', count: 1 },
    shapeless: false,
    description: 'Long-range projectile weapon assembled from 3 wooden sticks and 3 cobweb strings.',
    version: '1.0+',
    tags: ['bow', 'ranged', 'arrow', 'string', 'stick'],
    searchKeywords: ['bow', 'arrows', 'ranged weapon', 'sniper'],
    stats: 'Variable Projectile Damage'
  },
  {
    id: 'crossbow',
    name: 'Crossbow',
    category: 'combat',
    grid: [
      'stick', 'iron_ingot', 'stick',
      'string', 'tripwire_hook', 'string',
      null, 'stick', null
    ],
    output: { item: 'crossbow', count: 1 },
    shapeless: false,
    description: 'Heavy projectile weapon crafted with iron, sticks, strings, and a tripwire hook.',
    version: '1.14+',
    tags: ['crossbow', 'ranged', 'iron', 'tripwire hook'],
    searchKeywords: ['crossbow', 'ranged', 'firework weapon'],
    stats: 'Pre-loadable Ammunition'
  },
  {
    id: 'shield',
    name: 'Shield',
    category: 'combat',
    grid: [
      'oak_planks', 'iron_ingot', 'oak_planks',
      'oak_planks', 'oak_planks', 'oak_planks',
      null, 'oak_planks', null
    ],
    output: { item: 'shield', count: 1 },
    shapeless: false,
    description: 'Defensive equipment crafted from 6 wood planks and an iron ingot crest.',
    version: '1.9+',
    tags: ['shield', 'defense', 'block', 'iron', 'planks'],
    searchKeywords: ['shield', 'parry', 'block', 'defense'],
    stats: '100% Frontal Melee & Projectile Block'
  },

  // Tools & Mining
  {
    id: 'diamond_pickaxe',
    name: 'Diamond Pickaxe',
    category: 'tools',
    grid: [
      'diamond', 'diamond', 'diamond',
      null, 'stick', null,
      null, 'stick', null
    ],
    output: { item: 'diamond_pickaxe', count: 1 },
    shapeless: false,
    description: 'Three diamonds across the top with a central shaft of two sticks.',
    version: '1.0+',
    tags: ['diamond', 'pickaxe', 'mining', 'obsidian', 'tool'],
    searchKeywords: ['diamond pickaxe', 'pickaxe', 'mining', 'diamond'],
    stats: '+5 Attack Damage · 1.2 Attack Speed · 1561 Durability'
  },
  {
    id: 'diamond_axe',
    name: 'Diamond Axe',
    category: 'tools',
    grid: [
      'diamond', 'diamond', null,
      'diamond', 'stick', null,
      null, 'stick', null
    ],
    output: { item: 'diamond_axe', count: 1 },
    shapeless: false,
    description: 'Heavy-duty axe forged with three diamonds and two sticks.',
    version: '1.0+',
    tags: ['diamond', 'axe', 'woodcutting', 'weapon', 'tool'],
    searchKeywords: ['diamond axe', 'axe', 'chopping', 'diamond'],
    stats: '+9 Attack Damage · 1.0 Attack Speed'
  },
  {
    id: 'diamond_shovel',
    name: 'Diamond Shovel',
    category: 'tools',
    grid: [
      null, 'diamond', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    output: { item: 'diamond_shovel', count: 1 },
    shapeless: false,
    description: 'Excavation spade formed from a single diamond atop two sticks.',
    version: '1.0+',
    tags: ['diamond', 'shovel', 'digging', 'tool'],
    searchKeywords: ['diamond shovel', 'shovel', 'spade'],
    stats: '+5.5 Attack Damage · Fast Digging'
  },
  {
    id: 'diamond_hoe',
    name: 'Diamond Hoe',
    category: 'tools',
    grid: [
      'diamond', 'diamond', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    output: { item: 'diamond_hoe', count: 1 },
    shapeless: false,
    description: 'Agricultural tool crafted with two diamonds atop two sticks.',
    version: '1.0+',
    tags: ['diamond', 'hoe', 'farming', 'tool'],
    searchKeywords: ['diamond hoe', 'hoe', 'farming'],
    stats: '+1 Attack Damage · 4.0 Attack Speed'
  },
  {
    id: 'iron_pickaxe',
    name: 'Iron Pickaxe',
    category: 'tools',
    grid: [
      'iron_ingot', 'iron_ingot', 'iron_ingot',
      null, 'stick', null,
      null, 'stick', null
    ],
    output: { item: 'iron_pickaxe', count: 1 },
    shapeless: false,
    description: 'Foundational mining tool capable of extracting diamond, redstone, and gold ores.',
    version: '1.0+',
    tags: ['iron', 'pickaxe', 'mining', 'tool'],
    searchKeywords: ['iron pickaxe', 'pickaxe', 'iron'],
    stats: '+4 Attack Damage · 1.2 Attack Speed'
  },
  {
    id: 'flint_and_steel',
    name: 'Flint and Steel',
    category: 'tools',
    grid: [
      'iron_ingot', null, null,
      null, 'flint', null,
      null, null, null
    ],
    output: { item: 'flint_and_steel', count: 1 },
    shapeless: true,
    description: 'Ignition utility crafted from an iron ingot and a piece of flint.',
    version: '1.0+',
    tags: ['flint and steel', 'fire', 'igniter', 'nether portal', 'tool'],
    searchKeywords: ['flint and steel', 'fire', 'ignite', 'portal starter'],
    stats: 'Sparks Fire & Primes TNT'
  },
  {
    id: 'shears',
    name: 'Shears',
    category: 'tools',
    grid: [
      null, 'iron_ingot', null,
      'iron_ingot', null, null,
      null, null, null
    ],
    output: { item: 'shears', count: 1 },
    shapeless: true,
    description: 'Two iron ingots aligned diagonally to safely shear sheep wool, leaves, and cobwebs.',
    version: '1.0+',
    tags: ['shears', 'wool', 'leaves', 'tool'],
    searchKeywords: ['shears', 'scissors', 'wool harvester'],
    stats: 'Gathers Wool & Leaves Intact'
  },

  // Armor & Defense
  {
    id: 'diamond_helmet',
    name: 'Diamond Helmet',
    category: 'armor',
    grid: [
      'diamond', 'diamond', 'diamond',
      'diamond', null, 'diamond',
      null, null, null
    ],
    output: { item: 'diamond_helmet', count: 1 },
    shapeless: false,
    description: 'Protective crown forged from 5 diamonds in an arch pattern.',
    version: '1.0+',
    tags: ['diamond', 'helmet', 'armor', 'defense'],
    searchKeywords: ['diamond helmet', 'helmet', 'armor', 'hat'],
    stats: '+3 Armor · +2 Armor Toughness'
  },
  {
    id: 'diamond_chestplate',
    name: 'Diamond Chestplate',
    category: 'armor',
    grid: [
      'diamond', null, 'diamond',
      'diamond', 'diamond', 'diamond',
      'diamond', 'diamond', 'diamond'
    ],
    output: { item: 'diamond_chestplate', count: 1 },
    shapeless: false,
    description: '8 diamonds arranged around the central top slot, providing top-tier torso defense.',
    version: '1.0+',
    tags: ['diamond', 'chestplate', 'armor', 'torso'],
    searchKeywords: ['diamond chestplate', 'chestplate', 'armor', 'tunic'],
    stats: '+8 Armor · +2 Armor Toughness'
  },
  {
    id: 'diamond_leggings',
    name: 'Diamond Leggings',
    category: 'armor',
    grid: [
      'diamond', 'diamond', 'diamond',
      'diamond', null, 'diamond',
      'diamond', null, 'diamond'
    ],
    output: { item: 'diamond_leggings', count: 1 },
    shapeless: false,
    description: '7 diamonds arranged in an inverted U shape to guard legs and thighs.',
    version: '1.0+',
    tags: ['diamond', 'leggings', 'armor', 'pants'],
    searchKeywords: ['diamond leggings', 'leggings', 'pants', 'armor'],
    stats: '+6 Armor · +2 Armor Toughness'
  },
  {
    id: 'diamond_boots',
    name: 'Diamond Boots',
    category: 'armor',
    grid: [
      'diamond', null, 'diamond',
      'diamond', null, 'diamond',
      null, null, null
    ],
    output: { item: 'diamond_boots', count: 1 },
    shapeless: false,
    description: '4 diamonds placed in two vertical columns to forge footwear.',
    version: '1.0+',
    tags: ['diamond', 'boots', 'armor', 'shoes'],
    searchKeywords: ['diamond boots', 'boots', 'shoes', 'armor'],
    stats: '+3 Armor · +2 Armor Toughness'
  },
  {
    id: 'iron_chestplate',
    name: 'Iron Chestplate',
    category: 'armor',
    grid: [
      'iron_ingot', null, 'iron_ingot',
      'iron_ingot', 'iron_ingot', 'iron_ingot',
      'iron_ingot', 'iron_ingot', 'iron_ingot'
    ],
    output: { item: 'iron_chestplate', count: 1 },
    shapeless: false,
    description: 'Heavy plate mail fashioned from 8 iron ingots.',
    version: '1.0+',
    tags: ['iron', 'chestplate', 'armor'],
    searchKeywords: ['iron chestplate', 'iron armor', 'chest'],
    stats: '+6 Armor'
  },

  // Redstone & Automation
  {
    id: 'redstone_torch',
    name: 'Redstone Torch',
    category: 'redstone',
    grid: [
      null, 'redstone', null,
      null, 'stick', null,
      null, null, null
    ],
    output: { item: 'redstone_torch', count: 1 },
    shapeless: false,
    description: 'A constant signal emitter and circuit inverter made of redstone dust on a stick.',
    version: '1.0+',
    tags: ['redstone', 'torch', 'power', 'inverter'],
    searchKeywords: ['redstone torch', 'inverter', 'power source', 'signal'],
    stats: 'Power Level 15 Continuous Signal'
  },
  {
    id: 'repeater',
    name: 'Redstone Repeater',
    category: 'redstone',
    grid: [
      'redstone_torch', 'redstone', 'redstone_torch',
      'stone', 'stone', 'stone',
      null, null, null
    ],
    output: { item: 'repeater', count: 1 },
    shapeless: false,
    description: 'Two redstone torches and redstone dust on smooth stone. Delays and refreshes power signals.',
    version: '1.0+',
    tags: ['repeater', 'redstone', 'delay', 'circuit'],
    searchKeywords: ['repeater', 'redstone repeater', 'delay', 'diode'],
    stats: '1-4 Tick Delay · Signal Extender'
  },
  {
    id: 'comparator',
    name: 'Redstone Comparator',
    category: 'redstone',
    grid: [
      null, 'redstone_torch', null,
      'redstone_torch', 'quartz', 'redstone_torch',
      'stone', 'stone', 'stone'
    ],
    output: { item: 'comparator', count: 1 },
    shapeless: false,
    description: 'Compares, subtracts, or reads inventory capacity using 3 redstone torches, nether quartz, and stone.',
    version: '1.5+',
    tags: ['comparator', 'redstone', 'logic', 'quartz'],
    searchKeywords: ['comparator', 'inventory sensor', 'subtraction logic'],
    stats: 'Signal Comparison & Container Reading'
  },
  {
    id: 'piston',
    name: 'Piston',
    category: 'redstone',
    grid: [
      'oak_planks', 'oak_planks', 'oak_planks',
      'cobblestone', 'iron_ingot', 'cobblestone',
      'cobblestone', 'redstone', 'cobblestone'
    ],
    output: { item: 'piston', count: 1 },
    shapeless: false,
    description: 'Mechanical pusher assembled from wood planks, cobblestone, an iron ingot, and redstone dust.',
    version: '1.0+',
    tags: ['piston', 'push', 'redstone', 'machine'],
    searchKeywords: ['piston', 'pusher', 'mechanical block'],
    stats: 'Pushes Up to 12 Blocks'
  },
  {
    id: 'sticky_piston',
    name: 'Sticky Piston',
    category: 'redstone',
    grid: [
      null, 'slime_ball', null,
      null, 'piston', null,
      null, null, null
    ],
    output: { item: 'sticky_piston', count: 1 },
    shapeless: true,
    description: 'A piston coated with slimeball adhesive to both push and pull attached blocks.',
    version: '1.0+',
    tags: ['sticky piston', 'slime', 'piston', 'pull'],
    searchKeywords: ['sticky piston', 'slime block', 'puller'],
    stats: 'Pushes & Retracts Blocks'
  },
  {
    id: 'observer',
    name: 'Observer',
    category: 'redstone',
    grid: [
      'cobblestone', 'cobblestone', 'cobblestone',
      'redstone', 'redstone', 'quartz',
      'cobblestone', 'cobblestone', 'cobblestone'
    ],
    output: { item: 'observer', count: 1 },
    shapeless: false,
    description: 'Block update detector assembled with 6 cobblestones, 2 redstone dust, and nether quartz.',
    version: '1.11+',
    tags: ['observer', 'sensor', 'bud', 'update', 'redstone'],
    searchKeywords: ['observer', 'block update detector', 'bud', 'pulse'],
    stats: '1-Tick Pulse upon Block Update'
  },
  {
    id: 'hopper',
    name: 'Hopper',
    category: 'redstone',
    grid: [
      'iron_ingot', null, 'iron_ingot',
      'iron_ingot', 'chest', 'iron_ingot',
      null, 'iron_ingot', null
    ],
    output: { item: 'hopper', count: 1 },
    shapeless: false,
    description: 'Funnel container crafted from 5 iron ingots around a central wooden chest.',
    version: '1.5+',
    tags: ['hopper', 'funnel', 'sorting', 'iron', 'chest'],
    searchKeywords: ['hopper', 'item sorter', 'funnel'],
    stats: 'Transfers 2.5 Items/sec'
  },
  {
    id: 'tnt',
    name: 'TNT',
    category: 'redstone',
    grid: [
      'gunpowder', 'sand', 'gunpowder',
      'sand', 'gunpowder', 'sand',
      'gunpowder', 'sand', 'gunpowder'
    ],
    output: { item: 'tnt', count: 1 },
    shapeless: false,
    description: 'High explosive crafted from an alternating checkerboard of 5 gunpowder and 4 sand blocks.',
    version: '1.0+',
    tags: ['tnt', 'explosive', 'gunpowder', 'sand', 'redstone'],
    searchKeywords: ['tnt', 'dynamite', 'bomb', 'explosion'],
    stats: 'Blast Radius 4.0'
  },

  // Building & Wood
  {
    id: 'crafting_table',
    name: 'Crafting Table',
    category: 'building',
    grid: [
      'oak_planks', 'oak_planks', null,
      'oak_planks', 'oak_planks', null,
      null, null, null
    ],
    output: { item: 'crafting_table', count: 1 },
    shapeless: true,
    description: 'The foundation of all crafting: four wooden planks assembled in any 2×2 grid.',
    version: '1.0+',
    tags: ['crafting table', 'workbench', 'planks', '2x2'],
    searchKeywords: ['crafting table', 'workbench', 'table', 'craft'],
    stats: 'Expands Crafting to 3×3 Grid'
  },
  {
    id: 'oak_planks',
    name: 'Oak Planks',
    category: 'building',
    grid: [
      'oak_log', null, null,
      null, null, null,
      null, null, null
    ],
    output: { item: 'oak_planks', count: 4 },
    shapeless: true,
    description: 'Splits 1 natural Oak Log into 4 ready-to-use building planks.',
    version: '1.0+',
    tags: ['oak planks', 'wood', 'log', 'building'],
    searchKeywords: ['oak planks', 'planks', 'wood', 'oak'],
    stats: 'Yields 4 per Log'
  },
  {
    id: 'stick',
    name: 'Stick',
    category: 'building',
    grid: [
      'oak_planks', null, null,
      'oak_planks', null, null,
      null, null, null
    ],
    output: { item: 'stick', count: 4 },
    shapeless: false,
    description: 'Two vertical wood planks yield 4 essential tool handles and torches.',
    version: '1.0+',
    tags: ['stick', 'handle', 'wood', 'planks'],
    searchKeywords: ['stick', 'handle', 'branch', 'wood'],
    stats: 'Yields 4 per 2 Planks'
  },
  {
    id: 'chest',
    name: 'Chest',
    category: 'utility',
    grid: [
      'oak_planks', 'oak_planks', 'oak_planks',
      'oak_planks', null, 'oak_planks',
      'oak_planks', 'oak_planks', 'oak_planks'
    ],
    output: { item: 'chest', count: 1 },
    shapeless: false,
    description: '8 wooden planks hollowed out in a ring to create 27 slots of persistent storage.',
    version: '1.0+',
    tags: ['chest', 'storage', 'inventory', 'planks'],
    searchKeywords: ['chest', 'storage', 'box', 'container'],
    stats: '27 Storage Slots · Expandable to 54'
  },
  {
    id: 'furnace',
    name: 'Furnace',
    category: 'utility',
    grid: [
      'cobblestone', 'cobblestone', 'cobblestone',
      'cobblestone', null, 'cobblestone',
      'cobblestone', 'cobblestone', 'cobblestone'
    ],
    output: { item: 'furnace', count: 1 },
    shapeless: false,
    description: '8 cobblestone blocks arranged in a ring to build a stone smelting hearth.',
    version: '1.0+',
    tags: ['furnace', 'smelting', 'cobblestone', 'workstation'],
    searchKeywords: ['furnace', 'smelter', 'cooker', 'oven'],
    stats: 'Smelts Ores & Cooks Food'
  },
  {
    id: 'bookshelf',
    name: 'Bookshelf',
    category: 'building',
    grid: [
      'oak_planks', 'oak_planks', 'oak_planks',
      'book', 'book', 'book',
      'oak_planks', 'oak_planks', 'oak_planks'
    ],
    output: { item: 'bookshelf', count: 1 },
    shapeless: false,
    description: 'Three books sandwiched between six wood planks, used to power Enchanting Tables up to Level 30.',
    version: '1.0+',
    tags: ['bookshelf', 'library', 'enchanting', 'wood'],
    searchKeywords: ['bookshelf', 'books', 'enchanting power'],
    stats: 'Empowers Enchanting Tables'
  },

  // Food & Nutrition
  {
    id: 'bread',
    name: 'Bread',
    category: 'food',
    grid: [
      'wheat', 'wheat', 'wheat',
      null, null, null,
      null, null, null
    ],
    output: { item: 'bread', count: 1 },
    shapeless: false,
    description: 'Three wheat stalks placed horizontally across any row on the crafting table.',
    version: '1.0+',
    tags: ['bread', 'food', 'wheat', 'agriculture'],
    searchKeywords: ['bread', 'wheat', 'food', 'loaf'],
    stats: '+5 Hunger · 6.0 Saturation'
  },
  {
    id: 'golden_apple',
    name: 'Golden Apple',
    category: 'food',
    grid: [
      'gold_ingot', 'gold_ingot', 'gold_ingot',
      'gold_ingot', 'apple', 'gold_ingot',
      'gold_ingot', 'gold_ingot', 'gold_ingot'
    ],
    output: { item: 'golden_apple', count: 1 },
    shapeless: false,
    description: 'A crisp red apple encircled by 8 solid gold ingots. Bestows Absorption and Regeneration.',
    version: '1.0+',
    tags: ['golden apple', 'gapple', 'gold', 'apple', 'pvp', 'buff'],
    searchKeywords: ['golden apple', 'gapple', 'regen', 'buff food'],
    stats: '+4 Hunger · Absorption II (2 min) · Regeneration II (5 sec)'
  },
  {
    id: 'cake',
    name: 'Cake',
    category: 'food',
    grid: [
      'milk_bucket', 'milk_bucket', 'milk_bucket',
      'sugar', 'egg', 'sugar',
      'wheat', 'wheat', 'wheat'
    ],
    output: { item: 'cake', count: 1 },
    shapeless: false,
    description: 'Layered delicacy prepared with 3 milk buckets, 2 sugar, 1 egg, and 3 wheat.',
    version: '1.0+',
    tags: ['cake', 'food', 'milk', 'sugar', 'egg', 'wheat'],
    searchKeywords: ['cake', 'birthday', 'slices', 'pastry'],
    stats: '7 Slices · Total +14 Hunger'
  },

  // Utility & End-Game
  {
    id: 'ender_chest',
    name: 'Ender Chest',
    category: 'utility',
    grid: [
      'obsidian', 'obsidian', 'obsidian',
      'obsidian', 'eye_of_ender', 'obsidian',
      'obsidian', 'obsidian', 'obsidian'
    ],
    output: { item: 'ender_chest', count: 1 },
    shapeless: false,
    description: '8 obsidian blocks forged around an Eye of Ender. Interconnected personal pocket dimension.',
    version: '1.3+',
    tags: ['ender chest', 'echest', 'obsidian', 'eye of ender', 'teleport'],
    searchKeywords: ['ender chest', 'echest', 'interdimensional chest'],
    stats: 'Private Global Cloud Storage'
  },
  {
    id: 'beacon',
    name: 'Beacon',
    category: 'utility',
    grid: [
      'glass', 'glass', 'glass',
      'glass', 'nether_star', 'glass',
      'obsidian', 'obsidian', 'obsidian'
    ],
    output: { item: 'beacon', count: 1 },
    shapeless: false,
    description: 'An apex monument crafted from 5 glass, a Nether Star from the Wither boss, and 3 obsidian.',
    version: '1.4+',
    tags: ['beacon', 'nether star', 'pyramid', 'buff', 'laser'],
    searchKeywords: ['beacon', 'nether star', 'haste', 'speed buff'],
    stats: 'Permanent Area Status Beacons'
  },
  {
    id: 'anvil',
    name: 'Anvil',
    category: 'utility',
    grid: [
      'iron_block', 'iron_block', 'iron_block',
      null, 'iron_ingot', null,
      'iron_ingot', 'iron_ingot', 'iron_ingot'
    ],
    output: { item: 'anvil', count: 1 },
    shapeless: false,
    description: 'Heavy metallurgical station built from 3 solid iron blocks and 4 iron ingots (31 iron total).',
    version: '1.4+',
    tags: ['anvil', 'repair', 'iron', 'naming', 'enchanting'],
    searchKeywords: ['anvil', 'repair', 'name tag', 'enchant'],
    stats: 'Repairs & Combines Enchanted Books'
  },
  {
    id: 'brewing_stand',
    name: 'Brewing Stand',
    category: 'utility',
    grid: [
      null, 'blaze_rod', null,
      'cobblestone', 'cobblestone', 'cobblestone',
      null, null, null
    ],
    output: { item: 'brewing_stand', count: 1 },
    shapeless: false,
    description: 'A fiery Blaze Rod mounted on three cobblestone blocks, used to brew alchemical potions.',
    version: '1.0+',
    tags: ['brewing stand', 'potions', 'blaze rod', 'alchemy'],
    searchKeywords: ['brewing stand', 'potions', 'alchemist'],
    stats: 'Brews Potions & Splash Elixirs'
  },

  // Transportation
  {
    id: 'minecart',
    name: 'Minecart',
    category: 'transport',
    grid: [
      'iron_ingot', null, 'iron_ingot',
      'iron_ingot', 'iron_ingot', 'iron_ingot',
      null, null, null
    ],
    output: { item: 'minecart', count: 1 },
    shapeless: false,
    description: '5 iron ingots arranged in an open bowl pattern to ride upon railway tracks.',
    version: '1.0+',
    tags: ['minecart', 'rail', 'transport', 'iron'],
    searchKeywords: ['minecart', 'cart', 'train', 'rails'],
    stats: 'Passenger & Mob Railway Transport'
  },
  {
    id: 'rail',
    name: 'Rail',
    category: 'transport',
    grid: [
      'iron_ingot', null, 'iron_ingot',
      'iron_ingot', 'stick', 'iron_ingot',
      'iron_ingot', null, 'iron_ingot'
    ],
    output: { item: 'rail', count: 16 },
    shapeless: false,
    description: '6 iron ingots flanking a central wooden tie yields 16 railway tracks.',
    version: '1.0+',
    tags: ['rail', 'tracks', 'minecart', 'train'],
    searchKeywords: ['rail', 'rails', 'tracks'],
    stats: 'Yields 16 Tracks'
  },
  {
    id: 'powered_rail',
    name: 'Powered Rail',
    category: 'transport',
    grid: [
      'gold_ingot', null, 'gold_ingot',
      'gold_ingot', 'stick', 'gold_ingot',
      'gold_ingot', 'redstone', 'gold_ingot'
    ],
    output: { item: 'powered_rail', count: 6 },
    shapeless: false,
    description: 'Accelerates minecarts to maximum velocity when powered by a redstone signal.',
    version: '1.0+',
    tags: ['powered rail', 'booster', 'gold', 'redstone'],
    searchKeywords: ['powered rail', 'booster track', 'speed rail'],
    stats: 'Accelerates Carts to 8 m/s'
  },

  // Non-Craftable Reference Items (Explicitly labeled as per instructions)
  {
    id: 'elytra',
    name: 'Elytra',
    category: 'tools',
    grid: [
      null, null, null,
      null, null, null,
      null, null, null
    ],
    output: { item: 'elytra', count: 0 },
    shapeless: false,
    isCraftable: false,
    note: 'Not Craftable at the Crafting Table. Discovered mounted in item frames aboard floating End Ships in outer End Cities.',
    description: 'Gliding wings allowing flight through airspace when propelled by firework rockets.',
    version: '1.9+',
    tags: ['elytra', 'wings', 'flight', 'end city', 'uncraftable'],
    searchKeywords: ['elytra', 'wings', 'flying', 'uncraftable', 'end ship'],
    stats: 'Enables Gliding Flight'
  },
  {
    id: 'totem_of_undying',
    name: 'Totem of Undying',
    category: 'combat',
    grid: [
      null, null, null,
      null, null, null,
      null, null, null
    ],
    output: { item: 'totem_of_undying', count: 0 },
    shapeless: false,
    isCraftable: false,
    note: 'Not Craftable. Dropped strictly upon the defeat of Evokers in Woodland Mansions and village Raids.',
    description: 'Holding this relic prevents fatal player death, granting instant regeneration, fire resistance, and absorption.',
    version: '1.11+',
    tags: ['totem', 'undying', 'revive', 'evoker', 'uncraftable'],
    searchKeywords: ['totem of undying', 'revive', 'cheat death', 'uncraftable'],
    stats: 'Second Life upon Fatal Damage'
  },
  {
    id: 'trident',
    name: 'Trident',
    category: 'combat',
    grid: [
      null, null, null,
      null, null, null,
      null, null, null
    ],
    output: { item: 'trident', count: 0 },
    shapeless: false,
    isCraftable: false,
    note: 'Not Craftable. Obtained as a rare drop from Drowned mobs carrying them in ocean biomes.',
    description: 'Hybrid aquatic spear weapon capable of melee thrusts and ranged throws with Riptide or Loyalty enchantments.',
    version: '1.13+',
    tags: ['trident', 'ocean', 'drowned', 'uncraftable'],
    searchKeywords: ['trident', 'spear', 'riptide', 'uncraftable'],
    stats: '+9 Melee Attack Damage · Ranged Throw'
  },
  {
    id: 'saddle',
    name: 'Saddle',
    category: 'transport',
    grid: [
      null, null, null,
      null, null, null,
      null, null, null
    ],
    output: { item: 'saddle', count: 0 },
    shapeless: false,
    isCraftable: false,
    note: 'Not Craftable in vanilla Minecraft. Located inside Dungeon, Nether Fortress, Desert Temple chests, or via fishing.',
    description: 'Enables riding and steering horses, donkeys, mules, pigs, striders, and camels.',
    version: '1.0+',
    tags: ['saddle', 'horse', 'mount', 'uncraftable'],
    searchKeywords: ['saddle', 'ride horse', 'pig saddle', 'uncraftable'],
    stats: 'Controls Mounts'
  }
];
