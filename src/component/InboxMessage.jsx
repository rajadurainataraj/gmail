/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { IoMdRefresh, IoMdMore } from "react-icons/io"

import { MdMoveToInbox } from "react-icons/md"
import { AiTwotoneTag } from "react-icons/ai"
import { FiUsers } from "react-icons/fi"
import { FaGreaterThan, FaLessThan } from "react-icons/fa"

import "./InboxMessage.css"
import Primary from "./Primary"
import { useDispatch, useSelector } from "react-redux"
import { userDatas } from "../utils/userDataSlice"
const InboxMessage = () => {
  const data = useSelector((state) => state.user.data)
  const [activeTab, setActiveTab] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 15

  const indexOfLastItem = currentPage * perPage //1 * 10
  const indexOfFirstItem = indexOfLastItem - perPage // 10-10
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const maxPage = Math.ceil(data.length / perPage)
  const dispath = useDispatch()
  useEffect(() => {
    apiData()
  }, [])

  const apiData = async () => {
    const url = "https://jsonplaceholder.org/posts?id=1"
    const data = await fetch(url)
    const result = await data.json()
    dispath(userDatas(result))
  }

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber)
  }
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }
  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage))
  }

  return (
    <>
      <div className="pagination-container">
        <div className="select-all-container">
          <input type="checkbox" className="icon" />
          <IoMdRefresh className="icon" />
          <IoMdMore className="icon" />
        </div>

        <div className="pagination">
          <p>
            {indexOfFirstItem + 1} - {indexOfLastItem} 0f {data.length}
          </p>
          <FaLessThan
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className={`icon ${indexOfFirstItem === 0 && "disabled-button"}`}
          />
          <FaGreaterThan
            onClick={handleNextClick}
            disabled={currentPage === maxPage}
            className={`icon ${
              indexOfLastItem === data.length && "disabled-button"
            }`}
          />
        </div>
      </div>
      <div className="tab-view">
        <div
          className={`primary ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <MdMoveToInbox />
          <p>Primary</p>
        </div>
        <div
          className={`promotions ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <AiTwotoneTag />
          <p>Promotions</p>
        </div>
        <div
          className={`social ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          <FiUsers />
          <p>Social</p>
        </div>
      </div>

      {activeTab === 1 && <Primary current={currentItems} />}
    </>
  )
}

export default InboxMessage
