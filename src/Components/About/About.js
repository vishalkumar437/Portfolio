import React from 'react'
import './About.css'
import profile from '../../Assets/vishal.png'
function About(){
    return(
        <>
        <div className='About-MainSection'>
            <div className='About-section'>
                <h1>ABOUT</h1>
                <p>I am a 24-year-old Experienced software developer with a focus on full-stack development. 
                    I have a Master's degree in Computer Application and a passion for front-end and back-end technologies.
                     My expertise includes HTML, CSS, JavaScript, Node.js, SQL, and data analysis.
                     </p>
                </div>
                <div className='About-profile-content'>
                <img src={profile} alt='vishal' className="About-profile"></img>
                </div>
                
            </div>
        </>
    );
}

export default About;