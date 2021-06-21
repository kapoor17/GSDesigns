import React,{useState} from 'react';
function FilterSet({category,categoryHandler}){
    

    const changeCategory=(e)=>{
        categoryHandler(e);
    }
    return(
    <>
        <div className="filterSet" onClick={changeCategory} id={category.id} >
            <span className="filterIcon" style={{backgroundColor:category.Color,borderBottom:`2px solid ${category.Color}`}} id={category.Color}>
            </span>
            <span className="filterText" > {category.Category}</span>
        </div>
    </>
    );
}

export default FilterSet