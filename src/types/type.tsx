import React from "react";

export interface RouteType {
  path: string;
  element: React.ReactNode;
  children?: {
    path: string;
    element: React.ReactNode;
  }[];
}
