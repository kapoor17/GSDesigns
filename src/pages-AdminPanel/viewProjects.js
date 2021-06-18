import React, { useEffect, useState } from 'react';
import { TabContainer } from 'react-bootstrap';
import parse from 'html-react-parser';

import SectionHeading from '../components/sectionHeading';
//import TableSection from '../components/table';
import {Table} from 'react-bootstrap';
import ManageProjects from '../forms/manageProjects';
import { deleteCombo, addCombo, getCombo } from '../requests/apis';
import { useHistory,Link } from 'react-router-dom';

function ViewProjects()
{
    const [tableHeadings,settableHeadings]=useState([
        "S.no","Project Name","Project Image","Project Description","Categories","Action"
    ]);
    const [projects,setProjects]=useState([]);

    const history= useHistory();
    useEffect(()=>{
         getProjects();
    },[]);

    const getProjects= async ()=>{
        const response=await getCombo("complexProjects");
        setProjects(response);
    }

    const onSubmit= async (postData)=>{
        const response=await addCombo("complexProject",postData);
        if(response.success)
        {
            history.go(0);
        }
    };

    const deleteItem=async (id)=>{
        let delParams={
            tableName:"projects",
            commonId:id,
            linkTable:"project_categories_links",
            linkColumn:"projectId"
        };
         const delResponse=await deleteCombo(delParams);
         if(delResponse.success)
         {
             history.go(0);
         }

    }
    return(
        <div className="w-100">
            <SectionHeading >Projects</SectionHeading>
            <section className="my-3 px-4 bg-white">
                <h4>Add Projects</h4>
                <hr />
                <ManageProjects onSubmit={onSubmit} />
            </section>
            <section className="section bg-white p-3">
            <Table responsive>
                <thead className="table-dark">
                    <tr >
                        {tableHeadings.map(heading=>(
                            <th key={heading}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project,index)=>{
                        return(<tr key={project['id']}>
                            <td>{index+1}</td>
                            <td>{project['projectName']}</td>
                            <td>{project['projectImage']}</td>
                            <td >{parse(project['projectShortInfo'])}</td>
                            <td>
                                {project.categories?project.categories.split(',').map((item)=>(
                                    <div>{item}</div>
                                )):''}
                            </td>
                            <td>
                                <Link to={`editProject/${project.id}`} className="btn btn-sm btn-warning">
                                 Edit
                                </Link>&nbsp;
                                <button className="btn btn-danger btn-sm" onClick={()=>{deleteItem(project['id'])}}>Delete</button>
                            </td>
                        </tr>);
                        })}
                </tbody>
            </Table>
        </section>
        </div>
    );
}

export default ViewProjects;