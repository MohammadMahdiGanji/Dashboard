// import type
import { type JSX } from "react";

// import icon
import { LuLayoutDashboard } from "react-icons/lu";

// import component
import TopBarSearch from "./TopBarSearch";
import Profile from "./Profile";
import Notification from "./Notification";

export default function TopBar(): JSX.Element {
  return (
    <header className="bg-[rgb(50,50,50)] p-3 rounded-lg">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LuLayoutDashboard size={40} />
          <h1 className="font-bold text-xl tracking-wider">Dashboard</h1>
        </div>
        <div className="flex items-center gap-10">
          <TopBarSearch />
          <Profile />
          <Notification />
        </div>
      </nav>
    </header>
  );
}
