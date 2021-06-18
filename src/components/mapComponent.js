import React, { useEffect, useState } from 'react';
import mapImage   from '../images/mapImage.png';
import "../css/map.css";
import {getAllEntries} from '../requests/apis';
import Marker from '../components/markers';

function MapComponent({coordinates})
{
    const [transform,setTransform]=useState([]);
    useEffect(()=>{
            setTransform([]);
            addTransforms();
    },[coordinates])

    
    const addTransforms= async ()=>{
        await coordinates.map(
            (coordinate)=>{
                const mapContainer=document.querySelector("#map");
                const width=((mapContainer.offsetWidth)/360);//one block of width
                const height=(mapContainer.offsetHeight)/180;//one block of height
                console.log(width);
                console.log(height);
                const x= width*parseFloat(coordinate.longitude);
                const y=height*parseFloat(coordinate.latitude)-(2*height);  
                setTransform(oldArray=>[...oldArray,{
                    transformX:x,
                    transformY:-y,
                    projects:coordinate.projects
                }]);
            }
        );
    }
    return(
        <>
                <section className="mapContainer">

                    <div id="map">
                    <img src={mapImage} />
                        {transform.map((item,index)=>(
                            <Marker x={item.transformX}  y={item.transformY} key={index} />
                        ))}
                    </div>
                </section>
        </>
    );
}

export default MapComponent;