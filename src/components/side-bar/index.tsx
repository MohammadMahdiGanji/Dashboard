// import type
import type { JSX } from "react";

// import icon
import { LuLayoutDashboard } from "react-icons/lu";
import { GiRamProfile } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";

// import component
import Menu from "./Menu";

// import hook context togggle menu
import { useToggleMenu } from "../../context/toggle-mnue/useToggleMenu";

export default function index(): JSX.Element {
  const { isOpen } = useToggleMenu();
  return (
    <aside
      className={`bg-[#323232] z-100  bottom-0 top-0 rounded-r-lg md:rounded-lg
    md:h-162 ${
      isOpen
        ? `fixed left-0 w-50 p-4 md:sticky md:top-10 md:w-70 lg:w-80`
        : "fixed -left-100 w-0 md:relative"
    }
    transition-all duration-200`}
    >
      <span className="flex items-center gap-3">
        <LuLayoutDashboard
          className="text-xl @3xl:text-2xl  @4xl:text-3xl 
         @5xl:text-4xl "
        />
        <span className="font-bold text-md tracking-wider @3xl:text-2xl">
          Dashboard
        </span>
      </span>
      <span className="flex justify-center mt-7 @3xl:mt-15">
        <GiRamProfile className="text-6xl 5xl:text-8xl" />
      </span>
      <span className="flex justify-center mt-3 font-bold ">
        Mohammad Mahdi
      </span>
      <Menu />
      <div
        className="flex items-center  gap-1 absolute bottom-4 left-4
         mx-auto text-center text-pink-600 font-bold cursor-pointer"
      >
        <IoLogOut size={24} />
        <span>Log Out</span>
      </div>
    </aside>
  );
}
