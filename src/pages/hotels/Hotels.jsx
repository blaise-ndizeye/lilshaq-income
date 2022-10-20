import React from "react"

const Hotels = () => {
  React.useEffect(() => {
    document.title = "All Hotels | Hotel Booking"
  }, [])
  return (
    <div>
      <p>Listing</p>
    </div>
  )
}

export default Hotels
