// UserProfile.jsx
import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Profile Image */}
      <div className="flex items-center justify-center">
        <img
          src="profile-image.jpg" // Replace with your image path
          alt="Profile"
          className="w-24 h-24 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* User Name */}
      <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 mt-4 text-center">
        John Doe
      </h2>

      {/* User Title */}
      <p className="text-gray-600 text-center mt-2">Software Engineer</p>
    </div>
  );
};

export default UserProfile;