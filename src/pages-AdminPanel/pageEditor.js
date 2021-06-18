import React, { useEffect, useState } from 'react';
import { matchPath, useHistory, useRouteMatch } from 'react-router';
import SectionHeading from '../components/sectionHeading';
import { deleteEntry, getAllEntries,getEntriesWhere } from '../requests/apis';
import MasterForm from '../sectionForms/masterForm';

function PageEditor()
{

    const history=useHistory();
    const match= useRouteMatch();
    const [rows,setRows]=useState([]);
    const [sectionType, setsectionType] = useState();

    const sections=[
        {
            label:"Heading & Paragraph",
            value:"headingParagraph"
        },
        {
            label:"Carousel",
            value:"carousel"
        }
    ];
    useEffect(() => {
       getSections();
    }, [])
    const getSections=async()=>
    {
        const response=await getEntriesWhere("jsontrial",match.params.id);
        setRows(response);
    }

    const deleteSection= async (id)=>{
        const response= await deleteEntry("jsontrial",id);
        if(response.success)
            history.go(0);
    }
    
    return(
      <>
        <SectionHeading>Add Sections</SectionHeading>
        <div className="container-fluid px-5 py-3">
            <div className="row p-3 bg-white">
                <h3>Add Sections</h3>
                <hr />
                <div className="col-md-12">
                    <label htmlFor="">Select Section</label>
                    <select className="form-control" onChange={(e)=>{setsectionType(e.target.value)}}required> 
                        <option value=""  disabled selected>Select a section from below</option>
                        {sections.map((item,index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-12">
                    <MasterForm sectionType={sectionType} />
                </div>
            </div>
            <div className="row bg-white my-4">
                <div className="col-md-12">
                    <div className="table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Section Type</th>
                                    <th>Content</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row,index)=>{
                                    let content=JSON.parse(row.content);
                                    return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{row.sectionType}</td>
                                        <td>{content.map((item,index)=>(
                                            <tr className="table-striped">
                                                <th>{item.sectionType}</th>
                                                <td>{item.content}</td>
                                                
                                            </tr>
                                        ))}</td>
                                        <td>
                                        <button className="btn btn-sm btn-danger" onClick={()=>{
                                            deleteSection(row.id)
                                        }}>Delete</button>
                                    </td>
                                    </tr>
                                );})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </>  
    );
}

export default PageEditor;