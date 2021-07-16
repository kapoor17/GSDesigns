import React from 'react';

const SwiperComponentMobile=(props)=>{
    return(
        <div className="swiper-slide slide-mobile">
            <p className="type">type of project</p>
            <img src={props.src} alt={props.alt} />
            <p className="number">Project "x"</p>
        </div>
    );
}

export default SwiperComponentMobile;