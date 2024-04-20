import React from "react";

const FutureDay = (props) => {
  const data = props.data;
  let formatted_date = new Date(data.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  console.log(data);
  const condition = data.day.condition.text;
  const icon = data.day.condition.icon;
  const max_temp = data.day.maxtemp_c;
  const min_temp = data.day.mintemp_c;
  const humidity = data.day.avghumidity;
  const windSpeed = data.day.maxwind_kph;
  return (
    <div className="forecast">
      <h3>{formatted_date}</h3>
      <div className="forecast-details">
        <div className="condition-container">
          <p className="forecast-condition-text">{condition}</p>
          <img className="forecast-condition-icon" src={icon} alt='weather icon' />
        </div>
        <p className="forecast-hi-lo">{max_temp}° / {min_temp}°</p>
        <p className="forecast-humidity">Humidity: {humidity}%</p>
        <p className="forecast-wind">Wind Speed: {windSpeed} km/h</p>
      </div>
    </div>
  );
};

export default FutureDay;
