import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export const Carousel = (props) => {

  if(props.alt===0){
    return(
      <li className="carousel__slides current-slide">
        <img className="carousel__images" src={props.src} alt={props.alt}/>
      </li>
    );
  }
  else{
    return(
      <li className="carousel__slides">
        <img className="carousel__images" src={props.src} alt={props.index}/>
      </li>
    );
  }
}

export const LeftButton = () => {
    return(
      <div><FontAwesomeIcon icon={faArrowLeft}/></div>
    );
}

export const RightButton = () => {
    return(
      <div><FontAwesomeIcon icon={faArrowRight}/></div>
    );
}