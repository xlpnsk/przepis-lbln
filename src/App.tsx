import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Offer from './components/Offer';
import Prices from './components/Prices';
import ContactForm from './components/ContactForm';
import ScrollNav from './components/ScrollNav';
import './styles/footer.css'
import SideMenu from './components/SideMenu';
import './styles/side-menu.css';
import useWidth from './hooks/useWidth';
function App() {

  const [clicked, setClicked] = useState(false);
  const width = useWidth();

  return (
    <div className="App">
      <ScrollNav width={width} setClicked={setClicked}/>
      {clicked && width<993 && <SideMenu setClicked={setClicked}/>}
      <NavBar/>
      <main className='main-content-container'>
        <AboutUs/>
        <Offer/>
        <Prices/>
        <ContactForm/>
        <section className="section footer-section">
          <p><a href='#'>Regulamin</a> | <a href='#'>Polityka prywatności</a></p>

          <p>Na naszej stronie stosujemy pliki cookies. 
            Korzystanie ze strony bez zmiany ustawień przeglądarki oznacza, że pliki cookies będą zamieszczane w Twoim urządzeniu. 
            Więcej informacji</p>

            <p>Wszystkie prawa zastrzeżone. Przepis © 2021</p>
        </section>
      </main>
    </div>
  );
}

export default App;
