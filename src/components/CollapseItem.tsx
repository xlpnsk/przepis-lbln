import React, { FunctionComponent, useRef, useState } from "react";
import { IPrices } from "./Prices";
import '../styles/collapse.css';
import Plus from '../assets/Component 18 – 11.svg'
import { CSSTransition } from 'react-transition-group'
import { JsxElement } from "typescript";
interface Props {
    open: boolean[],
    id:number,
    setOpen: React.Dispatch<React.SetStateAction<boolean[]>>,
    prop: IPrices
}
 
const CollapseItem: FunctionComponent<Props> = ({prop, open, setOpen, id}) => {
    
    const [menuHeight, setMenuHeight] = useState<number>(0);
    const dropdownRef = useRef(null); 

    function calcHeight(el:HTMLElement) {
        const height = el.offsetHeight;
        setMenuHeight(height);
      }

    const clickHandler = () => {
        const newOpen = open.map((val,ind) => id===ind? !val : false)
        setOpen(newOpen);
    }

    const headers = prop.data.headers.map((head) => <th>{head}</th>);
    const values1 = prop.data.values1.map((val) => <td>{val}</td>);
    const values2 = prop.data.values2.map((val) => <td>{val}</td>);
    return (
        <div className="collapse-container">
 
        <div className="collapse-header">
            <div className={`main-title${open[id]?' title-active':''}`}>{prop.title}</div>
            <span className={`round-btn${open[id]?' btn-active':''}`} onClick={() => clickHandler()}>{open[id]? '-' : '+'}</span>
        </div>
        <div className="collapse-outer-container" style={open[id]?{ height: menuHeight }:{ height: 0 }}>
        <CSSTransition 
            in={open[id]} 
            timeout={150} 
            classNames="collapse" 
            unmountOnExit 
            ref={dropdownRef} 
            onEnter={calcHeight}
        >
        <div className="collapse">
            <table className="collapse-table">
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {values1}
                    </tr>
                    <tr>
                        {values2}
                    </tr>
                </tbody>
            </table>
        </div>
        </CSSTransition>   
        </div>
        </div>
     );
}
 
export default CollapseItem;