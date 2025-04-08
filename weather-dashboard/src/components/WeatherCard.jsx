function WeatherCard({ data }) {
  const { main, weather, wind, name } = data;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <div className="flex items-center mt-2">
        <img src={iconUrl} alt="Weather Icon" className="w-16 h-16" />
        <p className="text-xl capitalize">{weather[0].description}</p>
      </div>
      <p className="mt-2 text-lg">Temperature: {main.temp}°C</p>
      <p className="mt-1">Humidity: {main.humidity}%</p>
      <p className="mt-1">Wind Speed: {wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;