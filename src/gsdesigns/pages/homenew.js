import React,{useEffect,useState} from "react";
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
import photog from "../components/recent-news photos/photog.jpg";
import photoh from "../components/recent-news photos/photoh.jpg";
import photoi from "../components/recent-news photos/photoi.jpg";
import photoj from "../components/recent-news photos/photoj.jpg";
import '../css/contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope, faMapPin} from '@fortawesome/free-solid-svg-icons'
import PageButton from "../components/pageButton";
import RecentNewsCard from '../components/RecentNewsCard.js'
import "../css/home.css"

const Home=()=>{
    
    const [recentNewsa, getRecentNewsa]=useState([
        {url:photoa, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente? Eligendi optio aut eveniet nisi, aspernatur, veniam esse sit voluptatem ullam aperiam aliquid corrupti molestiae?"},
        {url:photob, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."},
        {url:photoc,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum laudantium necessitatibus. Id, dolore mollitia corrupti itaque nulla error incidunt architecto accusantium quod sequi laudantium! Veniam nobis cumque ipsum mollitia, architecto facilis repellendus nulla voluptate"},
        {url:photod, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."},
    ]);

    const [recentNewsb, getRecentNewsb]=useState([
        {url:photog, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente? Eligendi optio aut eveniet nisi, aspernatur, veniam esse sit voluptatem ullam aperiam aliquid corrupti molestiae?"},
        {url:photoh, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."},
        {url:photoi,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum laudantium necessitatibus. Id, dolore mollitia corrupti itaque nulla error incidunt architecto accusantium quod sequi laudantium! Veniam nobis cumque ipsum mollitia, architecto facilis repellendus nulla voluptate"},
        {url:photoj, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."}
    ]);
    

    const images =[photo1,photo2,photo3];

    useEffect(()=>{

        const swiper = new Swiper('.swiper-container', {
            autoplay: {
              delay: 5000,
            },
            speed:1000,
            direction:'horizontal',
          });
    })
    
    return(
        <>
            <section className="section pb-4 carousel">
                <div className="swiper-container container-lg p-0">
                    <div className="swiper-wrapper">
                        {images.map((image,index)=>(
                            <SwiperComponent src={image} alt={index}/>
                        ))} 
                    </div>
                </div>
            </section>
            
            <section className="section p-4">
                <div className="container-lg rn-container">
                    <div className="row">
                        <div className="column">
                            {recentNewsa.map(news=>(
                                <RecentNewsCard url={news.url} text={news.text}/>
                            ))}
                        </div>
                        <div className="column">
                            {recentNewsb.map(news=>(
                                <RecentNewsCard url={news.url} text={news.text}/>
                            ))}
                        </div>
                        <div className="column">
                            {recentNewsa.map(news=>(
                                <RecentNewsCard url={news.url} text={news.text}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section p-5" id="contact">
                <div className="container-md">
                    <div className="heading mb-5">Contact Us</div>
                    <div className="d-flex justify-content-between align-items-start">
                        <div className="contact fs-5 d-flex flex-column justify-content-between align-items-start">
                            <div className="contact-details w-100 d-flex justify-content-start align-items-start">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <p>info@gsdesigns.com.in</p>
                            </div>
                            <div className="contact-details w-100 d-flex justify-content-start align-items-start">
                                <FontAwesomeIcon icon={faPhone}/>
                                <p>1300 806 809</p>
                            </div>
                            <div className="contact-details w-100 d-flex justify-content-start align-items-start">
                                <FontAwesomeIcon icon={faMapPin}/>
                                <p>lorem ipsum dolor</p>
                            </div>
                        </div>
                        <div className="form-container py-3 px-4 d-flex flex-column justify-content-center align-items-start">
                                <p className="instruction">Fill out the form below and our team will be in touch with you shortly.</p>
                            <form className="form d-flex flex-column justify-content-center align-items-start">
                                <input type="text" id="name" name="name" value="Name" />
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