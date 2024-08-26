import React from "react"
import "./Hero.css"
import Button from "../Button/Button"
import Doodle1 from "../../assets/svg/hero-doodle1.svg"
import Doodle2 from "../../assets/svg/hero-doodle2.svg"
import Doodle3 from "../../assets/svg/hero-doodle3.svg"
import Doodle4 from "../../assets/svg/hero-doodle4.svg"
const Hero = () => {
    return (
      <div className="hero">
        <img src={Doodle1} alt="" className="doodle1"/>
        <img src={Doodle2} alt="" className="doodle2"/>
        <img src={Doodle3} alt="" className="doodle3"/>
        <img src={Doodle4} alt="" className="doodle4"/>
            <h1>
                Innovate, Collaborate, Excel <br />
                Welcome to Aetheria
            </h1>
            <p>
                Forge your path in a wolrd of boundless possibilities.<br /> Join a vibrant community where ideas flourish and
                futures take flight.
            </p>
            <div className="hero-btns">
                <Button text="Join" className="hero-btn join-btn blue-btn" />
                <Button text="Donate" className="hero-btn donate-btn pink-btn" />
            </div>
        </div>
    )
}

export default Hero
