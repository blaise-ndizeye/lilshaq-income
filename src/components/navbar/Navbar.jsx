import React from "react"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <span className="navLogo">HBooking</span>
        <div className="navbarLinks">
          <button className="navbarButton">Login</button>
          <button className="navbarButton">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
