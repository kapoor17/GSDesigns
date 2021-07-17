import React,{useEffect, useState} from 'react';
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MediaLinks from './components/MediaLinks';
import IndexPage from './pages/index';
import Home from "./pages/homenew"
import OurTeam from './pages/ourTeam';
import AboutUs from './pages/aboutUs';
import ProjectPageForMobile from './pages/projectPageMobile';
import ProjectMap from './pages/projectMap';

function Base(){

    useEffect(()=>{
        window.addEventListener("load",function(){
            screenSize();
        })
        window.addEventListener("resize",function(){
            screenSize();
        });
    })
    
    var state;
    const screenSize=()=>{
        var size=window.screen.width;
        if(size>=600)
            state=true;
        else
            state=false;
    }


    return(
        <>
        <Navbar />
        <div className="wrapper">  
            <Switch>   
                <Route path="/" exact >
                    <IndexPage />
                </Route>
                <Route path="/home">
                    <Home /> 
                </Route>
                <Route path="/projectMap">
                    <ProjectMap/>
                </Route>
                <Route path="/projectListing">
                    <ProjectPageForMobile/>
                </Route>
                <Route path="/ourTeam">
                    <OurTeam/>
                </Route>
                <Route path="/aboutUs">
                    <AboutUs/>
                </Route>
                {/* <Route path="/contact">
                    <ContactUs/>
                </Route> */}
            </Switch>
        </div>
        <MediaLinks/>
        </>
    );
}

export default Base;