import React, { useState } from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./PrepVideo.css";

export default function PrepVideo(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return (
        <div className=" video " id={props.id || ""}>
            <ScreenHeading subHeading={""} title={"Road Map for Placement Preparation!"} />
            
            <div className="iframe-container">
                
            <iframe width="900" height="506" src="https://www.youtube.com/embed/MdrEfekJv_4" title="How to prepare for on-campus placements?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}




