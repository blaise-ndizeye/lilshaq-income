import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
