import React from "react"
import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import { PropertyList } from "../../components/propertyList/PropertyList"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Featured />
      <PropertyList />
    </div>
  )
}

export default Home
