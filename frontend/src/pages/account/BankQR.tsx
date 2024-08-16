import { useLocation, useNavigate } from "react-router-dom";
import Button from "../globalcomponents/Button";

const BankQR = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { qrType } = location.state;

  return (
    <>
      {/* Main container with gradient background */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6BDCF5] to-[#B6C2E1] relative">
        {/* Background image */}
        <img
          src="/background.jpg"
          className="absolute w-full h-full opacity-5 z-10"
        ></img>

        {/* Container for Bank QR content */}
        <div className="w-[60%] h-[70%] flex items-center justify-center relative rounded-xl overflow-hidden bg-white z-10">
          {/* Button to navigate back */}
          <div className="absolute top-10 left-10">
            <Button
              className="border-[#1D19E542]"
              backgroundColor="#FFF"
              textColor="#6F6F6F"
              onClick={() => navigate("/signin")}
            >
              Tillbaka
            </Button>
          </div>

          {/* Content for Bank QR */}
          <div className="flex flex-col items-center gap-4">
            {/* Title for Bank QR */}
            <div className="text-5xl font-extrabold text-center">
              <div>{qrType === "signin" ? "Logga in" : "Skapa konto"} </div>
              <div>med Bank ID</div>
            </div>

            {/* QR code container */}
            <div className="w-96 h-96 rounded-xl border-gray-400 border p-2">
              <div className="bg-black w-full h-full"></div>
            </div>

            {/* Instruction text */}
            <div className="text-[#B6C2E1]">
              För att bekräfta din identitet, skanna vänligen den bifogade
              QR-koden.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankQR;
