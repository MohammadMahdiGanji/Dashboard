// import react
import { createContext} from "react";

// import type
import type { ToggleMnueContextType } from "./type";

// create context and initialize value
export const ToggleMenuContext = createContext<ToggleMnueContextType>({
  isOpen: true,
  toggle: () =>{}
});

