/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import {
  faHeartCircleCheck,
  faNairaSign,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"
import Account from "../account/Account"
import Articles from "../articles/Articles"

import "./dashboard.css"

export default function Dashboard(props) {
  const location = useLocation()
  const [income, setIncome] = useState(0)

  const getIncome = () => {
    let allArticles = JSON.parse(localStorage.getItem("articles"))
    let likedArticles = allArticles?.filter((art) => art.liked === true)
    setIncome(likedArticles.length * 50)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      getIncome()
    }, 500)

    return () => {
      getIncome()
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div className="view">
        <div
          className="dashboard-status"
          onClick={() => alert("No payment integrated yet")}
        >
          <h3>Welcome {props?.user?.username}</h3>
          <p className="dashboard-income">
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
              <FontAwesomeIcon icon={faNairaSign} /> {income}
            </span>
          </p>
          <p className="dashboard-helper">
            All you need to do is to like
            <FontAwesomeIcon icon={faHeartCircleCheck} /> the below contents to
            increase your income
          </p>
        </div>
        {location.pathname === "/account" ? (
          <Account user={props?.user} />
        ) : (
          <Articles />
        )}
      </div>
    </>
  )
}
