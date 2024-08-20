import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <img
        src="/images/dashboard/background.png"
        alt="Background image"
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-5 w-[2500px] h-auto"
      />
      <div className="absolute w-full h-full bg-auth-gradient z-0" />
      <div className="max-w-[960px] max-h-[600px] w-full h-full z-50">
        <Outlet />
      </div>
      <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-base leading-5 text-white">
        2024 Copyright Clearity
      </p>
    </div>
  );
}

export default AuthLayout;
