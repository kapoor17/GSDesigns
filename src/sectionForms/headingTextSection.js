import React, { useEffect, useState } from 'react';
import {addEntity} from '../requests/apis';
import {useForm} from 'react-hook-form';
import {useHistory, useRouteMatch} from 'react-router-dom';

function HeadingParagraph({data})
{
    const match=useRouteMatch();
    const history=useHistory();
    const [heading,setHeading]=useState({
        sectionType:"heading",
        content:""
    });
    const [paragraph,setParagraph]=useState(
        {
            sectionType:"paragraph",
            content:""
        }
    );
    
    const [formData,setFormData]=useState({
        sectionType:"headingParagraph",
        content:[
            heading,paragraph
        ],
        pageId:match.params.id
    });

    useEffect(()=>{
        setFormData({...formData,content:JSON.stringify([heading,paragraph])});
    },[heading,paragraph]);

    const submitHandler=async (e)=>{
        e.preventDefault();
          const response=await addEntity("jsontrial",formData);
          if(response.success)
              history.go(0);
    }
    return(
        <>
                <h4>Heading Paragraph Section</h4>
                <hr />
                <form action="" onSubmit={submitHandler}>
                    <div className="col-md-12">
                       <input type="hidden" className="form-control" value="headingParagraph" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="">Heading</label>
                       <input type="text" className="form-control" value={heading.content} onChange={e=>{setHeading({...heading,content:e.target.value})}} required/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="">Text</label>
                       <textarea name="" id="" className="form-control" value={paragraph.content} onChange={e=>{setParagraph({...paragraph,content:e.target.value})}} required></textarea>
                    </div>
                    <div className="col-md-12 my-3">
                        <button className="btn btn-primary" type="submit">Save Section</button>
                    </div>
                </form>
        </>
    );
}

export default HeadingParagraph;