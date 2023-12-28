import { Outlet } from "react-router-dom"
// import Compose from "../Compose"
import Header from "./Header"
import SideNav from "../sidenav/sideNav"

const Body = () => {
  return (
    <>
      <Header />
      <div className="main-cotainer-body">
        <SideNav />
        <div className="body">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Body
