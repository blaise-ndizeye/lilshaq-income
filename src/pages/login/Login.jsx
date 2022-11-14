import React, { useState } from "react"

import CustomForm from "../../components/form/CustomForm"
import CustomInput from "../../components/input/CustomInput"
import Welcome from "../../components/welcome/Welcome"
import CustomButton from "../../components/button/CustomButton"
import "./login.css"
import "../register/register.css"

export default function Login() {
  const [state, setState] = useState({
    credential: "",
    password: "",
    error: "",
  })

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Welcome />
      <div className="action-wrapper">
        <CustomForm title="Login to your Account">
          <form onSubmit={submitHandler}>
            {state.error.length !== 0 && (
              <p className="form-error">{state.error}</p>
            )}
            <CustomInput
              name="credential"
              label="Username"
              value={state.credential}
              onChange={handleChange}
            />
            <CustomInput
              name="password"
              label="Password"
              type="password"
              value={state.password}
              onChange={handleChange}
            />
            <CustomButton type="submit">Submit</CustomButton>
          </form>
        </CustomForm>
      </div>
    </>
  )
}
