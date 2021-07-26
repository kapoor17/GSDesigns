import React,{useEffect} from "react";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import photo1 from "../components/carousel-photos/photo1.jpg";
import photo2 from "../components/carousel-photos/photo2.jpg";
import photo3 from "../components/carousel-photos/photo3.jpg";
import SwiperComponent from "../components/SwiperComponent";
import photoa from "../components/recent-news photos/photoa.jpg";
import photob from "../components/recent-news photos/photob.jpg";
import photoc from "../components/recent-news photos/photoc.jpg";
import photod from "../components/recent-news photos/photod.jpg";
import photoe from "../components/recent-news photos/photoe.jpg";
import photof from "../components/recent-news photos/photof.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope, faMapPin} from '@fortawesome/free-solid-svg-icons'
import PageButton from "../components/pageButton";
import RecentNewsCard from '../components/RecentNewsCard.js'
import "../css/home.css"

const Home=()=>{
    
    const recentNewsa=[
        {url:photoa, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente? Eligendi optio aut eveniet nisi, aspernatur, veniam esse sit voluptatem ullam aperiam aliquid corrupti molestiae?"},
        {url:photob, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."},
        {url:photoc,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum laudantium necessitatibus. Id, dolore mollitia corrupti itaque nulla error incidunt architecto accusantium quod sequi laudantium! Veniam nobis cumque ipsum mollitia, architecto facilis repellendus nulla voluptate"},
    ];
    
    const recentNewsb=[
        {url:photod, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."},
        {url:photoe, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."},
        {url:photof, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."}
    ];
    

    const images =[photo1,photo2,photo3];

    useEffect(()=>{

         const swiperHome = new Swiper('.swiper-home', {
             grabCursor:true,
             loop:true,
             speed:1000, 
             autoplay: {
               delay: 5000,
             },
             direction:'horizontal',
           });
    })

    return(
        <>
            <div className="navbar-filler my-4 py-3"></div>
            <section className="section pb-5" id="carousel">
                <div className="swiper-container swiper-home container-lg p-0">
                    <div className="swiper-wrapper">
                        {images.map((image,index)=>(
                            <SwiperComponent src={image} alt={index}/>
                        ))} 
                    </div>
                </div>
            </section>
            
            <section className="section" id="recent-news">
                <div className="container-lg px-3 ">
                    {/* child of rows have some kind of styling thats why column has a padding */}
                    <div className="row ">   
                        <div className="column px-1 ">
                            {recentNewsa.map(news=>(
                                <RecentNewsCard url={news.url} text={news.text}/>
                            ))}
                        </div>
                        <div className="column px-1">
                            {recentNewsb.map(news=>(
                                <RecentNewsCard url={news.url} text={news.text}/>
                            ))}
                        </div>
                        <div className="column px-1">
                            {recentNewsa.map(news=>(
                                <RecentNewsCard url={news.url} text={news.text}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section py-5" id="contact">
                <div className="container-lg p-0  ">
                    <div className="contact-heading mb-4 ">Contact Us</div>
                    <div className="contact-us-container d-flex justify-content-between align-items-start">
                        <div className="our-details-container mb-4 d-flex flex-column justify-content-center align-items-start  px-4 fs-5">
                            <div className=" our-contact-details d-flex justify-content-center align-items-start mb-3 ">
                                <FontAwesomeIcon className="me-3" icon={faEnvelope}/>
                                <p>info@gsdesigns.com.in</p>
                            </div>
                            <div className="our-contact-details d-flex justify-content-center align-items-start mb-3">
                                <FontAwesomeIcon className="me-3" icon={faPhone}/>
                                <p>1300 806 809</p>
                            </div>
                            <div className=" our-contact-details d-flex justify-content-center align-items-start mb-3">
                                {/* margin for pin is greater than others because of the size of it */}
                                <FontAwesomeIcon className="me-4" icon={faMapPin}/>
                                <p>lorem ipsum dolor</p>
                            </div>
                        </div>
                        <div className="form-container px-3">
                            <p className="instruction font-weight-bold">Fill out the form below and our team will be in touch with you shortly.</p>
                            <form className="form d-flex flex-column justify-content-center align-items-start">
                                <input type="text" id="name" name="name" value="Name"/>
                                <input type="text" id="email" name="email" value="Email" />
                                <input type="text" id="phone" name="email" value="Phone Number" />
                                <div className="flex-overide d-flex">
                                    <input type="text" id="project-type" name="project-type" value="Project Type" />
                                    <input type="text" id="how" name="how" value="How did you find us" />
                                </div>
                                <input type="text" id="msg" name="msg" value="Message" />
                                <input type="submit" value="Submit" className="submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <PageButton title="View Projects" link="/projectMap" />
         </>
    );
}

export default Home;