// import type
import { type JSX } from "react";

// import icon
import { LuLayoutDashboard } from "react-icons/lu";

// import component
import TopBarSearch from "./TopBarSearch";
import Profile from "./Profile";
import Notification from "./Notification";
import HamburgerBar from "./HamburgerBar";

export default function TopBar(): JSX.Element {
  return (
    <>
      <header className="bg-[rgb(50,50,50)] z-20 p-3 rounded-lg sticky top-10 left-0 right-0 mb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="">
              <LuLayoutDashboard className="text-2xl @3xl:text-4xl" />
            </span>
            <h1 className="font-bold text-sm tracking-wider @3xl:text-base @4xl:text-xl @6xl:text-2xl">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-2 @3xl:gap-5 @4xl:gap-6 @5xl:gap-8">
            <div className="hidden @2xl:block max-w-60 @6xl:min-w-60">
              <TopBarSearch />
            </div>
            <Profile />
            <Notification />
            <HamburgerBar />
          </div>
        </div>
        <div className="flex w-full mt-3 @2xl:hidden">
          <TopBarSearch />
        </div>
      </header>
      <div className="fixed h-20 w-full top-0 z-10 lef-0 right-0 bg-[#212121]"></div>
    </>
  );
}
