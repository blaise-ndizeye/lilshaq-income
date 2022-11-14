import React from "react"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <h1 className="navLogo">LilshaQ Income</h1>
        <div className="navbarLinks">
          <button className="navbarButton">Login</button>
          <button className="navbarButton active">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
