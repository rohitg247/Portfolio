import "./HeroImageStyles.css"

import React from 'react'

import HomeImg from "../assets/home.jpg"
import { Link } from "react-router-dom"

const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask" >
                <img className="home-img" src={HomeImg} alt="HomeImg" />
            </div>
            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>React Developer</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;