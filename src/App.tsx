import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Offer from './components/Offer';
import Prices from './components/Prices';
import ContactForm from './components/ContactForm';
import ScrollNav from './components/ScrollNav';

function App() {
  return (
    <div className="App">
      <ScrollNav/>
      <NavBar/>
      <AboutUs/>
      <Offer/>
      <Prices/>
      {/* <section style={{height: '500px'}}></section> */}
      <ContactForm/>
    </div>
  );
}

export default App;
