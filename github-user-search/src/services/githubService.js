import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`, {
      headers: {
        ...(import.meta.env.VITE_APP_GITHUB_API_KEY && {
          Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        })
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};