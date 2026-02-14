// import type
import type { ReactNode } from "react";

export interface ContextType {
  value: boolean;
  toggle: () => void;
}

export interface ProviderPropType {
  children:ReactNode
}

export interface ReturnUseToggleForDataType{
  value: boolean;
  toggle: () => void;
}