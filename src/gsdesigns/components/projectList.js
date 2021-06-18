import React, { useState,useEffect } from 'react';
import ProjectSlide from './projectSlide';
import '../css/projectList.css';
import { getList } from '../../requests/apis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCaretDown,faCaretUp} from  '@fortawesome/free-solid-svg-icons';
import $ from "jquery";
function ProjectList({markerId,categoryId})
{
    const [projects,setProjects]=useState([]);

    let multiplier=0;
    useEffect(()=>{
        getProjects();
    },[]);

    useEffect(()=>{
        
        multiplier=0;
        $(".project-list").removeClass("show-projects");

    },[categoryId]);
    useEffect(()=>{  
        multiplier=0;
        if(markerId!=null){
            carousel(0);
            $(".project-list").addClass("show-projects");}
    },[markerId])

    const getProjects=async()=>{
        const res=await getList("projectList");
        setProjects(res);
    }
     const carousel=(trigger)=>{
        if(!markerId)
            return;
        const projectSlide=document.querySelector(".project-slide");
        const height=projectSlide.getBoundingClientRect().height;
        console.log(height);
        const slideConatiner=document.querySelector(".slideContainer");
        const noOfChild=slideConatiner.querySelectorAll(".project-slide").length;
        console.log(noOfChild);
        multiplier-=trigger;
        if(multiplier>0){
            multiplier=0;
            return;
        }
        if(multiplier<=-noOfChild)
        {
            multiplier=-noOfChild+1;
            return;
        }
        slideConatiner.style.transform="translateY("+ multiplier*height +"px)";
    }
    // function carousel(trigger){
    //     const slideContainer=document.querySelector(".slideContainer");
    //     const slides=Array.from(slideContainer.children);
    //     const slideHeight=slides[0].getBoundingClientRect().height;
    //     slideContainer.style.transform="translateY("+ -trigger*index*slideHeight +"px)";
    // }
    // slides.forEa

    return(
        <>
        <div className="project-list">
            <FontAwesomeIcon icon={faCaretUp} onClick={(e)=>{carousel(-1)}} className="carouselUp"/>
            <FontAwesomeIcon icon={faCaretDown} onClick={(e)=>{carousel(1)}} className="carouselDown"/>

               <div className="slideContainer">

                    {
                        projects.map((item,index)=>{
                            if(categoryId && !item.categories.split(",").includes(categoryId) )
                            return(null);
                            if(markerId==item.markerId)
                                return(
                                <ProjectSlide project={item} key={index} />
                                );
                        })   
                    }
               </div>
               
        </div>
        </>
    );
}

export default ProjectList
