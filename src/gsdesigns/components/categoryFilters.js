import React, { useState,useEffect } from 'react';
import { getAllEntries } from '../../requests/apis';
import FilterSet from './filterSet';

function CategoryFilters(props)
{
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        getCategories();
    },[]);

    const getCategories=async ()=>{
        const res=await getAllEntries("project_categories");
        setCategories(res);
    }
    return(
        <>
        <section className="filter">
            <FilterSet {...props} category={{Category:"All",id:null,Color:"red"}} />
           { categories.map((category)=>{
               return(
               <FilterSet {...props} category={category} />
               );
           })}
        </section>
        </>
    );
}

export default CategoryFilters;