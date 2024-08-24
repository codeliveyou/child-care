import { useNavigate } from "react-router-dom";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import ProgressBar from "../../../components/common/ProgressBar";
import TradeMark from "../../../components/user/TradeMark";

const RoomCreateOnboarding1 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full grid grid-cols-2 rounded-xl border border-disabled-text bg-white overflow-hidden">
      {/* Left side with branding and welcome message */}
      <div className="py-6 px-8 flex-1 flex flex-col gap-y-3 bg-primary-background">
        {/* TradeMark component for branding */}
        <TradeMark className="text-xl leading-6 pb-6" />
        <div className="pb-10 text-[32px] leading-10 text-white font-extrabold">
          <p>Välkommen!</p>
          <p>Jag är glad att du vill skapa ett rum.</p>
        </div>
        <div className="grow">
          {/* Instructions list for room creation process */}
          <ul
            style={{ listStyleType: "square" }}
            className="pl-6 flex flex-col gap-5 text-focused-background text-lg leading-6"
          >
            <li>
              Att skapa ett rum innebär enkla steg som att välja en avatars
              namn, outfit och publik
            </li>
            <li>Alla valda inställningar kan ändras när som helst i rummet.</li>
          </ul>
        </div>
      </div>

      {/* Right side with progress bar and form inputs */}
      <div className="flex-1 flex flex-col py-4 px-8">
        <div className="py-3.5">
          {/* Progress bar indicating current onboarding step */}
          <ProgressBar value={25} />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2">
          <p className="text-base leading-5 text-primary-text font-bold">
            Skapa ett Namn
          </p>

          {/* Input fields for room creation */}
          <Input
            name="room"
            placeholder="Rum namn"
            className="border border-primary-border/25 placeholder:text-primary-placeholder bg-white"
          />
          <Input
            name="patient"
            placeholder="Patient namn"
            className="border border-primary-border/25 placeholder:text-primary-placeholder bg-white"
          />
          <Input
            name="patientID"
            placeholder="Patient personnumret"
            className="border border-primary-border/25 placeholder:text-primary-placeholder bg-white"
          />
          <Input
            name="avatar"
            placeholder="Avatar namn"
            className="border border-primary-border/25 placeholder:text-primary-placeholder bg-white"
          />
        </div>
        <div className="flex justify-end">
          {/* Button to proceed to the next step in the onboarding process */}
          <Button
            size="compress"
            onClick={() => navigate("/room/create/onboarding#2")}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCreateOnboarding1;
