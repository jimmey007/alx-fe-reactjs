import React, { useContext } from 'react'; // Import React and useContext
import UserContext from './UserContext'; // Import the context

function UserProfile() {
  const userData = useContext(UserContext); // Consume the context

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;