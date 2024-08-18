import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import Button from "../globalcomponents/Button";
import Input from "../../components/common/Input";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-2.5 basis-64 overflow-y-auto">
        <div className="bg-white rounded-xl flex-1 flex flex-col gap-2.5 p-4 pb-9">
          <img
            src="/images/avatar.png"
            className="rounded-xl aspect-square object-cover"
            alt="Profile"
          />
          <Button className="py-1 text-sm">Byt profil bild</Button>
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
        <div className="grow bg-white rounded-xl p-4 pr-1.5 flex flex-col gap-1 overflow-y-auto">
          <p className="text-xl font-bold">Profil statistik</p>
          <p className="text-xs text-disabled-text pt-2 pb-4">
            Listan, åtskilda av kommatecken, alla ord för vilka du kan välja
            rätt svar.
          </p>
          <div className="grow pr-2 flex flex-col gap-y-1 overflow-y-auto">
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
                        style={{ width: `${statisItem.percent}%` }}
                      ></div>
                    </div>
                    <p className="text-disabled-text font-bold text-xs leading-4">
                      {statisItem.capacity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
        <div className="p-4 flex flex-col gap-6 bg-white rounded-xl">
          <p className="font-bold leading-4">AI inställningar</p>
          <div className="flex flex-col gap-2 pt-4">
            <div className="font-bold">AI-svars mönster</div>
            <Input
              name="answer"
              value="Skriv ett svar"
              className="border border-primary-border/25 py-2.5 px-5 bg-white/30"
            />
            <Input
              name="keyword"
              value="Skriv nyckelord"
              className="border border-primary-border/25 py-2.5 px-5 bg-white/30"
            />
          </div>
          <p className="text-disabled-text text-xs leading-4">
            List, separated by commas, all the words for which you can choose
            the right answer.
          </p>
          <Button className="py-2 px-4 self-start text-base leading-5">
            Lägg till mönster
          </Button>
        </div>
        <div className="grow p-4 pr-1.5 flex flex-col gap-y-2.5 bg-white rounded-xl overflow-y-auto">
          <div className="grow pr-2 flex flex-col gap-y-2.5 overflow-y-auto">
            <div className="flex flex-col gap-2.5">
              <div className="font-bold text-xl">Profil inställningar</div>
              <Input
                name="name"
                value="Johan Anders"
                className="border border-primary-border/25 py-2.5 px-5 bg-white/30"
              />
              <Input
                name="email"
                value="johan.anders@region.se"
                className="border border-primary-border/25 py-2.5 px-5 bg-white/30"
              />
              <Input
                name="address"
                value="Värmlands central sjukhuset"
                className="border border-primary-border/25 py-2.5 px-5 bg-white/30"
              />
            </div>
            <div className="grow flex flex-col justify-end gap-2.5">
              <p className="font-bold text-xl">Lösenord</p>
              <Input
                name="password"
                value="Nuvarande lösenord"
                className="border border-primary-border/25 py-2.5 px-5 bg-white/30"
              />
              <Input
                name="newpass"
                value="Nytt lösenord"
                className="border border-primary-border/25 py-2.5 px-5 bg-white/30"
              />
              <Input
                name="confirmpass"
                value="Upprepa lösenord"
                className="border border-primary-border/25 py-2.5 px-5 bg-white/30"
              />
            </div>
          </div>
          <div className="flex justify-end pt-4 pr-4">
            <Button className="py-2 px-4 bg-primary-background text-base leading-5">
              Ändra lösenord
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-[3] bg-white rounded-xl p-4 pr-1.5">
        <p className="font-bold text-base leading-5 pb-4">AI struktur list</p>
        <div className="grid grid-cols-2 gap-4 overflow-y-auto pr-2 w-full">
          {aiData.map((dataItem, index) => (
            <div
              key={index}
              className="relative py-4 px-6 flex flex-col gap-y-4 rounded-lg border border-disabled-text bg-light-background"
            >
              <span className="w-6 h-6 flex items-center justify-center absolute top-2.5 right-2.5 text-primary-background text-xl">
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