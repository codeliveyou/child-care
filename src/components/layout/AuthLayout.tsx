import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function AuthLayout() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial opacity for fade-in effect
      animate={{ opacity: 1 }} // Final opacity for fade-in effect
      exit={{ opacity: 0 }} // Fade-out effect when component unmounts
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
      {/* Background image with reduced opacity */}
      <img
        src="/images/dashboard/background.png"
        alt="Background image" // Alternative text for the background image
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 opacity-5 w-[2500px] h-auto"
      />
      {/* Gradient overlay */}
      <div className="absolute w-full h-full bg-auth-gradient z-0" />
      {/* Container for the main content */}
      <div className="max-w-[960px] max-h-[600px] w-full h-full z-50">
        {/* Outlet for rendering nested routes */}
        <Outlet />
      </div>
      {/* Copyright notice */}
      <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-base leading-5 text-white">
        2024 Copyright Clearity
      </p>
    </motion.div>
  );
}

export default AuthLayout;
