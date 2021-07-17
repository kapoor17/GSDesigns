import React,{useEffect} from 'react';
import photoa from "../components/recent-news photos/photoa.jpg";
import photob from "../components/recent-news photos/photob.jpg";
import photoc from "../components/recent-news photos/photoc.jpg";
import photod from "../components/recent-news photos/photod.jpg";
import photoh from "../components/recent-news photos/photoh.jpg";
import photoj from "../components/recent-news photos/photoj.jpg";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import SwiperComponentMobile from '../components/SwiperComponentMobile';
import '../css/project-page-mobile.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProjectPageForMobile = () =>{

    const imagesProject =[
        {url:photoa, projectText:"type of project", projectNumber:"Project X"},
        {url:photob, projectText:"type of project", projectNumber:"Project X"},
        {url:photoc, projectText:"type of project", projectNumber:"Project X"},
        {url:photod, projectText:"type of project", projectNumber:"Project X"},
        {url:photoh, projectText:"type of project", projectNumber:"Project X"},
        {url:photoj, projectText:"type of project", projectNumber:"Project X"},
    ];

    useEffect(()=>{

        const swiper = new Swiper('.swiper-mobile', {
            centeredSlides:true,
            slidesPerView:'auto',
            spaceBetween:45,
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
            <section id="section-swiper-mobile" className="section p-4 d-flex justify-content-center align-items-center">
                <div className="filters p-4">
                    <Link className="back-button" to="/projectMap">
                        <FontAwesomeIcon className="me-2" icon={faArrowLeft}/>
                        Back
                    </Link>
                </div>
                <div className="swiper-container swiper-mobile container-lg">
                    <div className="swiper-wrapper">
                        {imagesProject.map((image,index)=>(
                            <SwiperComponentMobile src={image.url} alt={index} type={image.projectText} num={image.projectNumber}/>
                        ))} 
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectPageForMobile