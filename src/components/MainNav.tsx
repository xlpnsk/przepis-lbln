import { FunctionComponent } from "react";
import InstaIcon from '../assets/insta_icon.svg'; 
import FbIcon from '../assets/facebook_icon.svg'; 
import ShoppingIcon from '../assets/shopping.svg'; 
import InstaIconHover from '../assets/insta_icon_hover.svg'; 
import FbIconHover from '../assets/facebook_icon_hover.svg'; 
import ShoppingIconHover from '../assets/shopping_hover.svg'; 
import '../styles/nav.css';
interface MainNavProps {
    
}
 
const MainNav: FunctionComponent<MainNavProps> = ({children}) => {

    return ( 
        <nav className="main-nav container" >
            <div className="nav-bar-expanded">
                <a href="#" className="nav-link">START</a>
                <a href="#" className="nav-link">O NAS</a>
                <a href="#" className="nav-link">OFERTA</a>
                <a href="#" className="nav-link">CENNIK</a>
                <a href="#" className="nav-link">KONTAKT</a>
            </div>
            {children}
            <div className="nav-icons">
                <ul>
                    <li> <button className="btn">ZAMÓW DIETĘ</button></li>
                    <li> 
                        <a href="#">
                            <img src={FbIcon} alt="facebook logo"></img>
                            <img src={FbIconHover} alt="facebook logo" className="hover-icon"></img>
                        </a>
                    </li> 
                    <li> 
                        <a href="#">
                            <img src={InstaIcon} alt="insta logo"></img>
                            <img src={InstaIconHover} alt="insta logo" className="hover-icon"></img>
                        </a>
                    </li>                                    
                    <li>
                        <a href="#">
                            <img src={ShoppingIcon} alt="facebook logo"></img>
                            <img src={ShoppingIconHover} alt="facebook logo" className="hover-icon"></img>
                        </a>
                    </li>                   

                </ul>
            </div>
            </nav>
     );
}
 
export default MainNav;