import { useNavigate } from "react-router-dom";

import Checkbox from "../../components/common/Checkbox";
import Input from "../../components/common/Input";
import TradeMark from "../../components/user/TradeMark";
import Button from "../../components/common/Button";

function Login() {
  const navigate = useNavigate(); // Hook for programmatically navigating between routes

  return (
    <div className="w-full h-full flex items-center justify-center bg-light-background">
      {/* Centered container for the login form */}
      <div className="max-w-[250px] w-full flex flex-col gap-y-14">
        <TradeMark className="text-center text-[32px] leading-10 !text-primary-background" />
        {/* Form container */}
        <div className="w-full flex flex-col gap-y-2">
          <p className="font-extrabold text-center text-2xl leading-8 text-primary-text">
            Logga in {/* Displaying 'Logga in' (Login in Swedish) as the title */}
          </p>
          <Input
            name="username"
            placeholder="Användare"
            className="border border-primary-border/25 placeholder:text-primary-placeholder bg-white"
          />{/* Input field for username */}
          <Input
            name="password"
            placeholder="Lösenord"
            className="border border-primary-border/25 placeholder:text-primary-placeholder bg-white"
          />{/* Input field for password */}
          <p className="py-[5px] text-xs leading-4 text-primary-background underline">
            Har du glömd lösenordet? {/* Link text for forgotten password */}
          </p>
          <Button
            className="py-2.5 w-full text-base leading-5 text-light-background"
            onClick={() => {
              navigate("/admin"); // Redirect to the admin page upon successful login
            }}
          >
            Logga in {/* Login button */}
          </Button>
          <div className="pt-3 text-[10px] leading-3 text-disabled-text">
            Genom att logga in samtycker jag till Childcare Integritetspolicy
            och tjänstevillkor. {/* Disclaimer about agreeing to terms and privacy policy */}
          </div>
          <Checkbox
            label="Fortsätt att vara inloggad"
            labelClass="text-xs leading-4 text-primary-text/50"
          />{/* Checkbox to keep the user logged in */}
        </div>
      </div>
    </div>
  );
}

export default Login;
