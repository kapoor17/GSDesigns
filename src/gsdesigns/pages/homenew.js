import React,{useEffect} from "react";
import photo1 from "../components/carousel-photos/photo1.jpg";
import photo2 from "../components/carousel-photos/photo2.jpg";
import photo3 from "../components/carousel-photos/photo3.jpg";
import PageButton from "../components/pageButton";
import {Carousel, LeftButton, RightButton} from "../components/Carousel"
import CardComponent from "../components/CardComponent";
import "../css/home.css"

const Home=()=>{
    
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
                <div className="container-md rn-inner">
                    <h2 className="rn-title">Recent News</h2>
                    {images.map((index)=>(
                        <CardComponent data={index} />
                    ))}
                </div>

            </section>

            <PageButton title="View Projects" link="/projectMap" />

         </>
    );
}

export default Home;