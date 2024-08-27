import React from "react"
import "./About.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import KnowMore from "../KnowMore/KnowMore"
import about_img from "../../assets/images/about.png"

const About = () => {
    return (
        <div className="about">
            <SectionTitle text="About"/>
            <h2 className="section-header">Who we are?</h2>
            <div className="about-container">
                <div className="about-left">
                    <img src={about_img} alt="" />
                </div>
                <div className="about-right">
                    <h2>We're a community of change-makers, Innovative minds, leaders and students.</h2>
                    <p>
                        Together, we're mapping the landscape of innovation and technology. From coding marathons to design
                        sprints, we offer diverse platforms for learning. In aetheria you'll find the resources and support
                        to turn your ideas into reality. Step into a world where your ideas can thrive and make a
                        difference.
                    </p>
                    <KnowMore />
                </div>
            </div>
        </div>
    )
}

export default About
