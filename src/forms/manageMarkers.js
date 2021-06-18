import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form';

function ManageMapMarkers({markerData,onSubmit}){
    const {register,handleSubmit,setValue}=useForm();
   
    const submitHandler=handleSubmit((data)=>{
        onSubmit(data);    
        
    });
    const showCoordinate=()=>{
        
    }
    if(markerData)
    {
        for (const inputName in markerData)
        {
            console.log(inputName);
            if(inputName=="id")
            continue;
            setValue(inputName,markerData[inputName]);
        }
    }

    return(
        <form action="" onSubmit={submitHandler}>
            <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="categoryName">Latitude</label>
                                <input 
                                    type="number" 
                                    name="latitude"
                                    {...register('latitude',{required:true})}
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
                                    name="longitude"
                                    {...register('longitude',{required:true})}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form group">
                                <button className="btn btn-primary">
                                    View Marker
                                </button>
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
        
    );
}

export default ManageMapMarkers;