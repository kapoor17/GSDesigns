import React,{useEffect} from "react";
import OurTeam from "../pages/ourTeam";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons'

const OurTeamCards=(props)=>{
    console.log(props);
    return(
        <div className="col-2 square our-team-column px-1 py-1" id={props.index}>
            <img  src={props.src} alt={props.index} />
            <div className="hover-info" id={props.index}>
              Name<br/>
              Position  
            </div>
        </div>
    );

}

export default OurTeamCards;