import React from 'react';

const UserProfile = ({ name, bio, avatarUrl }) => {
  return (
    <div class="flex items-center justify-center">
  <img 
    src="profile-image.jpg" 
    alt="Profile Image" 
    class="w-24 h-24 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
  />

    <div className="container mx-auto">
      <div className="
        bg-white 
        rounded-lg 
        shadow-md 
        p-4 sm:p-4 md:p-8 
        max-w-xs sm:max-w-xs md:max-w-sm 
        mx-auto
      ">
        <div className="flex flex-col items-center">
          <img
            src={avatarUrl}
            alt={`${name}'s profile`}
            className="
              rounded-full 
              w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 
              object-cover 
              mb-4
            "
          />
          <h2 className="
            text-lg sm:text-lg md:text-xl 
            font-bold 
            text-gray-800 
            mb-2
          ">
            {name}
          </h2>
          <p className="
            text-sm sm:text-sm md:text-base 
            text-gray-600 
            text-center
          ">
            {bio}
          </p>
        </div>
      </div>
    </div>
    </div>
  );

};

export default UserProfile;