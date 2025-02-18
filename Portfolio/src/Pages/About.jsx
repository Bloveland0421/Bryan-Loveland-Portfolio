
import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.body.style.backgroundImage = "url('../public/Page 2.png')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.backgroundPosition = "center";
        return () => {
            document.body.style.backgroundImage = ""; 
        };
    }, []);

    return (
        <div className="about-container">
        <div className="about-image">
            <img className='about-image' src="/public/unnamed.jpg" alt="About" />
        </div>
        <div className="about-content">
            <h1 className='header-styling'>About Me</h1>
            <h3 className='title-styling'>Biography & Introduction</h3>
            <p className='body-styling'>As an experienced Project Manager, I bring a structured and results-driven approach to executing projects efficiently, ensuring they align with business goals. My expertise in planning, organization, and leadership allows me to drive projects from conception to completion while optimizing resources, time, and costs.</p>
            <p className='body-styling'>By integrating my leadership, organization, and problem-solving skills, I help companies streamline workflows, enhance productivity, and achieve sustainable growth. My goal is to ensure every project delivers maximum value with minimal risk.
            </p>
        </div>
    </div>
    );
}

export default About;

