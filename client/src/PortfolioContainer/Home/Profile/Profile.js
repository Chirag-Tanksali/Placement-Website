import React from 'react';
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href="https://www.facebook.com/chirag.tanksali" target="_blank"> <span ><i class="fa fa-facebook-square" ></i> </span>  </a>
                        <a href="https://www.instagram.com/chirag_tanksali/" target="_blank"> <span><i class="fa fa-instagram"></i></span></a>
                        <a href="https://twitter.com/TanksaliChirag" target="_blank"><span><i class="fa fa-twitter"></i></span></a>
                        <a href="https://www.linkedin.com/in/chirag-tanksali-39a818210/" target="_blank"><span><i class="fa fa-linkedin"></i></span></a>
                        <a href="https://github.com/Chirag-Tanksali" target="_blank">  <span><i class="fa fa-github"></i></span></a>
                        </div>
                    </div>
                
                    <div className='profile-details-role'>
                        
                            <h4 className='profile-role-tagline'>
                            I, Chirag Tanksali, have completed my BE in Electronics and Communication from KLS Gogte Institute of Technology, Belagavi. I have been offered positions at both TCS and Harman, and I have decided to join Harman. 
<br></br>
I am grateful to KLS Gogte Institute of Technology for the opportunity, and I extend a huge thanks to the placement officers, Satish Hukkeri Sir, Sagar Santaji Sir, and Keshav Gudi Sir, for their extremely supportive role throughout the placement process.<br></br>
<br></br> <h3 id='abcde'>ABOUT THIS WEBSITE !!! </h3> <br></br> 
 I developed this website, which offers comprehensive information related to placement preparation, including tips on how to build resume, and an array of reference materials. As a firm believer in sharing knowledge, I created this website with the intention of helping my fellow juniors and all those who are preparing for placements.
                            </h4>
                        
                    </div>
                    
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'> </div>
                </div>
            </div>
        </div>
    )
}
