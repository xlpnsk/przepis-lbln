import { FunctionComponent } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import FitSportImg from '../assets/fit+sport_photo.png';
import WegeImg from '../assets/wegetarianska_photo.png';
import SirtFoodImg from '../assets/sirtfood_photo.png';
import KetoImg from '../assets/ketogeniczna_photo.png';
import NiskieIgImg from '../assets/niskie_ig_photo.png';
import SpecjalneImg from '../assets/specjalne_photo.png';
import CiastaImg from '../assets/ciasta_na_zamowienie_photo.png';
import CiastaSpecjalneImg from '../assets/ciasta_specjalne.png';
import '../styles/about-us.css'
import '../styles/offer.css'
import OfferItem from "./OfferItem";
interface Props {
    
}
 
const Offer: FunctionComponent<Props> = () => {
    return ( 
        <>
        <section className="section offer-container">
            <h2 className="text-center">POZNAJ NASZE DIETY</h2>
            <div className="offer-items">
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1}>
                    <OfferItem img={FitSportImg} title={"STANDARD + SPORT"}>
                        <a><button className="btn">ZOBACZ</button></a>
                        <a><button className="btn">ZAMÓW DIETĘ</button></a>
                        <a><button className="btn">MENU</button></a>
                    </OfferItem>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={200}>
                    <OfferItem img={WegeImg} title={"WEGETARIAŃSKA"}>
                        <a><button className="btn">ZOBACZ</button></a>
                        <a><button className="btn">ZAMÓW DIETĘ</button></a>
                        <a><button className="btn">MENU</button></a>
                    </OfferItem>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1}  delay={300}>
                    <OfferItem img={SirtFoodImg} title={"SITRFOOD"}>
                        <a><button className="btn">ZOBACZ</button></a>
                        <a><button className="btn">ZAMÓW DIETĘ</button></a>
                        <a><button className="btn">MENU</button></a>
                    </OfferItem>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={400}>
                    <OfferItem img={KetoImg} title={"KETOGENICZNA"}>
                        <a><button className="btn">ZOBACZ</button></a>
                        <a><button className="btn">ZAMÓW DIETĘ</button></a>
                        <a><button className="btn">MENU</button></a>
                    </OfferItem>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={500}> 
                    <OfferItem img={NiskieIgImg} title={"NISKI IG"}>
                        <a><button className="btn">ZOBACZ</button></a>
                        <a><button className="btn">ZAMÓW DIETĘ</button></a>
                        <a><button className="btn">MENU</button></a>
                    </OfferItem>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={600}>
                    <OfferItem img={SpecjalneImg} title={"SPERSONALIZOWANA"}>
                        <h5 className="offer-inner-text">ZADZWOŃ LUB NAPISZ WIADOMOŚĆ</h5>
                        <a><button className="btn">ZOBACZ</button></a>
                        <a><button className="btn">KONTAKT</button></a>
                    </OfferItem>
                </AnimationOnScroll>
            </div>
        </section>
        <section className="section">
        <h2 className="text-center">POZNAJ NASZE WYPIEKI</h2>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1}>
            <div className="diets-list">
            <OfferItem img={CiastaImg} title={"CIASTA NA ZAMÓWIENIE"}>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">ZAMÓW DIETĘ</button></a>
                    <a><button className="btn">MENU</button></a>
                </OfferItem>
                <OfferItem img={CiastaSpecjalneImg} title={"ZAMÓWIENIA SPECJALNE"}>
                    <h5 className="offer-inner-text">ZADZWOŃ LUB NAPISZ WIADOMOŚĆ</h5>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">KONTAKT</button></a>
                </OfferItem>

            </div>
            </AnimationOnScroll>
        </section>
        </>
     );
}
 
export default Offer;