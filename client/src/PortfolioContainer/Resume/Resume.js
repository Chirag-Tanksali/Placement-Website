import React, { useState } from "react";


import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

export default function PrepVideo(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return (
        <div className="resume" id={props.id || ""}>
            <ScreenHeading subHeading={""} title={"How to Build a Good Resume "} />
            <div className="Resumee">
            <h3 className="head">Creating a good, strong resume is extremely important as it is the first impression you can make before an interview!</h3>
           

                <h5 className="head1 back"><b>FORMATTING</b> </h5>
                <p> 1.Try to create on a simplistic template and strictly to one page .</p>
                    <p> 2.Choose resume template that does not leave any unutilized spaces. </p>
                <h5 className="head1 back"><b>ORDERING</b></h5>
                <p>Name and Info</p>
                <p>Educational Details</p>
                <p>Technical Skills</p>
                <p>Internships/Work Experience</p>
                <p>Projects</p>
                <p>Achievements</p>
                
                
                    <h4 className="head1 back">TIPS TO CREATE A GOOD RESUME </h4>
                           
                              <p>  1. Make it more tech-oriented </p>
                              <p>  2.Always boldify tech-words to grab attention.</p>
                              <p>  3.Always include the source-code hyperlinks</p>
                              <p>4.Follow proper Ordering . </p>
                              <p>5.Certifications do not matter;what matters are the skills you learned in that certification course!</p>
                              <p>6.Career Objective / Summary / Declaration is optional(Not Needed)</p>
                              <p>7.Use Github and LinkedIn hyperlinks (Clickable links) <a href="https://github.com/Chirag-Tanksali">ChiragTanksali</a> ✔️. Do not paste the entire URL 
                                https://github.com/Chirag-Tanksali ❌
                              </p>
                           
                        <h4 className="head1 back">AVOID THESE MISATAKES</h4>

                        
         <p>1.Avoid funny Resume templates.</p>                   
         <p>2. Never write project details in paragraph.                 
        -Give bullet points explaination .</p>                   
        <p>3.Dont use more colors,more fonts </p>                   
        <p>4.Never include level of proficiency on Skills.</p>                   
        <p>5.Avoid adding interests like dancing,singing etc../ Hobbies / Strengths and Weaknesses and
        Languages known : English ,  Hindi,Kannada etc..
        </p> 
        <p>6.Do not lie on your resume, and do not copy projects.</p>                  
        </div>
        <br></br>
        <br></br>
        <iframe id="resume1" src="https://drive.google.com/file/d/1OA_BJXI5d2WNnNlzUihqNYYhOVqcnEnM/preview" width="830" height="1160" ></iframe>
                            
        <div className='profile-options'>
                        
                        <a href="https://drive.google.com/file/d/1OA_BJXI5d2WNnNlzUihqNYYhOVqcnEnM/view?usp=share_link " class="btn" target="_blank"> <button className='btn highlighted-btn'>Get Resume</button></a>
                        

                    </div>      
                        
        </div>
    );
}




