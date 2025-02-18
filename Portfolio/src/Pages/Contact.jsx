import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.body.style.backgroundImage = "url('../public/Page 6.png')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.backgroundPosition = "center";
        return () => {
            document.body.style.backgroundImage = ""; // Reset background when component unmounts
        };
    }, []);

    return (
        <div className="contact-container">
            <h1>Contact Page</h1>
            <p>This is the contact page content.</p>
        </div>
    );
}

export default Contact;