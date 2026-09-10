/**
 * Asset URL resolver referencing official in-game textures from TinyTank800/MinecraftAllImages
 * for vanilla Minecraft items and blocks.
 */

export function getItemImageUrl(itemId: string): string {
  const cleanId = itemId.replace(/^minecraft:/, '').toLowerCase();
  return `https://raw.githubusercontent.com/TinyTank800/MinecraftAllImages/main/public/images-v2/1.21.1/${cleanId}.png`;
}

export function getFallbackImageUrl(itemId: string): string {
  const cleanId = itemId.replace(/^minecraft:/, '').toLowerCase();
  return `https://raw.githubusercontent.com/TinyTank800/MinecraftAllImages/main/public/images/1.20.6/${cleanId}.png`;
}
