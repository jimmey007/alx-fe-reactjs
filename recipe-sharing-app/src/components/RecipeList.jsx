// src/components/RecipeList.jsx
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes); // Access the filtered recipes

  return (
    <div>
      <h2>Filtered Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your search criteria.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients?.join(', ')}</p>
            <p><strong>Preparation Time:</strong> {recipe.prepTime} minutes</p>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;