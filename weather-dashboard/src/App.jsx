import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

  const fetchWeather = async (searchCity) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('City not found or API error occurred');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    // Optional: Fetch weather for a default city on load
    fetchWeather('London');
  }, []);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}
useEffect(() => {
  const interval = setInterval(() => {
    if (city) fetchWeather(city);
  }, 300000); // Update every 5 minutes

  return () => clearInterval(interval); // Cleanup on unmount
}, [city]);
export default App;