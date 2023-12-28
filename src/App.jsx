import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/layouts/Header"
import Body from "./component/layouts/Body"
import SideNav from "./component/sidenav/sideNav"
import Inbox from "./component/Inbox"
import InboxMessage from "./component/InboxMessage"
import TabView from "./component/TabView"
import Startted from "./component/under-construction/Startted"
import Snoozed from "./component/under-construction/Snoozed"
import Important from "./component/under-construction/Important"
import Sent from "./component/under-construction/Sent"
import Drafts from "./component/under-construction/Drafts"
import Categories from "./component/under-construction/Categories"
import Promotions from "./component/under-construction/Promotions"
import Social from "./component/under-construction/Social"
import Popup from "./component/Popup"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />

          <Route path="/" element={<Body />}>
            <Route path="/inbox" element={<InboxMessage />} />
            <Route path="/startted" element={<Startted />} />
            <Route path="/snoozed" element={<Snoozed />} />
            <Route path="/important" element={<Important />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/message/:id" element={<Inbox />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/social" element={<Social />} />
            <Route path="/popup" element={<Popup />} />
          </Route>

          <Route path="/sidenav" element={<SideNav />} />
          <Route path="/message" element={<InboxMessage />} />
          <Route path="/message/:id" element={<Inbox />} />
          <Route path="/tabview" element={<TabView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
