import type { JSX } from "react";
import type { TableTitleProps } from "./type";

export default function TableTitle({ children }: TableTitleProps): JSX.Element {
  return <th className="p-3 bg-[#212121]">{children}</th>;
}
