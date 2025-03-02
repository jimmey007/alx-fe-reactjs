// MainContent.jsx
import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eaeaea', minHeight: '400px' }}>
      <h2 style={{ color: 'darkblue', textAlign: 'center' }}>User Profiles</h2>
      <UserProfile name="John Doe" age={28} bio="Loves traveling and exploring new cultures." />
      <UserProfile name="Jane Smith" age={34} bio="Enjoys hiking and outdoor activities." />
      
      {/* Add the new text with inline styling */}
      <div style={{ marginTop: '20px', textAlign: 'center', fontStyle: 'italic', color: 'darkgreen' }}>
        <p>I love to visit New York, Paris, and Tokyo.</p>
      </div>
    </main>
  );
};

export default MainContent;