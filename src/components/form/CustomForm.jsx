import { faUserLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import "./customForm.css"

export default function CustomForm(props) {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">
        {props?.title} <FontAwesomeIcon icon={faUserLock} />{" "}
      </h2>
      {props.children}
    </div>
  )
}
