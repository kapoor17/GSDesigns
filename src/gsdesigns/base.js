import React from 'react';
import {Switch,Route} from 'react-router-dom'
import IndexPage from './pages/index';
import Home from "./pages/homenew"
import Navbar from './components/Navbar';
import AboutUs from './pages/aboutUs';
import ProjectMap from './pages/projectMap';
import ContactUs from './pages/contact';

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
                    <ProjectMap/>
                </Route>
                <Route path="/aboutus">
                    <AboutUs/>
                </Route>
                <Route path="/contact">
                    <ContactUs/>
                </Route>

                {/* <Route path="/projectMap">
                    <ProjectMapPage/>
                </Route> */}


            </Switch>
        </div>
        </>
    );
}

export default Base;