import React, { useEffect, useState } from 'react';
import { getEntriesWhere } from '../../requests/apis';
import SectionCreator from './sectionCreator';

function PageCreator({id})
{
    const [pageData,setPageData]=useState([]);

    useEffect(()=>{
        getPageData();
    },[id]);
    const getPageData=async()=>{
        const response=await getEntriesWhere("jsontrial",id);
        setPageData(response);
    }
    return(
        <>
            <div style={{padding:"5em 10em"}}>
                {pageData.map((item,index)=>{
                    return(
                        <SectionCreator sectionContent={item.content} sectionType={item.sectionType} key={index} />
                    );
                })}
            </div>
        </>
    )
}

export default PageCreator;