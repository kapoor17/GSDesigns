import React from 'react';
import {Link } from 'react-router-dom';
function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-light" style={{padding:"20px 100px"}}>
                <div className="nav-item font-weight-bold " >
                    <Link className="nav-link" style={{fontSize:"1.25rem",color:"black"}} to="/home">GSDesigns</Link>
                </div>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button> 
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <div className="navbar-nav mt-2 mt-lg-0 justify-content-end">
                        <div className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/projectMap">Projects</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </div>
                        
                        {/* {<li className="nav-item dropdown">
                            <a className="nav-link -toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>} */}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;