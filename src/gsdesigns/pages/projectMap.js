import React, { useState ,useEffect} from 'react';
import CategoryFilters from '../components/categoryFilters';
import MapComponent from '../components/mapComponent';
import {getCombo} from '../../requests/apis'
import ProjectList from '../components/projectList';
import $ from "jquery"
function ProjectMapPage()
{

    const [category,setCategory]=useState({
        id:null,
        color:"red"
    });
    const [marker,setMarker]=useState();

    const markerChange=(e)=>{
         setMarker(e.target.id);
    }
    const categoryChange=(e)=>{
        if(e.target.id==category.id)
            return;
        setCategory({
            id:e.target.id,
            color:$(e.target).children(".filterIcon").prop("id")
        });
        $(".filterText.activeFilter").removeClass("activeFilter");
        $(e.target).children(".filterText").addClass("activeFilter");

    }

    useEffect(()=>{
        setMarker();
        if(category)
        document.documentElement.style.setProperty('--markerColor',category.color);
    },[category]);

    return(
        <>
            <div className="navbar-filler my-4 py-3"></div>
            <section className="section d-flex justify-content-center">
                
            <section className="p-4 w-100">
                <section className="mapContainer">
                <CategoryFilters categoryHandler={categoryChange} />
                <MapComponent categoryId={category?category.id:null} handleMarker={markerChange} />
                </section>
                
            </section>
            <ProjectList markerId={marker} categoryId={category?category.id:null} />
            </section>
        </>
    );
}

export default ProjectMapPage;