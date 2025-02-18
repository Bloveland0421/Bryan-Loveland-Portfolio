import React, { useEffect } from 'react';

const Experience = () => {
    useEffect(() => {
        document.body.style.backgroundImage = "url('../public/Page 3.png')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.backgroundPosition = "center";
        return () => {
            document.body.style.backgroundImage = ""; // Reset background when component unmounts
        };
    }, []);

    return (
        <div className="experience-container">
            <h1>Experience Page</h1>
            <p>This is the experience page content.</p>
        </div>
    );
}

export default Experience;