import { FunctionComponent } from "react";
import { AboutUs } from "./AboutUs";
 
const SliderItem: FunctionComponent<AboutUs> = ({img, desc, title}) => {
    return ( 
        <div className="slider-item">
            <div className="slider-img">
                <img src={img} alt={title}/>
            </div>
            <p className="slider-desc">{desc}</p>
            <h3 className="slider-title">{title}</h3>
        </div>
     );
}
 
export default SliderItem;