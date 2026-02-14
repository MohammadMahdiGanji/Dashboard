// import react
import { createContext } from "react";

// import type
import type { ContextType } from "./type";

const inicialize: ContextType = {
  value: false,
  toggle: () => {},
};

export const ToggleForDataContext = createContext<ContextType>(inicialize);
