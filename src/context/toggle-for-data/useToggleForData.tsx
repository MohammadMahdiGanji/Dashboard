// import react
import { useContext } from "react";

// import context
import { ToggleForDataContext } from "./toggleForDataContext";

// import type
import type { ReturnUseToggleForDataType } from "./type";
import type { ContextType } from "./type";

export function useToogleForData(): ReturnUseToggleForDataType {
  const { value, toggle } = useContext<ContextType>(ToggleForDataContext);

  return { value, toggle };
}
