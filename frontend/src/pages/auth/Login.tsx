import TradeMark from "../account/components/TradeMark";
import Input from "../../components/common/Input";
import Button from "../globalcomponents/Button";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "../../components/common/Checkbox";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full grid grid-cols-2 text-primary-text rounded-lg overflow-hidden">
      <div className="bg-primary-background">
        <div className="py-7 px-8 h-full flex flex-col justify-between">
          <TradeMark className="pb-6 font-extrabold text-xl leading-6" />
          <div className="flex flex-col gap-y-8">
            <p className="font-extrabold text-[32px] leading-10 text-white">
              Välkommen!
            </p>
            <div className="py-4 flex flex-col gap-y-5 text-base leading-5">
              <p className="text-focused-background">
                Denna sida innehåller tre sätt att logga in på.
              </p>
              <ul
                style={{ listStyleType: "square" }}
                className="pl-7 flex flex-col gap-y-4 text-focused-background"
              >
                <li>
                  Skapa ett användarkonto som kan skapa och bjuda in deltagare
                  till rum
                </li>
                <li>
                  Deltar i rummet som ett gäst, observera och kommunicera med
                  användaren
                </li>
                <li>Delta som patient eller deltagare.</li>
              </ul>
            </div>
          </div>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            className="self-start"
            onClick={() => {
              navigate("/auth/sign-up");
            }}
          >
            Skapa ett konto
          </Button>
        </div>
      </div>
      <div className="bg-white">
        <div className="py-4 px-8 h-full">
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-[250px] w-full flex flex-col gap-y-2">
              <p className="font-extrabold text-2xl">Logga in</p>
              <Input
                name="username"
                placeholder="Användarnamn"
                className="border border-primary-border/25 text-primary-placeholder bg-white/30"
              />
              <Input
                name="password"
                placeholder="Lösenord"
                className="border border-primary-border/25 text-primary-placeholder bg-white/30"
              />
              <Link
                to={""}
                className="text-xs py-1 text-primary-background underline"
              >
                Har du glömd lösenordet?
              </Link>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Logga in
              </Button>
              <span className="text-primary-text/50 text-xs text-center">
                Or use Bank ID
              </span>
              <Button
                variant="outlined"
                className="text-disabled-text"
                onClick={() => {
                  navigate("/auth/signin-with-bank");
                }}
              >
                Bank ID
              </Button>
              <span className="text-[10px] text-disabled-text">
                Genom att logga in samtycker jag till Childcare
                Integritetspolicy och tjänstevillkor.
              </span>
              <Checkbox
                label="Fortsätt att vara inloggad"
                labelClass="text-xs !text-primary-text/50"
              />
            </div>
            <div className="absolute bottom-2 right-5 flex justify-end gap-x-2">
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  navigate("/auth/patient-signin");
                }}
              >
                Patient
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  navigate("/auth/guest-signin");
                }}
              >
                Gäst
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
