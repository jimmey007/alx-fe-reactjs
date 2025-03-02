// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    // Generate recommendations when the app loads
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing Application</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </BrowserRouter>
        <FavoritesList />
        <RecommendationsList />
      </main>
    </div>
  );
}

export default App;