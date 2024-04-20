import React from "react";
import Today from "./Today";
import Future from "./Future";

const Forecast = (props) => {
  const current = props.data.current;
  const currentHigh = props.data.forecast.forecastday[0].day.maxtemp_c;
  const currentLow = props.data.forecast.forecastday[0].day.mintemp_c;

  const forecast = props.data.forecast.forecastday;
  return (
    <section id="forecast-container">
      <Today data={current} high={currentHigh} low={currentLow} />
      <Future data={forecast} />
    </section>
  );
};

export default Forecast;
