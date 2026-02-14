// import context
import { ToggleForDataContext } from "./toggleForDataContext";

// import type:
import type { JSX } from "react";
import type { ProviderPropType } from "./type";

// import custome hokk
import { useToggle } from "../../hooks/use-toggle/useToggle";


export function ToggleForDataProvider ({children}:ProviderPropType):JSX.Element {
  const {value, toggle} = useToggle()

  return <ToggleForDataContext.Provider value={{value,toggle}}>{children}</ToggleForDataContext.Provider>
}