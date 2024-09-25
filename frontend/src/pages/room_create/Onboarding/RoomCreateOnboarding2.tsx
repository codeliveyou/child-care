import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import AvatarList from "../../../components/room/AvatarList";
import VoiceList from "../../../components/room/VoiceList";
import Button from "../../../components/common/Button";
import ProgressBar from "../../../components/common/ProgressBar";
import TradeMark from "../../../components/user/TradeMark";

interface LocationState {
  roomName: string;
  patientName: string;
  patientPersonalID: string;
  avatarName: string;
}

const RoomCreateOnboarding2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stateParams = location.state as LocationState;
  
  const handleNextClick = () => {
    navigate("/room/create/onboarding/step3", { state:  stateParams  });
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        bounceDamping: 0.8,
        bounce: 0.2,
        duration: 0.7,
      }}
      className="w-full h-full grid grid-cols-2 rounded-xl border border-disabled-text bg-white overflow-hidden"
    >
      {/* Left side with branding and step instructions */}
      <div className="py-6 px-8 flex-1 flex flex-col gap-y-3 bg-primary-background">
        {/* TradeMark component for branding */}
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
          {/* Instructions and tips for choosing avatar and voice */}
          <ul
            style={{ listStyleType: "square" }}
            className="pl-6 flex flex-col gap-5"
          >
            <li>
              Glöm inte att när du väljer en avatar ska utseendet och rösten
              matcha varandra.
            </li>
            <li>
              Om du hoppar över att välja en röst i det här steget kommer din
              avatar att tala med din ursprungliga röst.
            </li>
          </ul>
        </div>
      </div>

      {/* Right side with progress bar and selection options */}
      <div className="flex-1 flex flex-col py-4 px-8">
        <div className="py-3.5">
          {/* Progress bar indicating completion of onboarding step */}
          <ProgressBar value={50} />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="py-4 flex flex-col gap-y-2">
            <p className="text-base leading-5 text-primary-text font-bold">
              Välj en avatar
            </p>
            {/* Component to select avatar */}
            <AvatarList />
          </div>
          <div className="py-1 flex flex-col gap-y-2">
            <p className="text-base leading-5 text-primary-text font-bold">
              Välj en röst
            </p>
            {/* Component to select voice */}
            <VoiceList />
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-2.5">
          {/* Button to go back to previous step in onboarding */}
          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate("/room/create/onboarding/step1")}
          >
            Tillbaka
          </Button>
          {/* Button to proceed to the next step in onboarding */}
          <Button
            size="compress"
            onClick={handleNextClick}
          >
            Nästa
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCreateOnboarding2;
