import { useNavigate } from "react-router-dom";
import TradeMark from "../account/components/TradeMark";
import Button from "../globalcomponents/Button";

const LoginWithBank = () => {
  const navigate = useNavigate();

  return (
    <div className="py-4 px-8 w-full h-full bg-white rounded-lg">
      <div className="relative h-full w-full flex flex-col items-center justify-center gap-y-2">
        <TradeMark className="absolute top-0 left-0 font-extrabold text-xl leading-6 !text-primary-background" />
        <div className="max-w-[250px] flex flex-col gap-y-2">
          <div className="flex flex-col font-extrabold text-2xl leading-8 text-center">
            <p>Logga in</p>
            <p>med Bank ID</p>
          </div>
          <div className="p-4 rounded-lg bg-white/30 border border-primary-border/25">
            <div className="w-full aspect-square">
              <img
                src="/images/auth/qrcode.png"
                alt="Qr img"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <p className="text-[10px] leading-3 text-disabled-text">
          För att bekräfta din identitet, skanna vänligen den bifogade QR-koden.
        </p>
        <Button
          className="absolute bottom-3 right-1 py-2 px-4 !text-sm !leading-4 !text-primary-text !bg-white border border-primary-border/25"
          onClick={() => {
            navigate("/auth/sign-in");
          }}
        >
          Tillbaka
        </Button>
      </div>
    </div>
  );
};

export default LoginWithBank;