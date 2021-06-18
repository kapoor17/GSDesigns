import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form';
function ManageCategories({category,onSubmit}){
    const {register,handleSubmit,setValue}=useForm();
   
    const submitHandler=handleSubmit((data)=>{
        onSubmit(data);    
        
    });

    if(category)
    {
        for (const inputName in category)
        {
            console.log(inputName);
            if(inputName=="id")
            continue;
            setValue(inputName,category[inputName]);
        }
    }

    return(
        <form action="" onSubmit={submitHandler}>
            <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="categoryName">Category Name</label>
                                <input 
                                    type="text" 
                                    name="Category"
                                    {...register('Category',{required:true})}
                                    className="form-control"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Color</label>
                                <input  
                                    style={{height:"35px"}}
                                    type="color" 
                                    name="Color"
                                    {...register('Color')}
                                    className="form-control"
                                />
                            </div>
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

export default ManageCategories;