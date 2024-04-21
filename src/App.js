import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [data, setData] = useState();
  const [cityHeader, setCityHeader] = useState("Toronto, Ontario");

  async function fetchData() {
    let response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=5c2cd8491d4f4186aea02645241403&q=${city}
          &days=10&aqi=no&alerts=no`
    );
    let data = await response.json();
    setData(data);
    setCityHeader(`${data.location.name}, ${data.location.region}`);
  }

  useEffect(() => {
    if (city.length < 3) {

      window.alert("City name must be at least 3 characters long");
      return;
    }

    fetchData();
  }, [city]);
  return (
    <>
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <h2>Weather Information in {cityHeader}</h2>
        <SearchBar setCity={setCity} />
        {data !== undefined ? (
          <Forecast data={data} />
        ) : (
          <h2>Loading...</h2>
        )}
      </main>
    </>
  );
};

export default App;
