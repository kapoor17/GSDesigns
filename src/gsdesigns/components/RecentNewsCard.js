import React from 'react';
import photo from '../components/carousel-photos/photo3.jpg'


const RecentNewsCard=(props)=>{
    return(
        <div className="col-6 border border-success">
            <img src={props.url} alt="" />
            <h3>TITLE FOR RECENT NEWS</h3>
            <p>date/month</p>
            <p>{props.text}</p>
        </div>
    );
}

export default RecentNewsCard