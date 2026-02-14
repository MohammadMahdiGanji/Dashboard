// import
import type { TableComponent, TableProps } from "./type";

function Table({ children }: TableProps) {
  return (
    <div
      className="overflow-x-auto bg-[#323232]
    shadow-[0px_0px_5px_rgba(255,255,255,0.2)]
    p-4 rounded-lg max-h-100  scrollbar-custom-table"
    >
      <table
        className="w-full text-left 
       rounded-t-lg overflow-hidden p-2
        h-full
      "
      >
        {children}
      </table>
    </div>
  );
}

export default Table as TableComponent;
