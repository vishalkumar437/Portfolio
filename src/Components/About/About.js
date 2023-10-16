import React from 'react'
import './About.css'
import profile from '../../Assets/vishal.png'
import { ImPointRight } from "react-icons/im";
import Techstack from '../Techstack/Techstack';
function About() {
    return (
        <>
            <div className='About-MainSection'>
                <div className='About-section'>
                    <h1>ABOUT</h1>
                    <p>I am a 24-year-old Experienced software developer with a focus on full-stack development.
                        I am currently pusuing a Master's degree in Computer Application from Vellore Insititue of Technology, Vellore and a passion for front-end and back-end technologies.
                    </p>
                    <div>Apart from coding, some other activities that I love to do!
                        <ul>
                            <li className="about-activity">
                                <ImPointRight /> Playing Games
                            </li>
                            <li className="about-activity">
                                <ImPointRight /> Watching Movies and Anime
                            </li>
                            <li className="about-activity">
                                <ImPointRight /> Travelling
                            </li>
                        </ul></div>
                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                </div>
                <div className='About-profile-content'>
                    <img src={profile} alt='vishal' className="About-profile"></img>
                </div>
            </div >
            <div className='About-Techstack'>
                <h1 className="project-heading">
                    Professional <strong className="project-purple">&nbsp;Skillset </strong>
                </h1>
                <div style={{padding:"3%"}}>
                <Techstack />               
                </div>
                
            </div>
        </>
    );
}

export default About;