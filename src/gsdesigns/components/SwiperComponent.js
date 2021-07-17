import React from 'react';

const SwiperComponent=(props)=>{
    return(
        <div className="swiper-slide slide-home">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default SwiperComponent;