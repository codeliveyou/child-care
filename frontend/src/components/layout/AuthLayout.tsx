import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function AuthLayout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
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
    </motion.div>
  );
}

export default AuthLayout;
