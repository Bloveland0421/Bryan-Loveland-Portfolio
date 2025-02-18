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
            {/* <div className="experience-content"> */}
                <div className="experience-left">
                    <h1 className='experience-header-styling'>My Experience</h1>
                    <h3 className='experience-title-styling'>Project Managment</h3>
                    {/* <h4 className='experience-title-styling'>April 2007 - Present</h4> */}
                    <p className='experience-body-styling'>Lead and coordinate cross-functional teams to deliver projects on time, within scope, and on budget.
Develop and maintain project schedules, ensuring all milestones are met and risks are mitigated.
Conduct daily stand-ups and regular team meetings to monitor progress, resolve issues, and align on priorities.
Manage resource allocation and monitor team capacity to ensure efficient use of assets.
Track project budgets, identifying potential cost overruns and implementing corrective actions as needed.
Communicate project updates to stakeholders and clients, ensuring alignment and managing expectations.
Oversee quality control processes to ensure deliverables meet or exceed client specifications.
Create detailed project documentation, including plans, reports, and risk management logs, to maintain transparency and accountability.
Implement post-project reviews to gather feedback, analyze performance, and recommend improvements for future initiatives.
</p>
                    <h3 className='experience-title-styling'>Team Leadership</h3>
                    {/* <h4 className='experience-title-styling'>December 2013 - Present</h4> */}
                    <p className='experience-body-styling'>Here’s a brief description of team leadership for a resume entry:

**Team Leader**  
- Led a cross-functional team of [X] members to achieve project goals, ensuring alignment with organizational objectives.  
- Fostered a collaborative environment, encouraging open communication and team cohesion.  
- Delegated tasks effectively, providing guidance, resources, and support to enhance team performance.  
- Monitored progress and performance, resolving any issues or obstacles to ensure project deadlines were met.  
- Delivered constructive feedback, recognized achievements, and provided professional development opportunities to enhance team skills.  
- Managed conflicts and facilitated productive discussions, maintaining a positive and motivated team atmosphere.</p>
                </div>
                <div className="experience-right">
                    <img src="/public/a-man-jumping-on-the-beach-at-sunset-silhouettes-of-happy-man-on-successful-generative-ai-free-photo.jpeg" alt="" />
                </div>
            {/* </div> */}
        </div>
    );
}

export default Experience;