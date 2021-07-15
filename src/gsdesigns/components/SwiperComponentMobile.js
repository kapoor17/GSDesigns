import React from 'react';

const SwiperComponentMobile=(props)=>{
    return(
        <div className="swiper-slide-mobile">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default SwiperComponentMobile;