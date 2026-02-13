// import component
import Table from "./Table";
import TableRow from "./TableRow";
import TableCol from "./TableCol";
import TableTitle from "./TableTitle";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

// compound pattern
Table.Head = TableHead;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.Col = TableCol;
Table.Title = TableTitle;

// export component
export {
  Table,
  TableRow,
  TableCol,
  TableTitle,
  TableHead,
  TableBody,
  TableFooter,
};
