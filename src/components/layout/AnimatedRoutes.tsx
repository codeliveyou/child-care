import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AppRoutes from "./Routes";
import { useAppDispatch } from "../../store";
import apiClient, { setupApiToken } from "../../libs/api";
import { updateCreateUser, userLogin } from "../../store/reducers/authReducer";

// import routes from "../../routes";

function AnimatedRoutes() {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    setupApiToken(token)
    setLoading(true);
    apiClient.get('/api/users/me').then((response: any) => {
      const { user_name, user_email, account_description, picture_id } = response;
      if (user_email) {
        dispatch(userLogin());
        dispatch(updateCreateUser({ name: 'user_name', value: user_name }))
        dispatch(updateCreateUser({ name: 'user_email', value: user_email }))
        dispatch(updateCreateUser({ name: 'account_description', value: account_description }))
        dispatch(updateCreateUser({ name: 'picture_id', value: picture_id }))
      }
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  // Use the routes configuration to generate the routes for the application
  return (
    <AnimatePresence>
      {isLoading ? 'Loading...' : <AppRoutes />}
    </AnimatePresence>
  ); // Render the configured routes
}

export default AnimatedRoutes;
