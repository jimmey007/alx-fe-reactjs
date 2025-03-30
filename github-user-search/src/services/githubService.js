import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  const response = await axios.get(`${API_BASE_URL}/users/${username}`);
  return response.data;
};

export const searchUsers = async (queryParams) => {
  const query = Object.entries(queryParams)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}:${value}`)
    .join('+');
  
  const response = await axios.get(`${API_BASE_URL}/search/users?q=${query}`);
  return response.data;
};