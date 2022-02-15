import { Children, FunctionComponent, useEffect, useRef, useState } from "react";

interface Props {
    img:string,
    title:string
}
 
const OfferItem: FunctionComponent<Props> = ({img,title, children}) => {
    
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnterHandler:React.MouseEventHandler<HTMLDivElement> = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsHovered((prev) => !prev);      
    }

    return ( 
        <div className="offer-item" onMouseEnter={(e) => onMouseEnterHandler(e)} onMouseLeave={() => setIsHovered((prev) => !prev)}>
            <div className="offer-img">
                <img src={img} alt={title}/>
            </div>
            <div className="overlay">
                {isHovered && children}
            </div>
            <p>{title}</p>
        </div>
     );
}
 
export default OfferItem;