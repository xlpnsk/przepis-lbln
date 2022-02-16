import { FunctionComponent, useRef } from "react";
import '../styles/scroll-nav.css';
import MainNav from "./MainNav";
import NavBar from "./NavBar";
import MiniLogo from '../assets/logo_small.svg';
interface ScrollNavProps {
    
}
 
const ScrollNav: FunctionComponent<ScrollNavProps> = () => {

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
                <img src={MiniLogo} alt="logo"/>
            </MainNav>
        </div>
     );
}
 
export default ScrollNav;