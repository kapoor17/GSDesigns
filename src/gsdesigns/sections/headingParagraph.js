import React from 'react';
import SectionCreator from '../pages/sectionCreator';

function HeadingParagraph({sectionContent}){
    return(
        <>
            <div className="row">
                <div className="col-md-4">
                    <img src="../../images/sunpath.png" alt="" style={{width:"100%"}}/>
                </div>
                <div className="col-md-8">
                    {JSON.parse(sectionContent).map((item,index)=>{
                        return(
                        <SectionCreator sectionType={item.sectionType} sectionContent={item.content} key={index}/>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default HeadingParagraph;