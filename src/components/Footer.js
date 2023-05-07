import "./FooterStyles.css"

import React from "react"

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{
                            color: "#fff", marginRight: "2rem"
                        }} />
                        <p>Mumbai-</p>
                        <p>India</p>
                    </div>
                    <div>

                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{
                            color: "#fff", marginRight: "2rem"
                        }} />
                            7666576956</h4>
                    </div>
                    <div className="phone">
                        <h4><FaMailBulk size={20} style={{
                            color: "#fff", marginRight: "2rem"
                        }} />
                            rohitg247@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>Hello i am a Web Developer</p>
                    <div className="social">
                        <FaFacebook
                            size={"30"}
                            style={{
                                color: "#fff",
                                marginRight: "1rem"
                            }}
                        />
                        <BsGithub
                            size={"30"}
                            style={{
                                color: "#fff",
                                marginRight: "1rem"
                            }}
                        />
                        <FaLinkedin
                            size={"30"}
                            style={{
                                color: "#fff",
                                marginRight: "1rem"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer