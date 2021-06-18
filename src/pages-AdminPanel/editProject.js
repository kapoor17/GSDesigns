import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import SectionHeading from '../components/sectionHeading';
import ManageProjects from '../forms/manageProjects';
import { editCombo, getComboItem } from '../requests/apis';

function EditProject()
{
    const match= useRouteMatch();
    const [project,setProject]=useState([]);
    const catId=match.params.id;
    const history=useHistory();
    useEffect(()=>{
        getData();
    },[]);

    const onSubmit=async (data)=>{
    
         const response= await editCombo(data,"complexProject",catId);
        if(response.error)
        alert();
               history.push("/owner/viewProjects");
           
    }
    const getData=async ()=>{
        const response=await getComboItem("complexProject",catId);
        setProject(response[0]);
    }

    return(
        <>
            <SectionHeading>
                Edit Categories
            </SectionHeading>
            <ManageProjects data={project} onSubmit={onSubmit}></ManageProjects>
        </>
    );
}

export default EditProject