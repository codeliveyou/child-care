import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface IRow extends Record<string, any> {
  children?: IRow[];
}

interface IColumn {
  name: string;
  title: string;
  align?: "left" | "center" | "right";
  width?: number;
  render?: (row: IRow) => React.ReactNode;
}

interface TableHeadProps {
  columns: IColumn[];
}

interface TableRowProps {
  columns: IColumn[];
  row: IRow;
}

interface TableBodyProps {
  columns: IColumn[];
  rows: IRow[];
}

const columns: IColumn[] = [
  {
    name: "name",
    title: "Företag namn",
    width: 350,
  },
  {
    name: "description",
    title: "Beskrivning",
    width: 285,
    render: (row: IRow) => (
      <p className="text-xs leading-4 line-clamp-2">{row.description}</p>
    ),
  },
  {
    name: "email",
    title: "E-post",
    align: "center",
    width: 235,
    render: (row: IRow) => (
      <div className="py-1.5 flex items-center gap-x-2.5">
        <p className="font-semibold text-sm leading-4">{row.email}</p>
        {row.email !== "-" && (
          <span className="shrink-0 w-6 h-6 flex items-center justify-center">
            <MdOutlineMail size={20} />
          </span>
        )}
      </div>
    ),
  },
  {
    name: "date",
    title: "Datum",
    align: "center",
    width: 135,
    render: (row: IRow) => (
      <p className="py-1.5 font-light text-sm leading-4 text-center">
        {row.date}
      </p>
    ),
  },
  {
    name: "use_time",
    title: "Tid användning",
    align: "center",
    width: 235,
    render: (row: IRow) => (
      <p className="py-1.5 font-semibold text-sm leading-4 text-center">
        {row.use_time}
      </p>
    ),
  },
  {
    name: "status",
    title: "Status",
    align: "center",
    width: 135,
    render: (row: IRow) => (
      <p className="py-1.5 font-semibold text-sm leading-4 text-center">
        {row.status}
      </p>
    ),
  },
];

const rows: IRow[] = [
  {
    name: "Karlstad sjukhuset",
    description:
      "Karlstad Sjukhus är en välrenommerad vårdinrättning belägen i Karlstad, Sverige. Det är en del av Region Värmland och erbjuder ett brett spektrum av medicinska tjänster och specialiserad vård inom olika medicinska områden. Sjukhuset är känt för sin höga standard inom patientvård, medicinsk forskning och utbildning av vårdpersonal. Det erbjuder moderna faciliteter och avancerad medicinsk teknik för att säkerställa högkvalitativ vård och behandling för sina patienter.",
    email: "info@karlstadsjukhuset.se",
    date: "23-12-2024",
    use_time: "40h",
    status: "Active",
    children: [
      {
        name: "Johan Carlsson",
        description: "Math teacher",
        email: "-",
        date: "23-12-2024",
        use_time: "10h",
        status: "Active",
      },
      {
        name: "Elin Nilsson",
        description: "English teacher",
        email: "Elin@karlstadsjukhuset.se",
        date: "23-08-2024",
        use_time: "10h",
        status: "Active",
      },
      {
        name: "Stefan Larsson",
        description: "Sweden teacher",
        email: "S.larsson@karlstadsjukhuset.se",
        date: "23-06-2024",
        use_time: "10h",
        status: "Active",
      },
      {
        name: "Stefan Berg",
        description: "Sweden teacher",
        email: "S.berg@karlstadsjukhuset.se",
        date: "23-06-2024",
        use_time: "10h",
        status: "Active",
      },
    ],
  },
  {
    name: "Karlstad School",
    description:
      "Karlstad Sjukhus är en välrenommerad vårdinrättning belägen i Karlstad, Sverige. Det är en del av Region Värmland och erbjuder ett brett spektrum av medicinska tjänster och specialiserad vård inom olika medicinska områden. Sjukhuset är känt för sin höga standard inom patientvård, medicinsk forskning och utbildning av vårdpersonal. Det erbjuder moderna faciliteter och avancerad medicinsk teknik för att säkerställa högkvalitativ vård och behandling för sina patienter.",
    email: "info@karlstadsjukhuset.se",
    date: "23-12-2024",
    use_time: "40h",
    status: "Active",
    children: [],
  },
  {
    name: "Karlstad School",
    description:
      "Karlstad Sjukhus är en välrenommerad vårdinrättning belägen i Karlstad, Sverige. Det är en del av Region Värmland och erbjuder ett brett spektrum av medicinska tjänster och specialiserad vård inom olika medicinska områden. Sjukhuset är känt för sin höga standard inom patientvård, medicinsk forskning och utbildning av vårdpersonal. Det erbjuder moderna faciliteter och avancerad medicinsk teknik för att säkerställa högkvalitativ vård och behandling för sina patienter.",
    email: "info@karlstadsjukhuset.se",
    date: "23-12-2024",
    use_time: "40h",
    status: "Active",
    children: [],
  },
  {
    name: "Karlstad School",
    description:
      "Karlstad Sjukhus är en välrenommerad vårdinrättning belägen i Karlstad, Sverige. Det är en del av Region Värmland och erbjuder ett brett spektrum av medicinska tjänster och specialiserad vård inom olika medicinska områden. Sjukhuset är känt för sin höga standard inom patientvård, medicinsk forskning och utbildning av vårdpersonal. Det erbjuder moderna faciliteter och avancerad medicinsk teknik för att säkerställa högkvalitativ vård och behandling för sina patienter.",
    email: "info@karlstadsjukhuset.se",
    date: "23-12-2024",
    use_time: "40h",
    status: "Active",
    children: [],
  },
  {
    name: "Karlstad School",
    description:
      "Karlstad Sjukhus är en välrenommerad vårdinrättning belägen i Karlstad, Sverige. Det är en del av Region Värmland och erbjuder ett brett spektrum av medicinska tjänster och specialiserad vård inom olika medicinska områden. Sjukhuset är känt för sin höga standard inom patientvård, medicinsk forskning och utbildning av vårdpersonal. Det erbjuder moderna faciliteter och avancerad medicinsk teknik för att säkerställa högkvalitativ vård och behandling för sina patienter.",
    email: "info@karlstadsjukhuset.se",
    date: "23-12-2024",
    use_time: "40h",
    status: "Active",
    children: [],
  },
];

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
      {isExpanded &&
        row.children &&
        row.children.map((row: IRow, index: number) => (
          <TableRow key={index} columns={columns} row={row} />
        ))}
    </div>
  );
}

function TableBody({ columns, rows }: TableBodyProps) {
  return (
    <div className="grow flex flex-col overflow-y-auto">
      {rows.map((row: IRow, index: number) => (
        <TableRow key={index} columns={columns} row={row} />
      ))}
    </div>
  );
}

function Table() {
  return (
    <div className="grow flex flex-col overflow-y-auto">
      <TableHead columns={columns} />
      <TableBody columns={columns} rows={rows} />
    </div>
  );
}

export default Table;
