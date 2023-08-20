import React from 'react'
import './Landing.css'
import Type from './Type'
import LottieWorking from './LottieWorking'
function Landing(){
    return(
        <>

        <div className='Landing-MainsectionA'>
        <div className='Landing-sectionA'>
        
            <h1 style={{ paddingBottom: 15 }} className="Landing-heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VISHAL</strong>
              </h1>

            <div className='type' style={{ padding: 42 }}>
              <Type/>
            </div>
            
        </div>

        <div className='Landing-imgContainer'>
            <LottieWorking className="Landing-workingA"/>
            </div>
          
        </div>
        
        </>
    );
}

export default Landing;