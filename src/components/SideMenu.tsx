import { FunctionComponent } from "react";
import CloseIcon from '../assets/close_icon.svg';
interface SideMenuProps {
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
}
 
const SideMenu: FunctionComponent<SideMenuProps> = ({setClicked}) => {
    return ( 
        <aside className="side-menu-container">
            <header className="side-menu-header">
                <h2 className="side-menu-text">MENU</h2>
                <span className="close-btn" onClick={() => setClicked((prev) => !prev)}>
                    <img src={CloseIcon} alt="close icon" />
                </span>
            </header>
            <div className="side-menu-content">
                <ul>
                    <li className="side-menu-link"><a href="#" className="side-menu-text">START</a></li>
                    <li className="side-menu-link"><a href="#" className="side-menu-text">O NAS</a></li>
                    <li className="side-menu-link"><a href="#" className="side-menu-text">OFERTA</a></li>
                    <li className="side-menu-link"><a href="#" className="side-menu-text">CENNIK</a></li>
                    <li className="side-menu-link"><a href="#" className="side-menu-text">KONTAKT</a></li>
                </ul>         
            </div>
        </aside>
     );
}
 
export default SideMenu;