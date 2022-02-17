import { FunctionComponent } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import '../styles/form.css'

import Anim13 from '../assets/anim/anim13.png';
import Anim10 from '../assets/anim/anim10.png';
import Anim11 from '../assets/anim/anim11.png';
import InstaIcon from '../assets/insta_icon.svg'; 
import FbIcon from '../assets/facebook_icon.svg'; 
import InstaIconHover from '../assets/insta_icon_hover.svg'; 
import FbIconHover from '../assets/facebook_icon_hover.svg'; 
interface Props {
    
}
 
const ContactForm: FunctionComponent<Props> = () => {
    return (
         <section className="section form-section">
        <div className="form-section-inner">
            <div className="background-form-icons tst">
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
                    <div className="textarea-container">
                    <label className="custom-label label-container" htmlFor="policy">
                        Zgodnie z art. 13 ust. 1 ogólnego rozporządzenia o ochronie danych 
                        osobowych z dnia 27 kwietnia 2016 r., informujemy, iż administratorem 
                        Pani/Pana danych osobowych jest "Przepis" Agnieszka Ziajko-Jankowska.
                        <input className="input" type="checkbox" id='policy'/>
                        <span className="checkmark"></span>
                    </label>   
                    </div>                 
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
                <p><a>info@przepis.lublin.pl</a></p>
                <div className="btn-container">
                    <div>
                    <a>
                        <img src={FbIcon} alt="facebook logo"></img>
                        <img src={FbIconHover} alt="facebook logo" className="hover-icon"></img>
                    </a>
                    </div>
                    <div>
                    <a>
                        <img src={InstaIcon} alt="insta logo"></img>
                        <img src={InstaIconHover} alt="insta logo" className="hover-icon"></img>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </AnimationOnScroll>
        </div>
        </section>
     );
}
 
export default ContactForm;