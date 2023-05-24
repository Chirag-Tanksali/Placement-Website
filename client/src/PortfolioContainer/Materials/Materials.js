import React, { useState } from "react";


import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Materials.css";


export default function PrepVideo(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return (
        <div className=" " id={props.id || ""}>
            <ScreenHeading subHeading={""} title={"My Placement Materials"} />
            <p className="para"> These materials were prepared by me by combining all the interview questions from top websites such as InterviewBit, Javatpoint, Geeks For Geeks, Tutorialspoint, etc.</p>
            <h4 className="heading">CORE CS SUBJECTS</h4>
            <p>Click <a href="C interview questions-1.pdf" download="C interview questions-1.pdf"> Here </a> to Download Interview Questions on C Programming</p>
            <p>Click <a href="OOPS Interview questions-1.pdf" download="OOPS Interview questions-1.pdf"> Here </a> to Download Interview Questions on OOPS Concepts</p>
            <p>Click <a href="PYTHON INTERVIEW QUESTIONS-1.pdf" download="PYTHON INTERVIEW QUESTIONS-1.pdf"> Here </a> to Download Interview Questions on Python Programming</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON DSA-1.pdf" download="INTERVIEW QUESTIONS ON DSA-1.pdf"> Here </a> to Download Interview Questions on Data Structures and Algorithms</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON DBMS-1.pdf" download="INTERVIEW QUESTIONS ON DBMS-1.pdf"> Here </a> to Download Interview Questions on DBMS</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON SQL QUERIES-1.pdf" download="INTERVIEW QUESTIONS ON SQL QUERIES-1.pdf"> Here </a> to Download Interview Questions on SQL Queries</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON COMPUTER NETWORKS-1.pdf" download="INTERVIEW QUESTIONS ON COMPUTER NETWORKS-1.pdf"> Here </a> to Download Interview Questions on Computer Networks</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON OPERATING SYSTEMS-1.pdf" download="INTERVIEW QUESTIONS ON OPERATING SYSTEMS-1.pdf"> Here </a> to Download Interview Questions on Operating Systems</p>
            <h4 className="heading">Domain Related (Web,App and ML)</h4>
            <p>Click <a href="INTERVIEW QUESTIONS ON HTML AND CSS-1.pdf" download="INTERVIEW QUESTIONS ON HTML AND CSS-1.pdf"> Here </a> to Download Interview Questions on HTML and CSS</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON JAVASCRIPT-1.pdf" download="INTERVIEW QUESTIONS ON JAVASCRIPT-1.pdf"> Here </a> to Download Interview Questions on Javascript</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON MONGODB-1.pdf" download="INTERVIEW QUESTIONS ON MONGODB-1.pdf"> Here </a> to Download Interview Questions on MongoDB</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON NODEJS AND EXPRESSJS-1.pdf" download="INTERVIEW QUESTIONS ON NODEJS AND EXPRESSJS-1.pdf"> Here </a> to Download Interview Questions on Express.js and Node.js</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON REACTJS-1.pdf" download="INTERVIEW QUESTIONS ON REACTJS-1.pdf"> Here </a> to Download Interview Questions on React.js</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON MERN STACK DEVELOPMENT-1.pdf" download="INTERVIEW QUESTIONS ON MERN STACK DEVELOPMENT-1.pdf"> Here </a> to Download Interview Questions MERN Stack WEB Development</p>
            <p>Click <a href="INTERVIEW QUESTIONS ON REACT NATIVE-1.pdf" download="INTERVIEW QUESTIONS ON REACT NATIVE-1.pdf"> Here </a> to Download Interview Questions on React Native</p>
            <p>Click <a href="MACHINE LEARNING INTERVIEW QUESTIONS-1.pdf" download="MACHINE LEARNING INTERVIEW QUESTIONS-1.pdf"> Here </a> to Download Interview Questions on Machine Learning</p>
            
            <h4 className="heading">Basic Programs</h4>
            <p>Click <a href="Numbers.pdf" download="Numbers.pdf"> Here </a >  to Download my Handwritten Basic Programs on Numbers</p>
            <p>Click <a href="Pattern.pdf" download="Pattern.pdf"> Here </a > to Download my Handwritten Basic Programs on Patterns</p>
            <p>Click <a href="Array.pdf" download="Array.pdf"> Here </a > to Download my Handwritten Basic Programs on Arrays</p>
            <p>Click <a href="Strings.pdf" download="Strings.pdf"> Here </a > to Download my Handwritten Basic Programs on Strings</p>
            
            <br></br>
            <p className="para">Additionally, I have access to several UDEMY courses that I would be happy to share with anyone interested. Please feel free to email me, and I will provide the necessary ID and password. The courses are as follows :  <br></br>
            <p className="para" id="a">
            1. The Complete 2023 Web Development Bootcamp by Dr.Angela Yu  <br></br>
            2. The Complete JavaScript Course 2023: From Zero to Expert! by Jonas Schmedtmann <br></br>
            3. Node.js, Express, MongoDB & More: The Complete Bootcamp by Jonas Schmedtmann <br></br>
            4. React - The Complete Guide (incl Hooks, React Router, Redux) by Maximilian Schwarzmüller <br></br>
            5. React Native - The Practical Guide [2023] by Maximilian Schwarzmüller <br></br>
            6. Python for Machine Learning & Data Science Masterclass by Jose Portilla <br></br>
            </p>
</p>
            <br></br>
            <br></br>
        </div>
    );
}




