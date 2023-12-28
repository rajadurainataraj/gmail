import { FaGreaterThan, FaRegStar } from "react-icons/fa"
import { IoIosArrowDown, IoIosPaper, IoMdSend } from "react-icons/io"
import { LuClock5 } from "react-icons/lu"
import { MdInbox, MdLabelImportantOutline } from "react-icons/md"

export const sideNavData = [
  {
    id: 1,
    icon: <MdInbox />,
    option: "Inbox",
  },
  {
    id: 2,
    icon: <FaRegStar />,
    option: "Startted",
  },
  {
    id: 3,
    icon: <LuClock5 />,
    option: "Snoozed",
  },
  {
    id: 4,
    icon: <MdLabelImportantOutline />,
    option: "Important",
  },
  {
    id: 5,
    icon: <IoMdSend />,
    option: "Sent",
  },
  {
    id: 6,
    icon: <IoIosPaper />,
    option: "Drafts",
  },
  {
    id: 7,
    icon: <FaGreaterThan />,

    option: "Categories",
  },
  {
    id: 8,
    icon: <IoIosArrowDown />,
    option: "More",
  },
]
