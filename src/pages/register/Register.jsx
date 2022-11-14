import React, { useState, useEffect } from "react"

import CustomButton from "../../components/button/CustomButton"
import CustomForm from "../../components/form/CustomForm"
import CustomInput from "../../components/input/CustomInput"
import Welcome from "../../components/welcome/Welcome"
import "./register.css"

export default function Register(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    error: "",
  })

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (state.username.length < 3)
      setState((prev) => ({
        ...prev,
        error: "Username  must have at least 3 characters",
      }))

    if (state.phone.length < 7)
      setState((prev) => ({ ...prev, error: "Phone number must be valid" }))

    if (state.password.length < 6)
      setState((prev) => ({
        ...prev,
        error: "Password must have at least 6 characters",
      }))

    if (state.password !== state.confirmPassword)
      setState((prev) => ({ ...prev, error: "Passwords must match" }))

    setState({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      error: "",
    })
  }

  useEffect(() => {
    document.title = "Register | LilshaQ Income"
  }, [])

  return (
    <>
      <Welcome />
      <div className="action-wrapper">
        <CustomForm title="Create Account">
          <form onSubmit={handleSubmit}>
            {state.error.length !== 0 && (
              <p className="form-error">{state.error}</p>
            )}
            <CustomInput
              name="username"
              label="Username"
              value={state.username}
              onChange={handleChange}
            />
            <CustomInput
              name="email"
              label="Email"
              type="email"
              value={state.email}
              onChange={handleChange}
            />
            <CustomInput
              name="phone"
              label="Phone"
              type="tel"
              value={state.phone}
              onChange={handleChange}
            />
            <CustomInput
              name="password"
              label="Password"
              type="password"
              value={state.password}
              onChange={handleChange}
            />
            <CustomInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={state.confirmPassword}
              onChange={handleChange}
            />
            <CustomButton type="submit">Submit</CustomButton>
          </form>
        </CustomForm>
      </div>
    </>
  )
}
