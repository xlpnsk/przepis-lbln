import { FunctionComponent } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import '../styles/form.css'

import Anim12 from '../assets/anim/anim12.png';
import Anim13 from '../assets/anim/anim13.png';
import Anim10 from '../assets/anim/anim10.png';
import Anim11 from '../assets/anim/anim11.png';

interface Props {
    
}
 
const ContactForm: FunctionComponent<Props> = () => {
    return ( 
        <section className="section form-section">
            <div className="background-form-icons">
                <div className="anim-form-1">
                    <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>           
                        <img src={Anim13} alt="gr-form1" />
                    </AnimationOnScroll>
                </div>
                <div className="anim-form-2">
                    <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>           
                        <img src={Anim10} alt="gr-form2" />
                    </AnimationOnScroll>
                </div>
                <div className="anim-form-3">
                    <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>           
                        <img src={Anim11} alt="gr-form3" />
                    </AnimationOnScroll>
                </div>

            </div>
            <h2 className="text-center">NAPISZ DO NAS</h2>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1}>
            <div className="form-container">
                <p></p>
                <form className="form">
                    <input className="input" type="text" placeholder="Imię i nazwisko"/>
                    <input className="input" type="text" placeholder="Telefon"/>
                    <input className="input" type="text" placeholder="E-mail"/>
                    <textarea className="input" placeholder="Wiadomość" rows={5}/>
                    <label className="custom-label" htmlFor="policy"><input className="input" type="checkbox" id='policy'/>
                        Zgodnie z art. 13 ust. 1 ogólnego rozporządzenia o ochronie danych 
                        osobowych z dnia 27 kwietnia 2016 r., informujemy, iż administratorem 
                        Pani/Pana danych osobowych jest "Przepis" Agnieszka Ziajko-Jankowska.
                    </label>                    
                    <button type='submit' className="btn btn-submit">WYŚLIJ</button>
                </form>
                <div className="containt-info">
                <p>Przepis Agnieszka Ziajko-Jankowska</p> 
                <p>ul. Młodej Polski 26A </p>
                <p>20-863 Lublin </p>
                <p>NIP: 7591636241 </p>
                <p>nr konta (mBank) </p>
                <p>91 1140 2004 0000 3102 7592 9532 </p>
                <br />
                <p>+48 662 050 683 </p>
                <p>info@przepis.lublin.pl</p>
                <div className="btn-container">
                    <button>a</button>
                    <button>a</button>
                </div>
                </div>
            </div>
            </AnimationOnScroll>
        </section>
     );
}
 
export default ContactForm;