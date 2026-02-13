// import type
import type { JSX } from "react";
import type { TableHeadProps } from "./type";

export default function TableHead({ children }: TableHeadProps): JSX.Element {
  return <thead>{children}</thead>;
}
