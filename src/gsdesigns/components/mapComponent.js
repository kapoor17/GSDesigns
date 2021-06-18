import React, { createFactory, useEffect, useState } from 'react';
import mapImage   from '../../images/mapImage.png';
import "../css/map.css";
import Marker from '../components/markers';
import { getList } from '../../requests/apis';

function MapComponent({categoryId,handleMarker})
{
    const [coordinates,setCoordinates]=useState([]);
    let [transform,setTransform]=useState([]);
   

    useEffect(()=>{
        getCoordinates();
    },[]);

    useEffect(async()=>{
            setTransform([]);
            addTransforms();
    },[coordinates,categoryId])

    const getCoordinates=async()=>{
        const res=await getList("markerList");
        setCoordinates(res);
    }

    const addTransforms= async ()=>{

        
        for(let coordinate of coordinates){
                if(categoryId && !coordinate.categories.split(',').includes(categoryId))
                   continue ;
                const mapContainer=document.querySelector("#map");
                const width=((mapContainer.offsetWidth)/360);//one block of width
                const height=(mapContainer.offsetHeight)/180;//one block of height
                const x= width*parseFloat(coordinate.longitude);
                const y=height*parseFloat(coordinate.latitude)-(2*height);  
                setTransform(transform=>[...transform,{
                    id:coordinate.id,
                    transformX:x,
                    transformY:-y,
                }]);
            }
            console.log(transform);
    }
    return(
        <>
                    <div id="map">
                    <img src={mapImage} /> 
                         {transform.map((item,index)=>(
                            
                            <Marker handleMarker={handleMarker} x={item.transformX}  id={item.id} y={item.transformY} key={index} />
                        ))}
                    </div>
           
        </>
    );
}

export default MapComponent;