import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import SearchInput from "../layout/header/SearchInput";
import SignOutButton from "../layout/header/SignOutButton";
import Logo from "../admin/Logo";

function AdminLayout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4 w-full h-full flex flex-col gap-y-4 bg-light-background"
    >
      <div className="w-full flex items-center justify-between">
        <Logo className="my-[7px]" />
        <div className="flex items-center gap-2">
          <SearchInput />
          <div className="p-4 flex items-center justify-center">
            {/* Zoom button */}
            <button>
              <img src="/Notification.svg" />
            </button>
          </div>
          <div className="p-0.5">
            {/* Notification button */}
            <SignOutButton redirectUri="/admin/sign-in" />
          </div>
        </div>
      </div>
      <Outlet />
    </motion.div>
  );
}

export default AdminLayout;
