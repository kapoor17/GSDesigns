import React,{useEffect} from "react";
import OurTeamCards from "../components/OurTeamCards";
import "../css/our-team.css"

const OurTeam =()=>{
    const cards=[0,1,2,3,4,5,6,7]

    useEffect(()=>{
        const ourTeamColumn=Array.from(document.querySelectorAll(".our-team-column"));
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
                <div class="row our-team-row">
                    {cards.map(card=>(
                        <OurTeamCards index={card}/>
                    ))}
                </div>
            </div>
        </section>
    </>
    );
}

export default OurTeam;