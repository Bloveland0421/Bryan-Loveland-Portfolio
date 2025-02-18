import React, { useEffect } from 'react';

const Mentoring = () => {
    useEffect(() => {
        document.body.style.backgroundImage = "url('../public/Page 4.png')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.backgroundPosition = "center";
        return () => {
            document.body.style.backgroundImage = ""; // Reset background when component unmounts
        };
    }, []);

    return (
        <div className="mentoring-container">
            <h1>Mentoring Page</h1>
            <p>This is the mentoring page content.</p>
        </div>
    );
}

export default Mentoring;