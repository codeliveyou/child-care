import { useNavigate } from "react-router-dom";

import TradeMark from "../../account/components/TradeMark";
import Button from "../../globalcomponents/Button";
import Input from "../../../components/common/Input";

const RoomCreateOnboarding4 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="py-6 px-8 w-2/3 bg-primary-background rounded-xl">
        <div className="w-full flex flex-col items-center gap-y-3">
          <TradeMark className="pb-6 text-xl leading-6 self-start" />
          <div className="font-extrabold text-center text-[32px] leading-10 text-white">
            <p>Noah rum</p>
            <p>är redo att användas.</p>
          </div>
          <p className="px-8 text-center text-lg leading-6 text-focused-background">
            Siffrorna nedan hjälper dig att bjuda in en patient eller moderator
            till det här rummet.
          </p>
          <div className="flex flex-col items-center gap-y-2.5 px-12">
            <div className="w-full flex items-center justify-end gap-x-2.5">
              <p className="text-lg leading-6 text-light-background">
                Patient ID:
              </p>
              <div className="relative">
                <Input
                  name="patientID"
                  placeholder="#123445456546"
                  className="border border-disabled-text bg-primary-background text-disabled-text placeholder:text-disabled-text"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center cursor-pointer">
                  <img src="/icons/copy.svg" alt="Copy icon" />
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-end gap-x-2.5">
              <p className="text-lg leading-6 text-light-background">
                Gäst ID:
              </p>
              <div className="relative">
                <Input
                  name="guestID"
                  placeholder="#234234fdf2345"
                  className="border border-disabled-text bg-primary-background text-disabled-text placeholder:text-disabled-text"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center cursor-pointer">
                  <img src="/icons/copy.svg" alt="Copy icon" />
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4 flex justify-center">
            <Button
              className="py-2 px-4 text-base leading-5 !bg-light-background !text-primary-background"
              onClick={() => {
                navigate("/room/0");
              }}
            >
              Klart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCreateOnboarding4;
