import { useNavigate } from "react-router-dom";

import AvatarList from "../../../components/room/AvatarList";
import VoiceList from "../../../components/room/VoiceList";
import Button from "../../globalcomponents/Button";
import ProgressBar from "../../globalcomponents/ProgressBar";
import TradeMark from "../../account/components/TradeMark";

const RoomCreateOnboarding2 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full grid grid-cols-2 rounded-xl border border-disabled-text bg-white overflow-hidden">
      {/* Left side with branding and instructions */}
      <div className="py-6 px-8 flex-1 flex flex-col gap-y-3 bg-primary-background">
        <TradeMark className="text-xl leading-6 pb-6" />

        <div className="pb-10 text-[32px] leading-10 text-white font-extrabold">
          <p>1 STEG</p>
          <p>Avatar inställningar</p>
        </div>
        <div className="grow flex flex-col gap-5 text-focused-background text-lg leading-6">
          <p>
            I det här steget kommer du att kunna välja en av de medföljande
            avatarerna och rösterna.
          </p>
          <ul
            style={{ listStyleType: "square" }}
            className="pl-6 flex flex-col gap-5"
          >
            <li>
              Att skapa ett rum innebär enkla steg som att välja en avatars
              namn, outfit och publik
            </li>
            <li>Alla valda inställningar kan ändras när som helst i rummet.</li>
          </ul>
        </div>
      </div>

      {/* Right side with progress bar and remaining content */}
      <div className="flex-1 flex flex-col py-4 px-8">
        <div className="py-3.5">
          <ProgressBar value={25} />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="py-4 flex flex-col gap-y-2">
            <p className="text-base leading-5 text-primary-text font-bold">
              Välj en avatar
            </p>
            <AvatarList />
          </div>
          <div className="py-1 flex flex-col gap-y-2">
            <p className="text-base leading-5 text-primary-text font-bold">
              Välj en röst
            </p>
            <VoiceList />
          </div>
        </div>
        <div className="flex justify-end gap-x-2.5">
          {/* Button to proceed to next onboarding step */}
          <Button
            className="py-2 px-4 text-base leading-5 !text-primary-text !bg-white border border-primary-text"
            onClick={() => navigate("/room/create/onboarding")}
          >
            Tillbaka
          </Button>
          <Button
            className="py-2 px-4 text-base leading-5"
            onClick={() => navigate("/room/create/onboarding#3")}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCreateOnboarding2;
