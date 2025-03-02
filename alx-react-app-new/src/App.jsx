// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // Import the Counter component

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Counter /> {/* Include the Counter component */}
      <Footer />
    </div>
  );
};

export default App;