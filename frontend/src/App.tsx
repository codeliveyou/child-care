import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./components/layout/AnimatedRoutes";

function App() {
  return (
    <Router>
      {/* The Router component wraps the application to enable routing */}
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
