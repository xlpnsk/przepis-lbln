import React, { useState } from 'react';
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
import PhoneIcon from './assets/phone.svg';
import { CSSTransition } from 'react-transition-group'
function App() {

  const [clicked, setClicked] = useState(false);
  const width = useWidth();

  return (
    <div className="App">
      <ScrollNav width={width} setClicked={setClicked}/>
      <CSSTransition
        in={clicked && width<993} 
        timeout={700} 
        classNames="side-menu" 
        unmountOnExit 
      >
        <SideMenu setClicked={setClicked}/>
      </CSSTransition>
      <span className="floating-btn">
        <a href='#'><img src={PhoneIcon} alt="phone icon" /></a>
      </span>
      <NavBar/>
      <main className='main-content-container'>
        <AboutUs/>
        <Offer/>
        <Prices/>
        <ContactForm/>
        <section className="section footer-section">
          <div className="footer-inner">
            <p><a href='#' className='link'>Regulamin</a> | <a href='#' className='link'>Polityka prywatności</a></p>

            <p>
              Na naszej stronie stosujemy pliki cookies. 
              Korzystanie ze strony bez zmiany ustawień przeglądarki oznacza, że pliki cookies będą zamieszczane w Twoim urządzeniu. 
              <br />
              <a className='link'>Więcej informacji</a>
            </p>

            <p>Wszystkie prawa zastrzeżone. Przepis © 2021</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
