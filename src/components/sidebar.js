import React from 'react';
import NavbarItem from './navbarItems';
import {NavData} from '../data/links';
function SideBar(){
    return(
         <nav id="sideBar" className="bg-dark p-2 navbar navbar-dark">
			<div className="navbar-brand">	
					GSDesigns
			</div>	
			<div className="w-100 mt-4 p-0">	
				<ul className="navbar-nav w-100 p-0">
					{NavData.map((item,index)=>(
						<NavbarItem item={item}/>
					))}
				</ul>
			</div>	
		</nav>
    );
}

export default SideBar;