import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import Input from "../globalcomponents/Input";
import SendSVG from "../../assets/send.svg?react";
import RoomCall from "../../components/room/RoomCall";
import ShareDialog from "../../components/room/ShareDialog";
import ActionButton from "../../components/common/ActionButton";
import ChatItem from "./components/ChatItem";

interface ITabItem {
  title: string;
  key: string;
}

const tabItems: ITabItem[] = [
  {
    title: "Patient",
    key: "patient",
  },
  {
    title: "Gäst",
    key: "guest",
  },
];

const patientMessages = [
  {
    name: "Elsa",
    messages: [
      {
        user: "AI-Alex",
        role: "AI",
        message: "Hej Elsa! Vad gör du?",
      },
      {
        user: "Elsa",
        role: "patient",
        message: "Hej! Pratar du med mig?",
      },
    ],
  },
];

const guestMessages = [
  {
    name: "Anna",
    messages: [
      {
        user: "Johan Prompt",
        role: "me",
        message:
          "Hej, Anna. Jag behöver din expertis när det gäller en ung patient som jag såg tidigare idag. Det är en 6-årig pojke med återkommande magbesvär och frekventa buksmärtor.",
      },
      {
        user: "Anna",
        role: "guest",
        message:
          "Hej, Johan. Jag är här för att hjälpa till med det. Berätta mer om patienten och hans symptom.",
      },
    ],
  },
  {
    name: "Lukas",
    messages: [
      {
        user: "Johan Prompt",
        role: "me",
        message:
          "Hej, Lukas. Jag behöver din expertis när det gäller en ung patient som jag såg tidigare idag. Det är en 6-årig pojke med återkommande magbesvär och frekventa buksmärtor.",
      },
      {
        user: "Lukas",
        role: "guest",
        message:
          "Hej, Lukas. Jag är här för att hjälpa till med det. Berätta mer om patienten och hans symptom.",
      },
    ],
  },
  {
    name: "Sara",
    messages: [
      {
        user: "Johan Prompt",
        role: "me",
        message:
          "Hej, Sara. Jag behöver din expertis när det gäller en ung patient som jag såg tidigare idag. Det är en 6-årig pojke med återkommande magbesvär och frekventa buksmärtor.",
      },
      {
        user: "Sara",
        role: "guest",
        message:
          " och symtom kan det vara värt att överväga en pediatrisk gastroenterologisk bedömning för att utesluta eller bekräfta tillstånd som laktosintolerans, IBS eller andra mag-tarmrelaterade störningar.",
      },
    ],
  },
];

const RoomPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  const pathname = location.pathname;

  const [activePanel, setActivePanel] = useState<string>("guest");
  const [activeUser, setActiveUser] = useState<string>("Lukas");
  const [messageList, setMessageList] = useState<any[]>([]);
  const [shareDialogOpen, setShareDialogOpen] = useState<boolean>(false);

  const handleTabItemClick = (tabItem: ITabItem) => () => {
    navigate(`${pathname}?${new URLSearchParams({ message: tabItem.key })}`);
  };

  useEffect(() => {
    const role = (searchParams[0].get("message") as string) || "guest";
    const userList =
      role === "guest"
        ? guestMessages.map((item) => item.name)
        : patientMessages.map((item) => item.name);
    const messages = role === "guest" ? guestMessages : patientMessages;
    const user = (searchParams[0].get("user") as string) || userList[0];
    setActivePanel(role);
    setActiveUser(user);
    setMessageList(
      messages.find((message) => message.name === user)?.messages || []
    );
  }, [searchParams]);

  return (
    <>
      <motion.div
        className="w-full h-full flex gap-x-4 text-primary-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left panel containing call controls and chat */}
        <div className="grow pt-2 h-full flex flex-col gap-y-4">
          <div className="py-2 flex justify-between items-center">
            {/* Back button */}
            <div className="flex gap-2 items-center">
              <span className="w-6 h-6 flex items-center justify-center">
                <FaChevronLeft />
              </span>
              <p className="text-xl leading-6">Tillbaka</p>
            </div>

            {/* Room title and date */}
            <div className="flex flex-col items-end gap-y-1">
              <p className="font-bold text-xl leading-5 text-primary-background">
                Elsas rum
              </p>
              <p className="text-sm leading-4">2 Mars, 2024</p>
            </div>
          </div>

          {/* Video call and controls */}
          <RoomCall className="grow" onShare={() => setShareDialogOpen(true)} />

          {/* Chat section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Patient chat */}
            <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
              <div className="pb-2 border-b-2 border-b-light-background">
                <p className="text-xl leading-6 font-bold">Chatt med patient</p>
              </div>
              <ul className="list-disc pl-5 py-5 text-primary-text/50">
                <li>Tillgång till patient chatt</li>
                <li>Förmåga att skriva AI-prompt</li>
              </ul>
              <div className="flex gap-2 justify-end">
                <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">
                  L
                </button>
                <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">
                  A
                </button>
                <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">
                  S
                </button>
                <button className="rounded-lg bg-white text-[#B6C2E1] w-8 h-8 text-2xl border-[#B6C2E1] border">
                  +
                </button>
              </div>
            </div>

            {/* Patient files section */}
            <div className="bg-white rounded-lg p-5 flex flex-col gap-2">
              <div className="pb-2 border-b-2 border-b-light-background">
                <p className="text-xl leading-6 font-bold">Filer av patient</p>
              </div>
              <ul className="list-disc pl-5 py-5 text-primary-text/50">
                <li>Gäst kan se patientfiler</li>
                <li>Gäst kan lägga till filer och se patientinformation</li>
              </ul>
              <div className="flex gap-2 justify-end">
                <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">
                  L
                </button>
                <button className="rounded-lg bg-white text-[#B6C2E1] w-8 h-8 text-2xl border-[#B6C2E1] border">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel for participant controls */}
        <div className="p-2 flex flex-col gap-2.5 bg-white rounded-2xl w-80">
          <div className="p-2 grid grid-cols-2 gap-x-2 bg-[#E9E9F3] rounded-xl font-bold text-lg">
            {tabItems.map((tabItem, index) => (
              <button
                key={index}
                className={twMerge(
                  "p-2 flex-1 flex items-center justify-center gap-2",
                  activePanel === tabItem.key &&
                    "bg-white rounded-xl text-primary-background"
                )}
                onClick={handleTabItemClick(tabItem)}
              >
                <p>{tabItem.title}</p>
                {tabItem.key === "guest" && (
                  <span className="rounded-lg text-white px-2 py-0 font-thin text-base bg-primary-background">
                    {activeUser.charAt(0).toUpperCase()}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Chat items */}
          <div className="flex-1 flex flex-col gap-2.5">
            {messageList.map((message, index) => (
              <ChatItem
                key={index}
                name={message.user}
                role={message.role}
                content={message.message}
              />
            ))}
          </div>

          {/* Input for sending messages */}
          <div className="flex gap-2 m-2">
            <Input
              placeholder="Skriva ett meddelande"
              className="text-base px-5 py-3 flex-1 bg-light-background border-none"
            />
            <ActionButton className="bg-primary-background">
              <SendSVG />
            </ActionButton>
          </div>
        </div>
      </motion.div>

      <ShareDialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
      />
    </>
  );
};

export default RoomPage;
