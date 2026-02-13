import type { JSX } from "react";
import type { TableRowProps } from "./type";

export default function TableRow({ children }: TableRowProps): JSX.Element {
  return (
    <tr className="text-[#14FFEC]  text-sm 
    overflow-hidden border-b border-[#14FFEC55]
    shadow-[0px_2px_3px_#14FFEC55] even:bg-[#0D737722]">
      {children}
    </tr>
  );
}
