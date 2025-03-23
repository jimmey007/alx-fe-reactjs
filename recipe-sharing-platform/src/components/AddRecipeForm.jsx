// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });
  
  const [errors, setErrors] = useState({});

  // Using explicit target.value with destructuring
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientList = formData.ingredients.split('\n').filter(item => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please provide at least 2 ingredients';
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Recipe submitted:', {
      title: formData.title,
      ingredients: formData.ingredients.split('\n').filter(item => item.trim()),
      steps: formData.steps
    });

    setFormData({
      title: '',
      ingredients: '',
      steps: ''
    });
    setErrors({});
    alert('Recipe submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Add New Recipe
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="title" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Recipe Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.title ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter recipe title"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="ingredients" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ingredients (one per line)
                </label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.ingredients ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter ingredients, one per line"
                />
                {errors.ingredients && (
                  <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="steps" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preparation Steps
                </label>
                <textarea
                  id="steps"
                  name="steps"
                  value={formData.steps}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.steps ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter preparation steps"
                />
                {errors.steps && (
                  <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Submit Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;