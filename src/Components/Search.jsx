import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a17fd93eacmshabaea73f64e9615p1550efjsnb99dad1ebdfa",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url, options);
      const result = await response.json();
      setWeatherData(result);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData();
    }
  };

  return (
    <div className="app">
      <h1 className="title">Weather App</h1>
      <div className="main">
        <div className="input-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg_icon"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
          <input
            className="input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter Your City Name"
          />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="child-div">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData && (
          <div>
            <img
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
            />
            <h2>
              {weatherData.location.name}, {weatherData.location.region},{" "}
              {weatherData.location.country}
            </h2>
            <p>
              <strong>Local Time:</strong> {weatherData.location.localtime}
            </p>
            <p>
              <strong>Temperature:</strong> {weatherData.current.temp_c}°C /{" "}
              {weatherData.current.temp_f}°F
            </p>
            <p>
              <strong>Condition:</strong> {weatherData.current.condition.text}
            </p>
            <p>
              <strong>Cloud:</strong> {weatherData.current.cloud}%
            </p>
          </div>
        )}
      </div>
      
    </div>
  );
}
