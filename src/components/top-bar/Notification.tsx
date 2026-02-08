// import type
import type { JSX } from "react"

// import icons
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Notification():JSX.Element {
  return (
    <span className="flex items-center gap-1 cursor-pointer">
      <IoMdNotifications size={30} />
      <IoIosArrowDown size={20}/>
    </span>
  )
}
