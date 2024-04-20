import React, { useState, useEffect } from 'react';
import styles from '../WeatherComponent.css';

const WeatherComponent = () => {
  const [city, setCity] = useState('Toronto');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchData(city);
  }, [city]);

  const fetchData = async (city) => {
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=5c2cd8491d4f4186aea02645241403&q=${city}&days=5&aqi=no&alerts=no`
      );
      let data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCity = document.getElementById('city-input').value;
    setCity(newCity);
  };

  return (
    <div className={styles.forecastContainer}>
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="city-input"
          placeholder="Search your city"
          defaultValue={city}
        />
      </form>
      {weatherData && (
        <>
          <h1>
            Weather information in {weatherData.location.name}, {weatherData.location.region}
          </h1>
          <div id="current">
            <p>{weatherData.current.temp_c}° C</p>
            <p>{weatherData.current.condition.text}</p>
            <img src={weatherData.current.condition.icon} alt="Weather Icon" />
            <p>{weatherData.forecast.forecastday[0].day.maxtemp_c}° / {weatherData.forecast.forecastday[0].day.mintemp_c}°</p>
            <p>Feels like: {weatherData.current.feelslike_c}° C</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
          </div>
          {weatherData.forecast.forecastday.slice(1).map((day, index) => (
            <div key={index} className="forecast">
              <h3>{new Date(day.date).toLocaleDateString("en-US", { month: "long", day: "numeric", timeZone: "UTC" })}</h3>
              <p>{day.day.condition.text}</p>
              <img src={day.day.condition.icon} alt="Weather Icon" />
              <p>{day.day.maxtemp_c}° / {day.day.mintemp_c}°</p>
              <p>Humidity: {day.day.avghumidity}%</p>
              <p>Wind Speed: {day.day.maxwind_kph} km/h</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WeatherComponent;
