import React from 'react';

const RecentNewsCard=(props)=>{
    return(
        <div className="recent-news">
            <img src={props.url} alt="" />
            <h3>TITLE FOR RECENT NEWS</h3>
            <p>date/month</p>
            <p>{props.text}</p>
        </div>
    );
}

export default RecentNewsCard