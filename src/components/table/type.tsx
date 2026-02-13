import type { JSX, ReactNode } from "react";

export interface TableProps {
  children: ReactNode;
}

export interface TableComponent {
  (props: TableProps): JSX.Element;
  Row: (children: { children: ReactNode }) => JSX.Element;
  Col: (children: { children: ReactNode }) => JSX.Element;
  Title: (children: { children: ReactNode }) => JSX.Element;
  Head: (children: { children: ReactNode }) => JSX.Element;
  Body: (children: { children: ReactNode }) => JSX.Element;
  Footer: (children: { children: ReactNode }) => JSX.Element;
}

export interface TableRowProps extends TableProps {}

export interface TableColProps extends TableProps {}

export interface TableTitleProps extends TableProps {}

export interface TableHeadProps extends TableProps {}

export interface TableBodyProps extends TableProps {}

export interface TableFooterProps extends TableProps {}
