import { FunctionComponent } from "react";
import FitSport from '../assets/fit+sport_photo.png';
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
                <OfferItem img={FitSport} title={"STANDARD + SPORT"}>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">ZAMÓW DIETĘ</button></a>
                    <a><button className="btn">MENU</button></a>
                </OfferItem>
                <OfferItem img={FitSport} title={"STANDARD + SPORT"}>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">ZAMÓW DIETĘ</button></a>
                    <a><button className="btn">MENU</button></a>
                </OfferItem>
                <OfferItem img={FitSport} title={"STANDARD + SPORT"}>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">ZAMÓW DIETĘ</button></a>
                    <a><button className="btn">MENU</button></a>
                </OfferItem>
                <OfferItem img={FitSport} title={"STANDARD + SPORT"}>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">ZAMÓW DIETĘ</button></a>
                    <a><button className="btn">MENU</button></a>
                </OfferItem>
                <OfferItem img={FitSport} title={"STANDARD + SPORT"}>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">ZAMÓW DIETĘ</button></a>
                    <a><button className="btn">MENU</button></a>
                </OfferItem>
                <OfferItem img={FitSport} title={"STANDARD + SPORT"}>
                    <h5 className="offer-inner-text">ZADZWOŃ LUB NAPISZ WIADOMOŚĆ</h5>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">KONTAKT</button></a>
                </OfferItem>
            </div>
        </section>
        <section className="section">
        <h2 className="text-center">POZNAJ NASZE WYPIEKI</h2>
            <div className="diets-list">
            <OfferItem img={FitSport} title={"STANDARD + SPORT"}>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">ZAMÓW DIETĘ</button></a>
                    <a><button className="btn">MENU</button></a>
                </OfferItem>
                <OfferItem img={FitSport} title={"STANDARD + SPORT"}>
                    <h5 className="offer-inner-text">ZADZWOŃ LUB NAPISZ WIADOMOŚĆ</h5>
                    <a><button className="btn">ZOBACZ</button></a>
                    <a><button className="btn">KONTAKT</button></a>
                </OfferItem>
            </div>
        </section>
        </>
     );
}
 
export default Offer;