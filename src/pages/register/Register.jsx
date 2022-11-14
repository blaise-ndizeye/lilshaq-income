import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import CustomButton from "../../components/button/CustomButton"
import CustomForm from "../../components/form/CustomForm"
import CustomInput from "../../components/input/CustomInput"
import Welcome from "../../components/welcome/Welcome"
import "./register.css"

export default function Register(props) {
  const navigate = useNavigate()
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

    const userExist = JSON.parse(localStorage.getItem("user"))
    if (userExist)
      return setState((prev) => ({
        ...prev,
        error: "Only one user is allowed in the browser, please login",
      }))

    if (state.username.length < 3)
      return setState((prev) => ({
        ...prev,
        error: "Username  must have at least 3 characters",
      }))

    if (state.phone.length < 7)
      return setState((prev) => ({
        ...prev,
        error: "Phone number must be valid",
      }))

    if (state.password.length < 6)
      return setState((prev) => ({
        ...prev,
        error: "Password must have at least 6 characters",
      }))

    if (state.password !== state.confirmPassword)
      return setState((prev) => ({ ...prev, error: "Passwords must match" }))

    let userData = {
      username: state.username,
      email: state.email,
      phone: state.phone,
      password: state.password,
      isLoggedIn: true,
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        ...userData,
      })
    )

    props?.setIsAuthorized(true)
    navigate("/")

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

    return () => {
      setState((prev) => ({
        ...prev,
        error: "",
      }))
    }
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
            <p className="help-link">
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </CustomForm>
      </div>
    </>
  )
}
