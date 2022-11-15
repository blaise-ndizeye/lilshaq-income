import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Footer from "./components/footer/Footer"

import Navbar from "./components/navbar/Navbar"
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()

  const getUser = () => {
    if (!user || !user?.isLoggedIn) {
      setIsAuthorized(false)
      navigate("/login")
    } else {
      setIsAuthorized(true)
      navigate("/")
    }
  }

  const logoutHandler = () => {
    if (!user || !user?.isLoggedIn) return

    localStorage.removeItem("user")
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        isLoggedIn: false,
      })
    )
    setIsAuthorized(false)
    navigate("/login")
  }

  useEffect(() => {
    getUser()
    document.title = "Dashboard | LilshaQ Income"

    return () => {
      getUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorized])

  return (
    <>
      <Navbar isAuthorized={isAuthorized} logout={logoutHandler} />
      <Routes>
        <Route path="/*" element={<Dashboard user={user} />} />
        <Route
          path="/login"
          element={
            <Login
              isAuthorized={isAuthorized}
              setIsAuthorized={setIsAuthorized}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              isAuthorized={isAuthorized}
              setIsAuthorized={setIsAuthorized}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
