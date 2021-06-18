import React from 'react';
import "../css/map.css"
function Marker({x,y})
{
    return(
        <>
            <div className="marker" style={{transform:`translateX(${x}px) translateY(${y}px)`}}></div>
        </>
    );
}

export default Marker;