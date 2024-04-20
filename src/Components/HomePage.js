// components/HomePage.js
import React from 'react';
import Navigation from './Navigation';
import '../App.css';

function HomePage() {
  return (
    <>
      <Navigation />
      <section id="search-container">
        <h1 id="location"></h1>
        <form id="search-form">
          <input type="text" id="city-input" placeholder="Search your city" />
        </form>
      </section>
      <section id="forecast-container">
        {/* Add the forecast details as needed */}
      </section>
    </>
  );
}

export default HomePage;
