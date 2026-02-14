// import type
import type { ReactNode } from "react";

export interface BottonPropType {
  children: ReactNode;
  className?: string;
  onCLick?: () => void;
}
