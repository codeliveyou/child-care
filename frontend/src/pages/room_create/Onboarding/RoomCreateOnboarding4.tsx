import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import TradeMark from "../../../components/user/TradeMark";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

const RoomCreateOnboarding4 = () => {
  const navigate = useNavigate();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 30, opacity: 1 }}
        animate={{ y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          bounceDamping: 0.8,
          bounce: 0.2,
          duration: 0.7,
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="py-6 px-8 max-w-[525px] bg-primary-background rounded-xl">
          <div className="w-full flex flex-col items-center gap-y-3">
            {/* Branding component */}
            <TradeMark className="pb-6 text-xl leading-6 self-start" />

            {/* Main title and subtitle */}
            <div className="font-extrabold text-center text-[32px] leading-10 text-white">
              <p>Noah rum</p>
              <p>är redo att användas.</p>
            </div>

            {/* Instruction text */}
            <p className="px-8 text-center text-lg leading-6 text-focused-background">
              Siffrorna nedan hjälper dig att bjuda in en patient eller
              moderator till det här rummet.
            </p>

            {/* Patient ID and Guest ID input fields */}
            <div className="flex flex-col items-center gap-y-2.5 px-12">
              {/* Patient ID input field */}
              <div className="w-full flex items-center justify-end gap-x-2.5">
                <p className="text-lg leading-6 text-light-background">
                  Patient ID:
                </p>
                <div className="relative">
                  <Input
                    name="patientID"
                    placeholder="#123445456546"
                    className="border border-disabled-text bg-primary-background text-disabled-text placeholder:text-disabled-text rounded-2xl"
                  />
                  {/* Copy icon for patient ID */}
                  <span className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center cursor-pointer">
                    <img src="/icons/copy.svg" alt="Copy icon" />
                  </span>
                </div>
              </div>

              {/* Guest ID input field */}
              <div className="w-full flex items-center justify-end gap-x-2.5">
                <p className="text-lg leading-6 text-light-background">
                  Gäst ID:
                </p>
                <div className="relative">
                  <Input
                    name="guestID"
                    placeholder="#234234fdf2345"
                    className=" border border-disabled-text bg-primary-background text-disabled-text placeholder:text-disabled-text rounded-2xl"
                  />
                  {/* Copy icon for guest ID */}
                  <span className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center cursor-pointer">
                    <img src="/icons/copy.svg" alt="Copy icon" />
                  </span>
                </div>
              </div>
            </div>

            {/* Button to finalize the onboarding process */}
            <div className="pt-4 flex justify-center">
              <Button
                size="compress"
                color="secondary"
                onClick={() => {
                  navigate("/room/0"); // Navigate to the room page or dashboard
                }}
              >
                Klart
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RoomCreateOnboarding4;
