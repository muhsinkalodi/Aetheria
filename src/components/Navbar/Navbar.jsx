import React from 'react'
import Button from "../Button/Button"
import "./Navbar.css"
const Navbar = () => {
  return (
      <div className='navbar'>
          <h1>aetheria</h1>
          <ul>
            <li>join</li>
            <li>Login</li>
            <li>Contact</li>
            <li>Home</li>
          </ul>
          <Button />
    </div>
  )
}

export default Navbar