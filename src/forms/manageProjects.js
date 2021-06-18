import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';
import { getAllEntries } from '../requests/apis';

function ManageProjects({data,onSubmit}){
    
    const [categories,setCategories]=useState([]);
    const {register,handleSubmit,setValue}=useForm();
    
    useEffect(()=>{
        getCategories();
    },[]);

    const getCategories= async  ()=>{
        const resData= await  getAllEntries("project_categories");
        setCategories(resData);  
    }
    
    const submitHandler=handleSubmit((formData)=>{
       onSubmit(formData);
    });

    if(data)
    {
        for (const inputName in data)
        {
            if(inputName=="id" )
            continue;
             if(inputName=="categories" && data['categories']!=null){
                let values=data['categories'].split(",");
                setValue("categories",values);
                 continue;
            }
            setValue(inputName,(data[inputName]));
        }
    }

    return(
        <form action="" onSubmit={submitHandler}>
            <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="categoryName">Project Name</label>
                                <input 
                                    type="text" 
                                    name="projectName"
                                    {...register('projectName')}
                                    className="form-control"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6 my-2">
                            <div className="form-group">
                                <label htmlFor="">Short Description</label>
                                <textarea name="projectShortInfo" {...register('projectShortInfo')} id="" rows="5" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-md-6 my-3">
                            <label htmlFor="">Select Categories</label>
                            <select name="categories" {...register("categories")} id="" className="form-control" multiple>
                                {categories.map((category,index)=>(
                                    <option value={category.id}>{category.Category}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="col-md-4 col-2 mt-2">
                        <div className="form-group">
                            <button className="btn btn-sm btn-success" type="submit">
                                Save Category
                            </button>
                        </div>
                        </div>
                        
                    </div>
                </form>
        
    );
}

export default ManageProjects;