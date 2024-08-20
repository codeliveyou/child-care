import { useNavigate } from "react-router-dom";

import Checkbox from "../../components/common/Checkbox";
import Input from "../../components/common/Input";
import TradeMark from "../account/components/TradeMark";
import Button from "../globalcomponents/Button";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-center bg-light-background">
      <div className="max-w-[250px] w-full flex flex-col gap-y-14">
        <TradeMark className="text-center text-[32px] leading-10 !text-primary-background" />
        <div className="w-full flex flex-col gap-y-2">
          <p className="font-extrabold text-center text-2xl leading-8">
            Logga in
          </p>
          <Input
            name="username"
            placeholder="Användare"
            className="py-2.5 px-5 border border-primary-border/25 placeholder:text-primary-placeholder bg-white"
          />
          <Input
            name="password"
            placeholder="Lösenord"
            className="py-2.5 px-5 border border-primary-border/25 placeholder:text-primary-placeholder bg-white"
          />
          <p className="py-[5px] text-xs leading-4 text-primary-background underline">
            Har du glömd lösenordet?
          </p>
          <Button
            className="py-2.5 w-full text-base leading-5 text-light-background"
            onClick={() => {
              navigate("/admin");
            }}
          >
            Logga in
          </Button>
          <div className="pt-3 text-[10px] leading-3 text-disabled-text">
            Genom att logga in samtycker jag till Childcare Integritetspolicy
            och tjänstevillkor.
          </div>
          <Checkbox
            label="Fortsätt att vara inloggad"
            labelClass="text-xs leading-4 text-primary-text/50"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
