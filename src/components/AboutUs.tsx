import { FunctionComponent, useState } from "react";
import PrzepisONas1 from '../assets/onas_foto/Przepis_onas_1.png';
import PrzepisONas2 from '../assets/onas_foto/Przepis_onas_2.png';
import PrzepisONas3 from '../assets/onas_foto/Przepis_onas_3.png';
import PrzepisONas4 from '../assets/onas_foto/Przepis_onas_4.png';
import PrzepisONas5 from '../assets/onas_foto/Przepis_onas_5.png';
import PrzepisONas6 from '../assets/onas_foto/Przepis_onas_6.png';
import SliderItem from "./SliderItem";
import '../styles/about-us.css'
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
interface Props {
    
}

export interface AboutUs {
    id: number
    img: string,
    desc: string,
    title: string
}

const slideData:AboutUs[] = [{
    id: 1,
    img: PrzepisONas1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ex ut illum sunt. At dolorem officiis sint tempore, accusamus obcaecati eius maiores? Expedita quis nam aperiam unde, sapiente ducimus!",
    title: 'Jan Nowak 1'
}, 
{
    id: 2,
    img: PrzepisONas2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ex ut illum sunt. At dolorem officiis sint tempore, accusamus obcaecati eius maiores? Expedita quis nam aperiam unde, sapiente ducimus!",
    title: 'Jan Nowak 2'
},
{
    id: 3,
    img: PrzepisONas3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ex ut illum sunt. At dolorem officiis sint tempore, accusamus obcaecati eius maiores? Expedita quis nam aperiam unde, sapiente ducimus!",
    title: 'Jan Nowak 3'
},
{
    id: 4,
    img: PrzepisONas4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ex ut illum sunt. At dolorem officiis sint tempore, accusamus obcaecati eius maiores? Expedita quis nam aperiam unde, sapiente ducimus!",
    title: 'Jan Nowak 4'
},
{
    id: 5,
    img: PrzepisONas5,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ex ut illum sunt. At dolorem officiis sint tempore, accusamus obcaecati eius maiores? Expedita quis nam aperiam unde, sapiente ducimus!",
    title: 'Jan Nowak 5'
},
{
    id: 6,
    img: PrzepisONas6,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ex ut illum sunt. At dolorem officiis sint tempore, accusamus obcaecati eius maiores? Expedita quis nam aperiam unde, sapiente ducimus!",
    title: 'Jan Nowak 6'
}] 

const AboutUs: FunctionComponent<Props> = () => {

    const [data, setData]=useState(slideData)

    const settings = {
        dots: true,
        arrows: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return ( 
        <section className=" section about-us-container">
            <article className="about-us-inner">
            <h2 className="about-title">
                KILKA SŁÓW O NAS
            </h2>
            <div className="slider">
                <div className="slider-items">
                    <Slider {...settings}>
                        {data.map((d) => <SliderItem key={d.id} img={d.img} desc={d.desc} title={d.title} id={d.id}/>)}
            
                    </Slider>
                </div>
            </div>
            </article>
        </section>
     );
}
 
export default AboutUs;