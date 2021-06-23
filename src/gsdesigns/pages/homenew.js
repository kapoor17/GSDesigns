import React,{useEffect,useState} from "react";
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
import PageButton from "../components/pageButton";
import RecentNewsCard from '../components/RecentNewsCard.js'
import "../css/home.css"
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const Home=()=>{
    
    const [recentNewsa, getRecentNewsa]=useState([
        {url:photoa, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente? Eligendi optio aut eveniet nisi, aspernatur, veniam esse sit voluptatem ullam aperiam aliquid corrupti molestiae?"},
        {url:photob, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."},
        {url:photoc,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum laudantium necessitatibus. Id, dolore mollitia corrupti itaque nulla error incidunt architecto accusantium quod sequi laudantium! Veniam nobis cumque ipsum mollitia, architecto facilis repellendus nulla voluptate"},
        {url:photod, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, delectus. Lorem ipsum dolor sit amet."},
        {url:photoe, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente? Eligendi optio aut eveniet nisi, aspernatur, veniam esse sit voluptatem ullam aperiam aliquid corrupti molestiae?"},
        {url:photof, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente? Eligendi optio aut eveniet nisi, aspernatur, veniam esse sit voluptatem ullam aperiam aliquid corrupti molestiae?"}
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
            <section className="section p-4 carousel">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {images.map((image,index)=>(
                            <SwiperComponent src={image} alt={index}/>
                        ))} 
                    </div>
                </div>
            </section>
            
            <section className="section p-4 rn-container">
                <div className="container-md">
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

            <PageButton title="View Projects" link="/projectMap" />

         </>
    );
}

export default Home;