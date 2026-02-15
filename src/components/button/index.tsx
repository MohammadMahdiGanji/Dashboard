// import type
import type { JSX } from "react";
import type { BottonPropType } from "./type";

export default function Button({
  children,
  onClick,
  className,
}: BottonPropType): JSX.Element {
  return (
    <>
      {onClick ? (
        <button
          onClick={onClick}
          className={`text-[#323232] 
      bg-[#14FFEC] px-4 py-2 rounded-lg
      text-sm cursor-pointer
      hover:bg-[#0D7377] transition-all
      duration-200 hover:text-white
      font-medium ${className}`}
        >
         {children}
        </button>
      ) : (
        <button
          className={`text-[#323232] 
      bg-[#14FFEC] px-4 py-2 rounded-lg
      text-sm cursor-pointer
      hover:bg-[#0D7377] transition-all
      duration-200 hover:text-white
      font-medium ${className}`}
        >
         {children}
        </button>
      )}
    </>
  );
}
