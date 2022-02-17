import { FunctionComponent, ReactChild, ReactFragment, ReactPortal, useRef, useState } from "react";
import PrzepisONas1 from '../assets/onas_foto/Przepis_onas_1.png';
import PrzepisONas2 from '../assets/onas_foto/Przepis_onas_2.png';
import PrzepisONas3 from '../assets/onas_foto/Przepis_onas_3.png';
import PrzepisONas4 from '../assets/onas_foto/Przepis_onas_4.png';
import PrzepisONas5 from '../assets/onas_foto/Przepis_onas_5.png';
import PrzepisONas6 from '../assets/onas_foto/Przepis_onas_6.png';
import SliderItem from "./SliderItem";
import '../styles/about-us.css'
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Anim1 from '../assets/anim/anim1.png';
import Anim2 from '../assets/anim/anim2.png';
import Anim3 from '../assets/anim/anim3.png';
import Anim4 from '../assets/anim/anim4.png';
import Anim5 from '../assets/anim/anim5.png';
import Anim6 from '../assets/anim/anim6.png';
import Anim7 from '../assets/anim/anim7.png';
import Anim8 from '../assets/anim/anim8.png';
import Anim9 from '../assets/anim/anim9.png';
import useWidth from "../hooks/useWidth";
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
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ex ut illum sunt. At dolorem officiis sint tempore, accusamus obcaecati eius maiores? Expedita quis nam aperiam unde, sapiente ducimus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ex ut illum sunt. At dolorem officiis sint tempore, accusamus obcaecati eius maiores? Expedita quis nam aperiam unde, sapiente ducimus",
    title: 'Jan Nowak 6'
}];

  


const AboutUs: FunctionComponent<Props> = () => {

    const [data, setData]=useState(slideData);
    const width = useWidth();
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: true,
        arrows: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: width>1400? '110px' : '0px',
        speed: 500,
        slidesToShow: width>1200? 3 : 1,
        slidesToScroll: 1,
        appendDots: (dots: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => <span>{dots}</span>
      };

      function ArrNext() {
        return (
          <span className="btn-slick-next slide-round-btn" 
          onClick={() => {
            if(sliderRef.current !== null) {
              sliderRef.current.slickNext()}}}
          >        
          </span>
        )
      }

      function ArrPrev() {
        return (
          <button className="btn-slick-prev slide-round-btn" 
          onClick={() => {
            if(sliderRef.current !== null) {
              sliderRef.current.slickPrev()}}}
          >        
          </button>
        )
      }

    return ( 
        <section className=" section about-us-container">
           <div className="background-icons">
           <div className="anim-1">
           <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
                <img src={Anim1} alt="background icon" />

            </AnimationOnScroll>
            </div>
           <div className="anim-2">
           <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
                <img src={Anim2} alt="background icon" />

            </AnimationOnScroll>
            </div>
           <div className="anim-3">
           <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
                <img src={Anim3} alt="background icon" />

            </AnimationOnScroll>
            </div>
           <div className="anim-4">
           <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
                <img src={Anim4} alt="background icon" />

            </AnimationOnScroll>
            </div>
           <div className="anim-5">
           <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
                <img src={Anim5} alt="background icon" />

            </AnimationOnScroll>
            </div>
           <div className="anim-6">
           <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
                <img src={Anim6} alt="background icon" />

            </AnimationOnScroll>
            </div>
            <div className="anim-7">
            <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
              <img src={Anim7} alt="background icon" />

          </AnimationOnScroll>
            </div>
            <div className="anim-8">
            <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
              <img src={Anim8} alt="background icon" />

          </AnimationOnScroll>
            </div>
            <div className="anim-9">
            <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              
              <img src={Anim9} alt="background icon" />

          </AnimationOnScroll>
            </div>
            </div>
            <article className="about-us-inner">
            <h2 className="about-title text-center">
                KILKA SŁÓW <br /> O NAS

                <ArrPrev/><ArrNext/>            
            </h2>
            <div className="slider">
                <div className="slider-items">
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((d) => <SliderItem key={d.id} img={d.img} desc={d.desc} title={d.title} id={d.id}/>)}
                    </Slider>
                </div>
            </div>
            </article>
        </section>
     );
}
 
export default AboutUs;