import React from 'react';
import "../css/map.css"
function Marker({id,x,y,handleMarker})
{
    const markerChange=(e)=>{
        handleMarker(e);
    }
    return(
        <>
            <div className="marker" id={id} onClick={markerChange} style={{transform:`translateX(${x}px) translateY(${y}px)`}}></div>
        </>
    );
}

export default Marker;