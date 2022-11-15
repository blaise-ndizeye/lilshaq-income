import { faStop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import CustomButton from "../../components/button/CustomButton"
import CustomForm from "../../components/form/CustomForm"
import CustomInput from "../../components/input/CustomInput"
import "../register/register.css"

export default function Account(props) {
  const navigate = useNavigate()
  const [state, setState] = useState({
    username: props?.user?.username,
    email: props?.user?.email,
    phone: props?.user?.phone,
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

    if (
      state.confirmPassword !== "" &&
      state.password !== state.confirmPassword
    )
      return setState((prev) => ({ ...prev, error: "Passwords must match" }))

    if (
      state.confirmPassword === "" &&
      state.password !== props?.user?.password
    )
      return setState((prev) => ({ ...prev, error: "Invalid password" }))

    let userData = {
      username: state.username,
      email: state.email,
      phone: state.phone,
      password: state.password,
      isLoggedIn: true,
    }

    localStorage.removeItem("user")
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...userData,
      })
    )
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
    document.title = "Update Account Data | LilshaQ Income"

    return () => {
      setState((prev) => ({
        ...prev,
        error: "",
      }))
    }
  }, [])

  return (
    <>
      <div className="action-wrapper">
        <CustomForm title="Update Credentials">
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
            {props?.user.password !== state.password && (
              <>
                <CustomInput
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={state.confirmPassword}
                  onChange={handleChange}
                />
                <p className="help-link" style={{ color: "gray" }}>
                  Confirm your password if you want to update it{" "}
                  <FontAwesomeIcon icon={faStop} />
                </p>
              </>
            )}
            <CustomButton type="submit">Update</CustomButton>
          </form>
        </CustomForm>
      </div>
    </>
  )
}
