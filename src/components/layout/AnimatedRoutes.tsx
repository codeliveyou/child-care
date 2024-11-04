// import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AppRoutes from "./Routes";
import { useAppSelector } from "../../store";

// import routes from "../../routes";

function AnimatedRoutes() {
  // Use the routes configuration to generate the routes for the application
  const isLoading = useAppSelector(state => state.loading.isLoading);
  return (
    <AnimatePresence>
      {isLoading ? 'Loading...' : <AppRoutes />}
    </AnimatePresence>
  ); // Render the configured routes
}

export default AnimatedRoutes;
