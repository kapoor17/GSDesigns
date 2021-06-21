import React from 'react';
import '../css/contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope, faMapPin} from '@fortawesome/free-solid-svg-icons'

const ContactUs=()=>{
    return(
        <>
            <div className="container-fluid background-photo-contactUs">
            </div>
            <section className="section p-5">
                <div className="container-md">
                    <div className="heading fs-1 mb-5">Contact Us</div>
                    <div className="d-flex justify-content-between align-items-start">
                        <div className="contact fs-5 d-flex flex-column justify-content-between align-items-start">
                            <div className="contact-details w-100 d-flex justify-content-start align-items-start">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <p>info@gsdesigns.com.in</p>
                            </div>
                            <div className="contact-details w-100 d-flex justify-content-start align-items-start">
                                <FontAwesomeIcon icon={faPhone}/>
                                <p>1300 806 809</p>
                            </div>
                            <div className="contact-details w-100 d-flex justify-content-start align-items-start">
                                <FontAwesomeIcon icon={faMapPin}/>
                                <p>lorem ipsum dolor</p>
                            </div>
                        </div>
                        <div className="form-container py-3 px-4 d-flex flex-column justify-content-center align-items-start">
                                <p className="instruction">Fill out the form below and our team will be in touch with you shortly.</p>
                            <form className="form d-flex flex-column justify-content-center align-items-start">
                                <input type="text" id="name" name="name" value="Name" />
                                <input type="text" id="email" name="email" value="Email" />
                                <input type="text" id="phone" name="email" value="Phone Number" />
                                <div className="flex-overide d-flex">
                                    <input type="text" id="project-type" name="project-type" value="Project Type" />
                                    <input type="text" id="how" name="how" value="How did you find us" />
                                </div>
                                <input type="text" id="msg" name="msg" value="Message" />
                                <input type="submit" value="Submit" className="submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;