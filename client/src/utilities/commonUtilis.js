import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import PrepVideo from "../PortfolioContainer/PrepVideo/PrepVideo";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Resume from "../PortfolioContainer/Resume/Resume"
import Materials from "../PortfolioContainer/Materials/Materials"
import Motivation from "../PortfolioContainer/Motivation/Motivation"



export const  TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutHarman",
        component: AboutMe,
    },
    {
        screen_name: "PlacementPreparation",
        component: PrepVideo,
    },
    {
        screen_name: "ResumeBuilding",
        component: Resume,
    },
    {
        screen_name: "Materials",
        component: Materials,
    },
    {
        screen_name: "Motivation",
        component: Motivation,
    },
    {
        screen_name: "ContactMe",
        component: ContactMe,
    },
];

export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1
    for(let i=0;i<TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
};