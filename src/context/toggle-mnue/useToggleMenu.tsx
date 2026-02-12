import type { ToggleMnueContextType } from "./type.tsx";

// import Context
import { ToggleMenuContext } from "./toggleMenuContext";

// import React
import { useContext } from "react";

export function useToggleMenu() {
  const context = useContext<ToggleMnueContextType>(ToggleMenuContext);

  if (!context) {
    throw new Error("useToggleMenu must be  used inside toggleMenuProvider");
  }

  return context;
}
