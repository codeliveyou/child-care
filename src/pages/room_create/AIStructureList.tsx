import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import Toggle from "../../components/common/Toggle";

// Sample AI data
const aiData = [
  // Array of objects with AI data, each having title, description, and keywords
  {
    title: "Fråga om huvudverk",
    description: "Jag kan kontakta läkare och han kan hjälpa dig",
    keywords: [
      "Dricka",
      "Krossa",
      "Naked",
      "Violence",
      "Adults",
      "Stress",
      "Voltage",
    ],
  },
  // More objects...
  {
    title: "Fråga om huvudverk",
    description: "Jag kan kontakta läkare och han kan hjälpa dig",
    keywords: [
      "Dricka",
      "Krossa",
      "Naked",
      "Violence",
      "Adults",
      "Stress",
      "Voltage",
    ],
  },
  {
    title: "Fråga om huvudverk",
    description: "Jag kan kontakta läkare och han kan hjälpa dig",
    keywords: [
      "Dricka",
      "Krossa",
      "Naked",
      "Violence",
      "Adults",
      "Stress",
      "Voltage",
    ],
  },
  {
    title: "Fråga om huvudverk",
    description: "Jag kan kontakta läkare och han kan hjälpa dig",
    keywords: [
      "Dricka",
      "Krossa",
      "Naked",
      "Violence",
      "Adults",
      "Stress",
      "Voltage",
    ],
  },
  {
    title: "Fråga om huvudverk",
    description: "Jag kan kontakta läkare och han kan hjälpa dig",
    keywords: [
      "Dricka",
      "Krossa",
      "Naked",
      "Violence",
      "Adults",
      "Stress",
      "Voltage",
    ],
  },
  {
    title: "Fråga om huvudverk",
    description: "Jag kan kontakta läkare och han kan hjälpa dig",
    keywords: [
      "Dricka",
      "Krossa",
      "Naked",
      "Violence",
      "Adults",
      "Stress",
      "Voltage",
    ],
  },
  {
    title: "Fråga om huvudverk",
    description: "Jag kan kontakta läkare och han kan hjälpa dig",
    keywords: [
      "Dricka",
      "Krossa",
      "Naked",
      "Violence",
      "Adults",
      "Stress",
      "Voltage",
    ],
  },
  {
    title: "Fråga om huvudverk",
    description: "Jag kan kontakta läkare och han kan hjälpa dig",
    keywords: [
      "Dricka",
      "Krossa",
      "Naked",
      "Violence",
      "Adults",
      "Stress",
      "Voltage",
    ],
  },
];

interface IAIDataItem {
  title: string;
  description: string;
  keywords: string[];
}

// Component to display each AI data item
function AIDataItem({ title, description, keywords }: IAIDataItem) {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <div className="relative py-4 px-6 flex flex-col gap-y-4 rounded-lg border border-disabled-text bg-light-background">
      {/* Close icon to remove or hide the item */}
      <span className="w-6 h-6 flex items-center justify-center absolute top-2.5 right-2.5 text-primary-background text-xl">
        <MdClose />
      </span>
      {/* Title of the AI data item */}
      <p className="font-bold leading-5">{title}</p>
      {/* Description of the AI data item */}
      <p className="text-sm leading-4">{description}</p>
      {/* Keywords associated with the AI data item */}
      <p className="font-bold leading-5">Nyckelord:</p>
      <div className="flex flex-wrap gap-1">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="text-sm leading-4 bg-white rounded-[4px] py-1 px-2"
          >
            {keyword}
          </span>
        ))}
      </div>
      {/* Toggle button to enable or disable the AI data item */}
      <div className="flex justify-end">
        <Toggle
          isToggled={isToggle}
          handleToggle={setIsToggle}
          className="bg-disabled-text"
          spinClass="bg-light-background"
        />
      </div>
    </div>
  );
}

// Main component to list all AI data items
function AIStructureList() {
  const navigate = useNavigate();

  return (
    <div className="p-4 pr-1.5 h-full flex flex-col bg-white rounded-2xl overflow-y-auto">
      <div className="grow flex flex-col gap-y-4 overflow-y-auto">
        <div className="py-2 pr-2 flex items-center justify-between">
          {/* Back button to navigate to the previous step */}
          <div
            className="flex gap-x-2.5 cursor-pointer"
            onClick={() => {
              navigate("/room/create/onboarding#3");
            }}
          >
            <span className="w-6 h-6 flex items-center justify-center">
              <FaChevronLeft />
            </span>
            <p className="text-xl leading-6">Tillbaka</p>
          </div>
          <p className="font-bold text-xl leading-6">AI struktur list</p>
        </div>
        {/* Grid layout to display AI data items */}
        <div className="pr-2 grow grid grid-cols-4 place-content-start gap-4 overflow-y-auto">
          {aiData.map((dataItem, index) => (
            <AIDataItem key={index} {...dataItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIStructureList;
