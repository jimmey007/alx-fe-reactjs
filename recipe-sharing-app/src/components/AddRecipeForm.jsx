// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe); // Access the addRecipe action from the store
  const [title, setTitle] = useState(''); // State for the recipe title
  const [description, setDescription] = useState(''); // State for the recipe description

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission default behavior
    if (title.trim() && description.trim()) {
      addRecipe({ id: Date.now(), title, description }); // Add the new recipe to the store
      setTitle(''); // Reset the title input
      setDescription(''); // Reset the description input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;