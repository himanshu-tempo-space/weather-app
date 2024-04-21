import React, { useState, useEffect } from "react";
import Today from "./Today";
import Future from "./Future";
import { TailSpin } from 'react-loader-spinner'; // Importing a specific spinner

const Forecast = (props) => {
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Use setTimeout to change the loading state after 3000 milliseconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 1000 milliseconds = 1 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []); // Empty dependency array to run only once on mount

  if (loading) {
    return (
      <div className="loader-container">
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

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
