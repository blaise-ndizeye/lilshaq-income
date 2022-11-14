import React from "react"

import "./CustomInput.css"

export default function CustomInput(props) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        autoComplete={"off"}
        className="input-box"
        type={props?.type ? props?.type : "text"}
        name={props?.name}
        value={props?.value}
        onChange={(e) => props.onChange(e)}
        placeholder={`Enter ${props.label}`}
        required
      />
    </div>
  )
}
