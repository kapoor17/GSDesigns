import React,{useEffect} from "react";
import OurTeam from "../pages/ourTeam";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons'

const OurTeamCards=(index)=>{
    
    return(
        <div className="col-2 square our-team-column" id={index.index}>
            <FontAwesomeIcon className="avatar" icon={faUserTie}/>
            <div className="hover-info" id={index.index}>
              Name<br/>
              Position  
            </div>
        </div>
    );

}

export default OurTeamCards;