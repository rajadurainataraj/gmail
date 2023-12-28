import { useState } from "react"
import "./TabView.css"
const TabView = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber)
  }

  return (
    <div>
      <div className="tab-buttons">
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? "active" : ""}
        >
          Tab 1
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? "active" : ""}
        >
          Tab 2
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={activeTab === 3 ? "active" : ""}
        >
          Tab 3
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
      </div>
    </div>
  )
}

export default TabView
