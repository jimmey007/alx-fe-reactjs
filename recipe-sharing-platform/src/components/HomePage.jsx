import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                View Recipe →
              </a>
              <a
  href={`/recipe/${recipe.id}`}
  className="mt-4 inline-block text-blue-500 hover:text-blue-700"
>
  View Recipe →
</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;