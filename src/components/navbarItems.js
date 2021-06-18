import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCaretDown} from  '@fortawesome/free-solid-svg-icons';


function NavbarItem({item})
{
    return(
            !item.subMenu ?
                <li className="nav-item p-0 my-3 ">
                    <Link to={item.path} className="nav-link" >
                        {item.icon}&nbsp;
                        {item.title}
                    </Link>
                </li>
            :
            <li className="nav-item p-0 my-3 dropdown-block ">
                <a href="javascript:void(0)" className="nav-link dropdown-toggler" >
                    <i className="fa fa-home"></i>
                        {item.icon}&nbsp;
                        {item.title}
                        <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:'10px'}}/>
                </a>
                <div className="my-dropdown-menu">
                    {item.subMenu.map((subMenuItem,index)=>(
                        <Link to={subMenuItem.path} key={index+"sub"}>
                            {subMenuItem.icon}&nbsp;
                            {subMenuItem.title}
                        </Link>          
                    ))};
                </div>
            </li>      
    );
}

export default NavbarItem;
