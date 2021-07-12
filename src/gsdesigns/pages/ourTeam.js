import React,{useEffect} from "react";
import avatar1 from '../components/our-team photos/photo1.jpg';
import avatar2 from '../components/our-team photos/photo2.jpg';
import avatar3 from '../components/our-team photos/photo3.jpg';
import avatar4 from '../components/our-team photos/photo4.jpg';
import avatar5 from '../components/our-team photos/photo5.jpg';
import avatar6 from '../components/our-team photos/photo6.jpg';
import avatar7 from '../components/our-team photos/photo7.jpg';
import avatar8 from '../components/our-team photos/photo8.jpg';
import avatar9 from '../components/our-team photos/photo9.jpg';
import avatar10 from '../components/our-team photos/photo10.jpg';
import avatar11 from '../components/our-team photos/photo11.jpg';
import avatar12 from '../components/our-team photos/photo12.jpg';
import OurTeamCards from "../components/OurTeamCards";
import "../css/our-team.css"

const OurTeam =()=>{
    const cards=[avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10,avatar11]

    useEffect(()=>{
        const hoverInfo=Array.from(document.querySelectorAll(".hover-info"))

        hoverInfo.forEach(info=>{
            info.addEventListener("mouseenter",function(){
                this.classList.add("show");
            });
            info.addEventListener("mouseleave",function(){
                this.classList.remove("show");
            });
        });
    })
    return(
    <>
        <div className="navbar-filler my-4 py-3"></div>
        <section className="section p-4">
            <div className="container-lg our-team-container">
                <div className="our-team-heading mb-4">Our Team</div>
                <div class="row">
                    {cards.map((card,index)=>(
                        <OurTeamCards src={card} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    </>
    );
}

export default OurTeam;