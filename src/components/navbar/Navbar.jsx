import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

import "./navbar.css"

const Navbar = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const unauthorizedLinks = [
    {
      label: "Login",
      path: "/login",
      active: location.pathname === "/login",
    },
    {
      label: "Register",
      path: "/register",
      active: location.pathname === "/register",
    },
  ]

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <h1
          className="navLogo"
          onClick={() =>
            location.pathname !== "/login" && location.pathname !== "/register"
              ? navigate("/")
              : ""
          }
        >
          LilshaQ Income
        </h1>
        <div className="navbarLinks">
          {!props?.isAuthorized ? (
            unauthorizedLinks.map((link, index) => (
              <button
                key={index}
                className={link.active ? "navbarButton active" : "navbarButton"}
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </button>
            ))
          ) : (
            <>
              <button
                className={
                  location.pathname === "/account"
                    ? "navbarButton active"
                    : "navbarButton"
                }
                onClick={() => navigate("/account")}
              >
                Account
              </button>
              <button
                className="navbarButton active"
                onClick={() => props?.logout()}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
