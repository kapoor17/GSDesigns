import React,{} from "react";

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