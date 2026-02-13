// import type
import type { JSX } from "react";
import type { TableFooterProps } from "./type";

export default function TableFooter({ children }: TableFooterProps): JSX.Element {
  return <tfoot>{children}</tfoot>;
}
