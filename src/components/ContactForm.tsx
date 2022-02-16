import { FunctionComponent } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import '../styles/form.css'
interface Props {
    
}
 
const ContactForm: FunctionComponent<Props> = () => {
    return ( 
        <section className="section form-section">
            <h2 className="text-center">NAPISZ DO NAS</h2>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1}>
            <div className="form-container">
                <p></p>
                <form className="form">
                    <input type="text" placeholder="Imię i nazwisko"/>
                    <input type="text" placeholder="Telefon"/>
                    <input type="text" placeholder="E-mail"/>
                    <textarea placeholder="Wiadomość"/>
                    <label htmlFor="policy"><input type="checkbox" id='policy'/>policy</label>                    
                    <button type='submit' className="btn">WYŚLIJ</button>
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
                <button>a</button>
                <button>a</button>
                </div>
            </div>
            </AnimationOnScroll>
        </section>
     );
}
 
export default ContactForm;