import React, { useState,useEffect } from 'react';
import { useRouteMatch,useHistory} from 'react-router';
import SectionHeading from '../components/sectionHeading';
import ManageCategories from '../forms/manageCategories';

function EditCategories(){
    
    const match= useRouteMatch();
    const [category,setCategory]= useState({});
    const history=useHistory();

    const catId=match.params.id;

    useEffect(() => {
        getData(catId);
    }, [])
    const getData= async (id) =>
    {
        const res= await fetch(`http://localhost:4000/projectCategories/${catId}`);
        const data= await res.json();
        console.log(data[0]);
        setCategory(data[0]);
    }
    const sendData =async (data) =>{
        await fetch(`http://localhost:4000/projectCategories/${catId}`,{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    history.push("/projectCategories");      
} 
    return(
        <div className="w-100">
        <SectionHeading>
            Edit Category
        </SectionHeading>   
        <section className="section p-3 m-3 bg-white">
            <ManageCategories category={category} onSubmit={sendData} />
        </section>
        </div>
    );
}

export default EditCategories;