import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";

function AppRoutes() {
  // Use the routes configuration to generate the routes for the application
  const appRoutes = useRoutes(routes);
  return appRoutes; // Render the configured routes
}

function App() {
  return (
    <Router>
      {/* The Router component wraps the application to enable routing */}
      <AppRoutes />
    </Router>
  );
}

export default App;
