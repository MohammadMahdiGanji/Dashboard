// import type
import type { JSX } from "react";

// import icon
import { GiRamProfile } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
export default function Profile(): JSX.Element {
  return (
    <span className="flex items-center gap-2">
      <GiRamProfile className="text-xl @lg:text-2xl  @4xl:text-3xl @5xl:text-4xl" />
      <span className="flex gap-2 items-center cursor-pointer">
        <span className="hidden @5xl:block">Mohammad Mahdi</span>
        <IoIosArrowDown className="text-base @4xl:text-xl"/>
      </span>
    </span>
  );
}
