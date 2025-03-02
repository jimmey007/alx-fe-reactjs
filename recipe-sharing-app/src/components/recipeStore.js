// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Initial list of all recipes
  searchTerm: '', // Search term input by the user
  filteredRecipes: [], // Recipes filtered based on the search term
  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] })), // Add a new recipe
  setRecipes: (recipes) => set({ recipes }), // Initialize or reset the recipe list
  setSearchTerm: (term) => set({ searchTerm: term }), // Update the search term
  filterRecipes: () => // Filter recipes based on the search term
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients?.some(ingredient =>
          ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
        ) || 
        recipe.prepTime?.toString().includes(state.searchTerm)
      )
    }))
}));

export default useRecipeStore;