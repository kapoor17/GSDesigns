import React,{ useState} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function SectionHeading(props){
    return(
            <h3 className="bg-white p-3 text-muted w-100 mb-4">
                {props.children}
            </h3>
    );
}

export default SectionHeading;
