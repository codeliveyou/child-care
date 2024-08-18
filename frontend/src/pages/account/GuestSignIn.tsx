import TradeMark from "./components/TradeMark";
import Button from "../globalcomponents/Button";
import Input from "../globalcomponents/Input";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const GuestSignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Main container with gradient background */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6BDCF5] to-[#B6C2E1] relative">
        {/* Background image */}
        <img
          src="/background.jpg"
          className="absolute w-full h-full opacity-5"
        ></img>

        {/* Container for split layout */}
        <div className="flex w-[60%] h-[70%] rounded-xl overflow-hidden z-10">
          {/* Left section for guest account form */}
          <div className="flex-[3] bg-white relative flex items-center justify-center">
            {/* TradeMark component for logo */}
            <div className="absolute top-10 left-10">
              <TradeMark color={colors.blue} />
            </div>

            {/* Form for guest account */}
            <div className="flex flex-col w-[60%] gap-4">
              {/* Title for guest account */}
              <div
                className="text-5xl font-extrabold"
                style={{ color: colors.textBlack }}
              >
                Gäst konto
              </div>

              {/* Input fields */}
              <Input placeholder="Gästnamn" className="w-full" />
              <Input placeholder="Nyckel ID" className="w-full" />

              {/* Button to proceed */}
              <Button className="w-full mt-5">Delta</Button>
            </div>
          </div>

          {/* Right section for guest account details */}
          <div className="flex-[2] bg-[#211DEF] p-10 flex flex-col">
            <div className="flex-1 flex justify-center items-center">
              {/* Text content */}
              <div className="text-white">
                {/* Title */}
                <div className="text-5xl font-extrabold">Gäst konto</div>

                {/* Description */}
                <div className="text-[#9E9CEF] mt-20 text-2xl">
                  Ett konto genom vilket den besökande parten kan vara
                  närvarande under tillhandahållandet av tjänster, samt delta i
                  arbetet med patienten. Förutsatt att användaren ger sitt
                  tillstånd till det
                </div>
              </div>
            </div>

            {/* Button to navigate back to sign-in */}
            <div className="self-end">
              <Button onClick={() => navigate("/signin")}>Logga In </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestSignIn;