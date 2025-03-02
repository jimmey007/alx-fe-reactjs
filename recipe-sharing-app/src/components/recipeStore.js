// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Initial list of all recipes
  favorites: [], // Array of favorite recipe IDs
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })), // Add a recipe to favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })), // Remove a recipe from favorites
  recommendations: [], // List of recommended recipes
  generateRecommendations: () => set(state => {
    // Mock recommendation logic: Recommend recipes based on favorites or random selection
    const recommended = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id)) // Exclude already favorited recipes
      .filter(() => Math.random() > 0.5) // Randomly select recipes
      .slice(0, 5); // Limit to 5 recommendations

    return { recommendations: recommended };
  }),
  setRecipes: (recipes) => set({ recipes }), // Initialize or reset the recipe list
}));

export default useRecipeStore;