import React, { useEffect, useState } from 'react';
import SectionHeading from '../components/sectionHeading'
import {Table,Button} from 'react-bootstrap';
import ManageCategories from '../forms/manageCategories';
import {useHistory,Link} from 'react-router-dom';

function CategoriesPage()
{
    const [categories,setCategories]=useState([]);
    
    useEffect(()=>{
           
           getData();

        },[]);

        const deleteEntry=async (entryId) => {
            const res=await fetch(`http://localhost:4000/deleteEntry/${entryId}/project_categories`);
            const data=await res.json();
            history.go(0);
        }
        const getData= async () =>{
            const res= await fetch("http://localhost:4000/projectCategories");
            const data=await res.json();
            setCategories(data);
        }
        const history= useHistory();
        const sendData =async (data) =>{
                await fetch("http://localhost:4000/projectCategories",{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)
            });
            history.go(0);      
        } 
    return(

    <div className="w-100">
        <SectionHeading>
            Project Categories
        </SectionHeading>
        <section className="section p-3 bg-white m-3 ">
           <h3>Add Category</h3>
            <hr />
            <ManageCategories onSubmit={sendData} />
            </section>
        <section className="section m-3 p-3 bg-white">
            <div className="row ">
                <div className="col-md-12">
                    <Table responsive >
                        <thead class="table-dark">
                            <tr>
                            <th>S.No</th>
                            <th>Category Title</th>
                            <th>Category Color</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category,index)=>(
                                <tr key={index+"row"}>
                                    <td>{index}</td>
                                    <td>{category.Category}</td>
                                    <td>
                                        <span style={{
                                            display:'inline-block',
                                            height:'20px',
                                            width:'50px',
                                            backgroundColor:category.Color}}>
                                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/editCategories/${category.id}`} className="btn btn-sm btn-outline-warning">
                                            Edit
                                        </Link>&nbsp;
                                        <button onClick={()=>{deleteEntry(category.id)}} className="btn btn-sm btn-danger">&nbsp;
                                            Delete
                                        </button>&nbsp;
                                        {/* {<Button size="sm">
                                            Active
                                        </Button>} */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>   
                    </Table>
                </div>
            </div>
        </section>
    </div>
    );
}

export default CategoriesPage;