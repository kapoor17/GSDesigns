import React from 'react';

const SwiperComponentMobile=(props)=>{
    return(
        <div className="swiper-slide slide-mobile border border-danger">
            <p className="type">{props.type}</p>
            <img src={props.src} alt={props.alt} />
            <p className="number">{props.num}</p>
        </div>
    );
}

export default SwiperComponentMobile;