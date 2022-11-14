import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Footer from "./components/footer/Footer"

import Navbar from "./components/navbar/Navbar"
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
  const [isAuthorized, setIsAuthorized] = useState(true)
  const navigate = useNavigate()

  const getUser = () => {
    const user = localStorage.getItem("user")
    if (!user) {
      setIsAuthorized(false)
    }
  }

  useEffect(() => {
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorized])

  return (
    <>
      <Navbar isAuthorized={isAuthorized} />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
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
