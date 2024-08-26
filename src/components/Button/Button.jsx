import React from 'react'
import "./Button.css"
import { GoPeople } from "react-icons/go";
import { Link } from 'react-router-dom';
const Button = (props) => {
    const { className, text, icon, to } = props;
    const iconMap = {
        people: <GoPeople />,
    }
    const selectedIcon = iconMap[icon] || null
  return (
      <Link to={to}><div className={`btn ${className}`}>{text} { selectedIcon } </div></Link>
  )
}

export default Button