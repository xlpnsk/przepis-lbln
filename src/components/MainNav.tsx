import { FunctionComponent, useEffect, useState } from "react";
import InstaIcon from '../assets/insta_icon.svg'; 
import FbIcon from '../assets/facebook_icon.svg'; 
import ShoppingIcon from '../assets/shopping.svg' 
import '../styles/nav.css'
interface MainNavProps {
    
}
 
const MainNav: FunctionComponent<MainNavProps> = ({children}) => {

    const [windowDimensions, setWindowDimensions] = useState(0);

    const handleResize = (ev: UIEvent) => {
        console.log('asfdsfsdfas');
        
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return window.removeEventListener('resize', handleResize)
    },[])

    return ( 
        <nav className="main-nav container" >
            <div className="nav-bar-expanded">
                <a href="#" className="nav-link">START</a>
                <a href="#" className="nav-link">O NAS</a>
                <a href="#" className="nav-link">OFERTA</a>
                <a href="#" className="nav-link">CENNIK</a>
                <a href="#" className="nav-link">KONTAKT</a>
            </div>
            <div className="logo">
                <a href="#">
                    {children}
                </a>
            </div>
            <div className="nav-icons">
                <ul>
                    <li> <button className="btn">ZAMÓW DIETĘ</button></li>
                    <li> <a href="#"><img src={FbIcon} alt="facebook logo"></img></a></li> 
                    <li> <a href="#"><img src={InstaIcon} alt="insta logo"></img></a></li>                                    
                    <li> <a href="#"><img src={ShoppingIcon} alt="facebook logo"></img></a></li>                   

                </ul>
            </div>
            </nav>
     );
}
 
export default MainNav;