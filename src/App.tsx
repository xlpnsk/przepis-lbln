import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Offer from './components/Offer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutUs/>
      <Offer/>
    </div>
  );
}

export default App;
