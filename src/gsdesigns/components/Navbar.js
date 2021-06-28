import React, {useEffect} from 'react';
import {Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../css/navbar.css'

function Navbar(){

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            const navbar= document.querySelector("header");
            navbar.classList.toggle("sticky",window.scrollY>0);
        })
    })

    return(
        <header>
            <nav className="navbar navbar-expand-sm navbar-light container-lg">
                <Link className="navbar-brand" to="/home">GSDesigns</Link>
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
                                <Link className="dropdown-item text-center" to="/ourTeam">Our Team</Link>
                                <Link className="dropdown-item text-center" to="/aboutUs">About Us</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/home#contact">Contact</HashLink>
                            {/* <a href="#contact" className="nav-link">Contact</a> */}
                        </li>
                    </ul>
                </div>
             </nav>
        </header>

    );
}

export default Navbar;