import { useState } from "react";
import { MdOutlineMail } from "react-icons/md"; // Importing mail icon for use in email column

import Button from "../../components/common/Button"; // Common button component
import Table, { type IColumn, type IRow } from "../../components/common/Table"; // Common table component with column and row types
import CompanyCreateDialog from "./CompanyCreateDialog"; // Dialog component for creating a new company

// Interface defining the shape of company data
interface ICompany {
  name: string;
  email: string;
  phone?: string; // Optional phone property
  description: string;
  date: string;
  use_time: string;
  status: string;
  children?: ICompany[]; // Optional nested companies
}

// Configuration for table columns, defining how each column should render
const companyColumns: IColumn[] = [
  {
    name: "name",
    title: "Företag namn", // Swedish for "Company Name"
    width: 350,
  },
  {
    name: "description",
    title: "Beskrivning", // Swedish for "Description"
    width: 285,
    render: (row: IRow) => (
      <p className="text-xs leading-4 line-clamp-2">{row.description}</p> // Display description in a small, truncated paragraph
    ),
  },
  {
    name: "email",
    title: "E-post", // Swedish for "Email"
    align: "center",
    width: 235,
    render: (row: IRow) => (
      <div className="py-1.5 flex items-center gap-x-2.5">
        <p className="font-semibold text-sm leading-4">{row.email}</p>
        {row.email !== "-" && (
          <span className="shrink-0 w-6 h-6 flex items-center justify-center">
            <MdOutlineMail size={20} /> {/* Display mail icon if email is provided */}
          </span>
        )}
      </div>
    ),
  },
  {
    name: "date",
    title: "Datum", // Swedish for "Date"
    align: "center",
    width: 135,
    render: (row: IRow) => (
      <p className="py-1.5 font-light text-sm leading-4 text-center">
        {row.date} {/* Display the date in a centered paragraph */}
      </p>
    ),
  },
  {
    name: "use_time",
    title: "Tid användning", // Swedish for "Time Usage"
    align: "center",
    width: 235,
    render: (row: IRow) => (
      <p className="py-1.5 font-semibold text-sm leading-4 text-center">
        {row.use_time} {/* Display time usage in a centered paragraph */}
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
        {row.status} {/* Display status in a centered paragraph */}
      </p>
    ),
  },
];

// Dummy data for demonstration and development purposes
const dummyCompanyData: ICompany[] = [
  {
    name: "Karlstad sjukhuset",
    description:
      "Karlstad Sjukhus är en välrenommerad vårdinrättning belägen i Karlstad, Sverige. Det är en del av Region Värmland och erbjuder ett brett spektrum av medicinska tjänster och specialiserad vård inom olika medicinska områden. Sjukhuset är känt för sin höga standard inom patientvård, medicinsk forskning och utbildning av vårdpersonal. Det erbjuder moderna faciliteter och avancerad medicinsk teknik för att säkerställa högkvalitativ vård och behandling för sina patienter.",
    email: "info@karlstadsjukhuset.se",
    date: "23-12-2024",
    use_time: "40h",
    status: "Active",
    children: [
      // Nested entries representing sub-units or individuals associated with the company
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
  // Additional dummy companies omitted for brevity
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

// Main dashboard component for managing and displaying company information
function Dashboard() {
  const [companyData, setCompanyData] = useState<ICompany[]>(dummyCompanyData); // State to manage the list of companies
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false); // State to manage the visibility of the create dialog

  // Handler to add a new company to the state
  const handleCompanyCreate = (company: ICompany) => {
    setCompanyData([...companyData, company]);
  };

  return (
    <>
      {/* Main content area, using flex and grid layouts */}
      <div className="grow flex flex-col gap-y-4 overflow-y-auto">
        {/* Section for creating a new company */}
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="py-8 flex flex-col items-center justify-between bg-primary-background rounded-lg">
            <p className="text-center text-white text-xl leading-6">
              Nya företag ?
            </p>
            <Button
              color="secondary"
              onClick={() => {
                setIsCreateOpen(true); // Open the create company dialog
              }}
              className="w-[250px] text-primary-text"
            >
              Skapa ett företag
            </Button>
          </div>
          {/* App statistics display */}
          <div className="col-span-3 py-2 px-4 pb-[26px] flex flex-col gap-y-6 bg-white rounded-lg">
            <p className="font-semibold text-xl leading-6">App statistik</p>
            <div className="w-full grid grid-cols-4 gap-x-6">
              {/* Displaying various stats such as number of companies, users, etc. */}
              <div className="pt-4 pb-[18px] flex flex-col items-center gap-y-2.5 text-white bg-primary-background rounded-lg">
                <p className="text-base leading-5">Företag</p>
                <p className="font-bold text-3xl leading-9">100</p>
              </div>
              <div className="pt-4 pb-[18px] flex flex-col items-center gap-y-2.5 text-white bg-danger-background rounded-lg">
                <p className="text-base leading-5">Användare</p>
                <p className="font-bold text-3xl leading-9">345</p>
              </div>
              <div className="pt-4 pb-[18px] flex flex-col items-center gap-y-2.5 text-white bg-focused-background rounded-lg">
                <p className="text-base leading-5">Patient</p>
                <p className="font-bold text-3xl leading-9">1200</p>
              </div>
              <div className="pt-4 pb-[18px] flex flex-col items-center gap-y-2.5 text-white bg-primary-text rounded-lg">
                <p className="text-base leading-5">Utrymme</p>
                <p className="font-bold text-3xl leading-9">12Gb / 120Gb</p>
              </div>
            </div>
          </div>
        </div>
        {/* Section displaying usage report in a table format */}
        <div className="grow py-4 px-7 flex flex-col gap-y-2.5 bg-white rounded-lg overflow-y-auto">
          <p className="font-semibold text-xl leading-6">Användning rapport</p>
          <Table rows={companyData} columns={companyColumns} /> {/* Table of company data */}
        </div>
      </div>
      {/* Dialog component for creating a new company */}
      <CompanyCreateDialog
        open={isCreateOpen}
        onClose={() => {
          setIsCreateOpen(false); // Close the create company dialog
        }}
        onCreate={handleCompanyCreate} // Pass the handler to add new company
      />
    </>
  );
}

export default Dashboard; // Exporting the main Dashboard component
export { type ICompany }; // Exporting the ICompany type for reuse
