import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type SignOutButtonProps = {
  className?: string;
  redirectUri?: string;
};
const SignOutButton = ({
  redirectUri = "/auth/sign-in",
  className = "",
}: SignOutButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      className={twMerge(
        "p-0 w-[50px] h-[50px] flex items-center justify-center",
        className
      )}
      onClick={() => navigate(redirectUri)}
    >
      <img src="/SignOut.svg" className="shrink-0 w-5 h-5" />
    </Button>
  );
};

export default SignOutButton;
