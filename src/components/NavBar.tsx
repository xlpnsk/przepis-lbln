import { FunctionComponent } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Logo from '../assets/logo.svg';

import '../styles/nav.css'
import MainNav from "./MainNav";
interface Props {
    
}
 
const NavBar: FunctionComponent<Props> = () => {
    return (
        <section className="main-container"> 
            <MainNav>
                <img src={Logo} alt="logo"/>
            </MainNav>
        <div className="main-header">
            <AnimationOnScroll duration={1.3} animateIn="animate__fadeInDown" animateOnce={true}>
            <div className="title">
                ZDROWE POSIŁKI 
                <br />
                SPECJALNIE DLA CIEBIE
            </div>
            <p className="subtitle">Przepis jest firmą cateringową, która zrodziła się z pasji do gotowania, smaku i zdrowego jedzenia.</p>
            <a className="btn">ZOBACZ OFERTĘ</a>
            </AnimationOnScroll>
        </div>    
        </section>
     );
}
 
export default NavBar;