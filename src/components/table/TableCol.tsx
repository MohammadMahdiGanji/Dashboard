// import type
import type { JSX } from "react";
import type { TableColProps } from "./type";

export default function TableCol({ children }: TableColProps): JSX.Element {
  return <td className="p-3">{children}</td>;
}
