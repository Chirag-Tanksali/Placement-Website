import React, { useState } from "react";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Motivation.css"
export default function Motivation(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return (
        <div className="abc" id={props.id || ""}>
            <ScreenHeading subHeading={""} title={"Motivation"} />
            
            <p className="motivation"> 
            1. Believe in yourself and your abilities, and maintain a positive attitude.<br></br>
2. Stay focused on your goals and work hard towards achieving them.<br></br>
3. Make proper timetable , set goals and Prepare yourself strongly .<br></br>
4. Don't get discouraged by rejections, use them as opportunities to improve.<br></br>
5. Success is a journey where we put efforts to make our dreams come true. 
<br></br>
<br></br>
<p id="note"> Remember, Preparing for placements can be a challenging task, but that with strong preparation, anything is achievable.With Hard Work , Self-Belief , Self-Confidence , Dedication and Desire to achieve , Perseverance, and Patience, you can crack any placement and land your dream job!
</p>
</p>


        </div>
    );
}




