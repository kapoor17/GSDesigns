import React from "react";

const AboutUsCard=(props)=>{
    return(
        <div class="infos p-3">
            <h3 className="infos-heading">{props.title}</h3>
            <p className="infos-text">{props.text}</p>
        </div>
    );
}

export default AboutUsCard;