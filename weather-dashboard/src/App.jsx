import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import axios from "axios";

const API_KEY = "fe30a37db4bd66177fb59f3d131bad08"; // Your OpenWeatherMap API key

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (searchCity) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found or there was an issue fetching the weather data.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  // Auto-update every 5 minutes (300,000 ms)
  useEffect(() => {
    if (city) {
      fetchWeather(city);
      const interval = setInterval(() => fetchWeather(city), 300000);
      return () => clearInterval(interval);
    }
  }, [city]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="mt-4">Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}
      {weatherData && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => fetchWeather(city)}
        >
          Refresh
        </button>
      )}
    </div>
  );
}

export default App;