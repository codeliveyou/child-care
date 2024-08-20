import { useNavigate } from "react-router-dom";

import Input from "../../components/common/Input";
import Button from "../globalcomponents/Button";
import TradeMark from "../account/components/TradeMark";

const PatientLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full grid grid-cols-9 rounded-lg overflow-hidden">
      <div className="py-4 px-8 col-span-5 bg-white">
        <div className="relative h-full">
          <TradeMark className="absolute top-2.5 left-0 font-extrabold text-xl leading-6 !text-primary-background" />
          <div className="h-full flex items-center justify-center">
            <div className="max-w-[250px] w-full flex flex-col">
              <div className="flex flex-col gap-y-2">
                <p className="font-extrabold text-2xl">Patient rum</p>
                <Input
                  name="roomID"
                  placeholder="Rum-ID eller Perssonnumer"
                  className="border border-primary-border/25 text-primary-placeholder bg-white/30"
                />
              </div>
              <Button
                className="mt-5 border border-primary-border/25"
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
            size="small"
            variant="outlined"
            color="secondary"
            className="absolute bottom-0 right-0"
            onClick={() => {
              navigate("/auth/sign-in");
            }}
          >
            Tillbaka
          </Button>
          <div className="pr-10 h-full flex flex-col justify-center gap-y-3">
            <p className="font-extrabold text-[32px] leading-10 text-white">
              Patient rum
            </p>
            <div className="py-4 text-base leading-5">
              <p className="text-focused-background">
                Denna sida är avsedd för patienter eller personer som får vård
                genom vår tjänst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
