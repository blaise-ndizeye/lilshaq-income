import React from "react"
import {
  faBed,
  faCalendar,
  faHotel,
  faPerson,
  faRestroom,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DateRange } from "react-date-range"
import { format } from "date-fns"
import "./header.css"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

const Header = () => {
  let [selectedDate, setSelectedDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ])
  const [searchText, setSearchText] = React.useState("")
  let [showDatePicker, setShowDatePicker] = React.useState(false)
  let [showOptions, setShowOptions] = React.useState(false)
  let [options, setOptions] = React.useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="header">
      <div className="headerContainer">
        <h2 className="headerTitle">
          You are feeling tired? No more wories <FontAwesomeIcon icon={faBed} />
          .
        </h2>
        <h3 className="headerDesc">
          <strong style={{ fontSize: "1.5rem" }}>
            Get your room remotely <FontAwesomeIcon icon={faRestroom} />{" "}
          </strong>
          <br />
          Just pick your favorite hotel room to make your dreams smooth and rest
          peacefully.
        </h3>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faHotel} />
              <input
                type="text"
                autoComplete="off"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="headerSearchInput"
                placeholder="Search for hotel ..."
                required
              />
            </div>
            <div className="headerSearchItem parentDate">
              <FontAwesomeIcon icon={faCalendar} />
              <p
                className="headerSearchText"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >{`${format(selectedDate[0].startDate, "MM/dd/yyy")} to ${format(
                selectedDate[0].endDate,
                "MM/dd/yyy"
              )}`}</p>
              {showDatePicker && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setSelectedDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={selectedDate}
                  rangeColors={["rgb(47, 155, 47)", "rgb(165, 219, 165)"]}
                  className="datePicker"
                />
              )}
            </div>
            <div className="headerSearchItem parentOptions">
              <FontAwesomeIcon icon={faPerson} />
              <p
                onClick={() => setShowOptions(!showOptions)}
                className="headerSearchText"
              >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</p>
              {showOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult:</span>
                    <div className="optionCalculation">
                      <button
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            adult: prev.adult + 1,
                          }))
                        }
                        className="optionCounterButton"
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        disabled={options.adult <= 1}
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            adult: prev.adult - 1,
                          }))
                        }
                        className="optionCounterButton"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children:</span>
                    <div className="optionCalculation">
                      <button
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            children: prev.children + 1,
                          }))
                        }
                        className="optionCounterButton"
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        disabled={options.children === 0}
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            children: prev.children - 1,
                          }))
                        }
                        className="optionCounterButton"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room:</span>
                    <div className="optionCalculation">
                      <button
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            room: prev.room + 1,
                          }))
                        }
                        className="optionCounterButton"
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        disabled={options.room <= 1}
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            room: prev.room - 1,
                          }))
                        }
                        className="optionCounterButton"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button type="submit" className="headerSearchButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header
