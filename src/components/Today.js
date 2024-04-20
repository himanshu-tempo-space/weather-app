import React from "react";

const Today = (props) => {
  const data = props.data;
  const temp = data.temp_c;
  const condition = data.condition.text;
  const icon = data.condition.icon;
  const high = props.high;
  const low = props.low;
  const feelsLike = data.feelslike_c;
  const humidity = data.humidity;
  const windSpeed = data.wind_kph;

  return (
    <div id="current">
      <h3>Today</h3>
      <div id="current-details">
        <p id="current-temp">{temp}° C</p>
        <div className="condition-container">
          <p id="current-condition-text">{condition}</p>
          <img id="current-condition-icon" src={icon} alt='weather icon' />
        </div>
        <p id="current-hi-lo">{high}° / {low}°</p>
        <p id="current-feels-like">Feels like: {feelsLike}° C</p>
        <p id="current-humidity">Humidity: {humidity}%</p>
        <p id="current-wind">Wind Speed: {windSpeed} km/h</p>
      </div>
    </div>
  );
};

export default Today;
