import React from 'react';
import '../css/projectList.css';
import imageTitle from '../../images/sunpath.png';

function ProjectSlide({project})
{
    return(
        <>
        {(project && 
                 <div className="project-slide" >
                        <img src={imageTitle} alt="Sunpath Photo" className="project-slide-image" />
                    <div className="project-slide-title">
                        {project.projectName}
                    </div>
                    <div className="project-slide-info">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae esse unde minus veniam! Dolor impedit quia assumenda similique culpa. Aperiam.</p>
                    </div>
                    <div className=" btn btn-outline-secondary btn-sm">
                        View More
                    </div>
                </div>
        )}
        </>
    );
}

export default ProjectSlide