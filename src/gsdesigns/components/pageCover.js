import React from 'react';
import '../css/pageCover.css';
import image from "../../images/3new.jpg";
import PageButton from './pageButton';
import $ from 'jquery';

function PageCover()
{
    
    return(
        <>
            <div className="page-cover" style={{backgroundImage:`url(${image})`}}>
                <PageButton title="Enter Site" link="/home" />
            </div>
           
        </>
    );
}

export default PageCover;