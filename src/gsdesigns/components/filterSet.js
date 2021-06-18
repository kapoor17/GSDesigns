import React,{useState} from 'react';
function FilterSet({category,categoryHandler}){
    

    const changeCategory=(e)=>{
        categoryHandler(e);
    }
    return(
    <>
        <div class="filterSet" onClick={changeCategory} id={category.id} >
            <span class="filterIcon" style={{backgroundColor:category.Color,borderBottom:`2px solid ${category.Color}`}} id={category.Color}>
            </span>
            <span class="filterText" > {category.Category}</span>
        </div>
    </>
    );
}

export default FilterSet