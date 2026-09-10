/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Recipe, AppTab } from './types';
import { recipesData, categories } from './data/recipes';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { Footer } from './components/Footer';
import { MinecraftBackground } from './components/MinecraftBackground';
import { Hotbar } from './components/Hotbar';
import { ToastContainer, showToast } from './components/ToastSystem';
import { sound } from './utils/audio';
import {
  Search,
  Dices,
  RotateCcw,
  SlidersHorizontal,
  Bookmark,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'az' | 'za' | 'yield'>('az');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Favorites stored in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('crafting_table_favorites');
      return saved ? JSON.parse(saved) : ['crafting_table', 'diamond_sword', 'mace'];
    } catch {
      return ['crafting_table', 'diamond_sword', 'mace'];
    }
  });

  // Persist favorites
  const toggleFavorite = (recipeId: string) => {
    setFavorites((prev) => {
      const next = prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId];
      try {
        localStorage.setItem('crafting_table_favorites', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Keyboard shortcut: '/' focuses search input on recipes page
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

      if (e.key === '/' || (e.key === 'k' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        sound.playWoodClick();
        setActiveTab('recipes');
        window.location.hash = 'recipes';
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 80);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // URL Hash handling for distinct pages & deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (!hash || hash === 'home') {
        setActiveTab('home');
      } else if (hash.startsWith('recipe/')) {
        const recipeId = hash.replace('recipe/', '');
        const found = recipesData.find((r) => r.id === recipeId);
        if (found) {
          setSelectedRecipe(found);
        }
      } else if (hash === 'favorites') {
        setActiveTab('favorites');
      } else if (hash === 'recipes') {
        setActiveTab('recipes');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Filtered & Sorted Recipes
  const filteredRecipes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return recipesData
      .filter((recipe) => {
        // Category filter
        if (selectedCategory !== 'all' && recipe.category !== selectedCategory) {
          return false;
        }

        // Favorites page filter
        if (activeTab === 'favorites' && !favorites.includes(recipe.id)) {
          return false;
        }

        // Text Search filter (searches name, output item, ingredients, category)
        if (query) {
          const nameMatch = recipe.name.toLowerCase().includes(query);
          const itemMatch = recipe.output.item.toLowerCase().includes(query);
          const catMatch = recipe.category.toLowerCase().includes(query);
          const ingredientMatch = recipe.grid.some(
            (mat) => mat && mat.toLowerCase().includes(query)
          );

          if (!nameMatch && !itemMatch && !catMatch && !ingredientMatch) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'az') return a.name.localeCompare(b.name);
        if (sortBy === 'za') return b.name.localeCompare(a.name);
        if (sortBy === 'yield') return b.output.count - a.output.count;
        return 0;
      });
  }, [searchQuery, selectedCategory, activeTab, favorites, sortBy]);

  // Random Recipe Discovery
  const handleRandomRecipe = () => {
    sound.playPop();
    const randIdx = Math.floor(Math.random() * recipesData.length);
    const rand = recipesData[randIdx];
    setSelectedRecipe(rand);
    showToast({
      title: 'Random Discovery',
      description: rand.name,
      itemId: rand.output.item,
      type: 'info',
    });
  };

  // Ingredient click navigation inside modal (recursive crafting lookup)
  const handleSelectIngredient = (ingredientId: string) => {
    const matchingRecipe = recipesData.find(
      (r) => r.output.item === ingredientId || r.id === ingredientId
    );
    if (matchingRecipe) {
      setSelectedRecipe(matchingRecipe);
    }
  };

  const handleSelectTab = (tab: AppTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f1210] text-[#A8A8A8] selection:bg-[#55C64B]/30 selection:text-[#FFFFFF] relative pb-32">
      {/* Authentic Advancement Toasts */}
      <ToastContainer />

      {/* Minecraft Rough Stone & Bedrock Pixel Texture Background */}
      <MinecraftBackground />

      {/* Centered Website Header (NO Subtext Below Title) */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        favoritesCount={favorites.length}
      />

      {/* Main Content Pages with Large Blankspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
        {/* ================= PAGE 1: HOME ================= */}
        {activeTab === 'home' && (
          <HomePage
            onNavigateToRecipes={() => handleSelectTab('recipes')}
            onNavigateToFavorites={() => handleSelectTab('favorites')}
          />
        )}

        {/* ================= PAGE 2: RECIPES & PAGE 3: FAVORITES ================= */}
        {(activeTab === 'recipes' || activeTab === 'favorites') && (
          <div className="space-y-8 sm:space-y-10 animate-fadeIn">
            {/* Page Header Title */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b-2 border-[#353e37] text-center sm:text-left">
              <div>
                <h2 className="font-pixel font-bold text-2xl sm:text-3xl text-[#FFFFFF]">
                  {activeTab === 'favorites' ? 'SAVED FAVORITES' : 'CRAFTING RECIPES'}
                </h2>
              </div>

              {/* Random Button */}
              {activeTab === 'recipes' && (
                <button
                  type="button"
                  onClick={handleRandomRecipe}
                  title="Discover a random recipe"
                  className="btn-3d-secondary px-4 py-2 rounded-xs text-xs font-pixel text-[#FFFFFF] flex items-center gap-2"
                >
                  <Dices className="w-4 h-4 text-[#55C64B]" />
                  <span>Random Recipe</span>
                </button>
              )}
            </div>

            {/* Filter & Search Bar Toolbar */}
            <div className="mc-rough-panel border-2 border-[#353e37] p-4 sm:p-6 rounded-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8A8A8]" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search recipes or materials (e.g. diamond, mace, iron)..."
                    className="w-full pl-10 pr-8 py-2.5 bg-[#141815] border-2 border-[#353e37] focus:border-[#55C64B] focus:outline-none rounded-xs text-xs sm:text-sm text-[#FFFFFF] placeholder-[#626e65]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A8A8A8] hover:text-[#FFFFFF]"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 shrink-0">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#55C64B]" />
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as 'az' | 'za' | 'yield')
                    }
                    className="bg-[#141815] border-2 border-[#353e37] text-xs text-[#FFFFFF] rounded-xs px-3 py-2.5 focus:outline-none focus:border-[#55C64B] font-pixel"
                  >
                    <option value="az">Sort: A to Z</option>
                    <option value="za">Sort: Z to A</option>
                    <option value="yield">Sort: Yield</option>
                  </select>
                </div>
              </div>

              {/* Category Filter Chips (on Recipes Page) */}
              {activeTab === 'recipes' && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 text-xs">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    const catCount =
                      cat.id === 'all'
                        ? recipesData.length
                        : recipesData.filter((r) => r.category === cat.id).length;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          sound.playWoodClick();
                          setSelectedCategory(cat.id);
                        }}
                        className={`px-3 py-1.5 rounded-xs font-pixel whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                          isActive
                            ? 'btn-3d text-black'
                            : 'btn-3d-secondary text-[#A8A8A8]'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span
                          className={`text-[10px] px-1 rounded-xs ${
                            isActive
                              ? 'bg-black/25 text-black font-bold'
                              : 'text-[#6e7d72]'
                          }`}
                        >
                          {catCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Results Count & Reset Controls */}
            <div className="flex items-center justify-between text-xs text-[#A8A8A8] px-1">
              <span>
                Showing <strong className="text-[#FFFFFF]">{filteredRecipes.length}</strong> recipes
              </span>
              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="flex items-center gap-1.5 text-[#55C64B] hover:text-[#6FE35D] font-pixel cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset filters</span>
                </button>
              )}
            </div>

            {/* Recipes Grid — Spacious, well-managed layout */}
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 pt-2">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={favorites.includes(recipe.id)}
                    onSelect={(rec) => setSelectedRecipe(rec)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              /* Clean Empty State with generous blankspace */
              <div className="py-20 sm:py-28 text-center mc-rough-panel border-2 border-[#353e37] rounded-xs space-y-4">
                <Bookmark className="w-12 h-12 text-[#6e7d72] mx-auto" />
                <h3 className="font-pixel font-bold text-lg text-[#FFFFFF]">
                  {activeTab === 'favorites' ? 'No Saved Favorites' : 'No Recipes Found'}
                </h3>
                <p className="text-xs text-[#A8A8A8] max-w-sm mx-auto">
                  {activeTab === 'favorites'
                    ? 'Star recipes in the Crafting Table to quickly access them here.'
                    : 'Try clearing your search query or choosing a different category.'}
                </p>
                {activeTab === 'favorites' ? (
                  <button
                    type="button"
                    onClick={() => handleSelectTab('recipes')}
                    className="btn-3d px-6 py-2.5 text-xs font-pixel rounded-xs text-black"
                  >
                    Browse All Recipes
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="btn-3d px-6 py-2.5 text-xs font-pixel rounded-xs text-black"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}

            {/* Generous Blank Space at Bottom of Page */}
            <div className="h-16 sm:h-24" />
          </div>
        )}
      </main>

      {/* Footer with Centered Title & Clean Links */}
      <Footer onSelectTab={handleSelectTab} />

      {/* 3-Slot Minecraft Navigation Hotbar (Fixed HUD) */}
      <Hotbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        favoritesCount={favorites.length}
      />

      {/* Recipe Modal: Shows only 3x3 Grid, Total Items Used, and Product Created */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => {
            setSelectedRecipe(null);
            if (window.location.hash.startsWith('#recipe/')) {
              window.location.hash = activeTab;
            }
          }}
          onSelectIngredient={handleSelectIngredient}
          isFavorite={favorites.includes(selectedRecipe.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
