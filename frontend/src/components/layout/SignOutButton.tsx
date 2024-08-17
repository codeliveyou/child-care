import Button from "../../pages/globalcomponents/Button";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type SignOutButtonProps = {
  className?: string;
};
const SignOutButton = ({ className }: SignOutButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      className={twMerge("p-4", className)}
      onClick={() => navigate("/auth/sign-in")}
    >
      <img src="/SignOut.svg" width={20} height={20} />
    </Button>
  );
};

export default SignOutButton;
