import React from "react"
import Navbar from "../../components/navbar/Navbar"

const Hotels = () => {
  React.useEffect(() => {
    document.title = "All Hotels | Hotel Booking"
  }, [])
  return (
    <>
      <Navbar />
      <p>Listing</p>
    </>
  )
}

export default Hotels
