/* eslint-disable react/prop-types */
import { useState } from "react"
import { FaRegStar } from "react-icons/fa"
import { MdLabelImportantOutline } from "react-icons/md"
import "./InboxMessage.css"
import { Link } from "react-router-dom"
import { months } from "../utils/helperFunctions"

const Primary = (props) => {
  const [isChecked, setChecked] = useState("")

  const handleCheckboxChange = (id) => {
    setChecked((prevSelectedCheckboxes) => {
      if (prevSelectedCheckboxes.includes(id)) {
        return prevSelectedCheckboxes.filter((checkboxId) => checkboxId !== id)
      } else {
        return [...prevSelectedCheckboxes, id]
      }
    })
  }

  const formatDate = (inputDateString) => {
    const [day, month] = inputDateString.split("/")
    const monthName = months[parseInt(month, 10) - 1]
    return `${monthName} ${day}`
  }

  return (
    <>
      {props.current.map((item) => (
        <div key={item.id}>
          <div className="inboxMessageContainer" key={item.id}>
            <div className="flex wid-20">
              <input
                className="icon"
                type="checkbox"
                checked={isChecked.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <FaRegStar className="star-icon" />
              <MdLabelImportantOutline className="important-icon" />
              <Link to={`/message/${item.id}`}>
                <p>{item.slug}</p>
              </Link>
            </div>

            <div className="flex inbox-message-title wid-60">
              <Link to={`/message/${item.id}`}>
                <p>{item.title}</p>
              </Link>
            </div>
            <div style={{ width: "5%" }}>
              {formatDate(item.updatedAt.split(" ")[0])}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Primary
