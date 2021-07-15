import React from 'react';
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