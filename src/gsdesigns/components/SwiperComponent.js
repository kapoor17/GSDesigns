import React from 'react';

const SwiperComponent=(props)=>{
    return(
        <div className="swiper-slide">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default SwiperComponent;