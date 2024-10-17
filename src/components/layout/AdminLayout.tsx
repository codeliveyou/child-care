import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import SearchInput from "../layout/header/SearchInput";
import SignOutButton from "../layout/header/SignOutButton";
import { useAppDispatch } from "../../store";
import { adminLogin, updateEmail } from "../../store/reducers/adminReducer";
import apiClient, { setupApiToken } from "../../libs/api";
import Logo from "../admin/Logo";

function AdminLayout() {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setupApiToken(token);
    setLoading(true);
    apiClient.get('api/admins/me').then((response: any) => {
      const { email } = response;
      dispatch(adminLogin());
      dispatch(updateEmail(email));
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial opacity for fade-in effect
      animate={{ opacity: 1 }} // Final opacity for fade-in effect
      exit={{ opacity: 0 }} // Fade-out effect when component unmounts
      className="p-4 w-full h-full flex flex-col gap-y-4 bg-light-background"
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo component with optional margin */}
        <Logo className="my-[7px]" />
        <div className="flex items-center gap-2">
          {/* Search input component */}
          <SearchInput />
          <div className="p-4 flex items-center justify-center">
            {/* Notification button */}
            <button>
              <img src="/Notification.svg" alt="Notification icon" />{" "}
              {/* Alternative text for the notification icon */}
            </button>
          </div>
          <div className="p-0.5">
            {/* Sign out button with redirect to admin sign-in page */}
            <SignOutButton redirectUri="/admin/sign-in" />
          </div>
        </div>
      </div>
      {/* Outlet for rendering nested routes */}
      {isLoading ? 'Loading...' : <Outlet />}
    </motion.div>
  );
}

export default AdminLayout;
