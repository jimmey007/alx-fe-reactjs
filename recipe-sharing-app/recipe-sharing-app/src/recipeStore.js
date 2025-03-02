// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Initial state for recipes
  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] })), // Action to add a new recipe
  setRecipes: (recipes) => set({ recipes }) // Action to initialize or reset the recipe list
}));

export default useRecipeStore;