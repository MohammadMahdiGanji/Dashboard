// import type
import type { JSX } from "react";

// import icon
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
export default function Profile(): JSX.Element {
  return (
    <span className="flex items-center gap-3">
      <GiPlagueDoctorProfile size={40} />
      <span className="flex gap-2 items-center cursor-pointer">
        <span>Mohammad Mahdi</span>
        <IoIosArrowDown size={20}/>
      </span>
    </span>
  );
}
