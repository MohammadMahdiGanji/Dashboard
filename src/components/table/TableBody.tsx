// import type
import type { JSX } from "react";
import type { TableBodyProps } from "./type";

export default function TableBody({ children }: TableBodyProps): JSX.Element {
  return <tbody>{children}</tbody>;
}
