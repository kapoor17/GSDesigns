import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MapComponent from '../components/mapComponent';
import SectionHeading from '../components/sectionHeading';
import ManageMapMarkers from '../forms/manageMarkers';
import { addEntity, getUnlinked,addCombo } from '../requests/apis';

function AddMarker(){

    const [coordinates,setCoordinates]=useState([{"latitude":0,"longitude":0}]);
    const [latitude,setLatitude]=useState(0);
    const [longitude,setLongitude]=useState(0);
    const [projectsArr,setProjectsArr]=useState([]);
    const [projects,setProjects]=useState([]);
    const [formData,setFormData]=useState({});
    const history=useHistory();
    const viewMarker=()=>{
        setCoordinates([{"latitude":latitude,"longitude":longitude}])
    }

    useEffect(()=>{
         getProjects();
    },[])
    
    const handleChange = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setProjects(value);
      }

    const getProjects= async () =>{
        const response=await getUnlinked({
            primaryTable:"projects",
            linkTable:"marker_project_links",
            linkedColumn:"projectId",
        });
        setProjectsArr(response);
    }

    useEffect(()=>{
        setFormData({
            latitude:latitude,
            longitude:longitude,
            projects:projects
        });
    },[latitude,longitude,projects])
    const onSubmit=async (e) =>
    {
        e.preventDefault();
        const response=await addCombo("complexMarker",formData);
          if(response)
          {
              history.push("/owner/viewMap");
          }
    }
    return(
        <>
        <SectionHeading>Add Marker</SectionHeading>
        <MapComponent coordinates={coordinates} />
        <section className="mb-5 p-3">
        <form action="" onSubmit={onSubmit}>
            <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="categoryName">Latitude</label>
                                <input 
                                    type="number" 
                                    name="lat"
                                    value={latitude}
                                    onChange={e=>(setLatitude(e.target.value))}
                                    className="form-control"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">longitude</label>
                                <input  
                                    style={{height:"35px"}}
                                    type="number" 
                                    name="lon"
                                    value={longitude}
                                    onChange={e=>(setLongitude(e.target.value))}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="form group">
                                <button className="btn btn-primary" type="button" onClick={viewMarker}>
                                    View Marker
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="projects">Projects</label>
                                <select name="projects" id="" className="form-control" multiple onChange={handleChange}>
                                    {projectsArr.map((project,index)=>(
                                        <option value={project.id}>{project.projectName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 col-2 mt-2">
                        <div className="form-group">
                            <button className="btn btn-sm btn-success" type="submit">
                                Save Marker
                            </button>
                        </div>
                        </div>
                        
                    </div>
                </form>
        
        </section>
       
        </>
    );
}

export default AddMarker;