import { useNavigate } from "react-router-dom";

import Input from "../../components/common/Input";
import Button from "../globalcomponents/Button";
import TradeMark from "../account/components/TradeMark";

const GuestLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full grid grid-cols-9 rounded-lg overflow-hidden">
      <div className="py-4 px-8 col-span-5 bg-white">
        <div className="relative h-full">
          <TradeMark className="absolute top-2.5 left-0 font-extrabold text-xl leading-6 !text-primary-background" />
          <div className="h-full flex items-center justify-center">
            <div className="max-w-[250px] w-full flex flex-col gap-y-2">
              <p className="font-extrabold text-2xl">Gäst konto</p>
              <Input
                name="name"
                value="Gästnamn"
                className="border border-primary-border/25 py-2.5 px-5 text-primary-placeholder bg-white/30"
              />
              <Input
                name="keyID"
                value="Nyckel ID"
                className="border border-primary-border/25 py-2.5 px-5 text-primary-placeholder bg-white/30"
              />
              <Button
                className="mt-4 py-2.5 border border-primary-border/25 text-base"
                onClick={() => {
                  navigate("/");
                }}
              >
                Delta
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 px-11 col-span-4 bg-primary-background">
        <div className="relative h-full">
          <Button
            className="absolute bottom-0 right-0 py-2 px-4 text-sm leading-4 border border-white text-white"
            onClick={() => {
              navigate("/auth/sign-in");
            }}
          >
            Tillbaka
          </Button>
          <div className="pr-10 h-full flex flex-col justify-center gap-y-3">
            <p className="font-extrabold text-[32px] leading-10 text-white">
              Gäst konto
            </p>
            <div className="py-4 text-base leading-5">
              <p className="text-focused-background">
                Ett konto genom vilket den besökande parten kan vara närvarande
                under tillhandahållandet av tjänster, samt delta i arbetet med
                patienten. Förutsatt att användaren ger sitt tillstånd till det
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestLogin;