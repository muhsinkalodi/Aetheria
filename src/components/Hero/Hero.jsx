import React, { useEffect, useState } from "react";
import "./Hero.css";
import Button from "../Button/Button";
import Doodle1 from "../../assets/svg/hero-doodle1.svg";
import Doodle2 from "../../assets/svg/hero-doodle2.svg";
import Doodle3 from "../../assets/svg/hero-doodle3.svg";
import Doodle4 from "../../assets/svg/hero-doodle4.svg";
import { motion } from "framer-motion";
import { BsPeopleFill } from "react-icons/bs";


const Hero = () => {
    const [selectedText, setSelectedText] = useState("Excel");
    const Texts = ["Grow", "Thrive", "Dream", "Excel"];
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedText(Texts[index]);
            index = (index + 1) % Texts.length;
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            <img src={Doodle1} alt="" className="doodle1" />
            <img src={Doodle2} alt="" className="doodle2" />
            <img src={Doodle3} alt="" className="doodle3" />
            <img src={Doodle4} alt="" className="doodle4" />
            <h1>
                Innovate, Collaborate,&nbsp;
                 <motion.span
                    className="hero-txt-span"
                    key={selectedText} // Key prop to trigger re-mounting
                    initial={{ opacity: 0, x: -50 }} // Initial state
                    animate={{ opacity: 1, x: 0, }} // Animation state
                    transition={{ duration: 1, stiffness:20, type:"spring" }} // Transition duration
                >
                     {selectedText}
                </motion.span>
                <br />
                Welcome to Aetheria
            </h1>
            <p>
                Forge your path in a world of boundless possibilities.
                <br /> Join a vibrant community where ideas flourish and futures take flight.
            </p>
            <div className="hero-btns">
                <Button text="Join" className="hero-btn join-btn blue-btn" icon="join"/>
                <Button text="Donate" className="hero-btn donate-btn pink-btn" icon="donate"/>
            </div>
        </div>
    );
};

export default Hero;