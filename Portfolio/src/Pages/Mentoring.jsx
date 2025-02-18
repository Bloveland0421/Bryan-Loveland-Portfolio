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
            <h1 className='mentoring-header-styling'>Mentoring</h1>
            <div className='mentoring-image'>
                <img src="/public/mentoringgraphic.jpg" alt="" />
                <img src="/public/leadership 2.jpg" alt="" />
                <img src="/public/leadership.png" alt="" />
            </div>
            <p className='mentoring-body-styling'>I take pride in mentoring others by fostering an environment of trust and open communication. I believe in actively listening to the challenges and aspirations of those I mentor, offering guidance tailored to their individual strengths and growth areas. I encourage self-reflection and goal-setting, helping them break down larger tasks into manageable steps to build confidence and momentum. Through consistent feedback and support, I empower them to take ownership of their development and make informed decisions. By creating a safe space for learning, I ensure they feel encouraged to take risks and learn from their mistakes, ultimately helping them reach their full potential.</p>
        </div>
    );
}

export default Mentoring;