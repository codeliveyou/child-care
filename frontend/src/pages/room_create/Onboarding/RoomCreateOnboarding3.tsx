import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TradeMark from "../../account/components/TradeMark";
import Input from "../../../components/common/Input";
import Button from "../../globalcomponents/Button";
import ProgressBar from "../../globalcomponents/ProgressBar";
import Toggle from "../../globalcomponents/Toggle";

const keywords = [
  "Alkohol",
  "Skrik",
  "Våld",
  "Vuxen",
  "Stress",
  "Misshandel",
  "Slogen",
  "Skola",
  "Vänner",
  "Mobbar",
  "Ensam",
  "Hemma",
];

const RoomCreateOnboarding3 = () => {
  const navigate = useNavigate();

  const [isUsingAI, setIsUsingAI] = useState<boolean>(false);

  return (
    <div className="w-full h-full grid grid-cols-2 rounded-xl border border-disabled-text bg-white overflow-hidden">
      {/* Left side with branding and welcome message */}
      <div className="py-6 px-8 flex-1 flex flex-col gap-y-3 bg-primary-background">
        <TradeMark className="text-xl leading-6 pb-6" />
        <div className="pb-10 text-[32px] leading-10 text-white font-extrabold">
          <p>2 STEG</p>
          <p>AI-inställningar</p>
        </div>
        <div className="grow flex flex-col gap-5 text-focused-background text-lg leading-6">
          <p>
            Detta registreringssteg är avsett att konfigurera eller begränsa
            användningen av AI i interaktion med din publik.
          </p>
          <ul
            style={{ listStyleType: "square" }}
            className="pl-6 flex flex-col gap-5"
          >
            <li>
              Var specifik med hur du vill att AI ska interagera med barnen
            </li>
            <li>
              Kom ihåg att AI inte alltid kommer att kunna svara på samma sätt
              som en människa. Därför är det viktigt att skapa svar på de
              viktigaste frågorna.
            </li>
          </ul>
        </div>
      </div>

      {/* Right side with progress bar and form inputs */}
      <div className="flex-1 flex flex-col py-4 px-8">
        <div className="py-3.5">
          <ProgressBar value={75} />
        </div>
        <div className="pt-4 flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="font-bold leading-5">Använd AI</p>
            <Toggle isToggled={isUsingAI} handleToggle={setIsUsingAI} />
          </div>
          {isUsingAI && (
            <div className="grow flex flex-col justify-center gap-y-2">
              <div className="pt-2 flex flex-col gap-y-2">
                <p className="font-bold leading-5">AI-begränsningar</p>
                <Input
                  name="keyword"
                  placeholder="Nyckelord"
                  className="border border-primary-border/25 bg-white"
                />
                <div className="flex flex-wrap gap-1">
                  {keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="py-1 px-2 text-xs leading-4 bg-light-background rounded-[4px]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-y-2">
                <p className="font-bold leading-5">AI-svars mönster</p>
                <Input
                  name="answer"
                  placeholder="Skriv ett svar"
                  className="border border-primary-border/25 bg-white"
                />
                <Input
                  name="keyword"
                  placeholder="Skriv nyckelord"
                  className="border border-primary-border/25 bg-white"
                />
              </div>
              <p className="px-2.5 text-xs leading-4 text-disabled-text">
                List, separated by commas, all the words for which you can
                choose the right answer.
              </p>
              <div className="flex items-center justify-between">
                <Button size="small">Lägg till mönster</Button>
                <span
                  className="text-primary-background underline text-sm leading-5 cursor-pointer"
                  onClick={() => {
                    navigate("/room/create/ai-structure");
                  }}
                >
                  Se allt
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="pt-1 flex items-center justify-end gap-x-2.5">
          {/* Button to proceed to next onboarding step */}
          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate("/room/create/onboarding#2")}
          >
            Tillbaka
          </Button>
          <Button
            size="compress"
            onClick={() => navigate("/room/create/onboarding#4")}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCreateOnboarding3;
