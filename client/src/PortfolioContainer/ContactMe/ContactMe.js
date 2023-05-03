import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/con1.webp";
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./ContactMe.css";

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };
    console.log(name);

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true);
            const res = await axios.post(`/contact`, data);
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="main-container fade-inp " id={props.id || ""}>
            <ScreenHeading subHeading={"Ask your Queries"} title={"Contact Me"} />
            <div className="central-form">
                <div className="col" >
                    <h2 className="title" id='abcd'>
                        <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
                    </h2>{" "}
                        <a href="https://www.facebook.com/chirag.tanksali" target="_blank"> <span id='a' ><i class="fa fa-facebook-square" ></i> </span>  </a>
                        <a href="https://www.instagram.com/chirag_tanksali/" target="_blank"> <span id='b'><i class="fa fa-instagram"></i></span></a>
                        <a href="https://twitter.com/TanksaliChirag" target="_blank"><span id='c'><i class="fa fa-twitter"></i></span></a>
                        <a href="https://www.linkedin.com/in/chirag-tanksali-39a818210/" target="_blank"><span id='d'><i class="fa fa-linkedin"></i></span></a>
                        <a href="https://github.com/Chirag-Tanksali" target="_blank">  <span id='e'><i class="fa fa-github"></i></span></a>
                        <a href="https://www.codechef.com/users/chiragtanksali" target="_blank">  <span><i class="bi bi-badge-cc" id='abcd'></i></span></a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Mail me your Message!</h4>
                        <img src={imgBack} alt="image not found" />
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name" id='chirag'>Name</label>
                        <input type="text" onChange={handleName} value={name} />

                        <label htmlFor="email" id='chirag2'>Email</label>
                        <input type="email" onChange={handleEmail} value={email} />

                        <label htmlFor="message" id='chirag3'>Message</label>
                        <textarea type="text" onChange={handleMessage} value={message} />

                        <div className="send-btn">
                            <button type="submit">
                                send
                                <i className="fa fa-paper-plane" />
                                {bool ? (
                                    <b className="load">
                                        <img src={load1} alt="Image not responding" />
                                    </b>
                                ) : (
                                    ""
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
}




