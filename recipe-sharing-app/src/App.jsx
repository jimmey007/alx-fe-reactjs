// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import './App.css'; // Optional: Add styles if needed

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing Application</h1>
      </header>
      <main>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;