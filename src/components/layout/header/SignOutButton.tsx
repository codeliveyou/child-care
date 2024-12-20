import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import Button from "../../common/Button";
import { useAppDispatch } from "../../../store";
import { userLogout } from "../../../store/reducers/authReducer";
import { removeToken } from "../../../libs/token";

// Props for the SignOutButton component
type SignOutButtonProps = {
  className?: string; // Optional additional CSS classes for styling
  redirectUri?: string; // Optional URI to navigate to upon click
};

const SignOutButton = ({
  redirectUri = "/auth/sign-in", // Default redirect URI if none is provided
  className = "", // Default empty className if none is provided
}: SignOutButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <Button
      className={twMerge(
        "p-0 w-[50px] h-[50px] flex items-center justify-center", // Base button styles
        className // Merge additional styles if provided
      )}
      onClick={() => {
        dispatch(userLogout());
        removeToken();
        navigate(redirectUri);
      }} // Navigate to redirectUri on click
    >
      {/* Sign-out icon */}
      <img src="/SignOut.svg" className="shrink-0 w-5 h-5" />
    </Button>
  );
};

export default SignOutButton;
