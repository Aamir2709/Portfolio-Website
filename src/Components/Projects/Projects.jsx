import React from 'react'
import './Projects.css'
// import Card from "../Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import SilentConnect from "../../img/SilentConnect.png"
import BestBuyCars from "../../img/BestBuyCars.png"
import OptionXpert from "../../img/OptionXpert.png"
import Resume from "./Aamir_Baugwala_Resume.pdf"
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";

const Projects=() =>{
  return (
    <div className='projects'>
        {/* left side */}
        <div className="awesome">
        <span>My Awesome</span>
        <span>Projects</span>
        <span>Explore my professional profile and qualifications in my resume.</span>
        <a href={Resume} download>
        <button className='button s-button'>Download Resume</button>
        </a>
        <div className='bur s-blur' style={{ background:"ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="cards">
        <div style={{top:'-5rem',left:'24rem'}}> 
            <Card
            emoji = {SilentConnect}
            heading = {'Silent-Connect'}
            detail = {'A video chat system with Sign language Translation feature'}
            link={'https://github.com/Silent-Connect/Silent-Connect-Frontend'}
            />
                    </div>
        
        <div style={{top:'8rem',left:'8rem'}}> 
            <Card
            emoji = {BestBuyCars}
            heading = {'BestBuyCars'}
            detail = {'ML-powered platform for live ads and estimated car prices.'}
            link={'https://github.com/Aamir2709/BestBuyCars'}
            />
                    </div>
        <div style={{top:'14rem',left:'25rem'}}> 
            <Card
            emoji = {OptionXpert}
            heading = {'Options Chain Tool'}
            detail = {'A real-time options chain platform with live updates'}
            link = {'https://github.com/CodeCrafters-Edelweiss/Options-Chain-Tool'}
            />
                    </div>

        <div className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>

        </div>
        
      
    </div>
  )
}

export default Projects
