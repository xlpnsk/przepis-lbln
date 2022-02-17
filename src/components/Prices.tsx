import { FunctionComponent, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CollapseItem from "./CollapseItem";

export interface IPrices{
    id:number,
    title: string,
    data: {
        headers: string[],
        values1: string[],
        values2: string[],
    }
}

const items: IPrices[] = [{
    id:0,
    title: 'DIETA STANDARD + SPORT - 5 POSIŁKÓW',
    data: {
        headers: ['Kaloryczność', '1000 kcal (4 posiłki)', '1200 kcal', '1400 kcal', '1600 kcal', '1800 kcal', '2000 kcal', '2200 kcal', '2500 kcal', '3000 kcal'],
        values1: ['Cena za dzień','59 zł','64 zł','66 zł','68 zł','71 zł','73 zł','75 zł','78 zł','85 zł'],
        values2: ['Cena za dzień ze zniżką przy zamówieniach na 20 dni i dłużej',	'57 zł',	'62 zł',	'64 zł'	,'66 zł'	,'69 zł',	'71 zł',	'73 zł',	'76 zł',	'83 zł']
    }
},{
    id:1,
    title: 'DIETA WEGETARIAŃSKA - 5 POSIŁKÓW',
    data: {
        headers: ['Kaloryczność',	'1000 kcal (4 posiłki)',	'1200 kcal',	'1400 kcal',	'1600 kcal',	'1800 kcal',	'2000 kcal',	'2200 kcal',	'2500 kcal',	'3000 kcal'],
        values1: ['Cena za dzień',	'59 zł',	'64 zł',	'66 zł',	'68 zł',	'71 zł',	'73 zł',	'75 zł',	'78 zł',	'85 zł'],
        values2: ['Cena za dzień ze zniżką przy zamówieniach na 20 dni i dłużej',	'57 zł',	'62 zł',	'64 zł',	'66 zł',	'69 zł',	'71 zł',	'73 zł',	'76 zł',	'83 zł']
    }
},{
    id:2,
    title: 'DIETA KETOGENICZNA - 3 POSIŁKI',
    data: {
        headers: ['Kaloryczność',	'1200 kcal',	'1400 kcal',	'1600 kcal',	'1800 kcal',	'2000 kcal'],
        values1: ['Cena za dzień',	'65 zł',	'67 zł',	'70 zł',	'73 zł',	'75 zł'],
        values2: ['Cena za dzień ze zniżką przy zamówieniach na 20 dni i dłużej',	'63 zł',	'65 zł',	'68 zł',	'71 zł',	'73 zł']
    }
},{
    id:3,
    title: 'DIETA SIRTFOOD - 4 POSIŁKI',
    data: {
        headers: ['Etap diety',	'1 etap 1000 kcal',	'2 etap 1200 kcal / 1400 kcal / 1600 kcal',	'3 etap 1200 kcal / 1400 kcal / 1600 kcal'],
        values1: ['Cena za dzień',	'70 zł',	'70 zł',	'70 zł'],
        values2: ['Cena za dzień ze zniżką przy zamówieniach na 20 dni i dłużej'	,'68 zł',	'68 zł',	'68 zł']
    }
},{
    id: 4,
    title: 'DIETA NISKI IG - 4 POSIŁKI',
    data: {
        headers: ['Kaloryczność',	'1000 kcal',	'1200 kcal',	'1400 kcal',	'1600 kcal',	'1800 kcal',	'2000 kcal'],
        values1: ['Cena za dzień',	'62 zł',	'65 zł',	'67 zł',	'70 zł',	'73 zł',	'75 zł'],
        values2: ['Cena za dzień ze zniżką przy zamówieniach na 20 dni i dłużej',	'60 zł',	'63 zł',	'65 zł',	'68 zł',	'71 zł',	'73 zł']
    }
}
]


interface Props {
    
}
 
const Prices: FunctionComponent<Props> = () => {

    const [open,setOpen] = useState<boolean[]>(Array(items.length).fill(false));
    return ( 
        <section className="section">
            <h2 className="text-center">CENNIK</h2>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={1}>
            <div className="prices-container">
                {items.map((item,ind) => <CollapseItem key={item.id} prop={item} id={ind} setOpen={setOpen} open={open}/>)}
            </div>
            </AnimationOnScroll>
        </section>
     );
}
 
export default Prices;