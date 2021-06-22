import React,{useEffect,useState} from "react";
import photo1 from "../components/carousel-photos/photo1.jpg";
import photo2 from "../components/carousel-photos/photo2.jpg";
import photo3 from "../components/carousel-photos/photo3.jpg";
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
import {Carousel, LeftButton, RightButton} from "../components/Carousel"
import RecentNewsCard from '../components/RecentNewsCard.js'
import "../css/home.css"

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

        //getting the container and its width
        const slide=document.querySelector(".carousel__slide--container");
        const slides=Array.from(slide.children);
        const width =slide.getBoundingClientRect().width;
        const prevButton=document.querySelector(".left");
        const nextButton=document.querySelector(".right");

        //puts the images next to eachother
        slides.forEach((slide,index)=>{
            slide.style.left=width*index +"px";
        })

        //moves the slide
        const moveSlide=(currentSlide,targetSlide,slide)=>{
            slide.style.transform="translateX(-"+targetSlide.style.left+")";
            currentSlide.classList.remove("current-slide");
            targetSlide.classList.add("current-slide");
        }

        //hide-show arrows
        const hideShowArrow=(targetIndex,prevButton,nextButton,slides)=>{

            if(targetIndex===0){
                prevButton.classList.add("is-hidden");
                nextButton.classList.remove("is-hidden");
            }else if(targetIndex===(slides.length)-1){
                prevButton.classList.remove("is-hidden");
                nextButton.classList.add("is-hidden"); 
            }else{
                prevButton.classList.remove("is-hidden");
                nextButton.classList.remove("is-hidden"); 
            }
        }

        const rightButton=document.querySelector(".right");
        const LeftButton=document.querySelector(".left")
        
        
        rightButton.addEventListener("click",()=>{
            const currentSlide=document.querySelector(".current-slide"); 
            const targetSlide=currentSlide.nextElementSibling;
            const targetIndex=slides.findIndex(slide=>slide===targetSlide);

            moveSlide(currentSlide,targetSlide,slide);
            hideShowArrow(targetIndex,prevButton,nextButton,slides)

        })

        LeftButton.addEventListener("click",()=>{
            const currentSlide=document.querySelector(".current-slide");
            const targetSlide=currentSlide.previousElementSibling;
            const targetIndex=slides.findIndex(slide=>slide===targetSlide);

            moveSlide(currentSlide,targetSlide,slide);
            hideShowArrow(targetIndex,prevButton,nextButton,slides)

        })
        
    })
    
    return(
        <>
            <section className="section carousel p-4">
                <div className="inner-container">

                    <div className="carousel__button-container left is-hidden">
                        <LeftButton/>
                    </div>

                    <div className="carousel-container">
                        <ul className="carousel__slide--container">
                            {images.map((image,index)=>(
                                <Carousel src={image} alt={index}/>
                            ))}
                        </ul>
                    </div>

                    <div className="carousel__button-container right">
                        <RightButton/>
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