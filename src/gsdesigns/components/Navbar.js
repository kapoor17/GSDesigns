import React from 'react';
import {Link } from 'react-router-dom';
import '../css/navbar.css'

function Navbar(){
    return(
                <nav className="navbar navbar-expand-sm navbar-light container-xl my-o mx-auto px-5">
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
                                    <ul className="dropdown-menu flex-column align-items-center" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Our Team</a></li>
                                        <li><a className="dropdown-item" href="#">Our Team Details</a></li>
                                        <li><a className="dropdown-item" href="#">About Us</a></li>
                                    </ul>
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