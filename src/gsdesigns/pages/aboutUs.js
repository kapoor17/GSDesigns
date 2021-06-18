import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import '../css/about-us.css';

const aboutUs=()=>{

    return (
    <>
        <div className="container-fluid background-photo-aboutUs">
        </div>
            <section class="section p-4">
                <div class="container-md d-flex flex-column p-4 ">
                        <div class="d-flex flex-column align-items-start p-3 upper">
                            <h2 className="mb-5 font-weight-bold fs-1">CURRICULLUM VITAE</h2>
                            <div className="details d-flex align-items-center">
                                <div className="photo border border-dark"></div>
                                <p className="personal-details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolore facere delectus eius ut porro tempora exercitationem ipsum natus quis?</p>
                            </div>
                        </div>
                        <div class="lower d-flex justify-content-between">
                                <AboutUsCard title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate sapiente voluptates repellendus quibusdam porro officiis, omnis delectus nihil unde."/>
                                <AboutUsCard title="Awards" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate sapiente voluptates repellendus quibusdam porro officiis, omnis delectus nihil unde."/>
                                <AboutUsCard title="Experience" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate sapiente voluptates repellendus quibusdam porro officiis, omnis delectus nihil unde."/>
                                <AboutUsCard title="Research and Presentation" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate sapiente voluptates repellendus quibusdam porro officiis, omnis delectus nihil unde."/>
                        </div>
                </div>
            </section>
    </>
    );

}

export default aboutUs;