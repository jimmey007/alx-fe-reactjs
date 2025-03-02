// src/components/SearchBar.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm); // Access the setSearchTerm action
  const filterRecipes = useRecipeStore(state => state.filterRecipes); // Access the filterRecipes action

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term); // Update the search term in the store
    filterRecipes(); // Trigger filtering based on the updated search term
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearchChange}
        style={{
          padding: '0.5rem',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    </div>
  );
};

export default SearchBar;