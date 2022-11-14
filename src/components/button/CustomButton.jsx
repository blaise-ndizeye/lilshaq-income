import React from "react"

import "./customButton.css"

export default function CustomButton(props) {
  return (
    <>
      <button
        style={{
          width: "100%",
          marginTop: "5px",
          border: "none",
          outline: "none",
          padding: "0.8rem 0.3rem",
          backgroundColor: "rgba(1, 35, 66, 0.7)",
          color: "#f4f4f4",
          cursor: "pointer",
          transition: "background-color 0.8s",
          borderRadius: "10px",
          ...props?.style,
        }}
        type={props?.type ? props?.type : "button"}
        className="button"
      >
        {props.children}
      </button>
    </>
  )
}
