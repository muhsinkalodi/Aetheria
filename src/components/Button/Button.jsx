import React from 'react'
import "./Button.css"
import { GoPeople } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Button = (props) => {
    const { className, text, icon, to } = props;
    const iconMap = {
        join: <BsPeopleFill className='btn-icon'/>,
        donate:<BiSolidDonateHeart className='btn-icon'/>,
    }
    const selectedIcon = iconMap[icon] || null
  return (
      <Link to={to}><div className={`btn ${className}`}>{ selectedIcon } {text}  </div></Link>
  )
}

export default Button