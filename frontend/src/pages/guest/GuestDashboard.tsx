import { useState } from "react";
import { twMerge } from "tailwind-merge";

import TradeMark from "../../components/user/TradeMark";
import ActionButton from "../../components/common/ActionButton";
import Avatar from "../../components/common/Avatar";
import Input from "../../components/common/Input";
import ReportDialog from "../../components/dashboard/ReportDialog";
import SignOutButton from "../../components/layout/header/SignOutButton";
import Button from "../../components/common/Button";
import ChatItem from "../room/components/ChatItem";

import SendSVG from "../../assets/send.svg?react";
import DocIcon from "/images/report/doc.svg";
import PdfIcon from "/images/report/pdf.svg";

const patientList = ["Sara"];

const chatList = ["Lukas", "Anna", "Sara"];

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

const reportData = [
  {
    type: "doc",
    title: "Elsas  möte rapport",
    lastDate: "Igår 11:11",
  },
  {
    type: "pdf",
    title: "Elsas  laddad information",
    lastDate: "Den 23-03-2024",
  },
  {
    type: "doc",
    title: "Noah möte rapport",
    lastDate: "Den 20-03-2024",
  },
  {
    type: "doc",
    title: "Stella rooms",
    lastDate: "Den 20-03-2024",
  },
];

function GuestDashboard() {
  const [isFilePanelActive, setFilePanelActive] = useState<boolean>(false);
  const [isChatPanelActive, setChatPanelActive] = useState<boolean>(false);
  const [isReportDialogOpen, setReportDialogOpen] = useState<boolean>(false);

  return (
    <>
      <div className="p-4 w-full h-full flex flex-col gap-y-2.5 bg-light-background">
        <div className="w-full flex items-center justify-between">
          <TradeMark className="font-extrabold text-[32px] leading-10 !text-primary-background" />
          {/* Notification and sign-out buttons */}
          <div className="flex items-center gap-2">
            <div className="flex gap-x-2">
              {patientList.map((userItem, index) => (
                <ActionButton
                  key={index}
                  className="w-9 h-9 text-white bg-primary-text"
                >
                  {userItem.charAt(0).toUpperCase()}
                </ActionButton>
              ))}
            </div>
            <div className="p-0.5">
              <SignOutButton redirectUri="/auth/guest-signin" />{" "}
              {/* Sign out button */}
            </div>
          </div>
        </div>
        <div className="grow flex gap-x-6">
          <div className="flex flex-col justify-end">
            <Avatar uri="/images/guest/avatar.png" />
          </div>
          <div className="grow flex gap-x-2.5">
            <div className="grow flex flex-col gap-y-2">
              <div className="py-2 flex flex-col items-center justify-center">
                <p className="font-semibold text-xl leading-6 text-primary-background">
                  Elsa rum
                </p>
                <p className="text-sm leading-4">2 Mars, 2024</p>
              </div>
              <div className="grow relative p-2.5 w-full flex justify-end rounded-lg overflow-hidden">
                <img
                  src="/images/guest/background.png"
                  alt="Background image"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto"
                />
                <div className="relative w-[160px] h-[190px] rounded-lg overflow-hidden">
                  <img
                    src="/images/room/call/mine.png"
                    className="absolute h-full w-auto left-1/2 -translate-x-1/2"
                  />
                </div>
              </div>
              <div className="w-full flex gap-x-4">
                <div className="flex-[3] p-4 flex flex-col gap-y-2 bg-white rounded-lg">
                  <p className="pb-2 font-semibold text-xl leading-6 border-b-2 border-b-light-background">
                    Chatt med patient
                  </p>
                  {!isChatPanelActive ? (
                    <div className="pt-14 flex justify-end">
                      <Button
                        size="compress"
                        onClick={() => {
                          setChatPanelActive(true);
                        }}
                      >
                        Skicka en förfrågan
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="my-auto">
                        <ul
                          style={{ listStyleType: "square" }}
                          className="flex flex-col pl-8 text-primary-text/50"
                        >
                          <li>Tillgång till patient chatt</li>
                          <li>Förmåga att skriva AI-prompt</li>
                        </ul>
                      </div>
                      <div className="px-2 flex justify-end gap-x-1">
                        {chatList.map((chatItem, index) => (
                          <ActionButton
                            key={index}
                            className="w-9 h-9 bg-primary-text text-light-background"
                          >
                            {chatItem.charAt(0).toUpperCase()}
                          </ActionButton>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="flex-[3] p-4 flex flex-col gap-y-2 bg-white rounded-lg">
                  <p className="pb-2 font-semibold text-xl leading-6 border-b-2 border-b-light-background">
                    Filer av patient
                  </p>
                  {!isFilePanelActive ? (
                    <div className="pt-14 flex justify-end">
                      <Button
                        size="compress"
                        onClick={() => {
                          setFilePanelActive(true);
                        }}
                      >
                        Skicka en förfrågan
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="my-auto">
                        <ul
                          style={{ listStyleType: "square" }}
                          className="flex flex-col pl-8 text-primary-text/50"
                        >
                          <li>Gäst kan se patientfiler</li>
                          <li>
                            Gäst kan lägga till filer och se patientinformation
                          </li>
                        </ul>
                      </div>
                      <div className="px-2 flex justify-end">
                        {patientList.map((patient, index) => (
                          <ActionButton
                            key={index}
                            className="w-9 h-9 bg-primary-text text-light-background"
                          >
                            {patient.charAt(0).toUpperCase()}
                          </ActionButton>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                {isFilePanelActive && (
                  <div className="flex-[5] p-4 flex flex-col gap-y-2 bg-white rounded-lg">
                    <p className="pb-2 font-semibold text-xl leading-6 border-b-2 border-b-light-background">
                      Filer
                    </p>
                    <div className="grow py-4 max-h-[180px] flex flex-col gap-4 pr-4 overflow-y-auto">
                      {/* DOCs report items */}
                      {reportData.map((reportItem, index) => (
                        <div
                          key={index}
                          className="flex items-center cursor-pointer"
                          onClick={() => {
                            setReportDialogOpen(true);
                          }}
                        >
                          <div className="p-4">
                            <img
                              src={
                                reportItem.type === "doc" ? DocIcon : PdfIcon
                              }
                              alt="Report icon"
                              className="w-12"
                            />
                          </div>
                          <div className="py-2.5 px-4 flex flex-col justify-between">
                            <p className="font-semibold text-xl leading-6">
                              {reportItem.title}
                            </p>
                            {reportItem.lastDate && (
                              <div className="space-y-0.5 text-disabled-text text-sm leading-4">
                                <p>Sista aktiviteten</p>
                                <p>{reportItem.lastDate}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-2 flex flex-col gap-2.5 bg-white rounded-2xl w-80">
              <div className="p-2 grid grid-cols-2 gap-x-2 bg-light-background rounded-xl font-bold text-lg">
                <button
                  className={twMerge(
                    "p-2 flex-1 flex items-center justify-center gap-2"
                  )}
                >
                  <p className="font-semibold text-xl leading-6">Användare</p>
                </button>
              </div>

              {/* Chat items */}
              <div className="grow py-4 px-2 flex flex-col gap-2.5">
                {guestMessages[0].messages.map((message, index) => (
                  <ChatItem
                    key={index}
                    name={message.user}
                    role={message.role}
                    content={message.message}
                  />
                ))}
              </div>

              <div className="p-2 flex items-center gap-x-2.5">
                <Input
                  name="message"
                  placeholder="Skriva ett meddelande"
                  className="grow h-12 w-12"
                />
                <ActionButton className="bg-primary-background">
                  <SendSVG />
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReportDialog
        open={isReportDialogOpen}
        onClose={() => {
          setReportDialogOpen(false);
        }}
        title="Sofia Rapport"
        lastDate="2 Mars, 2024"
      />
    </>
  );
}

export default GuestDashboard;
