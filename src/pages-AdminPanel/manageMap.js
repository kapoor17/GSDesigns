import React, { useEffect, useState } from 'react';
import SectionHeading from '../components/sectionHeading';
import mapImage   from '../images/mapImage.png';
import "../css/map.css";
import {deleteCombo, getAllEntries, getCombo} from '../requests/apis';
import Marker from '../components/markers';
import {Link, useHistory}    from 'react-router-dom';
import FormSection from "../components/formSection"
import MapComponent from '../components/mapComponent';

function MapPage(){
    const [coordinates,setCoordinates]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        fetchCoordinates();
    },[]);
    
    const fetchCoordinates= async ()=>{
        const response=await getCombo("complexMarkers");
        setCoordinates(response);
    }
    const deleteEntry= async (id)=>{
        const deleteParams={
            tableName:'markers',
            commonId:id,
            linkTable:'marker_project_links',
            linkColumn:'markerId'
        }
        const response=await deleteCombo(deleteParams);
        history.go(0);
    }
    return(
        
        <>
            <SectionHeading >
                Map Settings
            </SectionHeading>
            <MapComponent coordinates={coordinates} />
             <section className="w-100 px-5">
                <Link to="addMarker" class="btn btn-primary">Add Marker</Link>
            </section>
            <section className="p-3 w-100">
                <div className="row p-4">
                    <div className=" col-12 bg-white p-2">
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th>S.no</th>
                                    <th>Coordinates</th>
                                    <th>Projects</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coordinates.map((coordinate,index)=>(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{coordinate.latitude},{coordinate.longitude}</td>
                                        <td>{coordinate.projects?coordinate.projects.split(",").map((item)=>(
                                            <div>{item}</div>
                                        )):''}
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={()=>{deleteEntry(coordinate.id)}}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default MapPage;