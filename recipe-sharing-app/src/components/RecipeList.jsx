// src/components/RecipeList.jsx
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom'; // Import Link for navigation

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
            {/* Use Link to create a clickable link to the recipe details page */}
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>{recipe.title}</h3>
            </Link>
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