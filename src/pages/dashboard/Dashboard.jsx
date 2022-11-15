/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { faNairaSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"
import Account from "../account/Account"
import Articles from "../articles/Articles"

import "./dashboard.css"

export default function Dashboard(props) {
  const location = useLocation()

  return (
    <div className="view">
      <div className="dashboard-status">
        <h3>Welcome {props?.user?.username}</h3>
        <p>
          You have earned{" "}
          <span
            style={{
              fontWeight: 700,
              backgroundColor: "rgb(25, 161, 25)",
              color: "white",
              padding: "0.5rem",
              borderRadius: "10px",
            }}
          >
            <FontAwesomeIcon icon={faNairaSign} /> 100
          </span>
        </p>
      </div>
      {location.pathname === "/account" ? (
        <Account user={props?.user} />
      ) : (
        <Articles />
      )}
    </div>
  )
}
