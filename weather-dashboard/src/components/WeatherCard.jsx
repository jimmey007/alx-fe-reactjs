function WeatherCard({ weather }) {
    const { main, weather: weatherDetails, wind, name } = weather;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}.png`;
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">{name}</h2>
        <div className="flex items-center mb-4">
          <img src={iconUrl} alt="Weather icon" className="w-12 h-12 mr-4" />
          <p className="text-xl">{weatherDetails[0].description}</p>
        </div>
        <p className="text-lg">Temperature: {main.temp}°C</p>
        <p className="text-lg">Humidity: {main.humidity}%</p>
        <p className="text-lg">Wind Speed: {wind.speed} m/s</p>
      </div>
    );
  }
  
  export default WeatherCard;