import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';
import { getAllEntries } from '../requests/apis';

function ManagePages({data,onSubmit}){
    
    const {register,handleSubmit,setValue}=useForm();

   
    const submitHandler=handleSubmit((formData)=>{
       onSubmit(formData);
    });

    if(data)
    {
        for (const inputName in data)
        {
            if(inputName=="id" )
            continue;
            setValue(inputName,(data[inputName]));
        }
    }

    return(
        <form action="" onSubmit={submitHandler}>
            <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="categoryName">Page Title</label>
                                <input 
                                    type="text" 
                                    name="pageTitle"
                                    {...register('pageTitle',{required:true})}
                                    className="form-control"
                                />  
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="categoryName">Slug (the link for the page)</label>
                                <input 
                                    type="text" 
                                    name="pageTitle"
                                    {...register('slug',{required:true})}
                                    className="form-control"
                                />  
                            </div>
                        </div>
                        <div className="col-md-12 my-2">
                            <div className="form-group">
                                <label htmlFor="">Page Description (optional)</label>
                                <textarea name="pageDescription" {...register('pageDescription')} id="" rows="5" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-md-4 col-2 mt-2">
                        <div className="form-group">
                            <button className="btn btn-sm btn-success" type="submit">
                                Save Page
                            </button>
                        </div>
                        </div>
                        
                    </div>
                </form>
        
    );
}

export default ManagePages;