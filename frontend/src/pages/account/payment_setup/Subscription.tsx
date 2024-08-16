import { useNavigate } from "react-router-dom";

import Button from "../../globalcomponents/Button";
import PaymentSelect from "../components/PaymentSelect";
import SSN from "../components/SSN";

const Subscription = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Main container with gradient background */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6BDCF5] to-[#B6C2E1] relative">
        {/* Background image */}
        <img
          src="/background.jpg"
          className="absolute w-full h-full opacity-5"
        />

        {/* Content container */}
        <div className="flex w-[60%] h-[70%] rounded-xl overflow-hidden z-10 relative bg-white">
          {/* Left section for payment selection */}
          <div className="flex-[3] flex justify-center items-center">
            <div className="w-[90%]">
              <PaymentSelect />
            </div>
          </div>

          {/* Right section for subscription details */}
          <div className="flex-[2] flex flex-col justify-center relative p-10">
            <div className="flex flex-col gap-2 items-end">
              {/* Title for subscription */}
              <div className="text-5xl font-extrabold">Prenumeration</div>
              <div className="text-[#B6C2E1]">Välj betalningsmetod</div>
            </div>

            {/* Component for Social Security Number input */}
            <SSN />

            {/* Personal information */}
            <div className="p-10 text-xl text-[#6F6F6F]">
              <p>Johan Anderson</p>
              <p>Ringgatan 40,</p>
              <p>653 49 Karlstad</p>
            </div>

            {/* Button to complete subscription */}
            <div className="grow flex items-end justify-end gap-x-4">
              <Button
                className="py-2.5 px-5 text-sm leading-4 !bg-white !border !border-primary-border/25 !text-primary-placeholder"
                onClick={() => navigate("/room/create")}
              >
                Tillbaka
              </Button>
              <Button
                className="py-2.5 px-5 text-sm leading-4 "
                onClick={() => navigate("/room/create")}
              >
                Slutför
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
