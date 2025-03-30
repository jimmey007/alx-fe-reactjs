import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

function Search() {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [results, setResults] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!searchParams.username) return;

    setLoading(true);
    setError(null);
    setResults([]);
    setSingleUser(null);

    try {
      const data = await fetchUserData(searchParams.username);
      setSingleUser(data);
    } catch (err) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSingleUser(null);

    try {
      const data = await searchUsers({
        login: searchParams.username,
        location: searchParams.location,
        repos: searchParams.minRepos ? `>${searchParams.minRepos}` : ''
      });
      setResults(data.items);
    } catch (err) {
      setError('Error performing advanced search');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            value={searchParams.username}
            onChange={handleInputChange}
            placeholder="GitHub username"
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleBasicSearch}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            Basic Search
          </button>
        </div>

        <div className="space-y-2">
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="minRepos"
            value={searchParams.minRepos}
            onChange={handleInputChange}
            placeholder="Minimum repositories"
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAdvancedSearch}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            disabled={loading}
          >
            Advanced Search
          </button>
        </div>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {singleUser && (
        <div className="mt-4 p-4 border rounded">
          <img src={singleUser.avatar_url} alt="avatar" className="w-24 h-24 rounded-full" />
          <h2 className="text-xl mt-2">{singleUser.name || singleUser.login}</h2>
          <a
            href={singleUser.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-4 space-y-4">
          {results.map(user => (
            <div key={user.id} className="p-4 border rounded">
              <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
              <h3 className="mt-2">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;