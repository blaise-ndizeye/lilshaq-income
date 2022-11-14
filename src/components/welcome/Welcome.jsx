import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckDouble, faCircleInfo } from "@fortawesome/free-solid-svg-icons"

import "./welcome.css"

export default function Welcome() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="title">
        {<FontAwesomeIcon icon={faCircleInfo} />} Welcome to{" "}
        <strong style={{ fontWeight: 700, color: "rgb(25, 161, 25)" }}>
          LilshaQ income
        </strong>
        &nbsp; where you earn much income by contributing something on the
        <strong style={{ fontWeight: 700 }}>
          {" "}
          Articles
          <FontAwesomeIcon icon={faCheckDouble} />
        </strong>
      </p>
    </div>
  )
}
