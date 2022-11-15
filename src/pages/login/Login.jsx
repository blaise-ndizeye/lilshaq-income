import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import CustomForm from "../../components/form/CustomForm"
import CustomInput from "../../components/input/CustomInput"
import Welcome from "../../components/welcome/Welcome"
import CustomButton from "../../components/button/CustomButton"
import "./login.css"
import "../register/register.css"

export default function Login(props) {
  const navigate = useNavigate()
  const [state, setState] = useState({
    credential: "",
    password: "",
    error: "",
  })
  const user = JSON.parse(localStorage.getItem("user"))

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!user)
      return setState((prev) => ({
        ...prev,
        error: "Account not found, please register",
      }))

    if (
      user?.username !== state.credential &&
      user?.email !== state.credential &&
      user?.phone !== state.credential
    )
      return setState((prev) => ({
        ...prev,
        error: "Invalid credentials",
      }))

    if (user?.password !== state.password)
      return setState((prev) => ({
        ...prev,
        error: "Invalid password",
      }))

    localStorage.removeItem("user")
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        isLoggedIn: true,
      })
    )
    props.setIsAuthorized(true)
    navigate("/")
    setState({
      credential: "",
      password: "",
    })
  }

  useEffect(() => {
    document.title = "Login | LilshaQ Income"
    if (user && user?.isLoggedIn) {
      navigate("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            <p className="help-link">
              Not registered yet? <Link to={"/register"}>Register</Link>
            </p>
          </form>
        </CustomForm>
      </div>
    </>
  )
}
