import React from 'react';
import {Link } from 'react-router-dom';
import '../css/navbar.css'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-light container-lg px-3 py-3">
            <a className="navbar-brand " href="/home">GSDesigns</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav align-items-center ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/projectMap">Projects</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item text-center" href="#">Our Team</a>
                            <a className="dropdown-item text-center" href="#">About Us</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
         </nav>

    );
}

export default Navbar;