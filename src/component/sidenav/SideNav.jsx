import "./SideNav.css"
import { MdOutlineEdit } from "react-icons/md"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toggleMenu } from "../../utils/sideNavSlice"
import { useState } from "react"
import { sideNavData } from "./SideNavData"

const SideNav = () => {
  const [selectedItem, setSelectedItem] = useState(1)
  const dispath = useDispatch()
  const toggle = useSelector((state) => state.sideNav.menu)

  const mouseHover = () => {
    !toggle && dispath(toggleMenu())
  }

  const handleNav = (id) => {
    setSelectedItem(id)
  }

  return (
    <>
      <div className="sideNavContainer">
        <div>
          <Link to="/popup">
            <div className={`composeContainer ${!toggle && "compose-low"}`}>
              <MdOutlineEdit />
              {toggle && <span> Compose</span>}
            </div>
          </Link>
          {sideNavData.map((item) => (
            <div
              key={item.option}
              className={`navLogoContainer ${
                selectedItem === item.id && "nav-background"
              } ${!toggle && "nav-menu-minimize"}`}
              onMouseOver={() => mouseHover()}
              // onFocus={() => !toggle && dispath(toggleMenu())}
              // onBlur={() => toggle && dispath(toggleMenu())}
              onClick={() => handleNav(item.id)}
            >
              <div className="side-icon">{item.icon}</div>

              {toggle && (
                <Link to={"/" + item.option.toLowerCase()}>
                  <div>{item.option}</div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SideNav
