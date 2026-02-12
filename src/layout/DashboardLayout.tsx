// import type
import type { JSX, ReactNode } from "react";

// import component
import TopBar from "../components/top-bar/index";
import SideBar from "../components/side-bar/index";


// import hook context toggle menu
import { useToggleMenu } from "../context/toggle-mnue/useToggleMenu";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { isOpen } = useToggleMenu();
  return (
    <div
      className={`@container bg-[#212121]  text-[#14FFEC]
    flex p-10 ${isOpen ? "gap-5" : "gap-0"}`}
    >
      <SideBar />
      <div className="w-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
}
