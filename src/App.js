import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherComponent from './Components/WeatherComponent'; // Ensure the path is correct based on your file structure
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherComponent />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
