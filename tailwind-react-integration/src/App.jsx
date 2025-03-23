import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <UserProfile
        name="John Doe"
        bio="Software developer passionate about creating responsive web applications."
        avatarUrl="https://example.com/avatar.jpg"
      />
    </div>
  );
}

export default App;