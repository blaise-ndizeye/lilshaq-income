import { faListNumeric } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./propertList.css"

export const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListContainer">
        <h2 className="propertyTitle">Browse by hotel names</h2>
      </div>
      <div className="pListContainer">
        <div className="pListItem">
          <img className="pImage" src="images/8.jpg" alt="" />
          <div className="listTitles">
            <h2>Zorin Hotel . KG 400 Wiba State</h2>
            <h3>
              <FontAwesomeIcon color="green" icon={faListNumeric} />
              &nbsp; 100 rooms and 10 pools available
            </h3>
          </div>
        </div>
        <div className="pListItem">
          <img className="pImage" src="images/10.jpg" alt="" />
          <div className="listTitles">
            <h2>Wiva Hotel . KG 302 Ave LusLa</h2>
            <h3>
              <FontAwesomeIcon color="green" icon={faListNumeric} />
              &nbsp; 95 roms and 4 pools available
            </h3>
          </div>
        </div>
        <div className="pListItem">
          <img className="pImage" src="images/13.jpg" alt="" />
          <div className="listTitles">
            <h2>Roo Hotel . Down Road 002 Ave</h2>
            <h3>
              <FontAwesomeIcon color="green" icon={faListNumeric} />
              &nbsp; 123 rooms available
            </h3>
          </div>
        </div>
        <div className="pListItem">
          <img className="pImage" src="images/4.jpg" alt="" />
          <div className="listTitles">
            <h2>Vicova . Central City K-405</h2>
            <h3>
              <FontAwesomeIcon color="green" icon={faListNumeric} />
              &nbsp; 45 rooms available
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
