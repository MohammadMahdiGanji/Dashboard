// import type
import type { JSX } from "react";

// import icons
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Notification(): JSX.Element {
  return (
    <span className="flex items-center gap-1 cursor-pointer">
      <IoMdNotifications className="text-xl @lg:text-2xl @4xl:text-3xl @5xl:text-4xl" />
      <IoIosArrowDown className="text-xl @4xl:text-xl" />
    </span>
  );
}
