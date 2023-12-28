import logo from "../../assets/logo/gmail3.png"
import userLogo from "../../assets/logo/boy.avif"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdOptions, IoMdApps } from "react-icons/io"
import { FaRegCircleQuestion } from "react-icons/fa6"
import { IoSettingsSharp } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import "./Header.css"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../../utils/sideNavSlice"

const Header = () => {
  const dispath = useDispatch()

  const Menu = () => {
    dispath(toggleMenu())
  }
  return (
    <>
      <div className="headerContainer">
        <div className="logoContainer">
          <RxHamburgerMenu className="menu" onClick={() => Menu()} />
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="searchContainer">
          <CiSearch className="serachIcon headerLogo" />
          <input placeholder="Search Mail" className="searchInut" />

          <IoMdOptions className="serachOptions headerLogo" />
        </div>
        <div className="rightSideLogos">
          <FaRegCircleQuestion />
          <IoSettingsSharp />
          <IoMdApps />
          <img src={userLogo} className="imgLogo" />
        </div>
      </div>
    </>
  )
}

export default Header
