import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";

function AppRoutes() {
  const appRoutes = useRoutes(routes);
  return appRoutes;
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
