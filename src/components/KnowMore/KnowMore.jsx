import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import "./KnowMore.css"

const KnowMore = (props) => {
  const { text, className } = props
  return (
    <div className={`knowmore ${className}`}>{text} <FaArrowRightLong className='knowmore-icon'/></div>
  )
}

export default KnowMore