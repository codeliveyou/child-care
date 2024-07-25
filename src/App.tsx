import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes"

const AppRoutes = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
}

function App() {
  return <Router>
    <AppRoutes />
  </Router>
}

export default App;
