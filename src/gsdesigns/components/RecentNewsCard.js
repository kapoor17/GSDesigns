import React from 'react';
import'../css/recent-news.css'

const RecentNewsCard=(props)=>{
    return(
        <div className="recent-news">
            <img src={props.url} alt="" />
            <h3 className="py-2">TITLE FOR RECENT NEWS</h3>
            <p className="p-0 m-0">date/month</p>
            <p>{props.text}</p>
        </div>
    );
}

export default RecentNewsCard