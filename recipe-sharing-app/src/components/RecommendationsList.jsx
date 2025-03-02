// src/components/RecommendationsList.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations); // Access the recommendations array

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available. Try favoriting some recipes!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;