import React, { useEffect } from 'react';

const Leadership = () => {
    useEffect(() => {
        document.body.style.backgroundImage = "url('../public/Page 5.png')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.backgroundPosition = "center";
        return () => {
            document.body.style.backgroundImage = ""; // Reset background when component unmounts
        };
    }, []);

    return (
        <div className="leadership-container">
            <h1>Leadership Page</h1>
            <p>This is the leadership page content.</p>
        </div>
    );
}

export default Leadership;