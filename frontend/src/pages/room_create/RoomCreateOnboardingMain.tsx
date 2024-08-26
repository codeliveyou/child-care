import { Outlet } from "react-router-dom";

import Avatar from "../../components/common/Avatar";
import SignOutButton from "../../components/layout/header/SignOutButton";

const RoomCreateOnboardingMain = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-light-background scrollbar-none">
      {/* Sign out button positioned in the top-right corner */}
      <SignOutButton className="absolute top-6 right-8" />
      {/* Avatar positioned at the bottom-left corner */}
      <span className="absolute left-8 bottom-6 w-[72px] h-[72px] rounded-lg bg-white flex items-center justify-center">
        <Avatar uri="/images/avatar.png" />
      </span>
      <div className="max-w-[960px] max-h-[550px] w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RoomCreateOnboardingMain;
