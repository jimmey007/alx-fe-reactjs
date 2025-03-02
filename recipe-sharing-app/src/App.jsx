// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './pages/Home'; // Import the home page component
import RecipeDetails from './pages/RecipeDetails'; // Import the recipe details page component
import AddRecipeForm from './components/AddRecipeForm'; // Import the add recipe form component
import './App.css'; // Optional: Import styles

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing Application</h1>
      </header>
      <main>
        {/* Wrap the entire application in BrowserRouter for routing */}
        <BrowserRouter>
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Home />} /> {/* Home page route */}
            <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Add recipe form route */}
            <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Recipe details route */}
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;