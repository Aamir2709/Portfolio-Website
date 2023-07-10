import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import aamir from "../../img/Resume_pic.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbsup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

function Intro() {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am </span>
                <span>Aamir Baugwala</span>
                <span>Motivated Software Engineering student skilled in full-stack development and AI integration, dedicated to delivering innovative solutions in a dynamic team environment.</span>
            </div>

            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
               <a href="https://github.com/Aamir2709"> <img src={Github} alt="" /></a>
               <a href="https://www.linkedin.com/in/aamir-baugwala-0b9787208/"> <img src={Linkedin} alt="" /></a>
                <img src={Instagram} alt="" />
            </div>



        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={aamir} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top:'-4%',left:'68%'}}>
                    <FloatingDiv image={Crown} txt1='Software' txt2='Developer'/>
                </div>
                <div style={{top:'18rem',left:'0rem'}}>
                    <FloatingDiv image={thumbsup} txt1='Aspiring' txt2='AI Engineer'/>
                </div>
                <div className="blur" style={{backhround:"rbg(238 210 255)"}}></div>

                <div className="blur" style={{backhround:"#C1F5FF",top:"17rem",width:"21rem",height:"11rem",left:"-9rem"}}></div>
        </div>
      
    </div>
  )
}

export default Intro
