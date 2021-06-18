import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import '../css/pageButton.css'
//buttons for going to next page
function PageButton({title="dummyTitle",link=""})
{
    return(
        <div className="button-section" >
            <div className="button-container">
                <Link className="page-button" to={link}> {title}</Link>
                <FontAwesomeIcon className="arrow-icon" icon={faArrowDown} />
            </div>
        </div>
    );

}

export default PageButton;