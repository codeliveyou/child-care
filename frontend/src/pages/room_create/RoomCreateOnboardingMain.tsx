import { useLocation } from "react-router-dom";

import Avatar from "../../components/common/Avatar";
import SignOutButton from "../../components/layout/SignOutButton";
import RoomCreateOnboarding1 from "./Onboarding/RoomCreateOnboarding1";
import RoomCreateOnboarding2 from "./Onboarding/RoomCreateOnboarding2";
import RoomCreateOnboarding3 from "./Onboarding/RoomCreateOnboarding3";
import RoomCreateOnboarding4 from "./Onboarding/RoomCreateOnboarding4";

const RoomCreateOnboardingMain = () => {
  const location = useLocation();
  const hash = location.hash;

  // Switch statement to render different onboarding steps based on hash
  const getOnboardElement = () => {
    switch (hash) {
      case "#1":
        return <RoomCreateOnboarding1 />;
      case "#2":
        return <RoomCreateOnboarding2 />;
      case "#3":
        return <RoomCreateOnboarding3 />;
      case "#4":
        return <RoomCreateOnboarding4 />;
      default:
        return <RoomCreateOnboarding1 />; // Default to the first onboarding step if hash is not matched
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-light-background">
      <SignOutButton className="absolute top-6 right-8" />
      <span className="absolute lute left-8 bottom-6 w-[72px] h-[72px] rounded-lg bg-white flex items-center justify-center">
        <Avatar uri="/images/avatar.png" />
      </span>
      <div className="max-w-screen-md max-h-[600px] w-full h-full">
        {getOnboardElement()}
      </div>
    </div>
  );
};

export default RoomCreateOnboardingMain;
