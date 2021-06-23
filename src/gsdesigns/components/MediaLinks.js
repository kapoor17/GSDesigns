import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import '../css/media-link.css'

const MediaLinks=()=>{
    return(
        <div className="media-links">
            <FontAwesomeIcon className="media-link-child" icon={faInstagram}/>
            <FontAwesomeIcon className="media-link-child" icon={faLinkedin}/>
            <FontAwesomeIcon className="media-link-child" icon={faTwitter}/>
        </div>
    );

}

export default MediaLinks;