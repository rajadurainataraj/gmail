/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import "./InboxMessage.css"
import { useEffect, useState } from "react"
import { FaRegUser } from "react-icons/fa"
const Inbox = () => {
  const { id } = useParams()
  const [getData, setGetData] = useState(null)

  useEffect(() => {
    apiData()
  }, [])

  const apiData = async () => {
    const url = `https://jsonplaceholder.org/posts/${id}`
    const data = await fetch(url)
    const result = await data.json()
    setGetData(result)
  }

  return (
    <>
      <h3 className="inbox-subject">{getData?.slug}</h3>
      <div className="inbox-container">
        <div className="inbox-logo">
          <img
            src={getData?.image ? getData?.image : <FaRegUser />}
            alt={"img " + getData?.id}
            className="inbox-logo"
          />
        </div>
        <div className="inbox-sender">
          <div className="inbox-sender-date">
            <h3>{getData?.title} </h3>
            <h3>{getData?.updatedAt}</h3>
          </div>
          <p className="inbox-content">{getData?.content}</p>
        </div>
      </div>
    </>
  )
}

export default Inbox
