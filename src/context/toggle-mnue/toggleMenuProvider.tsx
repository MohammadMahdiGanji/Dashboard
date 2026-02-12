// import Type
import type { ReactNode, JSX } from "react";

// import React
import { useState } from "react";

// import context
import { ToggleMenuContext } from "./toggleMenuContext";

// create provider
export default function ToggleMenuProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isOpen, setIsopen] = useState<boolean>(true);

  function toggle() {
    setIsopen((pre) => !pre);
  }

  return (
    <ToggleMenuContext.Provider value={{ isOpen: isOpen, toggle: toggle }}>
      {children}
    </ToggleMenuContext.Provider>
  );
}
