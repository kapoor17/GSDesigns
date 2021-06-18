import React from 'react';
import {Switch,Route, useRouteMatch} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {Dropdown} from 'react-bootstrap';

//importing pages for routing
import IndexPage from './pages-AdminPanel/index'
import ViewProjects from './pages-AdminPanel/viewProjects';
import EditCategories from './pages-AdminPanel/editCategories';
import CategoriesPage from './pages-AdminPanel/projectCategories';
import MapPage from './pages-AdminPanel/manageMap';
import AddMarker from './pages-AdminPanel/addMarker'
import EditProject from './pages-AdminPanel/editProject'
import SideBar from './components/sidebar'
import ViewPages from './pages-AdminPanel/viewPages';
import PageEditor from './pages-AdminPanel/pageEditor';

function Content(){

	const match=useRouteMatch();
	const url=match.url;

    return(
		<div className="wrapper">
      <SideBar />
        <div id="content" className="">
			
           
			<nav className="navbar navbar-dark navbar-expand bg-dark flex-row-reverse w-100" style={{paddingRight:'25px'}} >
			  		<div className="navbar-nav" id="navbarNavDropdown">
				      <Dropdown >
						  <Dropdown.Toggle variant="dark">
							  <FontAwesomeIcon icon={faUserCircle} />
						  </Dropdown.Toggle>
						  <Dropdown.Menu align="left">
							  <Dropdown.Item>
								  Logout
							  </Dropdown.Item>
						  </Dropdown.Menu>
					  </Dropdown>
			  		</div>
			</nav>
                <Switch>
                    <Route component={IndexPage} path={url+"/"}  exact />
					<Route component={ViewProjects} path={`${url}/viewProjects`}  />
					<Route component={EditProject} path={`${url}/editProject/:id`} />

					<Route component={CategoriesPage} path={`${url}/projectCategories`}  />
					<Route component={EditCategories} path={`${url}/editCategories/:id`}  />

					<Route component={ViewPages} path={`${url}/viewPages`}  />

					<Route component={PageEditor} path={`${url}/pageEditor/:id`}/>
					
					<Route component={MapPage} path={`${url}/viewMap`}  />
					<Route component={AddMarker} path={`${url}/addMarker`} />


                </Switch>
       
			
		</div>
		</div>
    );
}

export default Content;