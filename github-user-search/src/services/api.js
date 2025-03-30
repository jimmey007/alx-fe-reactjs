const API_BASE_URL = 'https://api.github.com';

export const githubService = {
  async getUser(username) {
    const response = await fetch(`${API_BASE_URL}/users/${username}`, {
      headers: {
        ...(import.meta.env.VITE_APP_GITHUB_API_KEY && {
          Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        })
      }
    });
    return response.json();
  }
};