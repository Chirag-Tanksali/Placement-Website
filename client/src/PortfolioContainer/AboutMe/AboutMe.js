import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./AboutMe.css"

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: " HARMAN is a global leader in connected car technology, lifestyle audio innovations, professional audio and lighting solutions, and digital transformation. Harman markets its products under various brands, including AKG, AMX, Arcam,[6] Bang & Olufsen Automotive, Becker, BSS Audio, Crown, dbx, DOD Electronics, DigiTech, Harman Kardon, Infinity, JBL, Lexicon, Mark Levinson, Martin, Revel, Soundcraft and Studer.",
        
    }

    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };



    return (
        <div
            className="about-me-container screen-container fade-in " data-aos-duration="2000"
            id={props.id || ""}
        >
            <div className="about-me-parent">
                <ScreenHeading title={"About Harman Company and"} subHeading={"My Interview Experience at Harman"} />
                
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            {SCREEN_CONSTANTS.description}
                        </span>
                        
                        <br></br><br></br><br></br>
                        <div className="about-me-options">
                            <h4>Click the below link to get my Interview Experience at Harman !!</h4>
                            <br></br>
                            <a href="https://drive.google.com/file/d/16-7jskRt0RT9Ba1TIFNGSyNuF4NRKlMn/view?usp=share_link" target='_blank' class="btn" > <button className='btn highlighted-btn'>Click Here</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
