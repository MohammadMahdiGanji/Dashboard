// import react
import { useState } from "react";

// import type
import type { RetrunFunctionType } from "./type";

export function useToggle():RetrunFunctionType {
  const [value, setValue] = useState<boolean>(false);

  const toggle = () => {
    setValue(pre => !pre)
  }

  return {value, toggle}
}
