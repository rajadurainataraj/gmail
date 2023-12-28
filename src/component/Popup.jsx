import { useState } from "react"
import "./Popup.css"
import { FaWindowMinimize } from "react-icons/fa"
import { LuMaximize2 } from "react-icons/lu"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { CiMinimize1 } from "react-icons/ci"

const Popup = () => {
  const [newAddress, setNewAddress] = useState([])
  const [isMaximized, setMaximized] = useState(false)

  const handleCarbonCopy = () => {
    const select = newAddress.find((s) => s === "Cc")
    if (select === undefined) {
      setNewAddress((prevAddress) => [...prevAddress, "Cc"])
    }
  }

  const handleBCarbonCopy = () => {
    const select = newAddress.find((s) => s === "Bcc")
    if (select === undefined) {
      setNewAddress((prevAddress) => [...prevAddress, "Bcc"])
    }
  }

  return (
    <>
      <div className={` ${isMaximized ? "maximized" : "container"}`}>
        <div className="row message-title split-between ">
          <div>New Message</div>
          <div className="row h-center">
            <Link to="/inbox">
              <FaWindowMinimize />
            </Link>
            {isMaximized ? (
              <CiMinimize1 onClick={() => setMaximized(false)} />
            ) : (
              <LuMaximize2 onClick={() => setMaximized(true)} />
            )}
            <Link to="/inbox">
              <AiOutlineClose />
            </Link>
          </div>
        </div>
        <div className="row message-body flex-direction-col">
          <div className="row h-center">
            <div>To</div>
            <input type="text" className="input-email-address" />
            <div className="row add-more-email-address">
              <div className="additional-email" onClick={handleCarbonCopy}>
                Cc
              </div>
              <div className="additional-email" onClick={handleBCarbonCopy}>
                Bcc
              </div>
            </div>
          </div>
          {newAddress.map((item) => {
            return (
              <div key={item} className="row h-center">
                <div>{item}</div>
                <input type="text" className="input-email-address" />
                <div style={{ marginLeft: "auto" }}>
                  {newAddress.length === 2
                    ? ""
                    : newAddress.length === 1 && item === "Cc"
                    ? "Bcc"
                    : "Cc"}
                </div>
              </div>
            )
          })}
          <div>
            <input
              type="text"
              className="input-email-address"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea id="body-content"></textarea>
          </div>
        </div>
        <div className="row message-footer h-center split-between ">
          <div>
            <div className="send-btn">Send</div>
          </div>
          <div>🗑️</div>
        </div>
      </div>
    </>
  )
}

export default Popup
