import { FunctionComponent, useEffect, useRef, useState } from "react";
import '../styles/scroll-nav.css';
import MainNav from "./MainNav";
import NavBar from "./NavBar";
import MiniLogo from '../assets/logo_small.svg';
import useWidth from "../hooks/useWidth";
import Shopping from '../assets/shopping.svg'
import Burger from '../assets/burger.svg'
import ShoppingIconHover from '../assets/shopping_hover.svg'; 

interface ScrollNavProps {
    
}
 
const ScrollNav: FunctionComponent<ScrollNavProps> = () => {

    const [sideExpanded, setSideExpanded] = useState(false);

    const width = useWidth();

    const navRef = useRef<HTMLDivElement>(null);

    window.onscroll = function() { scrollFunc() }
    
    const scrollFunc = () => {
        if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
             if(navRef.current !== null) {
                 navRef.current.style.top = "0";
             }
          } else {
            if(navRef.current !== null) {
            navRef.current.style.top = "-90px";
            }
          }
    }

    return ( 
        <div className="navbar-fixed" ref={navRef}>
            <MainNav>
                <div className="logo">
                    <a href="#">
                        <img src={MiniLogo} alt="logo"/>
                    </a>
                </div>
                {
                    width<993 && 
                    <div className="mobile-nav-button-group">
                        <span className="shopping mobile-btn">
                            <img src={Shopping} alt="shopping" />
                            <img src={ShoppingIconHover} alt="facebook logo" className="hover-icon"></img>
                        </span>
                        <span className="burder-btn mobile-btn" onClick={() => setSideExpanded((prev) => !prev)}>
                            <img src={Burger} alt="burger menu" style={{width: '2.25rem', height: '2.25rem'}}/>
                        </span>
                    </div>
                }
            </MainNav>
        </div>
     );
}
 
export default ScrollNav;