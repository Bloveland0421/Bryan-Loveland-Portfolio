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
            <div className='leadership-content'>
                 <h1 className='leadership-header-styling'>Leadership</h1>
            <p className='leadership-body-styling'>People benefit from my leadership by gaining clarity, confidence, and the resources they need to succeed. I prioritize open communication, active listening, and personalized support, ensuring that each individual feels heard and valued. By fostering a collaborative environment, I empower others to take ownership of their roles while offering guidance when needed. My focus on setting clear goals, providing constructive feedback, and celebrating achievements helps build trust and motivates others to reach their full potential. Through my leadership, people develop both personally and professionally, growing in their skills and confidence, which leads to higher team morale and overall success.</p>
            </div>
            <img className='leadership-image' src="/public/leadership3.png" alt="" />
        </div>
    );
}

export default Leadership;