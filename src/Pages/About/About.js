import React from "react";
import Title from '../../Components/Title/Title';
import './About.css';
import galactic from './1.png';
import Likes from "../../Components/Likes/Likes";
import Components from "../../Components/Comments/Comments";


const About = () =>{
    return(
       <div className="about">
        <div className="wrap">
            <div className="card">
                <div className="card-image">
                    <img src={galactic} alt="galactic"/>
                    <Title/>
                    <Likes/>
                </div>
                <Components/>
            </div>
        </div>
       </div> 
    )
}
export default About;