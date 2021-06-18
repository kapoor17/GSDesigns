import React from 'react';

const url="http://www.apis.rentals4all.com";

export const getAllEntries = async (tableName) =>{
    const res= await fetch(`${url}/getEntity/${tableName}`);
    return  res.json();
}


export const addEntity= async (tableName,data) => {
    const res= await fetch(`${url}/addEntity/${tableName}`,{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return res.json();
}

export const deleteEntry=async (tableName,id)=>{
    const res= await fetch(`${url}/deleteEntry/${tableName}/${id}`);
    return res.json();
}
export const editCombo= async (data,complexTable,id)=>{
    const res=await fetch(`${url}/editCombo/${complexTable}/${id}`,{
        method:'POST',
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return res.json();
}

export const getComplexEntry=async (id)=>{
    const res= await fetch(`${url}/getEntity/complexProject/${id}`);
    return  res.json();
}

export const deleteCombo=async (data)=>{
    const res=await fetch(`${url}/deleteCombo/${JSON.stringify(data)}`)
    return res.json();
}

export const getCombo=async (complexTable)=>{
    const res=await fetch(`${url}/getCombo/${complexTable}`);
    return res.json();
}
export const addCombo=async (complexTable,data)=>{
    const res= await fetch(`${url}/addCombo/${complexTable}`,{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return res.json();
}
export const getComboItem=async (complexTable,id)=>{
    const res= await fetch(`${url}/getCombo/${complexTable}/${id}`);
    return res.json();
}


export const getUnlinked=async (parameters)=>{
    const res= await fetch(`${url}/getUnlinked/${JSON.stringify(parameters)}`);
    return res.json();
}


export const getList= async (listType)=>{
    const res= await fetch(`${url}/gsdesigns/${listType}`);
    return res.json();
}

export const getEntriesWhere =async (tableName,id) =>
{
    const res=await fetch(`${url}/getEntity/${tableName}/${id}`);
    return res.json();
}
