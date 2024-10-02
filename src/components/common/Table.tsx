import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

// Define the structure for rows in the table
interface IRow extends Record<string, any> {
  // Optional child rows for expandable rows
  children?: IRow[];
}

// Define the structure for columns in the table
interface IColumn {
  // The property name of the column in the row data
  name: string;
  // The display title of the column
  title: string;
  // Optional alignment of the column content
  align?: "left" | "center" | "right";
  // Optional width of the column
  width?: number;
  // Optional custom rendering function for cell content
  render?: (row: IRow) => React.ReactNode;
}

// Props for TableHead component
interface TableHeadProps {
  columns: IColumn[];
}

// Props for TableRow component
interface TableRowProps {
  columns: IColumn[];
  row: IRow;
}

// Props for TableBody and Table components
interface TableProps {
  columns: IColumn[];
  rows: IRow[];
}

// Component to render the table header
function TableHead({ columns }: TableHeadProps) {
  return (
    <div className="flex gap-x-2.5">
      {columns.map((column: IColumn, index: number) => (
        <div
          key={index}
          style={{ width: column.width }}
          className={twMerge(
            "py-2.5 px-2 flex font-semibold text-base leading-5 shrink-0",
            column.align === "center"
              ? "justify-center"
              : column.align === "right"
              ? "justify-end"
              : ""
          )}
        >
          {column.title}
        </div>
      ))}
    </div>
  );
}

// Component to render a table row, with expandable functionality
function TableRow({ columns, row }: TableRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={twMerge(
        "w-full flex flex-col",
        !row.children
          ? "text-black odd:bg-white even:bg-[#F1F1F1] outline-none"
          : ""
      )}
    >
      <div
        className={twMerge(
          "py-4 flex items-center gap-x-2.5",
          row.children && isExpanded
            ? "bg-primary-background text-light-background rounded-[4px]"
            : row.children && !isExpanded
            ? "border-b border-light-background"
            : ""
        )}
      >
        {columns.map((column: IColumn, index: number) => (
          <div
            key={index}
            style={{ width: column.width }}
            className={twMerge(
              "px-2 flex",
              row.children && index === 0
                ? "flex items-center gap-x-2.5"
                : !row.children && index === 0
                ? "pl-12"
                : "",
              column.align === "center"
                ? "justify-center"
                : column.align === "right"
                ? "justify-end"
                : ""
            )}
          >
            {row.children && index === 0 && (
              <span
                className="w-6 h-6 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
              >
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            )}
            {column.render ? (
              column.render(row)
            ) : (
              <p
                className={twMerge(
                  "font-light",
                  row.children ? "text-base leading-5" : "text-sm leading-4",
                  column.align === "center"
                    ? "text-center"
                    : column.align === "right"
                    ? "text-right"
                    : ""
                )}
              >
                {row[column.name]}
              </p>
            )}
          </div>
        ))}
      </div>
      {/* Render child rows if expanded */}
      {isExpanded &&
        row.children &&
        row.children.map((row: IRow, index: number) => (
          <TableRow key={index} columns={columns} row={row} />
        ))}
    </div>
  );
}

// Component to render the table body
function TableBody({ rows, columns }: TableProps) {
  return (
    <div className="grow flex flex-col overflow-y-auto">
      {rows.map((row: IRow, index: number) => (
        <TableRow key={index} columns={columns} row={row} />
      ))}
    </div>
  );
}

// Component to render the entire table, including head and body
function Table({ rows, columns }: TableProps) {
  return (
    <div className="grow flex flex-col overflow-y-auto">
      <TableHead columns={columns} />
      <TableBody columns={columns} rows={rows} />
    </div>
  );
}

export default Table;
export { type IColumn, type IRow };
