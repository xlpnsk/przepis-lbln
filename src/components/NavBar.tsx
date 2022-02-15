import { FunctionComponent } from "react";
import Logo from '../assets/logo.svg';
import InstaIcon from '../assets/insta_icon.svg' 
import FbIcon from '../assets/facebook_icon.svg' 
import ShoppingIcon from '../assets/shopping.svg' 
import '../styles/nav.css'
interface Props {
    
}
 
const NavBar: FunctionComponent<Props> = () => {
    return (
        <section className="main-container"> 
            <article className="main-nav container">
            <nav className="nav-bar-expanded">
                <a href="#" className="nav-link">START</a>
                <a href="#" className="nav-link">O NAS</a>
                <a href="#" className="nav-link">OFERTA</a>
                <a href="#" className="nav-link">CENNIK</a>
                <a href="#" className="nav-link">KONTAKT</a>
            </nav>
            <div className="logo">
                <a>
                    <img src={Logo} alt="logo"/>
                </a>
            </div>
            <div className="nav-icons">
                <ul>
                    <li> <button className="btn">ZAMÓW DIETĘ</button></li>
                    <li> <a><img src={InstaIcon} alt="insta logo"></img></a></li>
                    <li> <a><img src={FbIcon} alt="facebook logo"></img></a></li>                   
                    <li> <a><img src={ShoppingIcon} alt="facebook logo"></img></a></li>                   

                </ul>
            </div>
            </article>
        <div className="main-header">
            <div className="title">
                ZDROWE POSIŁKI 
                <br />
                SPECJALNIE DLA CIEBIE
            </div>
            <p className="subtitle">Przepis jest firmą cateringową, która zrodziła się z pasji do gotowania, smaku i zdrowego jedzenia.</p>
            <a className="btn">ZOBACZ OFERTĘ</a>
        </div>    
        </section>
     );
}
 
export default NavBar;