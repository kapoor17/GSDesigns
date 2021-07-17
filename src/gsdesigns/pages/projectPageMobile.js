import React,{useEffect} from 'react';
import photoa from "../components/recent-news photos/photoa.jpg";
import photob from "../components/recent-news photos/photob.jpg";
import photoc from "../components/recent-news photos/photoc.jpg";
import photod from "../components/recent-news photos/photod.jpg";
import photog from "../components/recent-news photos/photog.jpg";
import photoh from "../components/recent-news photos/photoh.jpg";
import photoi from "../components/recent-news photos/photoi.jpg";
import photoj from "../components/recent-news photos/photoj.jpg";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import SwiperComponentMobile from '../components/SwiperComponentMobile';
import '../css/project-page-mobile.css'


const ProjectPageForMobile = () =>{

    const imagesProject =[photoa,photob,photoc,photod,photog,photoh,photoi,photoj];

    useEffect(()=>{

        const swiper = new Swiper('.swiper-mobile', {
            centeredSlides:true,
            slidesPerView:'auto',
            spaceBetween:40,
            grabCursor: true,
            loop:true,
            speed:1000, 
            autoplay: {
                waitForTransition:true,
                disableOnInteraction:false,
                delay: 5000,
            },
            direction:'horizontal',
            slideActiveClass:'slide-mobile-active',
            });
    })


    return (
        <>
            <div className="navbar-filler my-4 py-3"></div>

            <section className="section p-4">
                <div className="swiper-container swiper-mobile container-lg">
                    <div className="swiper-wrapper">
                        {imagesProject.map((image,index)=>(
                            <SwiperComponentMobile src={image} alt={index}/>
                        ))} 
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectPageForMobile