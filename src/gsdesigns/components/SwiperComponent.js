import React from 'react';

const SwiperComponent=(props)=>{
    return(
        <div className="swiper-slide" style={{backgroundImage:`url(${props.src})`,backgroundSize:`cover`}}>
        </div>
    );
}

export default SwiperComponent;