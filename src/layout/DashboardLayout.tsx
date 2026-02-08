// import type
import type {  JSX,  ReactNode } from "react";

// import component
import TopBar from "../components/top-bar";

export default function DashboardLayout({children}:{children:ReactNode}): JSX.Element {
  return (
    <div className="bg-[#212121] h-screen text-[#14FFEC] p-10">
      <TopBar />
      {children}
    </div>
  );
}
