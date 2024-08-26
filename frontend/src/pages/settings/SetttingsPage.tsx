import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

// Static data for different categories with their progress and capacity
const statisData = [
  {
    name: "Dokumentet",
    percent: 40,
    capacity: "3Gb",
  },
  {
    name: "Video",
    percent: 20,
    capacity: "3Gb",
  },
  {
    name: "Meddelande",
    percent: 40,
    capacity: "3Gb",
  },
  {
    name: "Kalendar",
    percent: 40,
    capacity: "3Gb",
  },
];

// Static data for counts of different entities
const statisCountData = [
  {
    name: "Patienter",
    count: 34,
  },
  {
    name: "Gäst / Deltagare",
    count: 12,
  },
];

// Data for AI-related items including title, description, and keywords
const aiData = [
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
  // More items with similar structure...
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

const SettingsPage = () => {
  return (
    <motion.div
      className="flex pt-0 gap-4 w-full h-full text-primary-text"
      initial={{ opacity: 0 }} // Initial opacity for fade-in animation
      animate={{ opacity: 1 }} // Animate to full opacity
      exit={{ opacity: 0 }} // Fade out on exit
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="flex flex-col gap-2.5 basis-64 overflow-y-auto">
        {/* User profile section */}
        <div className="bg-white rounded-xl flex-1 flex flex-col gap-2.5 p-4 pb-9">
          <img
            src="/images/avatar.png"
            className="rounded-xl aspect-square object-cover"
            alt="Profile" // Alt text for the profile image
          />
          <Button size="compress" className="font-bold">
            Byt profil bild
          </Button>
          <div className="pt-4">
            <div className="text-center text-lg font-bold text-primary-background">
              Johan Anders
            </div>
            <div className="text-center text-disabled-text text-xs">
              johan.anders@region.se
            </div>
            <div className="text-center text-sm">
              Värmlands central sjukhuset
            </div>
          </div>
        </div>
        {/* Profile statistics section */}
        <div className="grow bg-white rounded-xl p-4 pr-1.5 flex flex-col gap-1 overflow-y-auto">
          <p className="text-xl font-bold">Profil statistik</p>
          <p className="text-xs text-disabled-text pt-2 pb-4">
            Listan, åtskilda av kommatecken, alla ord för vilka du kan välja
            rätt svar.
          </p>
          <div className="grow pr-2 flex flex-col gap-y-1 overflow-y-auto">
            {/* Statistics data */}
            <div className="flex flex-col gap-y-1">
              {statisData.map((statisItem, index) => (
                <div key={index} className="flex flex-col gap-y-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm leading-4">
                      {statisItem.name}
                    </p>
                    <span className="w-6 h-6 flex items-center justify-center text-disabled-text">
                      <FaChevronRight />
                    </span>
                  </div>
                  <div className="flex items-center gap-x-7">
                    <div className="grow bg-light-background relative rounded-[50px] overflow-hidden h-0.5">
                      <div
                        className="bg-primary-background absolute h-full"
                        style={{ width: `${statisItem.percent}%` }} // Dynamic width based on percent
                      ></div>
                    </div>
                    <p className="text-disabled-text font-bold text-xs leading-4">
                      {statisItem.capacity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Statistics count data */}
            <div className="flex flex-col gap-y-1">
              {statisCountData.map((statisItem, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-x-2">
                    <p className="font-bold text-sm leading-4">
                      {statisItem.name}
                    </p>
                    <span className="text-disabled-text text-sm leading-4">
                      {statisItem.count}
                    </span>
                  </div>
                  <span className="text-disabled-text">
                    <FaChevronRight />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 flex-1">
        {/* AI settings section */}
        <div className="p-4 flex flex-col gap-6 bg-white rounded-xl">
          <p className="font-bold leading-4">AI inställningar</p>
          <div className="flex flex-col gap-2 pt-4">
            <div className="font-bold">AI-svars mönster</div>
            <Input
              name="answer"
              placeholder="Skriv ett svar"
              className="border border-primary-border/25 bg-white/30"
            />
            <Input
              name="keyword"
              placeholder="Skriv nyckelord"
              className="border border-primary-border/25 bg-white/30"
            />
          </div>
          <p className="text-disabled-text text-xs leading-4">
            List, separated by commas, all the words for which you can choose
            the right answer.
          </p>
          <div className="flex">
            <Button size="compress">Lägg till mönster</Button>
          </div>
        </div>
        {/* Profile settings section */}
        <div className="grow p-4 pr-1.5 flex flex-col gap-y-2.5 bg-white rounded-xl overflow-y-auto">
          <div className="grow pr-2 flex flex-col gap-y-2.5 overflow-y-auto">
            <div className="flex flex-col gap-2.5">
              <div className="font-bold text-xl">Profil inställningar</div>
              <Input
                name="name"
                placeholder="Johan Anders"
                className="border border-primary-border/25 bg-white/30"
              />
              <Input
                name="email"
                placeholder="johan.anders@region.se"
                className="border border-primary-border/25 bg-white/30"
              />
              <Input
                name="address"
                placeholder="Värmlands central sjukhuset"
                className="border border-primary-border/25 bg-white/30"
              />
            </div>
            <div className="grow flex flex-col justify-end gap-2.5">
              <p className="font-bold text-xl">Lösenord</p>
              <Input
                name="password"
                placeholder="Nuvarande lösenord"
                className="border border-primary-border/25 bg-white/30"
              />
              <Input
                name="newpass"
                placeholder="Nytt lösenord"
                className="border border-primary-border/25 bg-white/30"
              />
              <Input
                name="confirmpass"
                placeholder="Upprepa lösenord"
                className="border border-primary-border/25 bg-white/30"
              />
            </div>
          </div>
          <div className="flex justify-end pt-4 pr-4">
            <Button size="compress">Ändra lösenord</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-[3] bg-white rounded-xl p-4 pr-1.5">
        <p className="font-bold text-base leading-5 pb-4">AI struktur list</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 overflow-y-auto pr-2 w-full">
          {/* Display AI-related items in a grid */}
          {aiData.map((dataItem, index) => (
            <div
              key={index}
              className="relative py-4 px-6 flex flex-col gap-y-4 rounded-lg border border-disabled-text bg-light-background"
            >
              <span className="w-6 h-6 flex items-center justify-center absolute top-2.5 right-2.5 text-focused-background hover:text-primary-background text-xl cursor-pointer">
                <MdClose />
              </span>
              <p className="font-bold leading-5">{dataItem.title}</p>
              <p className="text-sm leading-4">{dataItem.description}</p>
              <p className="font-bold leading-5">Nyckelord:</p>
              <div className="flex flex-wrap gap-1">
                {dataItem.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="text-sm leading-4 bg-white rounded-[4px] py-1 px-2"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsPage;
