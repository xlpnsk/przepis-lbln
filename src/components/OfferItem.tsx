import { Children, FunctionComponent, useEffect, useRef, useState } from "react";

interface Props {
    img:string,
    title:string
}
 
const OfferItem: FunctionComponent<Props> = ({img,title, children}) => {
    

    return ( 
        <div className="offer-item">
            <div className="offer-img">
                <img src={img} alt={title}/>
            </div>
            <div className="overlay">
                {children}
            </div>
            <h4 className="offer-title">{title}</h4>
        </div>
     );
}
 
export default OfferItem;