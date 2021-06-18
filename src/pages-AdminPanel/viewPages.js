import React, { useEffect, useState } from 'react';
import SectionHeading from '../components/sectionHeading';
import ManagePages from '../forms/managePages';
import { addCombo, addEntity, deleteEntry, getAllEntries } from '../requests/apis';
import {useHistory,Link} from 'react-router-dom';

function ViewPages()
{
    const [pages,setPages]=useState([]);
    const history= useHistory();

    useEffect(()=>{
        getPages();
    },[]);
    const submitHandler=async(data)=>{
        const response=await addEntity("pages",data);
        if(response.success)
        {
            history.go(0);
        }
    }
    const getPages=async()=>{
        const response=await getAllEntries("pages");
        setPages(response);
    }

    const deletePage=async (id)=>{
        const response=await deleteEntry("pages",id);
        if(response.success)
            history.go(0);
    }
    return(
        <>
            <SectionHeading>
                View Pages
            </SectionHeading>
            <div className="wrapper w-100 px-5 py-2">
                <div className="row bg-white p-3">
                    <h2>Add Page</h2>
                    <hr />
                    <ManagePages onSubmit={submitHandler} />
                </div>     
                <div className="row bg-white p-3 my-2">
                    <div className="table">
                        <table className="table">
                            <thead class="table-dark">
                                <tr >
                                    <th>Sno</th>
                                    <th>Page Title</th>
                                    <th>Slug</th>
                                    <th>Page Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pages.map((page,index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{page.pageTitle}</td>
                                        <td>{page.slug}</td>
                                        <td>{page.pageDescription}</td>
                                        <td>{page.status}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{deletePage(page.id)}}>
                                                Delete
                                            </button>&nbsp;
                                            <Link className="btn btn-outline-info" to={`pageEditor/${page.id}`}>
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewPages;