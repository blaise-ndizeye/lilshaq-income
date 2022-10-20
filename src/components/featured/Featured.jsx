import React from "react"
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredContainer">
        <div className="featuredItem">
          <img className="featuredImage" src="images/19.jpg" alt="first" />
          <div className="featuredTitles">
            <h2>Classic Room - VIP</h2>
            <h3>Available Now</h3>
          </div>
        </div>
        <div className="featuredItem">
          <img className="featuredImage" src="images/2.jpg" alt="second" />
          <div className="featuredTitles">
            <h2>Access to Swimming Pool</h2>
            <h3>Free Access</h3>
          </div>
        </div>
        <div className="featuredItem">
          <img className="featuredImage" src="images/14.jpg" alt="third" />
          <div className="featuredTitles">
            <h2>Room with Outdoor view</h2>
            <h3>Most viewed</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
